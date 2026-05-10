---
title: Grand livre
description: Consulter toutes les écritures de l’exercice et exporter vers CSV ou PDF TVA.
---

Le **Grand livre** rassemble **toutes les écritures** de l’exercice sélectionné : chaque ligne du tableau correspond à une ligne comptable (débit ou crédit sur un compte).

## Accès

Utilisez l’entrée **Grand livre** dans le menu latéral de l’application (icône représentant un document).

Pour voir des écritures, une **entité** doit être active et un **exercice** doit exister. Le même **choix d’exercice** que pour la saisie ou le tableau de bord s’applique ici : les données affichées correspondent à cet exercice.

## Ce que vous voyez à l’écran

Le titre rappelle **l’année** de l’exercice affiché.

Le tableau liste les écritures **du plus récent au plus ancien**. Pour chaque écriture vous retrouvez :

- la **date** ;
- le **journal** (code court affiché à côté du nom du journal) ;
- le **libellé** ;
- pour **chaque ligne** de l’écriture : le **compte** (numéro et libellé), le montant au **débit** et au **crédit** (en euros).

Une même pièce peut occuper plusieurs lignes dans le tableau : les lignes se suivent et partagent la même date, le même journal et le même libellé.

---

## Exports disponibles

Les boutons se trouvent **au-dessus** du tableau.

### Export CSV — tout le grand livre

Le bouton **Exporter CSV** télécharge un fichier **tableur** contenant **l’ensemble des lignes** du grand livre de l’exercice affiché.

Le fichier est adapté à **Excel**, **LibreOffice Calc** ou tout tableur compatible CSV : vous y retrouvez notamment la date, le journal, le **numéro de pièce** lorsqu’il est renseigné, le libellé, le compte, les montants débit et crédit.

### Si vous êtes assujetti à la TVA

Lorsque l’entité est déclarée **assujettie à la TVA**, deux actions supplémentaires apparaissent :

1. **Exporter CSV (comptes TVA)**  
   Même principe que l’export complet, mais **uniquement les lignes** qui portent sur les **comptes de TVA** du plan (TVA déductible et TVA collectée). Utile pour isoler les mouvements de TVA sans le reste du grand livre.

2. **État TVA (PDF)**  
   Ouvre une petite fenêtre où vous choisissez une **date de début** et une **date de fin** (les deux doivent rester **à l’intérieur** de l’exercice affiché). Après validation, un **document PDF** est généré : il présente un **état récapitulatif de la TVA** sur la période choisie. Vous pouvez l’enregistrer ou l’imprimer selon vos besoins (contrôle interne, préparation de déclaration, archivage).

---

## Bonnes pratiques

- Vérifiez que le **bon exercice** est sélectionné avant d’exporter, pour éviter d’archiver le mauvais fichier.
- Pour la TVA, utilisez le **CSV comptes TVA** pour analyser les flux dans un tableur, et le **PDF** pour une vision synthétique sur une période précise.
