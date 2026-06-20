import assert from "node:assert/strict";
import test from "node:test";

import { projectSummary } from "../src/index.js";

test("project summary identifies the scaffold", () => {
  assert.deepEqual(projectSummary(), {
    name: "chess-vision",
    focus: "computer vision experiments for reading chess positions",
    status: "scaffold"
  });
});
