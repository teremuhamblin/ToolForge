ToolForge — MANIFEST
====================

Description
-----------
Ce manifeste définit les fichiers inclus dans la distribution ToolForge.
Objectif : fournir un générateur minimaliste, stable et reproductible.

Contenu inclus
--------------

- README.rst
- MANIFEST.rst
- LICENSE

Répertoires
-----------

Scripts
~~~~~~~
Chemin : src/scripts/

- create-tool.ts : générateur automatique de modules

Tools
~~~~~
Chemin : src/tools/

Contient les modules générés automatiquement :

- <toolName>.vue
- <toolName>.service.ts
- <toolName>.service.test.ts
- <toolName>.e2e.spec.ts
- index.ts

Tests
~~~~~
Chemin : tests/

- Tests unitaires Vitest
- Tests E2E Playwright

Exclusions
----------

Les fichiers suivants sont exclus :

- *.log
- *.tmp
- dist/
- tmp/
- logs/

Objectif opérationnel
---------------------
Assurer un packaging propre, minimaliste, stable et compatible avec les environnements techniques modernes.
