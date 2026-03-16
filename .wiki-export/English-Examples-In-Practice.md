> Source: `docs/english/examples-in-practice.md`

# Examples in Practice

Realistic examples of how to run the workflow in day-to-day development.

## Example 1: New admin panel feature

Goal: Create an admin dashboard while keeping architecture and docs aligned.

1. Run `/brainstorm` with:
   - feature goal
   - directory/location constraints
   - UI/UX expectations
   - auth/permission requirements
2. Run `/plan` to split work into phases.
3. Run `/work-plan` one phase per chat.
4. Run `/review`, fix findings, then run `/review` again.
5. Run `/commit-changes`.
6. If needed, force specific docs with `/doc`.
7. If reusable learning emerged, register it with `/compound`.

## Example 2: Small fix after release

Goal: Apply a focused fix without opening a full phase plan.

1. Run `/work` with a tight task description.
2. Run `/review` for risk checks.
3. Run `/commit-changes`.
4. If needed, force a targeted doc update with `/doc`.

## Example 3: Capture a reusable pattern

Goal: Turn one solved problem into future acceleration.

1. Implement with `/work` or `/work-plan`.
2. Run `/review` and finalize code changes.
3. Run `/compound pattern <context>` to document reusable implementation guidance.

## Example 4: Documentation-only contribution

Goal: Improve project docs without code changes.

1. Open an issue describing documentation gaps.
2. Use `/doc` to refresh the specific scope.
3. Submit a PR with doc-only updates.
