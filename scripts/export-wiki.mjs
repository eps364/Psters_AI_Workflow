#!/usr/bin/env node

import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";

const DOCS_ROOT = resolve("docs");
const OUT_DIR = resolve(process.argv[2] ?? ".wiki-export");

const LANGUAGE_DIRS = [
  { dir: "english", label: "English" },
  { dir: "portuguese", label: "Portuguese" },
];

const PREFERRED_ORDER = [
  "README.md",
  "getting-started.md",
  "workflow-methodology.md",
  "commands-reference.md",
  "command-recipes.md",
  "examples-in-practice.md",
  "hooks-reference.md",
  "faq.md",
  "docs-quality-checklist.md",
  "extreme-programming.md",
  "add-a-plugin.md",
];

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
  const lines = [
    "# Psters AI Workflow Wiki",
    "",
    "This wiki is synchronized from the repository `docs/` folder.",
    "",
    "## English",
  ];

  for (const page of groups.English) {
    lines.push(`- [${page.title}](${page.fileName.replace(/\.md$/, "")})`);
  }

  lines.push("", "## Portuguese (PT-BR)");

  for (const page of groups.Portuguese) {
    lines.push(`- [${page.title}](${page.fileName.replace(/\.md$/, "")})`);
  }

  lines.push(
    "",
    "## Contributing",
    "",
    "- [Contributing Guide](Contributing)",
    "",
    "Community Discord: https://discord.gg/vxyrWuqUhe",
    ""
  );

  return lines.join("\n");
}

function buildSidebar(groups) {
  const lines = ["## Wiki", "", "- [Home](Home)", "", "### English"];

  for (const page of groups.English) {
    lines.push(`- [${page.title}](${page.fileName.replace(/\.md$/, "")})`);
  }

  lines.push("", "### Portuguese");

  for (const page of groups.Portuguese) {
    lines.push(`- [${page.title}](${page.fileName.replace(/\.md$/, "")})`);
  }

  lines.push("", "### Project", "- [Contributing](Contributing)", "");
  return lines.join("\n");
}

function withSourceBanner(content, sourcePath) {
  return [`> Source: \`${sourcePath}\``, "", content.trim(), ""].join("\n");
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

      const title = `${lang.label}: ${titleCaseSlug(file).replace(/-/g, " ")}`;
      groups[lang.label].push({ fileName: pageName, title });
    }
  }

  const contributingContent = await readFile(resolve("CONTRIBUTING.md"), "utf8");
  await writeFile(join(OUT_DIR, "Contributing.md"), contributingContent, "utf8");
  await writeFile(join(OUT_DIR, "Home.md"), buildHomePage(groups), "utf8");
  await writeFile(join(OUT_DIR, "_Sidebar.md"), buildSidebar(groups), "utf8");

  const exportedCount = groups.English.length + groups.Portuguese.length + 3;
  process.stdout.write(`Exported ${exportedCount} wiki pages to ${OUT_DIR}\n`);
}

main().catch((error) => {
  process.stderr.write(`Wiki export failed: ${error.message}\n`);
  process.exitCode = 1;
});
