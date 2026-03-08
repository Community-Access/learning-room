/**
 * Build PR validation report markdown from validation results.
 * This is used by the PR Validation Bot workflow to format feedback.
 */

function buildValidationReportBody(results, timestampIso) {
  const ts = timestampIso || new Date().toISOString();
  const safeResults = results || {
    passed: false,
    required: [],
    suggestions: [],
    accessibility: [],
    resources: []
  };

  const status = safeResults.passed
    ? "✅ **Validation Passed**"
    : "⚠️ **Validation Needs Attention**";

  let body = `## PR Validation Report\n\n${status}\n\n`;

  if ((safeResults.required || []).length > 0) {
    body += "### ✓ Required Checks\n\n";
    (safeResults.required || []).forEach(check => {
      const icon = check.passed ? '✅' : '❌';
      body += `${icon} **${check.name}**\n`;
      if (!check.passed) {
        body += `   ${check.message}\n`;
        if (check.help) {
          body += `   *${check.help}*\n`;
        }
      }
      body += "\n";
    });
  }

  if ((safeResults.suggestions || []).length > 0) {
    body += "### 💡 Suggestions for Improvement\n\n";
    body += "*These are optional but will make your contribution even better:*\n\n";
    safeResults.suggestions.forEach(suggestion => {
      body += `- **${suggestion.title}:** ${suggestion.message}\n`;
      if (suggestion.help) {
        body += `  *${suggestion.help}*\n`;
      }
    });
    body += "\n";
  }

  if ((safeResults.accessibility || []).length > 0) {
    body += "### ♿ Accessibility Analysis\n\n";
    safeResults.accessibility.forEach(item => {
      const icon = item.type === 'error' ? '❌' : '⚠️';
      body += `${icon} **${item.title}**\n`;
      body += `   ${item.message}\n`;
      if (item.file) {
        body += `   \`${item.file}\`${item.line ? ` (line ${item.line})` : ""}\n`;
      }
      if (item.fix) {
        body += `   **Fix:** ${item.fix}\n`;
      }
      body += "\n";
    });
  }

  body += "### 📚 Learning Resources\n\n";
  body += "Based on your changes, these guides might help:\n\n";
  (safeResults.resources || []).forEach(resource => {
    body += `- [${resource.title}](${resource.url})\n`;
  });

  body += "\n---\n";
  body += `*Automated validation by Learning Room Bot. Last updated: ${ts}*\n`;
  body += "*Questions? Check the guides or mention @facilitator in a comment.*";
  
  return body;
}

module.exports = {
  buildValidationReportBody
};
