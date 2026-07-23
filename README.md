# SANK MARKET

**La marketplace des produits d'occasion pour l'Afrique de l'Ouest.**
Pilote : Burkina Faso 🇧🇫 (Ouagadougou).

Inspiré d'Avito, repensé pour corriger ses points faibles : photos HD non
compressées, filtres qui marchent vraiment, vendeurs vérifiés, contact
WhatsApp, dépôt d'annonce **gratuit**, paiement mobile money.

> Conçu et développé avec **Claude Code** (Anthropic).

---

## ✨ Fonctionnalités

- **Accueil** dynamique : catégories, annonces « à la une », annonces récentes.
- **Recherche + filtres** qui fonctionnent (catégorie, ville, prix, tri).
- **Fiche annonce** : galerie, prix en FCFA, vendeur vérifié, bouton WhatsApp + appel.
- **Dépôt d'annonce gratuit** avec upload de photos.
- **Comptes** (connexion par téléphone), **favoris**, **boutique vendeur**.
- **Thème dark-luxury afrofuturiste** : palette or / émeraude / vert électrique,
  système d'images de marque, micro-animations, mobile-first, accessibilité.

## 🛠️ Stack technique

- **Next.js 16** (App Router, Server Actions) + **TypeScript**
- **Tailwind CSS v4**
- **Prisma 7** + **SQLite** (base locale, aucun compte externe requis)
- Polices Bricolage Grotesque / DM Sans / Space Mono, icônes Tabler

## 🚀 Démarrage

```bash
npm install
cp .env.example .env        # Windows : copy .env.example .env
npx prisma migrate dev      # crée la base SQLite
npm run seed                # ajoute des annonces d'exemple (Ouaga)
npm run dev                 # http://localhost:3000
```

## 📁 Structure

```
prisma/            schéma de données + seed
src/
  app/             pages (accueil, recherche, annonce, déposer, compte…) + Server Actions
  components/      Header, ListingCard, Filters, PostForm, BrandImage…
  lib/             db, data, auth, format, constants, ads
public/uploads/    photos uploadées (ignorées par git)
```

## 🗺️ Prochaines étapes

- Vérification du téléphone par SMS (OTP)
- Messagerie intégrée acheteur ↔ vendeur
- Espaces publicitaires + carrousels + aperçu animé au clic
- Boost d'annonce payé en mobile money (Orange, Moov, Wave)
- Base de données hébergée pour la production
- Application mobile (React Native)

---

Made in Burkina Faso · built with Claude Code.
