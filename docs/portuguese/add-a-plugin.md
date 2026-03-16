# Adicionar um plugin

Adicione um novo plugin em `plugins/` e registre em `.cursor-plugin/marketplace.json`.

## 1. Criar diretorio do plugin

Crie uma nova pasta:

```text
plugins/meu-novo-plugin/
```

Adicione o manifesto obrigatorio:

```text
plugins/meu-novo-plugin/.cursor-plugin/plugin.json
```

Exemplo de manifesto:

```json
{
  "name": "meu-novo-plugin",
  "displayName": "Meu Novo Plugin",
  "version": "0.1.0",
  "description": "Descreva o que este plugin faz",
  "author": {
    "name": "Sua Organizacao"
  },
  "logo": "assets/logo.svg"
}
```

## 2. Adicionar componentes do plugin

Adicione apenas os componentes necessarios:

- `rules/` com arquivos `.mdc` (frontmatter YAML obrigatorio)
- `skills/<skill-name>/SKILL.md` (frontmatter YAML obrigatorio)
- `agents/*.md` (frontmatter YAML obrigatorio)
- `commands/*.(md|mdc|markdown|txt)` (frontmatter recomendado)
- `hooks/hooks.json` e `scripts/*` para automacoes de hook
- `mcp.json` para definicao de servidores MCP
- `assets/logo.svg` para exibicao no marketplace

## 3. Registrar no manifesto do marketplace

Edite `.cursor-plugin/marketplace.json` e adicione uma nova entrada:

```json
{
  "name": "meu-novo-plugin",
  "source": "./plugins/meu-novo-plugin",
  "description": "Descreva seu plugin"
}
```

`source` e o caminho relativo da raiz do repositorio ate a pasta do plugin.

## 4. Validar

```bash
node scripts/validate-template.mjs
```

Corrija todos os erros reportados antes de commitar.

## 5. Armadilhas comuns

- `name` do plugin fora de kebab-case.
- Caminho `source` no marketplace nao bate com o nome da pasta.
- Ausencia de `.cursor-plugin/plugin.json` na pasta do plugin.
- Falta de frontmatter (`name`, `description`) em skills, agents ou commands.
- Rules sem frontmatter `description`.
- Usar arquivo diferente de `mcp.json` para MCP.
- Paths relativos quebrados para `logo`, `hooks` ou `mcpServers`.
