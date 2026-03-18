> Source: `docs/portuguese/hooks-reference.md`

# Referencia de Hooks

Este plugin usa hooks como guardrails para reforcar disciplina de workflow.

## Tabela de hooks

| Hook | Gatilho | O que faz |
| --- | --- | --- |
| `afterFileEdit` | Arquivo editado | Rastreia se a sessao alterou codigo e/ou docs |
| `stop` | Encerramento da sessao | Lembra atualizacao de docs se houve mudanca de codigo sem mudanca de docs |
| `beforeShellExecution` | Comando `git commit` | Lembra convencao de commit (`[TICKET-XXXX] ...`) |
| `afterShellExecution` | Comando `typeorm:generate` | Lembra cadeia atomica de migrations TypeORM |

## Por que hooks importam

- Evitam desvio silencioso de processo.
- Mantem documentacao conectada a implementacao.
- Melhoram consistencia sem bloquear trabalho normal.

## Importante

Hooks sao reforco. Quem conduz o fluxo continuam sendo os comandos:

- `/pwf-work` e `/pwf-work-plan` para implementacao
- familia `/pwf-doc` para saidas explicitas de documentacao
- `/pwf-review` para loops de feedback de qualidade
