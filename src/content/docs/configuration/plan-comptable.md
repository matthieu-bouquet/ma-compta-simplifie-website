---
title: Plan comptable
description: Comprendre, personnaliser et parcourir le plan comptable de l’application.
---

Le **plan comptable** liste les **comptes** (numéro + libellé) utilisés pour la saisie, les éditions et les exports. Chaque compte appartient à une **classe** (1 à 8) selon le Plan Comptable Général (PCG) et, pour les associations, la nomenclature **ANC 2018-06**.

## Deux modèles selon l’entité

À la création d’un exercice, l’application copie le plan de l’entité. Le modèle dépend de la **forme juridique** :

| Modèle | Quand ? | Comptes (défaut) |
|--------|---------|------------------|
| **Association** | Association, fondation, etc. | **185 comptes** — PCG + comptes spécifiques associations (legs, dons, fonds dédiés, classe 8 CVN) |
| **Entreprise / TPE** | SAS, EURL, micro-entreprise, etc. | **73 comptes** — périmètre PCG utile aux petites structures |

Consultez le détail de chaque compte :

- [Plan comptable — modèle Association](./plan-comptable-association/)
- [Plan comptable — modèle Entreprise / TPE](./plan-comptable-tpe/)

## Classes de comptes (rappel)

| Classe | Nature | Exemples |
|--------|--------|----------|
| **1** | Capitaux, fonds propres, emprunts | 101 Capital, 102 Fonds propres, 110 Report à nouveau |
| **2** | Immobilisations | 211 Terrains, 2183 Matériel informatique |
| **3** | Stocks | *(absent des modèles par défaut)* |
| **4** | Tiers | 401 Fournisseurs, 411 Clients, 44566/44571 TVA |
| **5** | Financiers (trésorerie) | 512 Banque, 530 Caisse |
| **6** | Charges | 6064 Fournitures, 6411 Salaires |
| **7** | Produits | 706 Prestations, 754 Dons, 756 Cotisations |
| **8** | Contributions volontaires en nature | 864 Personnel bénévole, 875 Bénévolat *(association)* |
| **9** | Comptes analytiques | *(absent des modèles par défaut)* |

## Compte spécial 890 — solde d’ouverture

Le compte **890** (*Opening balance*) n’est **pas** dans les modèles. Il est créé **automatiquement** par exercice lorsque vous renseignez un [solde de départ](../exercice/#soldes-de-départ-trésorerie--classe-5) sur un compte banque ou caisse. Il sert de **contrepartie technique** pour équilibrer l’écriture d’A-nouveau.

## Personnaliser le plan

Depuis **Paramètres → Plan comptable** (au niveau de l’entité) :

- **Ajouter** un compte (numéro + libellé).
- **Modifier** le libellé d’un compte existant.
- **Supprimer** un compte non utilisé.

Les comptes ajoutés sont repris lors de la création des **prochains exercices**. Les exercices déjà ouverts conservent leur copie du plan telle qu’elle était à la création (sauf comptes ajoutés manuellement à l’exercice).

:::tip
Évitez de multiplier les comptes inutilement : un plan simple accélère la saisie et clarifie les éditions.
:::

## Comptes utilisés par la saisie guidée

| Fonctionnalité | Comptes concernés |
|----------------|-------------------|
| Dépense payée / à crédit | Classe **6** + **512/530** ou **401** |
| Recette encaissée / à crédit | Classe **7** + **512/530** ou **411** |
| Virement | Deux comptes classe **5** |
| TVA (si assujetti) | **44566**, **44571** |
| Règlement fournisseur | **401** + trésorerie |
| Encaissement client | **411** + trésorerie |
| Solde d’ouverture trésorerie | Compte **5** + **890** |

## Recommandations

- Conservez une **logique stable** dans les libellés (« Achats fournitures », « Cotisations adhérents », etc.).
- Pour les associations, utilisez les comptes **754** (dons), **756** (cotisations) et la **classe 8** pour le bénévolat plutôt que des comptes génériques.
- Vérifiez la présence des comptes **401**, **411** et **5** avant de commencer la saisie.
