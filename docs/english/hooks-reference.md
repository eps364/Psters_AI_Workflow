# Hooks Reference

This plugin uses hooks as guardrails to reinforce workflow discipline.

## Hook table

| Hook | Trigger | What it does |
| --- | --- | --- |
| `afterFileEdit` | File edited | Tracks if session changed code and/or docs |
| `stop` | Session ending | Reminds docs update if code changed without doc changes |
| `beforeShellExecution` | `git commit` command | Reminds commit convention (`[TICKET-XXXX] ...`) |
| `afterShellExecution` | `typeorm:generate` command | Reminds TypeORM migration atomic chain |

## Why hooks matter

- They prevent silent process drift.
- They keep documentation tied to implementation.
- They improve consistency without blocking normal work.

## Important

Hooks are reinforcement. Core commands still drive the workflow:

- `/work` and `/work-plan` for implementation
- `/doc` and `/compound` for explicit documentation outputs
- `/review` for quality feedback loops
