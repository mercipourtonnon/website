# Archive — ancien site statique

Ces fichiers sont l'ancien site statique (HTML écrit à la main + Tailwind CLI,
servi tel quel par GitHub Pages), conservés pour référence après la migration
vers [Sovrium](https://sovrium.com) en juin 2026.

Le site vit désormais dans `app.yaml` + `config/` à la racine du dépôt, et le
HTML est généré par `sovrium build` (voir `.github/workflows/deploy.yml`).

| Fichier | Rôle d'origine |
|---|---|
| `index.html` | Page d'accueil (source de vérité de la conversion) |
| `mentions-legales.html` | Mentions légales |
| `newsletter.html` | Page d'inscription newsletter (Brevo) |
| `charte.html` | Charte graphique (documentation interne) |
| `input.css` / `output.css` | Source et build Tailwind v4 |
| `sitemap.xml` / `robots.txt` | SEO statique (désormais générés au build) |
| `package.json` / `bun.lock` | Outillage bun/Tailwind de l'ancien site |
