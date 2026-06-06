---
title: Ajout d’exercice
description: Créer un exercice comptable, initialiser les soldes de départ et comprendre la notion de période.
---

Un **exercice** définit la **période comptable** sur laquelle vous enregistrez vos écritures (date de début et date de fin). Toute saisie doit porter une date comprise dans cette période.

## Prérequis

- Au moins une **entité** créée ([configuration d’entité](./entite/)).
- Le **plan comptable** de l’entité vérifié ([plan comptable](./plan-comptable/)).

## Créer un exercice — pas à pas

1. Allez dans **Exercices** (menu principal).
2. Cliquez sur **Nouvel exercice** (ou équivalent depuis la liste).
3. Renseignez :
   - **Entité** : l’organisation concernée.
   - **Date de début** : premier jour de l’exercice (ex. 1ᵉʳ janvier 2026).
   - **Date de fin** : dernier jour (ex. 31 décembre 2026).
4. Validez la création.

### Ce que fait l’application à la création

- **Duplique le plan comptable** de l’entité pour cet exercice (modèle association ou entreprise/TPE selon la forme juridique).
- Ouvre l’exercice avec le statut **OUVERT**, ce qui autorise la saisie et la configuration.
- Propose par défaut une période calendaire (1ᵉʳ janvier → 31 décembre de l’année en cours).

### Contraintes

- Vous ne pouvez pas créer deux exercices **strictement identiques** (même entité, mêmes dates début et fin).
- La date de fin doit être **postérieure** à la date de début.

:::tip
Créez l’exercice **dès le démarrage** de votre année comptable pour éviter toute saisie « hors période ».
:::

## Soldes de départ (trésorerie — classe 5)

Les soldes d’ouverture concernent vos **comptes banque et caisse** (classe 5). Ils représentent l’argent réellement disponible au **premier jour** de l’exercice.

### Où les configurer ?

1. Depuis la liste des exercices, ouvrez l’exercice créé.
2. Accédez à l’écran de **configuration de l’exercice**.
3. Section **Moyens de paiement (classe 5)**.

### Ajouter un compte de paiement

Remplissez le formulaire **Ajouter un moyen de paiement** :

| Champ | Exemple | Description |
|-------|---------|-------------|
| **Numéro de compte** | `512` ou `5121` | Numéro du compte banque/caisse dans le plan (classe 5). |
| **Nom** | `Crédit Agricole` | Libellé lisible pour vous retrouver. |
| **Solde initial à l’ouverture (€)** | `1 250,00` | Montant disponible sur ce compte à la date d’ouverture. |

Cliquez sur **Ajouter et initialiser**.

#### Écriture d’A-nouveau automatique

Si le solde initial est **strictement supérieur à 0**, l’application crée automatiquement une écriture d’**A-nouveau** à la **date d’ouverture** de l’exercice :

| Compte | Débit | Crédit | Rôle |
|--------|-------|--------|------|
| **512** Banque (ou caisse) | 1 250,00 € | — | Solde réel à l’ouverture |
| **890** Opening balance | — | 1 250,00 € | Contrepartie technique d’équilibre |

Le compte **890** n’apparaît pas dans le modèle de plan : il est créé automatiquement pour cet exercice lors du premier solde d’ouverture.

### Exemple complet

Vous démarrez l’exercice 2026 avec :

- **512** Banque principale : 3 400,00 €
- **530** Caisse : 85,00 €

Ajoutez chaque compte avec son solde. L’application génère deux écritures d’A-nouveau (ou une écriture multi-lignes selon le cas) pour porter ces montants.

### Modifier le solde de départ

Dans le tableau **Moyens de paiement configurés**, éditez le montant du **solde de départ** :

- Solde passé à **0** → l’écriture d’A-nouveau associée est **supprimée**.
- Solde **modifié** → les montants de l’écriture existante sont **mis à jour** (toujours équilibrés avec le compte 890).

### Pourquoi seulement la trésorerie ?

Les soldes d’ouverture des comptes de **charges (6)**, **produits (7)** et **tiers (4)** se construisent au fil des saisies ou via des écritures en **saisie avancée**. L’assistant se concentre sur la trésorerie car c’est le point de départ le plus fréquent à l’ouverture d’un exercice.

:::caution
Un exercice **clôturé** ne permet plus de modifier les moyens de paiement ni les soldes de départ.
:::

## Après la création

1. Vérifiez que vos comptes banque/caisse ont les bons soldes.
2. Complétez le plan si besoin (**Paramètres → Plan comptable**).
3. Passez à la [saisie de lignes comptables](../saisie/lignes-comptables/).

## Bonnes pratiques

- Gardez **une seule période ouverte** à la fois si votre fonctionnement le permet.
- Saisissez les soldes bancaires **réels** (relevé au jour de l’ouverture) pour que la trésorerie soit juste dès le premier jour.
- Créez un compte distinct par moyen de paiement (ex. `512` banque courante, `5122` livret) si vous en avez plusieurs.
