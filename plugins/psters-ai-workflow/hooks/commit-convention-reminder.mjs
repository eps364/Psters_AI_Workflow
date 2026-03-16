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

function parseJson(text) {
  try {
    return JSON.parse(text || "{}");
  } catch {
    return {};
  }
}

async function main() {
  const payload = parseJson(await readStdin());
  const command = String(payload.command || "");

  if (!command) {
    process.stdout.write("{}");
    return;
  }

  const hasTicketPrefix = /\[TICKET-[A-Za-z0-9_-]+\]/.test(command);
  if (!hasTicketPrefix) {
    console.error(
      "[psters-ai-workflow hook] Commit reminder: prefer `[TICKET-XXXX] <emoji> <type>(<scope>): <subject>`; use `/commit-changes` for structured commits."
    );
  }

  process.stdout.write("{}");
}

main().catch(() => {
  process.stdout.write("{}");
});
