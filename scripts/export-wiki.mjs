#!/usr/bin/env node

import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";

const DOCS_ROOT = resolve("docs");
const OUT_DIR = resolve(process.argv[2] ?? ".wiki-export");
const REPO_HTTP_BASE = "https://github.com/J-Pster/Psters_AI_Workflow";
const DISCORD_INVITE_URL = "https://discord.gg/vxyrWuqUhe";

const LANGUAGE_DIRS = [
  { dir: "english", label: "English" },
  { dir: "portuguese", label: "Portuguese" },
];

const PREFERRED_ORDER = [
  "README.md",
  "getting-started.md",
  "suggested-project-structure.md",
  "workflow-methodology.md",
  "under-the-hood.md",
  "commands-reference.md",
  "command-recipes.md",
  "examples-in-practice.md",
  "hooks-reference.md",
  "faq.md",
  "docs-quality-checklist.md",
  "extreme-programming.md",
  "add-a-plugin.md",
];

const PORTUGUESE_LABELS_BY_SOURCE = {
  "README.md": "Início",
  "getting-started.md": "Começando Agora",
  "suggested-project-structure.md": "Estrutura de Projeto Sugerida",
  "workflow-methodology.md": "Metodologia do Workflow",
  "under-the-hood.md": "Por Dentro do Workflow",
  "commands-reference.md": "Referência de Comandos",
  "command-recipes.md": "Receitas de Comandos",
  "command-naming-convention.md": "Convenção de Nomes de Comandos",
  "examples-in-practice.md": "Exemplos na Prática",
  "other-editors.md": "Outros Editores",
  "extreme-programming.md": "Extreme Programming (XP)",
  "hooks-reference.md": "Referência de Hooks",
  "faq.md": "Perguntas Frequentes (FAQ)",
  "marketing-workflows.md": "Workflows de Marketing",
  "docs-quality-checklist.md": "Checklist de Qualidade da Documentação",
  "cursor-wsl-windows.md": "Cursor no Windows + WSL",
  "wiki-sync.md": "Sincronização com a Wiki",
};

