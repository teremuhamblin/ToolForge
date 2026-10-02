# ToolForge — ARCHITECTURE v1.1.0

## Vision
ToolForge est un générateur minimaliste de modules techniques Vue + TypeScript,
incluant services, tests unitaires, tests E2E et index automatique.

## Composants principaux

### 1. Générateur (create-tool.ts)
- Crée un module complet dans src/tools/<toolName>/
- Génère :

```text
  - composant Vue
  - service interne
  - tests unitaires Vitest
  - tests E2E Playwright
  - index d’importation automatique
```

### 2. Scripts

```text
- create-tool : génération automatique
- test : tests unitaires
- test:e2e : tests Playwright
- check:types : validation TypeScript
- check:security : audit de sécurité
```

### 3. Configuration

```text
- tsconfig.json : strict, sécurisé, optimisé
- package.json : stable, minimaliste, militaire
- MANIFEST.in / MANIFEST.rst : packaging propre et contrôlé
```

### 4. Structure interne

```text
- src/scripts/ : scripts opérationnels
- src/tools/ : modules générés automatiquement
- tests/ : tests unitaires + E2E
- dist/ : artefacts de compilation
- tmp/, logs/ : dossiers techniques exclus
```

## Objectifs opérationnels

```text
- Génération rapide et fiable
- Structure reproductible
- Tests automatiques
- Packaging minimaliste
- Sécurité renforcée
```
