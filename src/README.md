# ToolForge — Dossier src/

Ce dossier contient le cœur opérationnel du projet ToolForge.

## Structure

```
src/
├── scripts/
│   └── create-tool.ts      # Générateur automatique de modules/tools
│
└── tools/
    └── index.ts            # Registre global des tools générés
```

## scripts/
Contient les scripts internes du projet.  
Actuellement : `create-tool.ts`, un générateur militaire qui crée automatiquement :

- un composant Vue
- un service
- un test unitaire Vitest
- un test E2E Playwright
- un index TypeScript
- l’import automatique dans `tools/index.ts`

## tools/
Dossier où sont stockés les tools générés.  
Chaque tool possède son propre dossier :

```
src/tools/<toolName>/
  - <toolName>.vue
  - index.ts
  - <toolName>.service.ts
  - <toolName>.service.test.ts
  - <toolName>.e2e.spec.ts
```

## Objectif
Fournir une base propre, courte, efficace, pour générer des modules techniques Vue + TypeScript sans répétition manuelle.
