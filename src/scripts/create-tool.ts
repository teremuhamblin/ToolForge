import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const toolsDir = join(currentDir, '..', 'tools');

const toolName = process.argv[2];

if (!toolName) {
  console.error('[ERROR] Aucun nom de tool fourni.');
  process.exit(1);
}

const toCamelCase = (name: string): string =>
  name.replace(/-./g, (x) => x[1].toUpperCase());

const toTitleCase = (name: string): string =>
  name[0].toUpperCase() + name.slice(1).replace(/-/g, ' ');

const toolNameCamel = toCamelCase(toolName);
const toolNameTitle = toTitleCase(toolName);

const toolDir = join(toolsDir, toolName);

async function createFile(name: string, content: string) {
  const filePath = join(toolDir, name);
  await writeFile(filePath, content.trim());
  console.log(`[OK] Fichier créé : ${filePath}`);
}

async function main() {
  try {
    await mkdir(toolDir);
    console.log(`[OK] Dossier créé : ${toolDir}`);

    await createFile(
      `${toolName}.vue`,
      `
<template>
  <div>
    Lorem ipsum
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
</style>
`
    );

    await createFile(
      `index.ts`,
      `
import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '${toolNameTitle}',
  path: '/${toolName}',
  description: '',
  keywords: ['${toolName.split('-').join("', '")}'],
  component: () => import('./${toolName}.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('${new Date().toISOString().split('T')[0]}'),
});
`
    );

    await createFile(`${toolName}.service.ts`, ``);

    await createFile(
      `${toolName}.service.test.ts`,
      `
import { expect, describe, it } from 'vitest';

describe('${toolName}', () => {
  it('Service placeholder', () => {
    expect(true).toBe(true);
  });
});
`
    );

    await createFile(
      `${toolName}.e2e.spec.ts`,
      `
import { test, expect } from '@playwright/test';

test.describe('Tool - ${toolNameTitle}', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/${toolName}');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('${toolNameTitle} - IT Tools');
  });
});
`
    );

    const toolsIndex = join(toolsDir, 'index.ts');
    const indexContent = (await readFile(toolsIndex, 'utf-8')).split('\n');

    indexContent.splice(0, 0, `import { tool as ${toolNameCamel} } from './${toolName}';`);

    await writeFile(toolsIndex, indexContent.join('\n'));

    console.log(`[OK] Import ajouté dans ${toolsIndex}`);
  } catch (err) {
    console.error('[ERROR] Une erreur est survenue :', err);
  }
}

main();
