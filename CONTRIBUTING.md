# ToolForge — CONTRIBUTING

## Objectif
Ce document définit les règles de contribution au projet ToolForge.  
Il garantit discipline, cohérence et stabilité technique.

---

## Branches
- `main` : branche de production.
- `docs-dev` : branche de documentation, structure, architecture et mises à jour internes.

Toutes les contributions doivent passer par une Pull Request vers `docs-dev`.

---

## Processus de contribution

### 1. Créer une issue
Avant toute modification :
- Décrire clairement le besoin.
- Lister les fichiers concernés.
- Définir l’objectif opérationnel.
- Associer le milestone approprié.

### 2. Créer une branche
Nom standard :
- `feature/<nom>`
- `fix/<nom>`
- `docs/<nom>`
- `ops/<nom>`

### 3. Développer
Respecter :
- la structure définie dans STRUCTURE.md
- l’architecture définie dans ARCHITECTURE.md
- les règles du générateur create-tool.ts
- les exclusions définies dans MANIFEST.in

### 4. Tests
Avant toute PR :
- `npm run check:types`
- `npm test`
- `npm run test:e2e`
- Vérifier la génération d’un module via create-tool.ts

### 5. Pull Request
La PR doit :
- décrire les modifications
- lister les fichiers modifiés
- valider la checklist du PULL_REQUEST_TEMPLATE.yml
- être alignée sur ToolForge v1.1.0

---

## Style de code
- TypeScript strict
- Structure modulaire
- Aucun fichier inutile
- Documentation obligatoire pour toute modification structurelle

---

## Sécurité
- Aucun secret dans le dépôt
- `npm audit` obligatoire
- Respect strict des exclusions du MANIFEST

---

## Validation
Une PR est validée lorsque :
- les tests sont verts
- la structure est conforme
- la documentation est mise à jour
- la sécurité est validée
