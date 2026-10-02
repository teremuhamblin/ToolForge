import fs from "fs";
import path from "path";

const toolName = process.argv[2];

if (!toolName) {
  console.error("Erreur : aucun nom de tool fourni.");
  process.exit(1);
}

const basePath = path.join("src", "tools", toolName);

const files = {
  vue: path.join(basePath, `${toolName}.vue`),
  service: path.join(basePath, `${toolName}.service.ts`),
  test: path.join(basePath, `${toolName}.service.test.ts`),
  e2e: path.join(basePath, `${toolName}.e2e.spec.ts`),
  index: path.join(basePath, "index.ts")
};

if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath, { recursive: true });
}

fs.writeFileSync(
  files.vue,
  `<template>
  <div>${toolName} component</div>
</template>

<script setup lang="ts">
// Service import
import { use${capitalize(toolName)}Service } from "./${toolName}.service";
const service = use${capitalize(toolName)}Service();
</script>
`
);

fs.writeFileSync(
  files.service,
  `export function use${capitalize(toolName)}Service() {
  return {
    run() {
      return "${toolName} service operational";
    }
  };
}
`
);

fs.writeFileSync(
  files.test,
  `import { describe, it, expect } from "vitest";
import { use${capitalize(toolName)}Service } from "./${toolName}.service";

describe("${toolName} service", () => {
  it("run() doit retourner une valeur", () => {
    const service = use${capitalize(toolName)}Service();
    expect(service.run()).toBe("${toolName} service operational");
  });
});
`
);

fs.writeFileSync(
  files.e2e,
  `import { test, expect } from "@playwright/test";

test("${toolName} E2E", async ({ page }) => {
  await page.goto("/");
  expect(true).toBe(true);
});
`
);

fs.writeFileSync(
  files.index,
  `export * from "./${toolName}.service";
export { default as ${capitalize(toolName)}Component } from "./${toolName}.vue";
`
);

console.log(`ToolForge: module '${toolName}' généré avec succès.`);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
