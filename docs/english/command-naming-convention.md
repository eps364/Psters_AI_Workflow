# Command Naming Convention

This workflow uses explicit prefixes for commands that are tied to a specific technology, provider, or framework.

## Rule

- Technology-specific commands MUST use a technology/provider prefix.
- Generic commands remain generic and should not include unnecessary prefixes.

## Format

- Preferred format: `/provider-technology-action`
- Example: `/pwf-aws-lambda-deploy`

## Why this matters

- Makes command scope obvious at first read.
- Avoids ambiguous generic names for provider-specific operations.
- Improves discoverability in command lists and docs.

## Examples

- `/pwf-aws-lambda-deploy` (AWS Lambda only)
- `/stripe-webhook-sync` (Stripe-only operation)
- `/angular-component-audit` (Angular-only operation)

## Anti-examples

- `/deploy-lambda` (missing explicit provider prefix)
- `/deploy` (too generic for a provider-specific flow)

## Applied in this workflow

- The Lambda deployment command is standardized as `/pwf-aws-lambda-deploy`.
- Any future technology-specific command must follow the same convention.
