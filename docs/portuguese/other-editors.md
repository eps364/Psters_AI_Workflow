# Cursor + Claude Code

> **Recomendacao: use o Cursor.**
> Este workflow e distribuido como um plugin nativo do Cursor. No Cursor, os slash commands, hooks e sub-agentes funcionam automaticamente sem nenhuma configuracao manual. Quando o plugin chegar ao Cursor Marketplace, as atualizacoes serao entregues automaticamente dentro do proprio Cursor — sem precisar tocar no terminal.
>
> Enquanto o plugin ainda nao esta publicado no Marketplace, atualize fazendo pull do repositorio e rodando o script de instalacao novamente. O script e idempotente e seguro para rodar qualquer numero de vezes:
>
> ```bash
> git pull
> ./scripts/install-plugin-local.sh
> ```

Se voce nao pode usar o Cursor, use Claude Code como unico fallback suportado.

A metodologia central e a mesma nos dois ambientes suportados: Cursor (principal) e Claude Code (fallback).

---

## Ambientes suportados

| Funcionalidade | Cursor | Claude Code |
|----------------|--------|-------------|
| Slash commands nativos | ✅ | ✅ |
| Regras / contexto global | ✅ | ✅ via `CLAUDE.md` |
| Hooks (guardrails de automacao) | ✅ | ❌ |
| Sub-agentes (pesquisa paralela) | ✅ | Parcial |
| Atualizacoes automaticas | ✅ Marketplace | Manual |

---

## Claude Code

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) e a alternativa mais proxima do Cursor para este workflow. Ele usa o mesmo mecanismo de slash commands: arquivos markdown em `.claude/commands/` sao invocados com `/nome-do-comando`.

### Configuracao

1. Clone este repositorio:

   ```bash
   git clone https://github.com/J-Pster/Psters_AI_Workflow.git
   ```

2. Recomendado (automatizado): rode o instalador bridge a partir deste repositorio:

   ```bash
   node scripts/install-workflow-bridge.mjs --to claude --project /caminho/do/seu-projeto
   ```

   Esse comando:
   - copia os comandos para `/caminho/do/seu-projeto/.claude/commands/`
   - cria/atualiza um bloco gerenciado de regras Psters em `/caminho/do/seu-projeto/CLAUDE.md`

3. Alternativa manual: no seu projeto, crie o diretorio de comandos e copie os comandos do workflow:

   ```bash
   mkdir -p .claude/commands
   cp /caminho/para/Psters_AI_Workflow/plugins/psters-ai-workflow/commands/*.md .claude/commands/
   ```

4. Crie ou adicione ao `CLAUDE.md` na raiz do seu projeto para carregar as regras do workflow como contexto global. Copie o conteudo das regras desejadas — comece com `context7-documentation.mdc` e `commits.mdc`:

   ```bash
   # Cria CLAUDE.md se nao existir
   touch CLAUDE.md
   ```

   Em seguida, cole o conteudo dos arquivos de regra desejados de `plugins/psters-ai-workflow/rules/` no `CLAUDE.md`.

### Uso

Rode o workflow no Claude Code exatamente como no Cursor:

```
/pwf-brainstorm adicionar autenticacao de usuario com JWT
/pwf-plan
/pwf-work-plan
/pwf-review
/pwf-commit-changes
```

### O que funciona no Claude Code

- **Todos os slash commands funcionam nativamente.** O formato de comando e identico ao Cursor.
- **Regras funcionam** via `CLAUDE.md` (arquivo de contexto global lido automaticamente).
- **Hooks nao funcionam.** O Claude Code nao tem sistema de hooks. A disciplina de documentacao e aplicada manualmente.
- **Sub-agentes sao parciais.** Comandos que disparam multiplos agentes de pesquisa os executam sequencialmente na conversa, em vez de em paralelo.

### Manter comandos atualizados

```bash
cd Psters_AI_Workflow && git pull
node scripts/install-workflow-bridge.mjs --to claude --project /caminho/do/seu-projeto
```

### Cursor + Claude ao mesmo tempo

Se quiser Cursor como principal e Claude como fallback:

```bash
node scripts/install-workflow-bridge.mjs --to all --project /caminho/do/seu-projeto
```

---

## Resumo

Cursor e o caminho principal e foco oficial. Se voce nao pode usar Cursor, **Claude Code e o unico fallback suportado** e preserva a experiencia de slash commands com configuracao minima.
