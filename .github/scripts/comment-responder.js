/**
 * Build deterministic auto-responses for issue comments.
 * Kept pure so behavior is unit-testable.
 */

function getAutoResponse(commentBody, author) {
  const comment = (commentBody || '').toLowerCase();
  const safeAuthor = author || 'contributor';

  if (comment.includes('@bot help') || comment.includes('need help')) {
    return [
      `Hi @${safeAuthor}! 👋 I am Aria, your workshop agent. I see you are looking for help—do not worry, that is exactly what I am here for! Together, we have got this. Here are some great resources to get you unstuck:`,
      '',
      '**Guides:**',
      '- [Working with Pull Requests](../../docs/05-working-with-pull-requests.md)',
      '- [Merge Conflicts](../../docs/06-merge-conflicts.md)',
      '- [Culture and Etiquette](../../docs/07-culture-etiquette.md)',
      '',
      '**Common Issues:**',
      '- **Merge conflicts?** Check the [Merge Conflicts guide](../../docs/06-merge-conflicts.md)',
      '- **Need to update your PR?** Make changes on your branch and push again',
      '- **Validation failing?** Read the validation report above for specific fixes',
      '',
      '**Still stuck?** Mention `@facilitator` in a comment for human help!'
    ].join('\n');
  }

  if (comment.includes('merge conflict')) {
    return [
      `Hi @${safeAuthor}! 👋 I am Aria. I see you have bumped into a merge conflict. Take a deep breath—merge conflicts can seem scary at first, but resolving them is a superpower every developer learns. You can absolutely do this. Let us walk through it together!`,
      '',
      '**Quick steps to resolve:**',
      '',
      '1. Go to the "Files changed" tab',
      '2. Click "Resolve conflicts" button',
      '3. GitHub conflict editor will show you both versions',
      '4. Choose which lines to keep (remove the `<<<<<<<`, `=======`, `>>>>>>>` markers)',
      '5. Click "Mark as resolved"',
      '6. Commit the merge',
      '',
      '**Need detailed guidance?** See [Merge Conflicts Guide](../../docs/06-merge-conflicts.md)',
      '',
      '**For screen readers:** If conflict editing is difficult in the browser, use github.dev by pressing the `.` key on the repository page.'
    ].join('\n');
  }

  if (comment.includes('how do i') && comment.includes('request review')) {
    return [
      `Hi @${safeAuthor}! 👋 Aria here! Asking for a review is a wonderful way to collaborate. It is like asking a teammate, 'Hey, can you double-check my work?' Here is exactly how to do it:`,
      '',
      '1. On your PR page, find the "Reviewers" section in the right sidebar',
      '2. Click the gear icon next to "Reviewers"',
      '3. Start typing a facilitator or peer username',
      '4. Select them from the dropdown',
      '5. They will be notified automatically',
      '',
      '**Screen reader users:** The reviewers section is after the main PR description. Navigate to the complementary landmark and find "Reviewers".'
    ].join('\n');
  }

  return null;
}

module.exports = {
  getAutoResponse
};


