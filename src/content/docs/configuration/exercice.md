---
title: Ajout d’exercice
description: Créer un exercice comptable, initialiser les soldes de départ et comprendre la notion de période.
---

Un **exercice** définit la période sur laquelle vous enregistrez vos écritures (dates de début et de fin).

## Création d’un exercice

À partir de la liste des exercices, indiquez les **dates de début et de fin** et l’**entité** concernée. À la création, l’application :

- duplique le **plan comptable** (modèle association ou entreprise / TPE selon la forme juridique de l’entité) pour cet exercice ;
- ouvre l’exercice avec le statut approprié pour permettre la saisie.

Vous ne pouvez pas créer deux exercices **strictement identiques** (même entité, mêmes dates début et fin).

## Soldes de départ (trésorerie — classe 5)

Les soldes d’ouverture concernent vos **comptes banque et caisse**. Configurez-les dans l’écran de **configuration de l’exercice**, section **Moyens de paiement** (après avoir ouvert l’exercice depuis la liste).

### Ajouter un compte de paiement

Lorsque vous **ajoutez** un compte (numéro, libellé) avec un **solde initial strictement positif** :

- Une écriture d’**A-nouveau** est créée automatiquement à la **date d’ouverture** de l’exercice.
- Le solde est porté au **débit** du compte banque ou caisse et au **crédit** d’un **compte de report** (numéro 890), uniquement pour équilibrer cette écriture d’ouverture.

### Modifier le solde de départ

Pour un compte de paiement déjà présent, vous pouvez **éditer** le montant du solde de départ dans le tableau :

- Si le solde passe à **0**, l’écriture d’A-nouveau associée est **supprimée**.
- Si le solde est **modifié**, les montants de l’écriture existante sont **mis à jour** en restant équilibrés avec le compte de report.

:::caution
Un exercice **clôturé** ne permet plus de modifier cette configuration ni d’ajouter des moyens de paiement.
:::

## Avant de commencer

- Vérifiez que l’entité est créée.
- Le plan comptable est issu du modèle ; complétez-le si besoin depuis la configuration du plan.

## Bonnes pratiques

- Créez l’exercice dès le démarrage de l’année (ou de votre période) pour éviter la saisie « hors période ».
- Gardez une seule période « ouverte » si votre fonctionnement le permet.
- Saisissez les soldes bancaires / caisse réels à l’ouverture pour que la trésorerie reflète votre situation dès le premier jour.
