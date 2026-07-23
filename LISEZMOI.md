# SANK MARKET — MVP web

Marketplace de produits d'occasion pour le Burkina Faso (pilote Ouagadougou).
Inspiré d'Avito, corrigé sur ses points faibles : photos HD, filtres qui
marchent, vendeurs vérifiés, contact WhatsApp, dépôt gratuit, mobile money.

## Démarrer (dans VS Code)

Ouvre un terminal dans le dossier `sank-market` puis :

```bash
npm install      # une seule fois (si tu changes de machine)
npm run dev      # lance le site
```

Ouvre ensuite http://localhost:3000

Pour remettre les annonces d'exemple (réinitialise la base) :

```bash
npm run seed
```

## Ce qui est fait

- **Accueil** : hero, catégories, « À la une » (annonces boostées), annonces récentes.
- **Recherche** (`/recherche`) : filtres catégorie, ville, prix min/max, tri. Ils fonctionnent vraiment.
- **Fiche annonce** (`/annonce/[id]`) : galerie photos, prix FCFA, vendeur vérifié, bouton WhatsApp + appel, compteur de vues.
- **Dépôt d'annonce** (`/deposer`) : formulaire avec upload de photos (non compressées), gratuit. Demande la connexion.
- **Connexion** (`/connexion`) : nom + téléphone (pas de SMS payant pour le MVP).
- **Boutique vendeur** (`/vendeur/[id]`) : profil + toutes ses annonces.
- **Compte** (`/compte`) : mes annonces (avec suppression), favoris, déconnexion.
- **Favoris** (`/favoris`) : annonces likées (cœur).

## Stack technique

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **Prisma 7** + **SQLite** (base locale `dev.db`, aucun compte externe)
- Thème SANK MARKET (vert émeraude, or, rouge, vert électrique)
- Icônes Tabler, polices Bricolage Grotesque / DM Sans / Space Mono

## Structure

```
prisma/
  schema.prisma     # modèle de données (User, Listing, Category, Favorite)
  seed.ts           # données d'exemple Ouaga
src/
  app/
    page.tsx              # accueil
    recherche/            # recherche + filtres
    annonce/[id]/         # fiche annonce
    deposer/              # dépôt d'annonce
    connexion/            # connexion
    vendeur/[id]/         # boutique vendeur
    compte/ favoris/      # espace utilisateur
    actions.ts            # Server Actions (login, créer annonce, favoris…)
  components/             # Header, ListingCard, Filters, PostForm…
  lib/                    # db, data, auth, format, constants
public/uploads/           # photos uploadées (créé au premier dépôt)
```

## Prochaines étapes possibles

- Galerie multi-photos avec swipe sur la fiche
- Vérification du téléphone par SMS (OTP)
- Messagerie intégrée acheteur ↔ vendeur
- Booster une annonce (paiement mobile money réel)
- Passage à une base de données en ligne pour la mise en production
- Application mobile (React Native) réutilisant la même API

---

Le logo et l'identité visuelle sont gérés séparément (par toi).
Quand le logo est prêt, on le branche dans le header (`src/components/Header.tsx`).
