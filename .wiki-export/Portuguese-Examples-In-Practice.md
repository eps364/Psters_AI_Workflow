> Source: `docs/portuguese/examples-in-practice.md`

# Exemplos na Pratica

Exemplos realistas de como executar o workflow no dia a dia.

## Exemplo 1: Nova feature de painel admin

Objetivo: criar um dashboard admin mantendo arquitetura e docs alinhadas.

1. Rode `/brainstorm` com:
   - objetivo da feature
   - restricoes de diretorio/local
   - expectativas de UI/UX
   - requisitos de auth/permissao
2. Rode `/plan` para dividir o trabalho em fases.
3. Rode `/work-plan` com uma fase por chat.
4. Rode `/review`, corrija pendencias e rode `/review` novamente.
5. Rode `/commit-changes`.
6. Se necessario, force docs especificas com `/doc`.
7. Se surgir aprendizado reutilizavel, registre com `/compound`.

## Exemplo 2: Fix pequeno apos release

Objetivo: aplicar um fix pontual sem abrir plano completo por fases.

1. Rode `/work` com descricao objetiva da task.
2. Rode `/review` para checagem de riscos.
3. Rode `/commit-changes`.
4. Se necessario, force atualizacao de docs com `/doc`.

## Exemplo 3: Registrar padrao reutilizavel

Objetivo: transformar um problema resolvido em aceleracao futura.

1. Implemente com `/work` ou `/work-plan`.
2. Rode `/review` e finalize as mudancas de codigo.
3. Rode `/compound pattern <context>` para documentar um guia reutilizavel.

## Exemplo 4: Contribuicao apenas de documentacao

Objetivo: melhorar docs do projeto sem mudar codigo.

1. Abra uma issue descrevendo lacunas na documentacao.
2. Use `/doc` para atualizar o escopo necessario.
3. Envie um PR apenas com alteracoes de docs.
