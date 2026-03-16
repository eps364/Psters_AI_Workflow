> Source: `docs/portuguese/command-recipes.md`

# Receitas de Comandos

Sequencias praticas de comandos para casos comuns do dia a dia.

## Feature nova do zero

1. `/brainstorm`
2. `/plan`
3. `/work-plan` (uma fase por chat)
4. `/review` (corrigir + rodar de novo)
5. `/commit-changes`

## Fix pequeno (sem plano completo)

1. `/work`
2. `/review`
3. `/commit-changes`

Use para ajustes menores e correcao de bug pontual.

## Criar ou atualizar docs canonicas

1. `/doc module <name>` ou `/doc feature <name>`
2. Opcional: `/doc architecture` ou `/doc update`

Use quando quiser forcar explicitamente saida de documentacao tecnica.

## Registrar aprendizado reutilizavel

1. `/compound <context>`
2. Opcional: `/compound pattern <context>`

Use quando voce resolveu um problema que deve virar memoria de time.

## Fluxo de entrega para Lambda

1. Implementar com `/work` ou `/work-plan`
2. `/review`
3. `/deploy-lambda`
4. `/commit-changes`
