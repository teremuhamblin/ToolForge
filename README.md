# ToolForge
Générateur minimaliste de modules Vue 3 + TypeScript pour projets techniques.

>Objectif : créer automatiquement un dossier d’outil complet *(Vue, service, tests, E2E, index)*.

## Usage
npm run create-tool <nom-du-tool>

- Exemple :
npm run create-tool hash-generator

## Structure générée
src/tools/<toolName>/
  - <toolName>.vue
  - index.ts
  - <toolName>.service.ts
  - <toolName>.service.test.ts
  - <toolName>.e2e.spec.ts

## Licence
Blue Oak Model License 1.0.0
