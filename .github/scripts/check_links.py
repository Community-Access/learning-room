#!/usr/bin/env python3
"""
Link Validation Script
Checks for broken links, anchors, relative paths in markdown files
Provides educational feedback for students
"""

import os
import re
import sys
import json
from pathlib import Path
from urllib.parse import urlparse

def check_links_in_file(filepath):
    """Check links in a markdown file."""
    issues = []
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
    except Exception as e:
        return [{'line': 0, 'message': f'Error reading file: {e}'}]

    # Pattern: [text](url)
    link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
    
    for line_num, line in enumerate(lines, 1):
        matches = re.finditer(link_pattern, line)
        for match in matches:
            text, url = match.groups()
            
            # Skip external links (http://, https://)
            if url.startswith(('http://', 'https://')):
                continue
            
            # Check relative paths
            if url.startswith('#'):
                # Anchor link - just check it's not empty
                if not url[1:]:
                    issues.append({
                        'file': filepath,
                        'line': line_num,
                        'message': 'Empty anchor link',
                        'fix': 'Anchor links should reference a heading (e.g., #section-name)'
                    })
            else:
                # File path - check if it exists
                # Handle ../ paths
                target_path = Path(filepath).parent / url
                target_path = target_path.resolve()
                
                # Check if target exists (ignore anchors at end)
                target_file = str(target_path).split('#')[0]
                if not Path(target_file).exists():
                    issues.append({
                        'file': filepath,
                        'line': line_num,
                        'message': f'Link to non-existent file: {url}',
                        'fix': f'Verify the path exists. Current path resolves to: {target_file}'
                    })

    return issues

def main():
    root_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    all_issues = []
    
    # Find all markdown files
    for md_file in Path(root_dir).rglob('*.md'):
        # Skip .github directory and node_modules
        if '.github' in md_file.parts or 'node_modules' in md_file.parts:
            continue
        
        issues = check_links_in_file(str(md_file))
        all_issues.extend(issues)
    
    # Write feedback file
    feedback = {
        'errors': [issue for issue in all_issues if 'fix' in issue],
        'warnings': []
    }
    
    with open('validation-feedback.json', 'w') as f:
        json.dump(feedback, f, indent=2)
    
    if feedback['errors']:
        print(f"Found {len(feedback['errors'])} link issues")
        sys.exit(1)
    else:
        print("✅ All links validated successfully")
        sys.exit(0)

if __name__ == '__main__':
    main()
