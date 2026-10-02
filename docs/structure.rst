# ToolForge — STRUCTURE v1.1.0

### Objectif
Structure opérationnelle du projet ToolForge, alignée sur le générateur d’outils
(Vue, services, tests unitaires, tests E2E, index automatique).

### Arborescence

```text
toolforge/
├── src/
│   ├── scripts/
│   │   └── create-tool.ts
│   ├── tools/
│   │   └── <toolName>/
│   │       ├── <toolName>.vue
│   │       ├── <toolName>.service.ts
│   │       ├── <toolName>.service.test.ts
│   │       ├── <toolName>.e2e.spec.ts
│   │       └── index.ts
│   └── core/   (réservé pour extensions futures)
│
├── tests/
│   ├── unit/
│   └── e2e/
│
├── dist/
├── tmp/
├── logs/
│
├── MANIFEST.in
├── MANIFEST.rst
├── tsconfig.json
├── package.json
└── README.rst
```

### Notes
```text
- Le dossier tools/ est généré automatiquement.
- Aucun fichier temporaire n’est versionné.
- dist/, tmp/, logs/ sont exclus du packaging.
```
