# FAQ

## Should I always use `/plan`?

No. Use `/plan` for multi-step or higher-risk changes.
For small fixes and narrow adjustments, use `/work`.

## What is the difference between `/work` and `/work-plan`?

- `/work-plan`: execute planned phases one by one.
- `/work`: execute focused changes outside a formal plan.

Both read docs first and update docs in their own mandatory flow.

## What is the difference between `/doc` and `/compound`?

- `/doc`: canonical technical documentation by scope (module, feature, architecture, ADR, update).
- `/compound`: reusable learning artifacts (problem/solution and patterns).

## If `/work` and `/work-plan` already update docs, why use `/doc` or `/compound`?

Use them when you want to force a specific documentation output explicitly.

## Are hooks mandatory?

Hooks are recommended guardrails. They reinforce discipline and reminders, but core workflow still happens through commands.

## Is this workflow tied to a specific language/framework?

No. The workflow is language-agnostic and framework-agnostic.
