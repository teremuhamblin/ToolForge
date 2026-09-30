# ToolForge
- Générateur minimaliste de modules
- TypeScript pour projets techniques.
# Badges
### ToolForge (Yellow Tactical)

![Status](https://img.shields.io/badge/Status-Active-FFFF00?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-FFFF00?style=for-the-badge)
![License](https://img.shields.io/badge/License-Blue_Oak_1.0.0-FFFF00?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-FFFF00?style=for-the-badge)
![Tools](https://img.shields.io/badge/Tools-Auto_Generator-FFFF00?style=for-the-badge)

>Objectif : créer automatiquement un dossier d’outil complet *(Vue, service, tests, E2E, index)*.

## Usage
**npm run create-tool <nom-du-tool>**
- Exemple : **npm run create-tool hash-generator**

## Structure générée
**src/tools/<toolName>/**
  - <toolName>.vue
  - index.ts
  - <toolName>.service.ts
  - <toolName>.service.test.ts
  - <toolName>.e2e.spec.ts

## Licence
*Blue Oak Model License 1.0.0*

---
