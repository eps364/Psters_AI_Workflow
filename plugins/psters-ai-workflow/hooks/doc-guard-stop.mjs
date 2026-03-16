import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const STATE_PATH = resolve(".cursor/hooks/state/psters-ai-workflow.json");

function parseJson(text) {
  try {
    return JSON.parse(text || "{}");
  } catch {
    return {};
  }
}

function loadState() {
  if (!existsSync(STATE_PATH)) {
    return { version: 1, sessions: {} };
  }
  try {
    return JSON.parse(readFileSync(STATE_PATH, "utf8"));
  } catch {
    return { version: 1, sessions: {} };
  }
}

function saveState(state) {
  const dir = dirname(STATE_PATH);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

async function readStdin() {
  return await new Promise((resolveInput) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => {
      data += chunk;
    });
    process.stdin.on("end", () => resolveInput(data));
  });
}

async function main() {
  const payload = parseJson(await readStdin());
  const sessionId = payload.session_id || payload.conversation_id || "global";
  const state = loadState();
  const session = state.sessions[sessionId] || state.sessions.global;

  if (!session) {
    process.stdout.write("{}");
    return;
  }

  const needsDocsReminder = session.codeEdits > 0 && session.docEdits === 0;

  delete state.sessions[sessionId];
  state.updatedAt = Date.now();
  saveState(state);

  if (needsDocsReminder) {
    process.stdout.write(
      JSON.stringify({
        followup_message:
          "Documentation guard: code was edited but no docs were updated in this session. Run `/doc update` to refresh canonical docs. If you solved a non-trivial issue or pattern, run `/compound`."
      })
    );
    return;
  }

  process.stdout.write("{}");
}

main().catch(() => {
  process.stdout.write("{}");
});