function titleCaseSlug(fileName) {
  return fileName
    .replace(/\.md$/i, "")
    .split(/[-_]+/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

function orderFiles(files) {
  const rank = new Map(PREFERRED_ORDER.map((name, idx) => [name, idx]));
  return [...files].sort((a, b) => {
    const ai = rank.has(a) ? rank.get(a) : Number.MAX_SAFE_INTEGER;
    const bi = rank.has(b) ? rank.get(b) : Number.MAX_SAFE_INTEGER;
    if (ai !== bi) return ai - bi;
    return a.localeCompare(b);
  });
}

async function ensureCleanDir(path) {
  await rm(path, { recursive: true, force: true });
  await mkdir(path, { recursive: true });
}

function buildHomePage(groups) {
  const englishBySource = new Map(groups.English.map((page) => [page.sourceFile, page]));
  const portugueseBySource = new Map(groups.Portuguese.map((page) => [page.sourceFile, page]));
  const enGettingStarted = englishBySource.get("getting-started.md");
  const ptGettingStarted = portugueseBySource.get("getting-started.md");
  const enCommands = englishBySource.get("commands-reference.md");
  const ptCommands = portugueseBySource.get("commands-reference.md");
  const enFaq = englishBySource.get("faq.md");
  const ptFaq = portugueseBySource.get("faq.md");
  const enWsl = englishBySource.get("cursor-wsl-windows.md");
  const ptWsl = portugueseBySource.get("cursor-wsl-windows.md");
  const enMethod = englishBySource.get("workflow-methodology.md");
  const ptMethod = portugueseBySource.get("workflow-methodology.md");
  const enStructure = englishBySource.get("suggested-project-structure.md");
  const ptStructure = portugueseBySource.get("suggested-project-structure.md");

  const lines = [
    "# Psters AI Workflow Wiki",
    "",
    "Welcome. This wiki is synchronized from the repository `docs/` folder.",
    "",
    "## Language Navigation",
    "",
    "- [English Wiki](Wiki-English)",
    "- [Portuguese Wiki (PT-BR)](Wiki-Portuguese)",
    "",
    "## Highlights",
    "",
    "### English",
    enGettingStarted
      ? `- [Getting Started](${enGettingStarted.fileName.replace(/\.md$/, "")})`
      : "- Getting Started",
    enStructure
      ? `- [Suggested Project Structure](${enStructure.fileName.replace(/\.md$/, "")})`
      : "- Suggested Project Structure",
    enMethod
      ? `- [Workflow Methodology](${enMethod.fileName.replace(/\.md$/, "")})`
      : "- Workflow Methodology",
    enCommands
      ? `- [Commands Reference](${enCommands.fileName.replace(/\.md$/, "")})`
      : "- Commands Reference",
    enFaq
      ? `- [FAQ](${enFaq.fileName.replace(/\.md$/, "")})`
      : "- FAQ",
    "",
    "### Portuguese (PT-BR)",
    ptGettingStarted
      ? `- [${PORTUGUESE_LABELS_BY_SOURCE["getting-started.md"]}](${ptGettingStarted.fileName.replace(/\.md$/, "")})`
      : `- ${PORTUGUESE_LABELS_BY_SOURCE["getting-started.md"]}`,
    ptStructure
      ? `- [${PORTUGUESE_LABELS_BY_SOURCE["suggested-project-structure.md"]}](${ptStructure.fileName.replace(/\.md$/, "")})`
      : `- ${PORTUGUESE_LABELS_BY_SOURCE["suggested-project-structure.md"]}`,
    ptMethod
      ? `- [${PORTUGUESE_LABELS_BY_SOURCE["workflow-methodology.md"]}](${ptMethod.fileName.replace(/\.md$/, "")})`
      : `- ${PORTUGUESE_LABELS_BY_SOURCE["workflow-methodology.md"]}`,
    ptCommands
      ? `- [${PORTUGUESE_LABELS_BY_SOURCE["commands-reference.md"]}](${ptCommands.fileName.replace(/\.md$/, "")})`
      : `- ${PORTUGUESE_LABELS_BY_SOURCE["commands-reference.md"]}`,
    ptFaq
      ? `- [${PORTUGUESE_LABELS_BY_SOURCE["faq.md"]}](${ptFaq.fileName.replace(/\.md$/, "")})`
      : `- ${PORTUGUESE_LABELS_BY_SOURCE["faq.md"]}`,
    "",
    "## Community",
    "",
    "- Discord: https://discord.gg/vxyrWuqUhe",
    "",
    "## Known Issues",
    "",
    "- Plugin installed in WSL may not appear in Windows-local Cursor.",
    "- Fix: open Cursor in Remote-WSL mode for that project (`Connect to WSL` or `cursor .` from WSL).",
    enWsl
      ? `- Full guide (EN): [Cursor on Windows + WSL](${enWsl.fileName.replace(/\.md$/, "")})`
      : "- Full guide (EN): Cursor on Windows + WSL",
    ptWsl
      ? `- Guia completo (PT-BR): [Cursor no Windows + WSL](${ptWsl.fileName.replace(/\.md$/, "")})`
      : "- Guia completo (PT-BR): Cursor no Windows + WSL",
    "",
    "## Contributing",
    "",
    "- [Contributing Guide](Contributing)",
    ""
  ];

  return lines.join("\n");
}

function buildLanguageHubPage(label, pages, options) {
  const bySource = new Map(pages.map((page) => [page.sourceFile, page]));
  const gettingStarted = bySource.get("getting-started.md");
  const methodology = bySource.get("workflow-methodology.md");
  const structure = bySource.get("suggested-project-structure.md");
  const underTheHood = bySource.get("under-the-hood.md");
  const commands = bySource.get("commands-reference.md");
  const recipes = bySource.get("command-recipes.md");
  const faq = bySource.get("faq.md");
  const examples = bySource.get("examples-in-practice.md");
  const hooks = bySource.get("hooks-reference.md");
  const docsQuality = bySource.get("docs-quality-checklist.md");
  const commandNaming = bySource.get("command-naming-convention.md");
  const extremeProgramming = bySource.get("extreme-programming.md");
  const wslGuide = bySource.get("cursor-wsl-windows.md");
  const otherEditors = bySource.get("other-editors.md");
  const wikiSync = bySource.get("wiki-sync.md");
  const linkOrLabel = (page, text) =>
    page ? `- [${text}](${page.fileName.replace(/\.md$/, "")})` : `- ${text}`;

  const lines = [
    `# ${options.title}`,
    "",
    options.intro,
    "",
    `## ${options.startHereTitle ?? "Start Here"}`,
    "",
    ...[
      linkOrLabel(gettingStarted, options.labels.gettingStarted),
      linkOrLabel(structure, options.labels.structure),
      linkOrLabel(methodology, options.labels.methodology),
      linkOrLabel(commands, options.labels.commands),
      linkOrLabel(faq, options.labels.faq),
    ],
    "",
    `## ${options.coreReferencesTitle ?? "Core References"}`,
    "",
    ...[
      linkOrLabel(recipes, options.labels.recipes),
      linkOrLabel(underTheHood, options.labels.underTheHood),
      linkOrLabel(hooks, options.labels.hooks),
      linkOrLabel(commandNaming, options.labels.commandNaming),
      linkOrLabel(docsQuality, options.labels.docsQuality),
    ],
    "",
    `## ${options.advancedTitle ?? "Advanced and Context"}`,
    "",
    ...[
      linkOrLabel(examples, options.labels.examples),
      linkOrLabel(extremeProgramming, options.labels.extremeProgramming),
      linkOrLabel(wslGuide, options.labels.wslGuide),
      linkOrLabel(otherEditors, options.labels.otherEditors),
      linkOrLabel(wikiSync, options.labels.wikiSync),
    ],
    "",
    `## ${options.communityTitle ?? "Community and Contribution"}`,
    "",
    `- ${options.communityDiscordLabel}: [Discord](${DISCORD_INVITE_URL})`,
    `- ${options.communityIssuesLabel}: [${options.communityIssuesLinkLabel}](${REPO_HTTP_BASE}/issues)`,
    `- ${options.communityPrsLabel}: [${options.communityPrsLinkLabel}](${REPO_HTTP_BASE}/pulls)`,
    `- ${options.communityContribLabel}: [${options.communityContribLinkLabel}](Contributing)`,
    "",
    `## ${options.workflowDiagramTitle ?? "Primary Workflow Diagram"}`,
    "",
    "```mermaid",
    ...(options.workflowDiagram ?? []),
    "```",
    "",
    `## ${options.allPagesTitle ?? "All Pages"}`,
    "",
  ];

  for (const page of pages) {
    lines.push(`- [${page.title}](${page.fileName.replace(/\.md$/, "")})`);
  }

  lines.push("", options.backToHomeLabel, "");
  return lines.join("\n");
}

function buildSidebar(groups) {
  const lines = [
    "## Wiki",
    "",
    "- [Home](Home)",
    "- [English Wiki](Wiki-English)",
    "- [Portuguese Wiki](Wiki-Portuguese)",
    "",
    "### English Pages",
  ];

  for (const page of groups.English) {
    lines.push(`- [${page.title}](${page.fileName.replace(/\.md$/, "")})`);
  }

  lines.push("", "### Portuguese Pages");

  for (const page of groups.Portuguese) {
    lines.push(`- [${page.title}](${page.fileName.replace(/\.md$/, "")})`);
  }

  lines.push("", "### Project", "- [Contributing](Contributing)", "");
  return lines.join("\n");
}

function withSourceBanner(content, sourcePath) {
  return [`> Source: \`${sourcePath}\``, "", content.trim(), ""].join("\n");
}

function getDisplayTitle(langLabel, sourceFile) {
  if (langLabel === "Portuguese") {
    return PORTUGUESE_LABELS_BY_SOURCE[sourceFile] ?? titleCaseSlug(sourceFile).replace(/-/g, " ");
  }
  return titleCaseSlug(sourceFile).replace(/-/g, " ");
}

async function main() {
  await ensureCleanDir(OUT_DIR);

  const groups = { English: [], Portuguese: [] };

  for (const lang of LANGUAGE_DIRS) {
    const langRoot = join(DOCS_ROOT, lang.dir);
    const dirEntries = await readdir(langRoot, { withFileTypes: true });
    const markdownFiles = orderFiles(
      dirEntries
        .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
        .map((entry) => entry.name)
    );

    for (const file of markdownFiles) {
      const sourcePath = join(langRoot, file);
      const raw = await readFile(sourcePath, "utf8");
      const pageName = `${lang.label}-${titleCaseSlug(file)}.md`;
      const wikiContent = withSourceBanner(raw, `docs/${lang.dir}/${file}`);

      await writeFile(join(OUT_DIR, pageName), wikiContent, "utf8");

      const displayTitle = getDisplayTitle(lang.label, file);
      const title = lang.label === "Portuguese" ? displayTitle : `${lang.label}: ${displayTitle}`;
      groups[lang.label].push({ fileName: pageName, title, sourceFile: file });
    }
  }

  const contributingContent = await readFile(resolve("CONTRIBUTING.md"), "utf8");
  await writeFile(join(OUT_DIR, "Contributing.md"), contributingContent, "utf8");
  await writeFile(join(OUT_DIR, "Home.md"), buildHomePage(groups), "utf8");
  await writeFile(
    join(OUT_DIR, "Wiki-English.md"),
    buildLanguageHubPage("English", groups.English, {
      title: "English Wiki",
      intro: "Browse all English documentation pages from this wiki.",
      startHereTitle: "Start Here (Most Important)",
      coreReferencesTitle: "Core Workflow References",
      advancedTitle: "Advanced and Context",
      communityTitle: "Community and Contribution",
      communityDiscordLabel: "Need help or quick clarification",
      communityIssuesLabel: "Open an issue for bug reports or deep technical questions",
      communityIssuesLinkLabel: "Repository Issues",
      communityPrsLabel: "Contribute improvements",
      communityPrsLinkLabel: "Pull Requests",
      communityContribLabel: "Contribution process and standards",
      communityContribLinkLabel: "Contributing Guide",
      workflowDiagramTitle: "Primary Workflow Diagram",
      workflowDiagram: [
        '%%{init: {"flowchart": {"curve": "linear", "rankSpacing": 40, "nodeSpacing": 28}} }%%',
        "flowchart LR",
        '  B["/pwf-brainstorm<br/>Define scope and decisions"] --> P["/pwf-plan<br/>Generate phased implementation plan"]',
        '  P --> Q{"Use quality gates?"}',
        '  Q -->|Yes| C["/pwf-checklist<br/>Validate requirement quality"]',
        '  C --> L["/pwf-clarify<br/>Resolve critical ambiguities"]',
        '  L --> A["/pwf-analyze<br/>Run read-only consistency analysis"]',
        '  A --> W["/pwf-work-plan<br/>Implement one phase"]',
        "  Q -->|No| W",
        "",
        '  W --> R{"More phases pending?"}',
        "  R -->|Yes| W",
        '  R -->|No| V["/pwf-review<br/>Review and fix findings"]',
        '  V --> M["/pwf-commit-changes<br/>Create structured commits"]',
        "",
        '  X["/pwf-work<br/>Fast lane outside formal plan"] -. optional lane .-> V',
        '  D["Docs are central:<br/>/pwf-work and /pwf-work-plan read docs first<br/>and update docs automatically"] -.-> W',
        "  D -.-> X",
        "",
        "  classDef core fill:#EEF2FF,stroke:#4F46E5,color:#111827,stroke-width:1.2px;",
        "  classDef quality fill:#ECFDF5,stroke:#059669,color:#111827,stroke-width:1.2px;",
        "  classDef execution fill:#FFF7ED,stroke:#EA580C,color:#111827,stroke-width:1.2px;",
        "  classDef close fill:#F5F3FF,stroke:#7C3AED,color:#111827,stroke-width:1.2px;",
        "  classDef docs fill:#EFF6FF,stroke:#2563EB,color:#111827,stroke-width:1.2px;",
        "  classDef decision fill:#F8FAFC,stroke:#475569,color:#0F172A,stroke-width:1.1px;",
        "",
        "  class B,P core;",
        "  class C,L,A quality;",
        "  class W,X execution;",
        "  class V,M close;",
        "  class D docs;",
        "  class Q,R decision;",
      ],
      labels: {
        gettingStarted: "English: Getting Started",
        methodology: "English: Workflow Methodology",
        structure: "English: Suggested Project Structure",
        underTheHood: "English: Under The Hood",
        commands: "English: Commands Reference",
        recipes: "English: Command Recipes",
        examples: "English: Examples In Practice",
        hooks: "English: Hooks Reference",
        docsQuality: "English: Docs Quality Checklist",
        commandNaming: "English: Command Naming Convention",
        extremeProgramming: "English: Extreme Programming",
        wslGuide: "English: Cursor Wsl Windows",
        otherEditors: "English: Other Editors",
        faq: "English: FAQ",
        wikiSync: "English: Wiki Sync",
      },
      backToHomeLabel: "- [Back to Home](Home)",
    }),
    "utf8"
  );
  await writeFile(
    join(OUT_DIR, "Wiki-Portuguese.md"),
    buildLanguageHubPage("Portuguese", groups.Portuguese, {
      title: "Portuguese Wiki (PT-BR)",
      intro: "Navegue por todas as paginas da documentacao em portugues.",
      startHereTitle: "Comece por Aqui (Mais Importante)",
      coreReferencesTitle: "Referências Centrais do Workflow",
      advancedTitle: "Aprofundamento e Contexto",
      communityTitle: "Comunidade e Contribuição",
      communityDiscordLabel: "Para dúvidas rápidas e apoio da comunidade",
      communityIssuesLabel: "Abra uma issue para bugs ou dúvidas técnicas mais profundas",
      communityIssuesLinkLabel: "Issues do Repositório",
      communityPrsLabel: "Colabore com melhorias",
      communityPrsLinkLabel: "Pull Requests",
      communityContribLabel: "Processo e padrões de contribuição",
      communityContribLinkLabel: "Guia de Contribuição",
      workflowDiagramTitle: "Diagrama do Workflow Principal",
      workflowDiagram: [
        '%%{init: {"flowchart": {"curve": "linear", "rankSpacing": 40, "nodeSpacing": 28}} }%%',
        "flowchart LR",
        '  B["/pwf-brainstorm<br/>Definir escopo e decisoes"] --> P["/pwf-plan<br/>Gerar plano de implementacao em fases"]',
        '  P --> Q{"Usar quality gates?"}',
        '  Q -->|Sim| C["/pwf-checklist<br/>Validar qualidade dos requisitos"]',
        '  C --> L["/pwf-clarify<br/>Resolver ambiguidades criticas"]',
        '  L --> A["/pwf-analyze<br/>Analise read-only de consistencia"]',
        '  A --> W["/pwf-work-plan<br/>Implementar uma fase"]',
        "  Q -->|Nao| W",
        "",
        '  W --> R{"Ainda existem fases pendentes?"}',
        "  R -->|Sim| W",
        '  R -->|Nao| V["/pwf-review<br/>Revisar e corrigir findings"]',
        '  V --> M["/pwf-commit-changes<br/>Gerar commits estruturados"]',
        "",
        '  X["/pwf-work<br/>Faixa rapida fora do plano formal"] -. caminho opcional .-> V',
        '  D["Docs sao centrais:<br/>/pwf-work e /pwf-work-plan leem docs antes<br/>e atualizam docs automaticamente"] -.-> W',
        "  D -.-> X",
        "",
        "  classDef core fill:#EEF2FF,stroke:#4F46E5,color:#111827,stroke-width:1.2px;",
        "  classDef quality fill:#ECFDF5,stroke:#059669,color:#111827,stroke-width:1.2px;",
        "  classDef execution fill:#FFF7ED,stroke:#EA580C,color:#111827,stroke-width:1.2px;",
        "  classDef close fill:#F5F3FF,stroke:#7C3AED,color:#111827,stroke-width:1.2px;",
        "  classDef docs fill:#EFF6FF,stroke:#2563EB,color:#111827,stroke-width:1.2px;",
        "  classDef decision fill:#F8FAFC,stroke:#475569,color:#0F172A,stroke-width:1.1px;",
        "",
        "  class B,P core;",
        "  class C,L,A quality;",
        "  class W,X execution;",
        "  class V,M close;",
        "  class D docs;",
        "  class Q,R decision;",
      ],
      allPagesTitle: "Todas as Páginas",
      labels: {
        gettingStarted: PORTUGUESE_LABELS_BY_SOURCE["getting-started.md"],
        methodology: PORTUGUESE_LABELS_BY_SOURCE["workflow-methodology.md"],
        structure: PORTUGUESE_LABELS_BY_SOURCE["suggested-project-structure.md"],
        underTheHood: PORTUGUESE_LABELS_BY_SOURCE["under-the-hood.md"],
        commands: PORTUGUESE_LABELS_BY_SOURCE["commands-reference.md"],
        recipes: PORTUGUESE_LABELS_BY_SOURCE["command-recipes.md"],
        examples: PORTUGUESE_LABELS_BY_SOURCE["examples-in-practice.md"],
        hooks: PORTUGUESE_LABELS_BY_SOURCE["hooks-reference.md"],
        docsQuality: PORTUGUESE_LABELS_BY_SOURCE["docs-quality-checklist.md"],
        commandNaming: PORTUGUESE_LABELS_BY_SOURCE["command-naming-convention.md"],
        extremeProgramming: PORTUGUESE_LABELS_BY_SOURCE["extreme-programming.md"],
        wslGuide: PORTUGUESE_LABELS_BY_SOURCE["cursor-wsl-windows.md"],
        otherEditors: PORTUGUESE_LABELS_BY_SOURCE["other-editors.md"],
        faq: PORTUGUESE_LABELS_BY_SOURCE["faq.md"],
        wikiSync: PORTUGUESE_LABELS_BY_SOURCE["wiki-sync.md"],
      },
      backToHomeLabel: "- [Voltar para Home](Home)",
    }),
    "utf8"
  );
  await writeFile(join(OUT_DIR, "_Sidebar.md"), buildSidebar(groups), "utf8");

  const exportedCount = groups.English.length + groups.Portuguese.length + 5;
  process.stdout.write(`Exported ${exportedCount} wiki pages to ${OUT_DIR}\n`);
}

main().catch((error) => {
  process.stderr.write(`Wiki export failed: ${error.message}\n`);
  process.exitCode = 1;
});
