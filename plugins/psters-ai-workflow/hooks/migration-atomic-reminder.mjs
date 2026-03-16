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

  if (command.includes("typeorm:generate")) {
    console.error(
      "[psters-ai-workflow hook] TypeORM atomic chain reminder: generate -> drift-check -> run locally immediately."
    );
  }

  process.stdout.write("{}");
}

main().catch(() => {
  process.stdout.write("{}");
});
