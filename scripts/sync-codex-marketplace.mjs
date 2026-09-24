import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = JSON.parse(readFileSync(resolve(root, ".claude-plugin/marketplace.json"), "utf8"));
// Only packages with verified Codex compatibility belong in this projection.
const plugin = source.plugins.find((entry) => entry.name === "blueprint-studio");
// Public installs must not depend on a configured GitHub SSH identity.
if (plugin?.source?.source !== "url" || !/^https:\/\/github\.com\/[\w-]+\/[\w.-]+\.git$/.test(plugin.source.url)) throw new Error("Invalid Blueprint plugin HTTPS source");
const result = {
  name: source.name,
  interface: { displayName: "Blueprint Studio" },
  plugins: [{
    name: plugin.name,
    source: { source: "url", url: plugin.source.url },
    policy: { installation: "AVAILABLE", authentication: "ON_INSTALL" },
    category: "Productivity"
  }]
};
const target = resolve(root, ".agents/plugins/marketplace.json");
const output = JSON.stringify(result, null, 2) + "\n";
if (process.argv.includes("--check")) {
  if (readFileSync(target, "utf8") !== output) throw new Error("Codex marketplace is stale; run node scripts/sync-codex-marketplace.mjs");
} else { mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, output); }
