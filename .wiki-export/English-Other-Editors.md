> Source: `docs/english/other-editors.md`

# Cursor + Claude Code

> **Recommendation: use Cursor.**
> This workflow is distributed as a native Cursor plugin. In Cursor, slash commands, hooks, and sub-agents work automatically with no manual setup. When the plugin reaches the Cursor Marketplace, updates will be delivered automatically inside Cursor — you will never need to touch a terminal.
>
> Until the plugin is published to the Marketplace, update by pulling the repository and re-running the install script. The script is idempotent and safe to run any number of times:
>
> ```bash
> git pull
> ./scripts/install-plugin-local.sh
> ```

If you cannot use Cursor, use Claude Code as the only supported fallback.

The core methodology stays the same in both supported environments: Cursor (primary) and Claude Code (fallback).

---

## Supported environments

| Feature | Cursor | Claude Code |
|---------|--------|-------------|
| Native slash commands | ✅ | ✅ |
| Rules / global context | ✅ | ✅ via `CLAUDE.md` |
| Hooks (automation guardrails) | ✅ | ❌ |
| Sub-agents (parallel research) | ✅ | Partial |
| Auto-updates | ✅ Marketplace | Manual |

---

## Claude Code

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) is the closest alternative to Cursor for this workflow. It uses the same slash command mechanism: markdown files in `.claude/commands/` are invoked with `/command-name`.

### Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/J-Pster/Psters_AI_Workflow.git
   ```

2. Recommended (automated): run the bridge installer from this repository:

   ```bash
   node scripts/install-workflow-bridge.mjs --to claude --project /path/to/your-project
   ```

   This command:
   - copies workflow commands to `/path/to/your-project/.claude/commands/`
   - creates/updates a managed Psters rules block in `/path/to/your-project/CLAUDE.md`

3. Manual alternative: create the commands directory and copy the workflow commands:

   ```bash
   mkdir -p .claude/commands
   cp /path/to/Psters_AI_Workflow/plugins/psters-ai-workflow/commands/*.md .claude/commands/
   ```

4. Create or append to `CLAUDE.md` in your project root to load the workflow rules as global context. Copy the content of the rules you want — start with `context7-documentation.mdc` and `commits.mdc`:

   ```bash
   # Create CLAUDE.md if it does not exist
   touch CLAUDE.md
   ```

   Then paste the content of relevant rule files from `plugins/psters-ai-workflow/rules/` into `CLAUDE.md`.

### Usage

Run the workflow in Claude Code exactly as in Cursor:

```
/pwf-brainstorm add user authentication with JWT
/pwf-plan
/pwf-work-plan
/pwf-review
/pwf-commit-changes
```

### What works in Claude Code

- **All slash commands work natively.** The command format is identical to Cursor.
- **Rules work** via `CLAUDE.md` (global context file read automatically).
- **Hooks do not work.** Claude Code has no hook system. You apply documentation discipline manually.
- **Sub-agents are partial.** Commands that spawn multiple research agents will run them sequentially in the conversation rather than in parallel.

### Keeping commands up to date

```bash
cd Psters_AI_Workflow && git pull
node scripts/install-workflow-bridge.mjs --to claude --project /path/to/your-project
```

### Cursor + Claude at the same time

If you want Cursor as primary plus Claude as fallback:

```bash
node scripts/install-workflow-bridge.mjs --to all --project /path/to/your-project
```

---

## Summary

Cursor is the primary path and official focus. If you cannot use Cursor, **Claude Code is the only supported fallback** and preserves the slash-command workflow with minimal setup.
