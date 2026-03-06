#!/usr/bin/env node

/**
 * Learning Room PR Validation Script
 * Validates student pull requests and provides educational feedback
 * Focused on learning outcomes, not gatekeeping
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PR_NUMBER = process.env.PR_NUMBER;
const PR_TITLE = process.env.PR_TITLE || '';
const PR_BODY = process.env.PR_BODY || '';
const PR_AUTHOR = process.env.PR_AUTHOR || '';

const results = {
  passed: true,
  required: [],
  suggestions: [],
  accessibility: [],
  resources: []
};

/**
 * Extract closing issue reference from PR body
 */
function extractClosingIssueReference(text) {
  if (!text) return null;
  const closingMatch = text.match(/(?:closes|fixes|resolves|fix|close|resolve)\s+#(\d+)/i);
  if (!closingMatch) return null;
  const issueNumber = Number(closingMatch[1]);
  return Number.isInteger(issueNumber) && issueNumber > 0 ? issueNumber : null;
}

/**
 * Validate basic PR requirements
 */
function validateBasicRequirements() {
  // Check for issue reference
  const hasIssueReference = extractClosingIssueReference(`${PR_TITLE}\n${PR_BODY}`) !== null;
  
  results.required.push({
    name: 'Issue Reference',
    passed: hasIssueReference,
    message: hasIssueReference 
      ? 'PR is correctly linked to an issue'
      : 'PR should reference an issue (use "Closes #123" in the description)',
    help: !hasIssueReference 
      ? 'Add `Closes #ISSUE_NUMBER` to your PR description to link this PR to its challenge issue.'
      : null
  });

  if (!hasIssueReference) {
    results.passed = false;
    results.resources.push({
      title: 'Opening Your First PR',
      url: '../docs/OPENING_FIRST_PR.md'
    });
  }

  // Check for meaningful description
  const hasDescription = PR_BODY && PR_BODY.trim().length >= 20;
  
  results.required.push({
    name: 'PR Description',
    passed: hasDescription,
    message: hasDescription
      ? 'PR has a clear description'
      : 'Provide a short description of what you changed and why (at least 20 characters)',
    help: !hasDescription
      ? 'Explain your changes in the PR description. This helps reviewers understand what you did.'
      : null
  });

  if (!hasDescription) {
    results.passed = false;
    results.resources.push({
      title: 'Writing Great PR Descriptions',
      url: '../docs/PR_DESCRIPTION_TIPS.md'
    });
  }
}

/**
 * Check for poor link text patterns
 */
function checkLinkQuality() {
  const poorPatterns = [
    { pattern: /\[click here\]/gi, name: 'click here' },
    { pattern: /\[read more\]/gi, name: 'read more' },
    { pattern: /\[here\]/gi, name: 'here' },
    { pattern: /\[link\]/gi, name: 'link' },
    { pattern: /\[more\]/gi, name: 'more' }
  ];

  poorPatterns.forEach(({ pattern, name }) => {
    if (pattern.test(PR_BODY)) {
      results.accessibility.push({
        type: 'warning',
        title: 'Link Text Clarity',
        message: `Your PR uses vague link text ("${name}"). Screen reader users won't know where the link goes.`,
        fix: `Replace "[${name}](...)" with descriptive text like "[Topic Name](URL)" so the link purpose is clear.`
      });
    }
  });
}

/**
 * Provide learning suggestions based on PR content
 */
function provideSuggestions() {
  if (PR_BODY.length < 100) {
    results.suggestions.push({
      title: 'More Detail',
      message: 'Adding more context in your PR description helps reviewers understand your thinking.',
      help: 'Try explaining what problem this solves or what you learned while making the change.'
    });
  }

  // Encourage using proper formatting in description
  if (!PR_BODY.includes('##') && !PR_BODY.includes('-')) {
    results.suggestions.push({
      title: 'Formatting',
      message: 'Using markdown formatting (like headings and lists) makes your PR easier to read.',
      help: 'Try using `## Heading` or `- bullet points` in your description.'
    });
  }
}

/**
 * Main validation orchestration
 */
function runValidation() {
  validateBasicRequirements();
  checkLinkQuality();
  provideSuggestions();

  // Add default resources
  if (results.resources.length === 0) {
    results.resources.push(
      {
        title: 'GitHub Flavored Markdown Reference',
        url: '../docs/MARKDOWN_REFERENCE.md'
      },
      {
        title: 'Accessibility Standards Guide',
        url: '../docs/ACCESSIBILITY_GUIDE.md'
      },
      {
        title: 'Learning Paths & Challenges',
        url: './docs/CHALLENGES.md'
      }
    );
  }

  // Write results so the workflow can read them
  fs.writeFileSync('validation-results.json', JSON.stringify(results, null, 2));
  
  console.log('Validation complete. Results written to validation-results.json');
  process.exit(results.passed ? 0 : 1);
}

// Run validation
runValidation();

module.exports = {
  extractClosingIssueReference,
  validateBasicRequirements,
  checkLinkQuality
};
