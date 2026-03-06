# Automation Regression Test

This is a test file for validating the automation system.

## Purpose

Testing the content validation workflows including:
- Link validation (broken link test below)
- Markdown structure
- Accessibility checks

## Test Issues

### Issue 1: Broken Link
[Click here](./nonexistent-file.md) to see a broken link example.

### Issue 2: Missing Alt Text
![Image without alt text](./test-image.png)

### Issue 3: Vague Link Text
For more information, [read more](https://example.com) about this topic.

## Expected Validation Results

The content-validation workflow should catch:
- ❌ Broken relative link to nonexistent-file.md
- ❌ Missing alt text on image
- ❌ Vague link text "read more"

Testing complete!
