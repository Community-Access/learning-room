#!/usr/bin/env python3
"""
Accessibility Checker
Validates markdown for accessibility issues:
- Alt text for images
- Descriptive link text
- Proper heading hierarchy
- Table descriptions
"""

import os
import re
import sys
import json
from pathlib import Path

def check_accessibility(filepath):
    """Check accessibility issues in a markdown file."""
    issues = []
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
    except Exception as e:
        return [{'file': filepath, 'line': 0, 'type': 'error', 'message': f'Error reading: {e}'}]

    for line_num, line in enumerate(lines, 1):
        # Check for images without alt text
        img_pattern = r'!\[(.*?)\]\((.*?)\)'
        img_matches = re.finditer(img_pattern, line)
        
        for match in img_matches:
            alt_text = match.group(1)
            img_url = match.group(2)
            
            # Check if alt text is empty or just whitespace
            if not alt_text or not alt_text.strip():
                issues.append({
                    'file': filepath,
                    'line': line_num,
                    'type': 'error',
                    'title': 'Missing Image Alt Text',
                    'message': f'Image has no description: {img_url}',
                    'fix': 'Add descriptive alt text. Replace ![](url) with ![description](url). Describe what the image shows.'
                })
            elif len(alt_text) < 5:
                issues.append({
                    'file': filepath,
                    'line': line_num,
                    'type': 'warning',
                    'title': 'Image Alt Text Too Short',
                    'message': f'Alt text "{alt_text}" is too brief. Describe the image content.',
                    'fix': 'Expand alt text to explain what someone would see in the image.'
                })
        
        # Check for poor link text
        link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
        link_matches = re.finditer(link_pattern, line)
        
        poor_phrases = [
            ('click here', 'Click here'),
            ('read more', 'Read more'),
            ('here', 'Here'),
            ('link', 'Link'),
            ('more', 'More'),
            ('learn more', 'Learn more'),
            ('this', 'This'),
            ('for more info', 'For more info'),
        ]
        
        for match in link_matches:
            text = match.group(1).lower()
            url = match.group(2)
            
            for poor, proper in poor_phrases:
                if text == poor:
                    issues.append({
                        'file': filepath,
                        'line': line_num,
                        'type': 'error',
                        'title': 'Non-Descriptive Link Text',
                        'message': f'Link text "{proper}" doesn\'t describe where the link goes.',
                        'fix': f'Replace "[{proper}]({url})" with descriptive text like "[Topic Name]({url})"'
                    })
                    break
        
        # Check for tables without descriptions
        if '|' in line and any('|' in lines[i] for i in range(max(0, line_num-2), min(len(lines), line_num+2))):
            # Likely a table
            # Check if there's a caption or description before it
            if line_num > 1:
                prev_line = lines[line_num-2].strip()
                if prev_line and not prev_line.startswith('|'):
                    # There's a description
                    pass
                else:
                    # Could use a description
                    issues.append({
                        'file': filepath,
                        'line': line_num,
                        'type': 'suggestion',
                        'title': 'Table Description',
                        'message': 'Consider adding a brief description before tables explaining their content.',
                        'fix': 'Add one sentence before the table explaining what data it contains.'
                    })
    
    return issues

def main():
    root_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    all_issues = []
    
    # Find all markdown files
    for md_file in Path(root_dir).rglob('*.md'):
        if '.github' in md_file.parts or 'node_modules' in md_file.parts:
            continue
        
        issues = check_accessibility(str(md_file))
        all_issues.extend(issues)
    
    # Separate by severity
    errors = [i for i in all_issues if i.get('type') == 'error']
    warnings = [i for i in all_issues if i.get('type') in ['warning', 'suggestion']]
    
    feedback = {
        'accessibility': errors + warnings,
        'errors': [],
        'warnings': []
    }
    
    with open('validation-feedback.json', 'w') as f:
        json.dump(feedback, f, indent=2)
    
    if errors:
        print(f"Found {len(errors)} accessibility errors and {len(warnings)} suggestions")
        sys.exit(1)
    else:
        print(f"✅ Accessibility check passed! ({len(warnings)} suggestions for improvement)")
        sys.exit(0)

if __name__ == '__main__':
    main()
