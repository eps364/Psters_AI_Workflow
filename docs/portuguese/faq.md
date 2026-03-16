# FAQ

## Preciso sempre usar `/plan`?

Nao. Use `/plan` para mudancas multi-etapas ou de maior risco.
Para fixes pequenos e ajustes pontuais, use `/work`.

## Qual a diferenca entre `/work` e `/work-plan`?

- `/work-plan`: executa fases planejadas, uma por vez.
- `/work`: executa mudancas focadas fora de plano formal.

Ambos leem docs primeiro e atualizam docs no proprio fluxo obrigatorio.

## Qual a diferenca entre `/doc` e `/compound`?

- `/doc`: documentacao tecnica canonica por escopo (modulo, feature, arquitetura, ADR, update).
- `/compound`: artefatos de aprendizado reutilizavel (problema/solucao e padroes).

## Se `/work` e `/work-plan` ja atualizam docs, por que usar `/doc` ou `/compound`?

Use quando quiser forcar explicitamente uma saida de documentacao especifica.

## Hooks sao obrigatorios?

Hooks sao guardrails recomendados. Eles reforcam disciplina e lembretes, mas o fluxo principal continua sendo pelos comandos.

## Esse workflow depende de linguagem/framework especifico?

Nao. O workflow e agnostico de linguagem e framework.
