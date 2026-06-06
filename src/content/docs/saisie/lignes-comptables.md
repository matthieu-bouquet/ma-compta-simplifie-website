---
title: Saisie de lignes comptables
description: Parcours guidés (dépense, recette, virement, encaissement) et saisie avancée multi-lignes.
---

La **saisie comptable** enregistre vos opérations sous forme d’**écritures** : plusieurs lignes au débit et au crédit qui se compensent exactement. L’écran de saisie propose **trois modes** en haut de page.

## Avant de saisir

- Une **entité** doit être sélectionnée.
- Un **exercice ouvert** (non clôturé) doit être actif.
- Pour payer ou encaisser : au moins un **moyen de paiement** (banque ou caisse) configuré dans l’exercice.
- La **date** de l’opération doit être **dans la période de l’exercice** et **pas dans le futur**.

## Les trois modes

| Mode | À quoi ça sert |
|------|----------------|
| **Dépense / recette** | Charge, produit ou **virement** entre comptes banque/caisse |
| **Règlement / Encaissement** | Payer un fournisseur ou **encaisser** chez un client |
| **Saisie avancée** | Écriture manuelle multi-lignes, journal au choix |

---

## Mode « Dépense / recette »

Choisissez d’abord le **type d’opération** : **Dépense**, **Recette** ou **Virement**.

### Dépense

Enregistre une **charge** (compte de classe **6**).

1. Sélectionnez **Dépense**.
2. Choisissez la **catégorie** (compte de charge, ex. `6064` Fournitures administratives).
3. Indiquez le **montant** (TTC si assujetti TVA avec taux, sinon montant simple).
4. Répondez à **« Facture déjà payée ? »** :
   - **Oui** → choisissez le **moyen de paiement** (banque/caisse) : l’argent sort immédiatement.
   - **Non** → choisissez ou créez un **fournisseur** : la dette est enregistrée sur le compte **401** ; vous paierez plus tard en mode Règlement.
5. Joignez un **justificatif** si besoin.
6. Enregistrez.

**Exemple — facture fournitures payée par carte (sans TVA)** : 45,00 € de fournitures administratives, payées par la banque.

| Compte | Débit | Crédit |
|--------|-------|--------|
| 6064 Fournitures administratives | 45,00 | |
| 512 Banque | | 45,00 |

**Exemple — facture avec TVA (20 %), déjà payée** : 120,00 € TTC.

| Compte | Débit | Crédit |
|--------|-------|--------|
| 6064 Fournitures administratives (HT) | 100,00 | |
| 44566 TVA déductible | 20,00 | |
| 512 Banque | | 120,00 |

### Recette

Enregistre un **produit** (compte de classe **7**).

1. Sélectionnez **Recette**.
2. Choisissez la **catégorie** (compte de produit, ex. `7561` Cotisations sans contrepartie).
3. Indiquez le **montant**.
4. **« Facture déjà payée ? »** :
   - **Oui** → l’encaissement est immédiat sur banque/caisse.
   - **Non** → créance **client** sur le compte **411** ; vous encaisserez plus tard.
5. Enregistrez.

**Exemple — cotisation encaissée en espèces** : 30,00 €.

| Compte | Débit | Crédit |
|--------|-------|--------|
| 530 Caisse | 30,00 | |
| 7561 Cotisations sans contrepartie | | 30,00 |

### Virement (transfert banque / caisse)

Un **virement** déplace un montant d’un compte de **trésorerie** (classe 5) vers un autre, **sans charge ni produit**. Aucune TVA, aucun tiers.

#### Quand l’utiliser ?

- Retrait d’espèces à la banque pour alimenter la caisse.
- Virement interne entre deux comptes bancaires (ex. compte courant → livret).
- Remise d’espèces en banque.

#### Pas à pas

1. Sélectionnez **Virement**.
2. **De (compte source)** : le compte qui **diminue** (ex. `512` Banque).
3. **Vers (compte destination)** : le compte qui **augmente** (ex. `530` Caisse).
4. Saisissez le **montant** et la **date**.
5. Libellé conseillé : « Retrait espèces », « Virement vers livret », etc.
6. Enregistrez.

L’écriture est passée au journal **OD** (opérations diverses).

#### Exemple — retrait de 200 € à la banque pour la caisse

| Compte | Débit | Crédit | Commentaire |
|--------|-------|--------|-------------|
| 530 Caisse | 200,00 | | L’argent entre en caisse |
| 512 Banque | | 200,00 | L’argent sort du compte bancaire |

**Effet** : le total trésorerie (512 + 530) est inchangé ; seule la répartition entre comptes évolue.

#### Exemple — virement banque courante → livret (500 €)

| Compte | Débit | Crédit |
|--------|-------|--------|
| 5122 Compte épargne / livret | 500,00 | |
| 512 Banque | | 500,00 |

:::note
Les comptes source et destination doivent être **différents**. Les deux doivent exister dans les moyens de paiement de l’exercice.
:::

### Montant et TVA (dépense / recette)

