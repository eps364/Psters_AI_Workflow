> Source: `docs/portuguese/commands-reference.md`

# Referencia de Comandos

Esta referencia explica todos os comandos do workflow em profundidade.

## Sumario de comandos (atalhos)

- [`/pwf-help`](#pwf-help)
- [`/pwf-setup`](#pwf-setup)
- [`/pwf-setup-workspace`](#pwf-setup-workspace)
- [`/pwf-brainstorm`](#pwf-brainstorm)
- [`/pwf-plan`](#pwf-plan)
- [`/pwf-clarify`](#pwf-clarify)
- [`/pwf-checklist`](#pwf-checklist)
- [`/pwf-analyze`](#pwf-analyze)
- [`/pwf-work-plan`](#pwf-work-plan)
- [`/pwf-work`](#pwf-work)
- [`/pwf-work-light`](#pwf-work-light)
- [`/pwf-work-tdd`](#pwf-work-tdd)
- [`/pwf-review`](#pwf-review)
- [`/pwf-doc`](#pwf-doc)
- [`/pwf-doc-foundation`](#pwf-doc-foundation)
- [`/pwf-doc-runbook`](#pwf-doc-runbook)
- [`/pwf-doc-capture`](#pwf-doc-capture)
- [`/pwf-doc-refresh`](#pwf-doc-refresh)
- [`/pwf-aws-lambda-deploy`](#pwf-aws-lambda-deploy)
- [`/pwf-commit-changes`](#pwf-commit-changes)

## Modelo de controle (critico)

- O desenvolvedor decide o caminho e o nivel de rigor.
- A IA executa o comando escolhido com disciplina.
- Os comandos nao trocam de estrategia automaticamente por julgamento da IA.

## Modelo de documentacao (critico)

- `/pwf-work` e `/pwf-work-plan` ja sao docs-first e docs-maintenance por padrao.
- Comandos `/pwf-doc*` sao para saidas de documentacao explicitas quando voce quer controle direcionado.
- E assim que os padroes persistem entre sessoes futuras de IA e entre contribuidores humanos.

## Fluxo padrao recomendado

`/pwf-brainstorm` -> `/pwf-plan` -> `[opcional: /pwf-clarify /pwf-checklist /pwf-analyze]` -> `/pwf-work-plan` -> `[/pwf-review quando necessario]` -> `/pwf-commit-changes`

## Nomeacao de comandos

Comandos especificos de tecnologia devem usar prefixo de tecnologia/provider. Veja `command-naming-convention.md`.

## `/pwf-help`

Objetivo: explicar o sistema de comandos e recomendar proximo passo.

Use quando:

- estiver fazendo onboarding de um novo contribuidor
- precisar decidir o que rodar em seguida
- quiser explicacao de comando sem executar

Resultado esperado:

- mapa de comandos disponiveis
- fluxo recomendado por cenario

## `/pwf-setup`

Objetivo: inicializar ou reparar o esqueleto de docs em `docs/`.

Use quando:

- projeto ainda nao tem estrutura base de docs
- voce quer comportamento previsivel dos comandos desde o inicio

Resultado esperado:

- paths obrigatorios de docs criados se ausentes
- arquivos baseline criados (`infrastructure`, `architecture`, `integrations`, `environments`, `glossary`, indice de runbooks)
- arquivo de overrides operacionais criado se nao existir

## `/pwf-setup-workspace`

Objetivo: criar ou reparar a estrutura multi-root recomendada (`*_Repos` + `*_Workspace`) e gerar um arquivo `.code-workspace` para Cursor/VS Code.

Use quando:

- estiver iniciando um projeto novo com multiplos repos,
- quiser organizar frontend/backend sob um caminho base,
- quiser separar repos de codigo do contexto central de workflow/docs.

Resultado esperado:

- estrutura `<NomeProjeto>_Repos` e `<NomeProjeto>_Workspace` pronta,
- pastas de repos frontend/backend criadas ou vinculadas,
- arquivo de workspace gerado para abertura multi-root,
- orientacao de migracao para repos existentes (sem acao destrutiva por padrao).

## `/pwf-brainstorm`

Objetivo: definir escopo, decisoes, riscos e direcao de arquitetura antes do plano.

Use quando:

- a direcao da feature ainda esta aberta
- decisoes arquiteturais ainda nao estao explicitas
- requisitos estao fragmentados

Resultado esperado:

- baseline de decisoes para planejamento
- premissas e duvidas principais mapeadas

## `/pwf-plan`

Objetivo: converter brainstorm/requisitos em fases e tarefas executaveis.

Use quando:

- implementacao envolve multiplas etapas
- dependencias e sequenciamento importam

Resultado esperado:

- plano por fases com tarefas concretas
- ordem de execucao e saidas esperadas

## `/pwf-clarify`

Objetivo: remover ambiguidades de alto impacto antes da execucao.

Use quando:

- criterios de aceitacao estao pouco claros
- ainda existem duvidas de escopo/arquitetura

Resultado esperado:

- artefato de clarificacao vinculado ao plano
- decisoes incorporadas ao contexto de execucao

## `/pwf-checklist`

Objetivo: criar quality gates de requisitos (nao suite de testes).

Use quando:

- quiser checagens objetivas antes de implementar
- dominios como API, UX, security, data e observability precisam cobertura explicita

Resultado esperado:

- checklists em `docs/plans/<plan-slug>/checklists/`
- verificacoes de requisito orientadas a pass/fail

## `/pwf-analyze`

Objetivo: executar analise read-only de consistencia entre artefatos.

Use quando:

- requisitos e tarefas podem estar desencontrados
- houver duvida de consistencia de termos entre plano/docs

Resultado esperado:

- relatorio priorizado de inconsistencias
- mapeamento de cobertura com lacunas

## `/pwf-work-plan`

Objetivo: executar uma fase planejada por vez.

Use quando:

- ja existe um plano
- voce quer execucao controlada e previsivel

Comportamento critico:

- le docs antes de codar
- implementa tarefas da fase atual
- atualiza docs e status do plano/checklist

Resultado esperado:

- fase implementada com evidencia de verificacao
- estado de documentacao sincronizado

## `/pwf-work`

Objetivo: executar trabalho focado fora de plano formal.

Use quando:

- fix ou mudanca e pequena e direcionada
- tarefa esta fora das fases planejadas

Comportamento critico:

- le docs antes de codar
- implementa mudanca de escopo controlado
- atualiza docs antes de concluir

Resultado esperado:

- mudanca focada concluida
- docs atualizadas e proximos passos claros

## `/pwf-work-light`

Objetivo: faixa de menor overhead para mudancas triviais/locais.

Use quando:

- mudanca esperada e muito pequena
- nao existe evolucao de schema/API/modelo de auth

Resultado esperado:

- implementacao rapida com prova de verificacao
- evita orquestracao pesada sem necessidade

## `/pwf-work-tdd`

Objetivo: faixa explicita de execucao tests-first.

Use quando:

- usuario pediu TDD explicitamente
- mudanca se beneficia de disciplina red-green-refactor

Resultado esperado:

- iteracoes red-green-refactor
- evidencia de verificacao por ciclo

## `/pwf-review`

Objetivo: executar revisao multi-agente para riscos, regressoes e problemas de design.

Use quando:

- fase/feature ja foi implementada
- voce quer cobertura de qualidade e risco mais profunda

Resultado esperado:

- achados priorizados com correcao acionavel

## `/pwf-doc`

Objetivo: geracao/atualizacao tecnica explicita por escopo.

Modos suportados:

- `module <name>`
- `feature <name>`
- `infrastructure`
- `architecture`
- `update`
- `adr <decision>`

Resultado esperado:

- docs canonicas do escopo atualizadas com anti-drift

## `/pwf-doc-foundation`

Objetivo: criar ou atualizar docs base do projeto em fluxo integrado.

Use quando:

- contexto de onboarding esta ausente ou desatualizado
- docs base precisam consistencia (`infrastructure`, `architecture`, `integrations`, `environments`, `glossary`)

Resultado esperado:

- docs base atualizadas em `docs/`
- checagens de consistencia entre documentos fundamentais

## `/pwf-doc-runbook`

Objetivo: criar/atualizar runbooks operacionais para incidentes e operacao.

Use quando:

- passos de recuperacao de servico/processo nao estao claros
- playbooks de deploy/rollback/escalonamento estao faltando

Resultado esperado:

- runbook em `docs/runbooks/`
- indice de runbooks atualizado

## `/pwf-doc-capture`

Objetivo: capturar aprendizado reutilizavel de engenharia.

Use quando:

- um problema nao trivial foi resolvido
- um padrao repetivel surgiu

Resultado esperado:

- artefato reutilizavel de problema/solucao ou padrao

## `/pwf-doc-refresh`

Objetivo: curar ciclo de vida de docs existentes de solucoes.

Use quando:

- docs podem estar obsoletas, duplicadas ou superadas
- voce quer decisoes explicitas por documento

Resultado esperado:

- decisao por doc (`Keep`, `Update`, `Replace`, `Archive`)
- acoes aprovadas de refresh aplicadas

## `/pwf-aws-lambda-deploy`

Objetivo: fluxo guiado de deploy para repos/mudancas Lambda.

Use quando:

- codigo Lambda ou configuracao operacional mudou

Resultado esperado:

- status do deploy e orientacao de remediacao em caso de falha

## `/pwf-commit-changes`

Objetivo: gerar commits estruturados e de alta qualidade.

Use quando:

- implementacao esta verificada e pronta para commit
- voce quer agrupamento limpo por escopo/topico/ticket

Resultado esperado:

- conjunto de commits focado com mensagens claras
