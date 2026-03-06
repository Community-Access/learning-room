/**
 * Auto-response generator for common learning room requests
 * Triggered by issue comments with specific keywords
 * Kept pure for testability
 */

function getAutoResponse(commentBody, author) {
  const comment = (commentBody || '').toLowerCase();
  const safeAuthor = author || 'friend';

  // Help request
  if (comment.includes('@bot help') || comment.includes('need help') || comment.includes('i\'m stuck')) {
    return [
      `Hi @${safeAuthor}! 👋`,
      '',
      '**Here are some helpful resources:**',
      '',
      '📖 **Guides:**',
      '- [Opening Your First PR](../docs/OPENING_FIRST_PR.md)',
      '- [Understanding GitHub Issues](../docs/UNDERSTANDING_ISSUES.md)',
      '- [Merge Conflicts Explained](../docs/MERGE_CONFLICTS.md)',
      '',
      '💬 **Common Questions:**',
      '- **"How do I update my PR?"** Just make changes on your branch and push again.',
      '- **"Why is the bot asking for X?"** Check the learning resources for explanations.',
      '- **"I disagree with the bot"** No problem! Mention @facilitator and explain your reasoning.',
      '',
      '❓ **Still stuck?** Mention `@facilitator` in a comment and they\'ll help you out!',
      '',
      '---',
      '*Learning Room Bot*'
    ].join('\n');
  }

  // Merge conflict help  
  if (comment.includes('merge conflict') || comment.includes('conflict')) {
    return [
      `Hi @${safeAuthor}! Merge conflicts can be tricky, but you\'ve got this! 💪`,
      '',
      '**Quick steps to fix your conflict:**',
      '',
      '1. Click the **"Resolve conflicts"** button on your PR',
      '2. GitHub will show you both versions side-by-side',
      '3. **Delete the lines you don\'t want** (including the `<<<<<<<`, `=======`, `>>>>>>>` markers)',
      '4. Keep only the version you want',
      '5. Click **"Mark as resolved"**',
      '6. **Commit the merge**',
      '',
      '**Need detailed steps?** See the [Merge Conflicts Guide](../docs/MERGE_CONFLICTS.md)',
      '',
      '**Screen reader tip:** If the web editor is hard to use, try pressing `.` on your PR page to open github.dev editor.',
      '',
      '---',
      '*Learning Room Bot*'
    ].join('\n');
  }

  // Request review help
  if ((comment.includes('how') && comment.includes('request review')) || 
      comment.includes('request a review') ||
      comment.includes('assign reviewer')) {
    return [
      `Hi @${safeAuthor}! Great question! Here\'s how to request a review:`,
      '',
      '**In the GitHub UI:**',
      '1. On your PR page, find the **"Reviewers"** section (right sidebar)',
      '2. Click the **gear icon** ⚙️ next to "Reviewers"',
      '3. Start typing a facilitator or peer username',
      '4. Select them from the dropdown',
      '5. They\'ll be notified automatically!',
      '',
      '**For screen reader users:**',
      'Navigate to the complementary landmark (sidebar) and find the Reviewers heading. The gear icon activates the reviewer selector.',
      '',
      '**Pro tip:** Add a comment mentioning your reviewer so they see your message in their feed!',
      '',
      '---',
      '*Learning Room Bot*'
    ].join('\n');
  }

  // Challenge/assignment help
  if (comment.includes('what\'s next') || comment.includes('next challenge') || comment.includes('what should i work on')) {
    return [
      `Hi @${safeAuthor}! Great momentum! 🔥`,
      '',
      '**Here\'s where to find your next challenge:**',
      '',
      '1. Check the [Challenge List](./docs/CHALLENGES.md) in this repo',
      '2. Look for issues labeled **"challenge"** that are not yet assigned to you',
      '3. Read the issue description to understand what you\'ll learn',
      '4. Comment **"I\'d like to work on this challenge!"** to claim it',
      '',
      '**Not sure what interests you?**',
      'Check out different skill types:',
      '- 📝 Markdown — Learn formatting and structure',
      '- ♿ Accessibility — Learn inclusive content',
      '- 👀 Review — Learn to give helpful feedback',
      '- 🤝 Collaboration — Learn teamwork skills',
      '',
      '---',
      '*Learning Room Bot*'
    ].join('\n');
  }

  // Claim challenge request
  if (comment.includes('like to work on') || comment.includes('claim') || comment.includes('assign me')) {
    return [
      `Hi @${safeAuthor}! Awesome! Let\'s get you started! 🚀`,
      '',
      '**Here\'s what to do next:**',
      '',
      '1. **Create a new branch** for this work',
      '   - Use naming like: `fix/yourname-issue${context?.issue?.number || '123'}`',
      '2. **Make your edits** according to the challenge description',
      '3. **Test your changes** (read through what you changed)',
      '4. **Commit with a clear message** explaining what you fixed',
      '5. **Push to GitHub**',
      '6. **Open a PR** linking back to this issue with `Closes #${context?.issue?.number || 'ISSUE_NUMBER'}`',
      '',
      '[→ Full PR Guide](../docs/OPENING_FIRST_PR.md)',
      '',
      '**Questions while you work?** Ask in this issue - no question is too small!',
      '',
      '---',
      '*Learning Room Bot*'
    ].join('\n');
  }

  // No matching request
  return null;
}

module.exports = {
  getAutoResponse
};
