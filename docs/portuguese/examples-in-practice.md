# Exemplos na Pratica

Exemplos realistas de como executar o workflow no dia a dia.

## Exemplo 1: Nova feature de painel admin

Objetivo: criar um dashboard admin mantendo arquitetura e docs alinhadas.

1. Rode `/pwf-brainstorm` com:
   - objetivo da feature
   - restricoes de diretorio/local
   - expectativas de UI/UX
   - requisitos de auth/permissao
2. Rode `/pwf-plan` para dividir o trabalho em fases.
3. Rode `/pwf-work-plan` com uma fase por chat.
4. Rode `/pwf-review`, corrija pendencias e rode `/pwf-review` novamente.
5. Rode `/pwf-commit-changes`.
6. Se necessario, force docs especificas com `/pwf-doc` (ou `/pwf-doc-foundation` / `/pwf-doc-runbook` quando baseline ou runbooks forem necessarios).
7. Se surgir aprendizado reutilizavel, registre com `/pwf-doc-capture`.

## Exemplo 2: Fix pequeno apos release

Objetivo: aplicar um fix pontual sem abrir plano completo por fases.

1. Rode `/pwf-work` com descricao objetiva da task.
2. Rode `/pwf-review` para checagem de riscos.
3. Rode `/pwf-commit-changes`.
4. Se necessario, force atualizacao de docs com `/pwf-doc` (ou `/pwf-doc-foundation` / `/pwf-doc-runbook` quando relevante).

## Exemplo 3: Registrar padrao reutilizavel

Objetivo: transformar um problema resolvido em aceleracao futura.

1. Implemente com `/pwf-work` ou `/pwf-work-plan`.
2. Rode `/pwf-review` e finalize as mudancas de codigo.
3. Rode `/pwf-doc-capture pattern <context>` para documentar um guia reutilizavel.

## Exemplo 4: Contribuicao apenas de documentacao

Objetivo: melhorar docs do projeto sem mudar codigo.

1. Abra uma issue descrevendo lacunas na documentacao.
2. Use `/pwf-doc` para atualizacoes por escopo, `/pwf-doc-foundation` para docs base, ou `/pwf-doc-runbook` para runbooks operacionais.
3. Envie um PR apenas com alteracoes de docs.
