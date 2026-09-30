ToolForge
=========

- Générateur minimaliste de modules
- TypeScript pour projets techniques.

Badges
======

ToolForge (Yellow Tactical)
---------------------------

.. image:: https://img.shields.io/badge/Status-Active-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/Build-Passing-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/License-Blue_Oak_1.0.0-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/TypeScript-Ready-FFFF00?style=for-the-badge
.. image:: https://img.shields.io/badge/Tools-Auto_Generator-FFFF00?style=for-the-badge

Objectif
========

Créer automatiquement un dossier d’outil complet *(Vue, service, tests, E2E, index)*.

Usage
=====

Commande :

``npm run create-tool <nom-du-tool>``

Exemple :

``npm run create-tool hash-generator``

Structure générée
=================

Manifests
=========

ToolForge inclut deux fichiers de manifeste assurant un packaging propre et contrôlé :

- ``MANIFEST.in`` : définit précisément les fichiers inclus dans le paquet  
  (scripts, tools, sources TypeScript, composants Vue, tests, licence, documentation).

- ``MANIFEST.rst`` : documentation du contenu du paquet, décrivant les répertoires,
  les fichiers générés automatiquement et les exclusions (logs, fichiers temporaires,
  artefacts de compilation).

Ces deux fichiers garantissent une distribution stable, minimale et adaptée aux
environnements techniques modernes.

Dossier : ``src/tools/<toolName>/``

- ``<toolName>.vue``
- ``index.ts``
- ``<toolName>.service.ts``
- ``<toolName>.service.test.ts``
- ``<toolName>.e2e.spec.ts``

Licence
=======

*Blue Oak Model License 1.0.0*
