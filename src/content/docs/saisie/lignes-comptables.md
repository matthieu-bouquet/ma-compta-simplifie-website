---
title: Saisie de lignes comptables
description: Parcours guidés (dépense, recette, trésorerie) et saisie avancée multi-lignes.
---

La **saisie comptable** enregistre vos opérations sous forme d’**écritures** (plusieurs lignes débit et crédit qui se compensent). En haut de l’écran, trois boutons permettent de choisir le mode de travail.

## Avant de saisir

- Une **entité** doit être sélectionnée.
- Un **exercice** doit être ouvert (non clôturé).
- Pour payer ou encaisser : au moins un **moyen de paiement** (banque ou caisse) doit être défini dans la configuration de l’exercice.

La **date** de l’opération doit se situer **dans la période de l’exercice** et **ne pas être dans le futur**.

## Les trois modes

| Mode | À quoi ça sert |
|------|----------------|
| **Dépense / recette** | Enregistrer vite une charge, un produit ou un virement entre vos comptes banque/caisse |
| **Règlement / Encaissement** | Régler une facture fournisseur ou encaisser une facture client en affectant le paiement aux bonnes lignes |
| **Saisie avancée** | Saisir une écriture à la main : plusieurs lignes, journal au choix, total débit égal au total crédit |

---

## Mode « Dépense / recette »

### Types d’opération

- **Dépense** : choisissez une **charge** (comptes qui commencent par **6**).
- **Recette** : choisissez un **produit** (comptes qui commencent par **7**).
- **Virement** : déplacez un montant d’un compte **banque ou caisse** vers un autre (même classe de comptes).

### Montant et TVA

Si l’entité est **assujettie à la TVA**, vous pouvez saisir un **montant TTC** et un **taux**. L’application affiche la répartition **HT / TVA** et crée les lignes nécessaires (charge ou produit, TVA, et trésorerie ou créance/dette selon le cas).

Si vous n’êtes pas assujetti, ou si le taux est à **0 %**, vous restez sur un **montant simple**, sans ventilation TVA automatique.

### « Facture déjà payée ? »

Pour une dépense ou une recette uniquement, cette question fixe si l’argent **sort ou entre tout de suite** sur votre banque/caisse, ou si vous **devez encore payer ou être payé** :

| | **Dépense** | **Recette** |
|---|-------------|-------------|
| **Oui** (déjà payée / déjà encaissée) | La charge est enregistrée avec la **sortie** sur banque ou caisse | La **entrée** sur banque ou caisse et le produit sont enregistrés ensemble |
| **Non** (dette ou créance) | La charge est enregistrée avec une **dette fournisseur** ; vous paierez plus tard dans **Règlement fournisseur** | Une **créance client** est enregistrée avec le produit ; vous encaisserez plus tard dans **Encaissement client** |

Pour une dépense ou recette **non réglée tout de suite**, choisissez un **fournisseur** ou un **client** (vous pouvez en créer un nouveau depuis le même écran). Le libellé peut reprendre le nom du tiers pour vous aider à vous retrouver.

### Pièces justificatives

Vous pouvez joindre des fichiers (PDF ou images). Ils sont associés à la ligne principale de l’opération (charge, produit ou ligne fournisseur/client selon le cas).

---

## Mode « Règlement / Encaissement »

Ce mode sert uniquement à **payer un fournisseur** ou **encaisser chez un client**, sans ressaisir la charge ou le produit : mouvement entre votre **banque ou caisse** et les comptes **fournisseurs** ou **clients**.

1. Choisissez **Règlement fournisseur** ou **Encaissement client**.
2. Indiquez le **tiers** et le **compte de trésorerie** utilisé.
3. Saisissez le **montant** du paiement ou de l’encaissement.
4. Le tableau affiche les **lignes encore ouvertes** avec le **reste à régler**. Répartissez le montant sur une ou plusieurs lignes : la **somme affectée doit égaler exactement** le montant du règlement ou de l’encaissement.

Utilisez le bouton **Enregistrer** prévu dans cet onglet (pas celui du formulaire utilisé pour les autres modes).

### Enchaînement habituel

En pratique, on enregistre souvent d’abord la **facture non payée** en mode Dépense ou Recette, puis, quand l’argent bouge réellement, on passe par **Règlement / Encaissement** pour solder la ligne correspondante.

---

## Mode « Saisie avancée »

Pour les cas qui ne passent pas par les assistants (écritures diverses, régularisations, opérations avec plusieurs comptes) :

1. Choisissez le **journal** adapté (banque, caisse, achats, ventes, opérations diverses, etc.).
2. Ajoutez **au moins deux lignes** en sélectionnant des comptes du plan.
3. Pour chaque ligne, indiquez soit le **débit**, soit le **crédit** (en général pas les deux sur la même ligne).
4. Le **total débit** doit égaler le **total crédit**.

Vous pouvez ajouter ou retirer des lignes et joindre des **justificatifs** pour toute l’écriture.

---

## À retenir

- Chaque écriture est **équilibrée** : les montants au débit et au crédit se compensent.
- On ne peut pas saisir si l’**exercice est clôturé**.
- Dès qu’un fournisseur ou un client est nécessaire, sélectionnez le bon **tiers** pour suivre correctement vos dettes et créances.

## Bonnes pratiques

- Si la facture n’est pas encore payée, utilisez **Non** à « Facture déjà payée ? », puis enregistrez le paiement dans **Règlement / Encaissement** lorsque l’argent est réellement parti ou reçu.
- Réservez la **saisie avancée** aux cas particuliers ; le mode Dépense / recette suffit pour le quotidien.
- Joignez les **justificatifs** au moment de la saisie pour constituer un dossier complet.
