#!/usr/bin/env python3
"""
Markdown Structure Validation
Checks for proper heading hierarchy, list formatting, code blocks
Helps students learn markdown best practices
"""

import os
import re
import sys
import json
from pathlib import Path

def check_markdown_structure(filepath):
    """Validate markdown structure in a file."""
    issues = []
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
    except Exception as e:
        return [{'line': 0, 'message': f'Error reading file: {e}'}]

    # Track heading hierarchy
    heading_levels = []
    in_code_block = False
    
    for line_num, line in enumerate(lines, 1):
        stripped = line.strip()
        
        # Track code blocks
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            continue
        
        if in_code_block:
            continue
        
        # Check heading hierarchy
        heading_match = re.match(r'^(#{1,6})\s+(.+)$', stripped)
        if heading_match:
            level = len(heading_match.group(1))
            
            # Check for proper hierarchy
            if heading_levels and level > heading_levels[-1] + 1:
                issues.append({
                    'file': filepath,
                    'line': line_num,
                    'message': f'Heading jumps from H{heading_levels[-1]} to H{level}',
                    'fix': f'Maintain proper hierarchy: use H{heading_levels[-1] + 1} instead of H{level}'
                })
            
            heading_levels.append(level)
        
        # Check for common markdown issues
        if stripped.startswith('-') and not stripped.startswith('---'):
            # List item - check formatting
            if not re.match(r'^-\s+', stripped):
                issues.append({
                    'file': filepath,
                    'line': line_num,
                    'message': 'List items should have space after dash',
                    'fix': 'Change "- text" to ensure space after the dash for proper formatting'
                })
        
        # Check for empty links
        if re.search(r'\[\]\(', stripped):
            issues.append({
                'file': filepath,
                'line': line_num,
                'message': 'Empty link text found',
                'fix': 'Replace [] with descriptive text so users know what the link is about'
            })
        
        # Check for bare URLs (should use [text](url) format)
        if re.search(r'(?<!]\()(https?://\S+)(?!\))', stripped) and not stripped.startswith('```'):
            issues.append({
                'file': filepath,
                'line': line_num,
                'message': 'Bare URL found - should use [text](url) format',
                'fix': 'Wrap the URL in link syntax: [Descriptive Text](url)'
            })

    # Check for missing front-level heading
    if not any(re.match(r'^#\s+', line.strip()) for line in lines):
        issues.append({
            'file': filepath,
            'line': 1,
            'message': 'File should start with a level-1 heading (# Title)',
            'fix': 'Add "# Your Page Title" at the top of the file'
        })

    return issues

def main():
    root_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    all_issues = []
    
    # Find all markdown files
    for md_file in Path(root_dir).rglob('*.md'):
        # Skip .github and node_modules
        if '.github' in md_file.parts or 'node_modules' in md_file.parts:
            continue
        
        issues = check_markdown_structure(str(md_file))
        all_issues.extend(issues)
    
    # Write feedback
    feedback = {
        'errors': all_issues,
        'warnings': []
    }
    
    with open('validation-feedback.json', 'w') as f:
        json.dump(feedback, f, indent=2)
    
    if all_issues:
        print(f"Found {len(all_issues)} markdown issues")
        sys.exit(1)
    else:
        print("✅ Markdown structure looks good!")
        sys.exit(0)

if __name__ == '__main__':
    main()
