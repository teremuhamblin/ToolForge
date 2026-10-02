ToolForge
=========

🛠️ Générateur minimaliste de modules  
⚙️ Basé sur TypeScript pour projets techniques  
🎯 Conçu pour produire automatiquement des outils Vue + services + tests

Badges
======

ToolForge — Yellow Tactical
---------------------------

.. image:: https://img.shields.io/badge/Status-Active-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/Build-Passing-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/License-Blue_Oak_1.0.0-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/TypeScript-Ready-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/Tools-Auto_Generator-FFFF00?style=for-the-badge

Objectif 🎯
===========

Créer automatiquement un dossier d’outil complet :

- 🧩 Composant Vue  
- 🔧 Service interne  
- 🧪 Tests unitaires  
- 🚀 Tests E2E  
- 📦 Index d’importation automatique

Usage ⚙️
========

Commande :

``npm run create-tool <nom-du-tool>``

Exemple :

``npm run create-tool hash-generator``

Structure générée 📁
====================

Dossier : ``src/tools/<toolName>/``

- ``<toolName>.vue`` — 🧩 composant Vue 3  
- ``index.ts`` — 📦 export du module  
- ``<toolName>.service.ts`` — 🔧 logique interne  
- ``<toolName>.service.test.ts`` — 🧪 tests unitaires  
- ``<toolName>.e2e.spec.ts`` — 🚀 tests end‑to‑end

Manifests 📦
============

ToolForge inclut deux fichiers de manifeste assurant un packaging propre et contrôlé :

- ``MANIFEST.in``  
  📌 Définit précisément les fichiers inclus dans le paquet :  
  scripts, tools, sources TypeScript, composants Vue, tests, licence, documentation.

- ``MANIFEST.rst``  
  📘 Documente le contenu du paquet :  
  répertoires, fichiers générés automatiquement, exclusions (logs, temporaires, artefacts de build).

Ces deux fichiers garantissent :

- 🔒 une distribution stable  
- 🪶 un paquet minimal  
- 🛡️ une compatibilité avec les environnements techniques modernes

Licence 📜
==========

*Blue Oak Model License 1.0.0*
