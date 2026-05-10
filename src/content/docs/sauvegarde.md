---
title: Sauvegarde & restauration
description: Exporter ou importer une sauvegarde complète (données et pièces jointes).
---

L’écran **Sauvegarde** se trouve dans **Paramètres → Sauvegarde**. Il permet de **télécharger** une copie de vos données et des **justificatifs** associés, puis éventuellement de **réimporter** ce fichier sur cette installation ou une autre machine utilisant l’application.

---

## Exporter une sauvegarde

### Ce que vous choisissez

Pour chaque **entité**, vous disposez d’une liste déroulante (repliable) avec :

- les **exercices** (dates début → fin, avec une indication **Ouvert** ou **Clôturé**) ;
- le cas échéant, les **prévisionnels** de cette entité.

Des cases à cocher permettent de sélectionner finement les exercices et prévisionnels souhaités. En haut de la liste, **Tout** permet de tout prendre d’un coup ; vous pouvez aussi cocher une **entité entière** pour inclure tous ses exercices et prévisionnels listés.

Au-dessus du tableau, trois compteurs rappellent combien d’**entités**, d’**exercices** et de **prévisionnels** sont inclus dans la sélection.

Il faut au minimum **un exercice** ou **un prévisionnel** coché pour pouvoir lancer l’export.

### Contenu du fichier

Le bouton **Télécharger la sauvegarde** enregistre un fichier **ZIP** sur votre ordinateur, nommé avec la **date du jour** (`sauvegarde_YYYYMMDD.zip`).

Ce fichier regroupe :

- une **liste des éléments exportés** et une **date d’export** ;
- l’ensemble des **données comptables** nécessaires pour retrouver vos exercices sélectionnés : entités (dont statut TVA, forme juridique, etc.), exercices, plan comptable de chaque exercice, journaux, numérotation des pièces, écritures et lignes, documents et liens entre pièces et lignes, **dons en nature** le cas échéant ;
- les **tiers** (clients et fournisseurs) des entités concernées, ainsi que les **répartitions de règlements** (liaisons entre paiements et lignes de factures ouvertes), indispensables si vous utilisez les flux fournisseurs / clients ;
- les **prévisionnels** et leurs lignes si vous les avez inclus ;
- les **fichiers justificatifs** eux-mêmes (copiés dans le ZIP), rangés par entité et par exercice.

Si vous exportez uniquement des **prévisionnels** sans exercice, l’application ajoute quand même les **entités** nécessaires pour que la restauration soit cohérente.

---

## Importer une sauvegarde

L’import utilise **le même format ZIP** que l’export.

### Étapes

1. Choisissez le fichier **ZIP** sur votre machine.
2. Cliquez sur **Analyser** : l’application lit le fichier et affiche un **résumé** (nombre d’entités, d’exercices, de prévisionnels, de **documents**, de **tiers** détectés).
3. Si des **doublons** existent déjà dans votre base locale par rapport au fichier, ils sont listés comme **conflits**. Pour chaque type de conflit, vous pouvez cocher **Écraser** pour remplacer les données existantes par celles de la sauvegarde :
   - **Entités** : même **SIRET** si renseigné, sinon même nom + code postal + ville (sans tenir compte des majuscules) ;
   - **Exercices** : même entité et **mêmes dates** de début et de fin ;
   - **Prévisionnels** : soit le même identifiant interne, soit **même entité et même nom** de prévisionnel (sans tenir compte des majuscules).
4. Cliquez sur **Importer** pour appliquer la restauration.

Si vous activez au moins un **écrasement**, une **confirmation** vous rappelle que l’opération est **irréversible** avant de poursuivre.

Sans conflit, l’import peut se lancer directement après l’analyse.

Les **documents** sont replacés dans l’emplacement de stockage utilisé par l’application sur cet ordinateur.

### Version du fichier

Seuls les sauvegardes au **format attendu par la version actuelle** sont acceptées. Si le fichier est trop ancien ou incompatible, l’analyse affiche une erreur explicite et aucune donnée n’est modifiée.

---

## Bonnes pratiques

- **Exportez régulièrement**, surtout avant une mise à jour majeure ou un import.
- **Sauvegardez avant d’importer** si vous envisagez d’écraser des entités, exercices ou prévisionnels.
- Un fichier ZIP peut contenir des **données personnelles** et des **pièces confidentielles** : conservez-le dans un endroit sûr et ne le partagez qu’en connaissance de cause.
