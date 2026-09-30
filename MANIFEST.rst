ToolForge — MANIFEST
====================

Description
-----------
Ce manifeste décrit les fichiers inclus dans le paquet ToolForge.
Objectif : fournir un générateur minimaliste de modules Vue + TypeScript
pour projets techniques, avec scripts, services, tests et structure complète.

Contenu inclus
--------------

- ``LICENSE`` — Blue Oak Model License 1.0.0
- ``README.rst`` — Documentation principale du projet

Répertoires
-----------

Scripts
~~~~~~~
Chemin : ``src/scripts/``

Contient les scripts internes, dont :

- ``create-tool.ts`` — Générateur automatique de modules/tools

Tools
~~~~~
Chemin : ``src/tools/``

Contient les outils générés automatiquement :

- ``<toolName>.vue`` — Composant Vue 3
- ``index.ts`` — Déclaration du tool
- ``<toolName>.service.ts`` — Service associé
- ``<toolName>.service.test.ts`` — Tests unitaires Vitest
- ``<toolName>.e2e.spec.ts`` — Tests E2E Playwright

Exclusions
----------

Les fichiers suivants sont exclus du paquet :

- ``*.log``
- ``*.tmp``
- ``*.tsbuildinfo``

Objectif opérationnel
---------------------

Assurer un packaging propre, stable, reproductible,
compatible avec les environnements techniques modernes.
