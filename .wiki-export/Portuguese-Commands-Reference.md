> Source: `docs/portuguese/commands-reference.md`

# Referencia de Comandos

Esta referencia explica como usar os comandos do workflow na pratica.

## Anti-vibe coding: contexto e documentacao

**Contextualize a IA.** Antes de implementar, a IA precisa ler a documentacao existente. `/work` e `/work-plan` forcam isso: o primeiro passo sempre e ler docs, nunca editar codigo direto.

**Documente continuamente.** `/work` e `/work-plan` **leem e atualizam docs** como parte obrigatoria do fluxo. A documentacao e memoria operacional para futuras execucoes de IA e para engenharia. Nao pule essa etapa.

## Fluxo padrao recomendado

`/brainstorm` -> `/plan` -> `/work-plan` -> `/review` -> `/commit-changes`

## `/doc` vs `/compound`

- `/work` e `/work-plan` ja atualizam docs como parte obrigatoria do fluxo de execucao.
- `/doc` e para forcar explicitamente a geracao/atualizacao de documentacao tecnica de um escopo especifico.
- `/compound` e para forcar explicitamente um artefato de aprendizado (problema/solucao ou padrao reutilizavel).

## Guia de comandos

### `/brainstorm`

Use para explorar uma ideia e definir direcao de implementacao.

Use quando:

- voce esta iniciando uma feature nova
- o escopo ainda esta nebuloso
- as decisoes de arquitetura ainda estao abertas

Resultado esperado:

- baseline de decisoes para o planejamento

### `/plan`

Use para converter um brainstorm (ou requisito) em fases e tarefas executaveis.

Use quando:

- voce precisa estruturar a implementacao
- existem multiplas etapas/dependencias

Resultado esperado:

- plano por fases com tarefas concretas

### `/work-plan`

Use para executar uma fase de plano por vez.

Use quando:

- ja existe um plano
- voce quer execucao controlada fase a fase

**Critico:** `/work-plan` le docs primeiro (Step 1), executa tarefas (Step 2) e depois atualiza docs (Step 4). Manutencao de docs e obrigatoria.

Resultado esperado:

- fase implementada + checklist/status atualizados
- docs atualizadas (modulo, feature, lambda, padroes)

### `/work`

Use para tarefas focadas fora de planejamento formal.

Use quando:

- corrigindo bug pequeno
- fazendo ajuste localizado
- aplicando melhorias apos fases planejadas

**Critico:** `/work` le docs primeiro (Step 1), implementa (Step 3) e depois atualiza docs (Step 5). Manutencao de docs e obrigatoria.

Resultado esperado:

- mudanca implementada com resumo e proximos passos
- docs atualizadas (modulo, feature, lambda, padroes)

### `/review`

Use para rodar uma revisao estruturada de codigo.

Use quando:

- implementacao acabou para uma fase/feature
- voce quer achar regressao, risco e complexidade desnecessaria

Resultado esperado:

- achados priorizados e recomendacoes

### `/compound`

Use para forcar explicitamente um artefato de conhecimento reutilizavel do projeto.

Use quando:

- um problema foi resolvido
- um padrao foi descoberto

Resultado esperado:

- solucao/padrao documentado para reuso futuro

### `/doc`

Use para forcar explicitamente criacao/atualizacao de documentacao tecnica por escopo.

Modos suportados:

- `module <name>`
- `feature <name>`
- `architecture`
- `update`
- `adr <decision>`

Resultado esperado:

- docs geradas/atualizadas com referencias obsoletas corrigidas

### `/deploy-lambda`

Use para deploy de mudancas de Lambda com fluxo guiado.

Resultado esperado:

- resultado do deploy e passos de correcao se necessario

### `/commit-changes`

Use para gerar commits de alta qualidade e bem estruturados.

Use quando:

- implementacao ja foi revisada e esta pronta para commit
- voce quer commits agrupados por escopo/topico/ticket

Resultado esperado:

- conjunto de commits limpo com mensagens claras
