> Source: `docs/portuguese/command-recipes.md`

# Receitas de Comandos

Sequencias praticas de comandos para casos comuns do dia a dia.

## Feature nova do zero

1. `/pwf-brainstorm`
2. `/pwf-plan`
3. `/pwf-clarify`
4. `/pwf-checklist`
5. `/pwf-analyze`
6. `/pwf-work-plan` (uma fase por chat)
7. `/pwf-review` (corrigir + rodar de novo)
8. `/pwf-commit-changes`

## Fix pequeno (sem plano completo)

1. `/pwf-work-light` (ou `/pwf-work` quando nao for trivial)
2. `/pwf-review`
3. `/pwf-commit-changes`

Use para ajustes menores e correcao de bug pontual.

## Montar estrutura multi-root do projeto

1. `/pwf-setup-workspace <nome-projeto> <caminho-base>`
2. Abrir o `<nome-projeto>.code-workspace` gerado
3. `/pwf-setup`
4. `/pwf-doc-foundation all`

Use quando quiser separar repos de codigo do contexto central de workflow/docs.

## Pedido explicito de tests-first (TDD opcional)

1. `/pwf-work-tdd`
2. `/pwf-review`
3. `/pwf-commit-changes`

## Criar ou atualizar docs canonicas

1. `/pwf-doc module <name>` ou `/pwf-doc feature <name>`
2. Opcional: `/pwf-doc architecture` ou `/pwf-doc update`

Use quando quiser forcar explicitamente saida de documentacao tecnica.

## Criar ou atualizar docs base do projeto

1. `/pwf-doc-foundation all` (ou alvo especifico: `infrastructure`, `architecture`, `integrations`, `environments`, `glossary`)

Use quando docs de onboarding estao ausentes ou desatualizadas.

## Criar ou atualizar runbooks operacionais

1. `/pwf-doc-runbook <servico-ou-operacao>` (ex.: `payments-api`, `deploy-backend`)
2. Opcional: `/pwf-doc-runbook index` para atualizar o indice de runbooks

Use quando um servico precisa de troubleshooting e recovery prontos para incidente.

## Registrar aprendizado reutilizavel

1. `/pwf-doc-capture <context>`
2. Opcional: `/pwf-doc-capture pattern <context>`

Use quando voce resolveu um problema que deve virar memoria de time.

## Fluxo de entrega para Lambda

1. Implementar com `/pwf-work` ou `/pwf-work-plan`
2. `/pwf-review`
3. `/pwf-aws-lambda-deploy`
4. `/pwf-commit-changes`
