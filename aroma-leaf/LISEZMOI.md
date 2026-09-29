# Aroma-Leaf — identité visuelle, visuels thés et site

Distributeur des thés **Kericho Gold** (Kenya) à **Ouaga 2000**.
Contacts : +226 76 76 61 56 · +226 70 72 89 94 · Facebook « Aroma-Leaf from KENYA ».

## Contenu

| Dossier / fichier | Contenu |
|---|---|
| `visuels/` | 1 visuel 1080×1350 par thé (Facebook, Instagram, WhatsApp) + la couverture |
| `catalogue-aroma-leaf.pdf` | Catalogue de 11 pages : couverture, carte des prix, 9 thés |
| `brand/` | Emblème Aroma-Leaf redessiné (SVG, or sur vert et or seul) |
| `site/` | Site vitrine : ouvrir `site/index.html` dans un navigateur |
| `src/` | Modèles et scripts qui génèrent les visuels et le catalogue |

## Charte

- **Couleurs maison** : vert profond `#0F3328`, or `#C9A24A`, or clair `#E6C77A`, ivoire `#F7F1E4`.
- **Une couleur par thé** : noir `#6B2E16`, épices `#8A3F1A`, gingembre-citron `#B8860B`, hibiscus `#9E0F2C`,
  menthe `#1F6B4C`, passion-jasmin `#0F7C78`, thé vert citron `#4F8A1C`, vanille `#B07D12`, passion-citron vert `#8E1F63`.
- **Typographies** : Gloock (titres), Figtree (textes), toutes deux sur Google Fonts et gratuites.

## Modifier un prix ou un thé

Tout est dans **`site/data.js`**, qui est la seule source de vérité. Après une modification, regénère :

```bash
node src/render.js        # visuels PNG
node src/catalogue.js     # catalogue PDF + logos
```

(Playwright doit être installé : `npm i -g playwright`.)

## À confirmer avec le client

- Le prix de **Pure Hibiscus** et de **Passion & Lime** (affichés « Prix sur demande »).
- Le nombre de sachets de Passion & Jasmin et du thé vert citron (affichés « Boîte de sachets »).
- Le numéro **WhatsApp** utilisé pour les commandes (actuellement +226 76 76 61 56).
- Livraison ou retrait seulement.
- Les cafés (Dormans, Melvins) à ajouter s'ils sont vendus.
