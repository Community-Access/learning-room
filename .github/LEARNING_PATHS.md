# Learning Paths

This document outlines the structured progression through the GIT Going with GitHub workshop.

## Learning Philosophy

The workshop uses **progressive skill-building** organized into 16 chapters across two days:

- Start with fundamentals (browser-based GitHub navigation)
- Build on previous knowledge (issues, then PRs, then reviews)
- Increase complexity gradually (web editor, then VS Code, then Git CLI)
- Apply skills in real-world scenarios (Learning Room practice files)
- Amplify skills with AI agents (after mastering manual workflows)


## Workshop Structure

### Day 1: GitHub Fundamentals (Chapters 0-10)

| Block | Chapters | Focus | Challenge Type |
|-------|----------|-------|---------------|
| **Block 0** | 0-3 | Setup, navigation, Learning Room orientation | No graded challenges |
| **Block 1** | 4-6 | Issues, VS Code Accessibility, and Pull Requests | Comment-based (Ch 4-5), PR-based (Ch 7) |
| **Block 2** | 7-8 | Merge conflicts and community culture | PR-based (Ch 8), reflection (Ch 9) |
| **Block 3** | 9-10 | Organization (labels/milestones) and notifications | Comment-based |

### Day 2: VS Code and Advanced Workflows (Chapters 11-16)

| Block | Chapters | Focus | Challenge Type |
|-------|----------|-------|---------------|
| **Block 1** | 11 | Git source control | PR-based (Ch 11) |
| **Block 2** | 12-13 | GitHub PR extension and Copilot | Comment-based |
| **Block 3** | 14-16 | Code review, issue templates, accessibility agents | Comment-based (Ch 14), PR-based (Ch 15), comment-based (Ch 16) |


## Challenge Progression

Every chapter follows the same gold-standard structure:

1. **Challenge Set** listing all challenges with one-sentence descriptions
2. **Per-challenge walkthroughs** with Goal, Where You Are Working, numbered steps, and You Are Done When
3. **Evidence template** showing exactly what to post as proof of completion
4. **Expected Outcomes** listing measurable skills demonstrated
5. **If You Get Stuck** with 4-5 specific troubleshooting steps
6. **Learning Moment** with one key insight
7. **Learning Pattern** explaining the chapter pedagogical approach

### Two Challenge Paths

| Path | How It Works | Chapters |
|------|-------------|----------|
| **Comment-based** | Complete tasks, post structured evidence comment on your assigned challenge issue, close the issue | 4, 5, 8, 9, 10, 12, 13, 14, 16 |
| **PR-based** | Create a branch, edit files, open a PR with `Closes #XX`, pass bot validation checks | 6, 7, 11, 15 |

### Branch Naming Conventions

| Chapter Range | Branch Pattern | Example |
|--------------|---------------|---------|
| Ch 7-7 | `fix/yourname-issueXX` | `fix/maria-issue42` |
| Ch 11 | `chapter11/yourname-issueXX` | `chapter11/maria-issue55` |
| Ch 15 | `templates/yourname-issueXX` | `templates/maria-issue70` |
| Ch 16 (optional) | `agents/yourname-issueXX` | `agents/maria-issue80` |


## Practice Files

The Learning Room contains three practice files with intentional problems for students to fix:

| File | Problems | Used In |
|------|----------|---------|
| `docs/welcome.md` | `[TODO]` placeholder sections needing content | Ch 7, 11 |
| `docs/keyboard-shortcuts.md` | Intentional errors in shortcut tables | Ch 7, 7, 11 |
| `docs/setup-guide.md` | Broken links and incomplete setup steps | Ch 7, 11 |


## Skill Building Order

The chapters build on each other. This is the recommended order:

```text
Ch 0-3: Setup and Navigation (no challenges - orientation only)
   |
Ch 4: Issues (comment-based) - create, @mention, sub-issues
   |
Ch 6: VS Code Accessibility (comment-based) - setup, accessibility mode
   |
Ch 7: Pull Requests (PR-based) - branch, edit, PR, bot checks
   |
Ch 8: Merge Conflicts (PR-based) - conflict markers, resolution
   |
Ch 9: Culture (reflection) - communication, etiquette
   |
Ch 10: Labels/Milestones (comment-based) - triage, organization
   |
Ch 5: Notifications (comment-based) - inbox management
   |
Ch 11: Git Source Control (PR-based) - clone, commit, push
   |
Ch 12: PR Extension (comment-based) - install, checkout, review
   |
Ch 13: Copilot (comment-based) - install, prompt, customize
   |
Ch 14: Code Review (comment-based) - diffs, inline comments, verdicts
   |
Ch 15: Issue Templates (PR-based) - analyze, remix, create
   |
Ch 16: Agents (comment-based) - discover, validate, contribute
```


## Evidence and Tracking

### Automatic Tracking (PR-based challenges)

The Learning Room automation validates:

- PR is linked to a challenge issue (`Closes #XX`)
- Description meets minimum quality (50+ characters)
- Files are in the correct location
- Markdown and accessibility checks pass
- Links are valid

### Manual Tracking (Comment-based challenges)

Students post structured evidence comments on their assigned challenge issues. Facilitators review the comments for completeness. The evidence template format is consistent across all chapters:

```text
Chapter [X] completed:
- Challenge X.1: [evidence]
- Challenge X.2: [evidence]
- Challenge X.3: [evidence]
```


## Support and Questions

- **Stuck on a challenge?** Check the "If You Get Stuck" section in your chapter doc first
- **Need help finding your issue?** Filter the Issues tab by your username
- **Bot feedback confusing?** Read the specific check that failed and fix that one item
- **Want to go further?** See `GROUP_CHALLENGES.md` for collaborative exercises


## Resources

### Workshop Materials
- [CHALLENGES.md](../docs/CHALLENGES.md) - Complete challenge hub with all chapter details
- [GROUP_CHALLENGES.md](../docs/GROUP_CHALLENGES.md) - Collaborative exercises
- [FACILITATOR_GUIDE.md](FACILITATOR_GUIDE.md) - Facilitator reference
- [STUDENT_GUIDE.md](STUDENT_GUIDE.md) - How the automation works

### External
- [WebAIM](https://webaim.org/) - Web accessibility resources
- [GitHub Skills](https://skills.github.com/) - Interactive GitHub tutorials
- [Markdown Guide](https://www.markdownguide.org/) - Markdown reference