Si l’entité est **assujettie à la TVA** ([configuration](../configuration/entite/#assujetti-à-la-tva)) :

- Saisissez le **montant TTC** et le **taux** ; l’application ventile HT / TVA.
- Comptes utilisés : **44566** (TVA déductible, dépenses) et **44571** (TVA collectée, recettes).

Sans assujettissement ou avec taux **0 %** : montant simple, sans ventilation.

### « Facture déjà payée ? » — synthèse

| | **Dépense** | **Recette** |
|---|-------------|-------------|
| **Oui** | Charge + sortie banque/caisse | Entrée banque/caisse + produit |
| **Non** | Charge + dette **401** fournisseur | Créance **411** client + produit |

---

## Mode « Règlement / Encaissement »

Ce mode enregistre uniquement le **mouvement de trésorerie** lié à un tiers : pas de nouvelle charge ni produit.

### Règlement fournisseur

Pour **payer** une ou plusieurs factures fournisseur déjà comptabilisées (dette sur **401**).

1. Choisissez **Règlement fournisseur**.
2. Sélectionnez le **fournisseur** et le **compte de trésorerie**.
3. Saisissez le **montant** du paiement.
4. Dans le tableau des **lignes ouvertes**, affectez le montant aux factures concernées. La **somme affectée doit égaler exactement** le montant du règlement.
5. Utilisez le bouton **Enregistrer** de cet onglet.

**Écriture type** (paiement 120 €) :

| Compte | Débit | Crédit |
|--------|-------|--------|
| 401 Fournisseurs | 120,00 | |
| 512 Banque | | 120,00 |

### Encaissement client

Pour **encaisser** une ou plusieurs factures client déjà comptabilisées (créance sur **411**).

#### Pas à pas

1. Cliquez sur l’onglet **Règlement / Encaissement**.
2. Choisissez **Encaissement client**.
3. Sélectionnez le **client** (ou adhérent) concerné.
4. Choisissez le **compte de trésorerie** où l’argent est reçu (banque ou caisse).
5. Saisissez le **montant encaissé** et la **date**.
6. Le tableau liste les **créances encore ouvertes** pour ce client avec le **reste à encaisser**.
7. Cochez ou répartissez le montant sur une ou plusieurs lignes jusqu’à ce que le total affecté **égale exactement** le montant encaissé.
8. Enregistrez avec le bouton dédié à cet onglet.

#### Exemple complet — facture puis encaissement

**Étape 1** — Facture de prestation 600 € TTC, pas encore payée (mode Recette, « Facture déjà payée ? » = **Non**) :

| Compte | Débit | Crédit |
|--------|-------|--------|
| 411 Clients | 600,00 | |
| 706 Prestations de services (HT) | | 500,00 |
| 44571 TVA collectée | | 100,00 |

**Étape 2** — Le client paie par virement (mode Encaissement client, 600 €) :

| Compte | Débit | Crédit |
|--------|-------|--------|
| 512 Banque | 600,00 | |
| 411 Clients | | 600,00 |

La créance sur le client est soldée ; la trésorerie augmente.

#### Encaissement partiel

Si le client paie **300 €** sur 600 € :

- Affectez 300 € sur la ligne de créance concernée.
- Il reste **300 €** ouverts sur le compte 411 pour un encaissement ultérieur.

### Enchaînement habituel

1. Comptabiliser la facture en **Dépense** ou **Recette** avec « Facture déjà payée ? » = **Non**.
2. Lorsque l’argent bouge, passer par **Règlement** ou **Encaissement** pour solder la dette ou la créance.

---

## Mode « Saisie avancée »

Pour les opérations qui ne passent pas par les assistants : écritures diverses, régularisations, amortissements, écritures multi-comptes, etc.

### Pas à pas

1. Cliquez sur **Saisie avancée (Multiple)**.
2. Choisissez le **journal** :
   - **BQ** — banque
   - **CA** — caisse
   - **AC** — achats
   - **VE** — ventes
   - **OD** — opérations diverses
3. Saisissez la **date** et le **libellé** de l’écriture.
4. Ajoutez **au moins deux lignes** :
   - Sélectionnez un **compte** du plan pour chaque ligne.
   - Indiquez un montant au **débit** ou au **crédit** (en général pas les deux sur la même ligne).
5. Vérifiez que le **total débit = total crédit** (l’interface l’affiche).
6. Ajoutez des **justificatifs** pour toute l’écriture si besoin.
7. Enregistrez.

### Exemple — régularisation charge à payer

Facture d’électricité de décembre reçue en janvier : 80 € HT à passer en charge à payer.

| Compte | Débit | Crédit |
|--------|-------|--------|
| 6061 Fournitures non stockables | 80,00 | |
| 468 Divers charges à payer | | 80,00 |

Journal **OD**, libellé « Facture électricité déc. à payer ».

### Quand préférer la saisie avancée ?

| Situation | Mode recommandé |
|-----------|-----------------|
| Achat ou vente courant | Dépense / recette |
| Paiement ou encaissement d’une facture existante | Règlement / Encaissement |
| Transfert banque ↔ caisse | Virement (dans Dépense / recette) |
| Écriture avec 3+ comptes non couverts par les assistants | Saisie avancée |
| Amortissement, provision, régularisation | Saisie avancée |

---

## À retenir

- Chaque écriture est **équilibrée** : total débit = total crédit.
- Saisie **impossible** si l’exercice est **clôturé**.
- Associez le bon **tiers** (fournisseur/client) pour suivre dettes et créances.
- Les **virements** internes ne modifient pas le résultat : ils ne touchent que la classe 5.

## Bonnes pratiques

- Facture non payée → **Non** à « Facture déjà payée ? », puis règlement/encaissement au moment du paiement réel.
- Réservez la **saisie avancée** aux cas particuliers.
- Joignez les **justificatifs** dès la saisie pour un dossier complet.
