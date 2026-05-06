---
title: Sauvegarde & restauration
description: Exporter une sauvegarde (données + documents) et restaurer au même format.
---

L’application propose un écran dédié dans **Paramètres → Sauvegarde**.

## Sauvegarde (export)

### Ce que l’export contient

Quand vous exportez, l’application génère un **fichier ZIP** qui contient :

- un fichier `manifest.json` avec notamment :
  - `version: 1`
  - `exportedAt`
  - la sélection (`associationIds`, `fiscalYearIds`, `budgetIds`)
- des fichiers JSON dans `data/` :
  - `data/associations.json`
  - `data/fiscalYears.json`
  - `data/journals.json`
  - `data/accounts.json`
  - `data/journalSequences.json`
  - `data/entries.json`
  - `data/entryLines.json`
  - `data/documents.json`
  - `data/documentEntryLines.json`
  - `data/inKindContributions.json`
  - `data/budgets.json` (si vous incluez un prévisionnel)
  - `data/budgetLines.json` (si vous incluez un prévisionnel)
- les **fichiers justificatifs** (si présents) dans :
  - `files/<associationId>/<fiscalYearId>/<storedName>`

### Ce que vous choisissez

L’export fonctionne par **sélection** :

- un ou plusieurs **exercices**
- et/ou un ou plusieurs **prévisionnels**

Le fichier téléchargé s’appelle `sauvegarde_YYYYMMDD.zip`.

## Restauration (import)

La restauration se fait en 2 phases :

1. **Analyser** la sauvegarde (aperçu + détection des conflits)
2. **Importer** (appliquer), avec des options d’écrasement si nécessaire

### Analyse (preview)

Lors de l’analyse, l’app vérifie notamment :

- que `manifest.json` existe et que `version === 1`
- un résumé des éléments détectés (entités, exercices, prévisionnels, documents)
- des **conflits** possibles avec la base existante :
  - **entités** : match par **SIRET** si présent, sinon par (nom + code postal + ville) en comparant de façon insensible à la casse
  - **exercices** : conflit si même `associationId` + **mêmes dates** (début/fin)
  - **prévisionnels** : conflit si même **id**, ou si même `associationId` + même `name` (trim + insensible à la casse)

### Import (apply) et “écrasement”

Au moment d’importer, vous pouvez décider d’**écraser** certains éléments déjà présents :

- entités (`overwriteAssociationIds`)
- exercices (`overwriteFiscalYearIds`)
- prévisionnels (`overwriteBudgetIds`)

Si vous cochez un écrasement, l’app supprime d’abord les lignes existantes concernées, puis restaure celles du ZIP.

### Documents (justificatifs)

Les documents sont restaurés sur le stockage local au chemin logique :

- `uploads/<associationId>/<fiscalYearId>/<storedName>`

## Bonnes pratiques et précautions

- **Faites une sauvegarde avant d’importer** si vous comptez écraser des données.
- Le format est versionné (`manifest.version`). Une sauvegarde trop ancienne/nouvelle peut être **refusée** si la version n’est pas supportée.
- Une sauvegarde contient potentiellement des **données sensibles** et des pièces justificatives : stockez-la et partagez-la avec précaution.

