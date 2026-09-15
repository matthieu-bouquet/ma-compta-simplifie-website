---
title: Facturation
description: Émettre des factures PDF, configurer le logo, et lier une créance client (411) à la compta.
---

Le module **Factures** permet d’émettre des factures pour vos stages, démos ou prestations, de télécharger un **PDF**, et éventuellement d’enregistrer une **créance client** (compte **411**) dans la comptabilité.

Accès : menu latéral → **Factures** (`/factures`).

## Prérequis

- Une **entité** et un **exercice ouvert**.
- Fiche entité complète pour l’émetteur (voir [Configuration d’entité](../configuration/entite/)) :
  - **Nom**, **adresse**, **code postal**, **ville**
  - **SIRET** ou **numéro RNA**
  - **Logo** (recommandé) : PNG, JPG ou WEBP, affiché sur le PDF

Sans adresse et SIRET/RNA, l’émission est refusée.

## Créer une facture — pas à pas

1. Ouvrez **Factures**.
2. Cliquez sur **Nouvelle facture**.
3. Renseignez le **destinataire** :
   - Choisissez un **client (tiers)** existant, ou créez-en un via **Nouveau client**.
   - Complétez le **nom affiché** et, si besoin, adresse, e-mail, SIRET du destinataire (portés sur le PDF).
4. Indiquez la **date de facture** et la **date d’échéance**.
5. Ajoutez une ou plusieurs **lignes** :
   - Description
   - Quantité et/ou prix unitaire TTC (le montant peut être calculé)
   - Montant TTC
   - **Compte produit** (classe **7**)
6. Optionnel : cochez **Envoyer en compta (créance client, non réglée)** pour créer tout de suite l’écriture 411.
7. Validez : la facture est **émise** (numéro attribué, PDF disponible).

### Numérotation

Chaque facture reçoit un numéro du type **`AAAA-NNNN`** (année de la date de facture + séquence sur l’exercice), par ex. `2026-0001`. La numérotation est **incrémentale** et **définitive**.

:::caution
Une facture émise n’est **ni modifiable ni supprimable**. En cas d’erreur, il faudra émettre un **avoir** (fonctionnalité à venir).
:::

## Liste des factures

Sur l’écran **Factures**, pour chaque ligne :

| Colonne / action | Rôle |
|------------------|------|
| **N°**, date, destinataire, montant TTC | Identification |
| **Compta** | Badge *En compta* ou *Hors compta* |
| Icône **livre** | Envoyer en compta a posteriori (client obligatoire, exercice ouvert) |
| Icône **téléchargement** | Télécharger le **PDF** |

## Lien avec la comptabilité

Si vous envoyez la facture en compta (à l’émission ou depuis la liste) :

- Le compte **411** (Clients) est **débité** du total TTC.
- Les comptes **produits (classe 7)** choisis sur les lignes sont **crédités**.
- L’écriture représente une **créance non réglée**.

Pour enregistrer le paiement ensuite, utilisez le mode **Règlement / Encaissement** → **Encaissement client** en [saisie](./lignes-comptables/).

## Contenu du PDF

Le PDF inclut notamment :

- Logo et coordonnées de l’**émetteur** (entité)
- Destinataire, numéro, dates, lignes et total TTC
- Mentions légales (conditions de règlement, pénalités de retard)
- Si l’entité n’est **pas** assujettie à la TVA : mention *« TVA non applicable, art. 293 B du CGI »*

## Bonnes pratiques

- Vérifiez l’entité (adresse, SIRET/RNA, logo) **avant** la première facture.
- Choisissez le bon **compte produit** (ex. `706` prestations, `756` cotisations selon le cas).
- Liez systématiquement un **client** si vous voulez passer en compta.
- Conservez les PDF émis (téléchargement) pour vos archives.
