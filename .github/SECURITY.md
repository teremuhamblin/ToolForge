# ToolForge — SECURITY POLICY

## Objectif
Garantir la sécurité du projet ToolForge, de son générateur et de sa structure interne.

---

## Signalement d’une vulnérabilité
Toute vulnérabilité doit être signalée via une issue privée ou un canal direct.  
Ne jamais publier publiquement une faille non corrigée.

Le rapport doit inclure :
- description précise
- fichiers concernés
- étapes de reproduction
- impact potentiel

---

## Vulnérabilités concernées
- exécution non contrôlée dans create-tool.ts
- génération de fichiers non conformes
- dépendances vulnérables
- configuration TypeScript non sécurisée
- scripts non isolés
- fichiers sensibles inclus dans le packaging

---

## Ce qui n’est pas une vulnérabilité
- erreurs visuelles
- problèmes mineurs de documentation
- comportements attendus du générateur

---

## Processus de correction
1. Analyse du rapport  
2. Reproduction du problème  
3. Correctif en branche dédiée  
4. Mise à jour de STRUCTURE.md / ARCHITECTURE.md si nécessaire  
5. Mise à jour du MANIFEST si impact sur le packaging  
6. Tests unitaires + E2E  
7. Publication d’un patch via PR

---

## Sécurité du packaging
Respect strict du MANIFEST.in :
- exclusion de dist/, tmp/, logs/
- exclusion des fichiers temporaires
- inclusion uniquement des fichiers nécessaires

---

## Sécurité du générateur
Le script create-tool.ts doit :
- éviter les injections
- valider les noms de modules
- générer des fichiers stricts et conformes
