---
title: Configuration d’entité
description: Créer et gérer l’entité (entreprise ou association) pour laquelle vous tenez la comptabilité.
---

Une **entité** représente l’organisation pour laquelle vous tenez la comptabilité (entreprise ou association). C’est le premier élément à configurer : sans entité, vous ne pouvez pas créer d’exercice ni saisir d’écritures.

## Quand configurer une entité ?

- Au **premier lancement** de l’application, avant de créer un exercice.
- Lorsque vous gérez **plusieurs organisations** (chaque entité a son propre plan comptable, ses exercices et sa comptabilité).

## Créer une entité — pas à pas

1. Ouvrez **Paramètres → Entités**.
2. Cliquez sur **Créer une entité**.
3. Renseignez les champs du formulaire (voir ci-dessous).
4. Validez : la nouvelle entité devient en général **l’organisation active** dans l’application.

### Champs du formulaire

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Nom** | Oui | Nom affiché de l’organisation (ex. « Association Les Archers »). |
| **SIRET** | Non | Identifiant unique si renseigné ; utile pour les documents officiels. |
| **Forme juridique** | Non | Association, SAS, EURL, etc. Détermine le **modèle de plan comptable** proposé à la création d’exercice (association vs entreprise/TPE). |
| **Autre (préciser)** | Si « Autre » | Précision libre lorsque la forme juridique n’est pas dans la liste. |
| **Assujetti à la TVA** | Non | Case à cocher — voir section dédiée ci-dessous. |
| **Adresse, code postal, ville** | Non | Coordonnées postales (utiles pour les éditions). |
| **E-mail, téléphone** | Non | Contact de l’entité. |

:::tip
Utilisez un **nom explicite** si vous gérez plusieurs entités : c’est ce nom qui apparaît dans les listes et les sélecteurs.
:::

## Assujetti à la TVA

La case **« Assujetti à la TVA »** indique que l’entité est assujettie à la TVA (**hors franchise en base**). Ce choix modifie le comportement de la saisie guidée.

### Si la case est cochée

- L’application s’assure que les comptes de TVA (**44566** déductible, **44571** collectée) sont disponibles dans le plan.
- En mode **Dépense / recette**, vous pouvez saisir un **montant TTC** et un **taux de TVA** (ex. 20 %, 10 %, 5,5 %).
- L’application calcule et affiche la ventilation **HT / TVA**, puis crée automatiquement les lignes :
  - **Dépense payée** : charge (HT) + TVA déductible (44566) au débit ; banque/caisse (TTC) au crédit.
  - **Dépense à crédit** : charge (HT) + TVA déductible au débit ; fournisseur 401 (TTC) au crédit.
  - **Recette encaissée** : banque/caisse (TTC) au débit ; produit (HT) + TVA collectée (44571) au crédit.
  - **Recette à crédit** : client 411 (TTC) au débit ; produit (HT) + TVA collectée au crédit.
- Les exports **grand livre TVA** (CSV) et **état TVA** (PDF) deviennent disponibles.

### Si la case n’est pas cochée

- Pas de ventilation TVA automatique à la saisie (montant simple, sans taux).
- Convient si vous êtes en **franchise en base**, exonéré, ou sans TVA selon votre situation.

### Modifier le choix plus tard

Vous pouvez cocher ou décocher **Assujetti à la TVA** à tout moment dans la fiche de l’entité (**Paramètres → Entités → modifier**). Les écritures déjà saisies ne sont pas recalculées automatiquement.

:::caution
En cas de doute sur votre régime de TVA, rapprochez-vous de votre expert-comptable ou de l’administration fiscale avant d’activer cette option.
:::

## Ce que vous pouvez faire ensuite

- **Consulter** une entité (détails, statut TVA, coordonnées).
- **Modifier** les informations à tout moment (sauf contraintes liées aux données déjà saisies).
- **Supprimer** une entité — à éviter si elle possède déjà des exercices avec des écritures.

## Lien avec le reste de la configuration

Après avoir créé l’entité :

1. Vérifiez le [plan comptable](./plan-comptable/) (modèle association ou TPE selon la forme juridique).
2. [Créez un exercice](./exercice/) et initialisez les [soldes de départ](./exercice/#soldes-de-départ-trésorerie--classe-5).
3. Commencez la [saisie comptable](../saisie/lignes-comptables/).
