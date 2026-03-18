> Source: `docs/english/examples-in-practice.md`

# Examples in Practice

Realistic examples of how to run the workflow in day-to-day development.

## Example 1: New admin panel feature

Goal: Create an admin dashboard while keeping architecture and docs aligned.

1. Run `/pwf-brainstorm` with:
   - feature goal
   - directory/location constraints
   - UI/UX expectations
   - auth/permission requirements
2. Run `/pwf-plan` to split work into phases.
3. Run `/pwf-work-plan` one phase per chat.
4. Run `/pwf-review`, fix findings, then run `/pwf-review` again.
5. Run `/pwf-commit-changes`.
6. If needed, force specific docs with `/pwf-doc` (or `/pwf-doc-foundation` / `/pwf-doc-runbook` when baseline or runbooks are needed).
7. If reusable learning emerged, register it with `/pwf-doc-capture`.

## Example 2: Small fix after release

Goal: Apply a focused fix without opening a full phase plan.

1. Run `/pwf-work` with a tight task description.
2. Run `/pwf-review` for risk checks.
3. Run `/pwf-commit-changes`.
4. If needed, force a targeted doc update with `/pwf-doc` (or `/pwf-doc-foundation` / `/pwf-doc-runbook` when relevant).

## Example 3: Capture a reusable pattern

Goal: Turn one solved problem into future acceleration.

1. Implement with `/pwf-work` or `/pwf-work-plan`.
2. Run `/pwf-review` and finalize code changes.
3. Run `/pwf-doc-capture pattern <context>` to document reusable implementation guidance.

## Example 4: Documentation-only contribution

Goal: Improve project docs without code changes.

1. Open an issue describing documentation gaps.
2. Use `/pwf-doc` for scope-specific updates, `/pwf-doc-foundation` for baseline docs, or `/pwf-doc-runbook` for operational runbooks.
3. Submit a PR with doc-only updates.
