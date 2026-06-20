import { fileURLToPath } from "node:url";

export function projectSummary() {
  return {
    name: "chess-vision",
    focus: "computer vision experiments for reading chess positions",
    status: "scaffold"
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const summary = projectSummary();
  console.log(`${summary.name}: ${summary.focus} (${summary.status})`);
}
