# Charte Graphique - Merci pour ton non

## 📋 Vue d'ensemble

Site web vitrine pour l'association **Merci pour ton non**, organisation d'ateliers de consentement à prix libre à Strasbourg. L'identité visuelle reflète les valeurs de bienveillance, d'accessibilité et d'inclusivité tout en maintenant un aspect professionnel et engageant.

---

## 🎨 Palette de Couleurs

### Couleurs Principales

#### Orange (Énergie & Chaleur)
- **Primary Orange** : `#F97316` (orange-500)
  - Usage : CTA principaux, liens actifs, accents importants
  - Symbolise : L'énergie positive, l'action, la chaleur humaine
  - RGB : `249, 115, 22`

#### Violet/Purple (Créativité & Empowerment)
- **Primary Purple** : `#9333EA` (purple-600)
  - Usage : Titres secondaires, accents alternatifs, équilibre visuel
  - Symbolise : L'empowerment, la créativité, la transformation
  - RGB : `147, 51, 234`

#### Rose (Douceur & Connexion)
- **Secondary Pink** : `#EC4899` (pink-500)
  - Usage : Accents complémentaires, variations de cartes
  - Symbolise : La bienveillance, la connexion émotionnelle
  - RGB : `236, 72, 153`

### Couleurs de Support

#### Gris (Neutralité & Clarté)
- **Text Primary** : `#111827` (gray-900)
- **Text Secondary** : `#4B5563` (gray-700)
- **Text Tertiary** : `#6B7280` (gray-500)
- **Borders** : `#E5E7EB` (gray-200)

#### Blanc & Arrière-plans
- **Background White** : `#FFFFFF`
- **Background Light Orange** : `#FFF7ED` (orange-50)
- **Background Light Purple** : `#FAF5FF` (purple-50)

### Dégradés

#### Gradient Hero
```css
background: linear-gradient(to bottom right, #FFF7ED, #FAF5FF);
/* from-orange-50 to-purple-50 */
```

#### Gradient Text (Titres accrocheurs)
```css
background: linear-gradient(135deg, #F97316 0%, #DC2626 100%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

#### Gradient Banner
```css
background: linear-gradient(to right, #EA580C, #9333EA);
/* from-orange-600 to-purple-600 */
```

---

## 🔤 Typographie

### Police Principale : **Bebas Neue** (Titres)

**Utilisation :**
- Tous les titres principaux (H1, H2)
- Logo et branding
- Éléments nécessitant un fort impact visuel

**Caractéristiques :**
- Font family : `'Bebas Neue', cursive`
- Letter-spacing : `0.05em`
- Poids : Regular (400)
- Style : Display, tout en capitales
- Source : Google Fonts

**Classes CSS :**
```css
.title-font {
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.05em;
}
```

**Exemples de tailles :**
- Desktop XL : `text-7xl` (72px)
- Desktop : `text-5xl` (48px)
- Tablet : `text-4xl` (36px)
- Mobile : `text-3xl` (30px)

### Police Secondaire : **Inter** (Corps de texte)

**Utilisation :**
- Corps de texte
- Navigation
- Boutons
- Tout élément nécessitant une bonne lisibilité

**Caractéristiques :**
- Font family : `'Inter', sans-serif`
- Poids disponibles : 400, 500, 600, 700, 800, 900
- Style : Sans-serif moderne et épuré
- Source : Google Fonts

**Poids recommandés :**
- Regular (400) : Corps de texte
- Medium (500) : Navigation
- Semibold (600) : Sous-titres
- Bold (700) : Emphase
- Extrabold (800-900) : Titres secondaires

### Police Alternative : **Neue Machina** (Optionnel)

**Utilisation potentielle :**
- Éléments graphiques spéciaux
- Variations typographiques pour des sections distinctes
- Alternative moderne à Bebas Neue pour certains contextes

**Note :** Non implémentée actuellement dans le code, mais disponible pour évolution future.

---

## 📐 Hiérarchie Typographique

### Titres

#### H1 (Hero / Page Title)
- Police : Bebas Neue
- Taille : `text-7xl` (72px) desktop, `text-3xl` (30px) mobile
- Poids : Regular
- Couleur : Mix orange-500 / purple-600 / gray-900
- Line-height : `1.1`

#### H2 (Section Titles)
- Police : Bebas Neue
- Taille : `text-4xl` (36px) desktop, `text-3xl` (30px) mobile
- Poids : Regular
- Couleur : gray-900
- Margin-bottom : `mb-6`

#### H3 (Subsection Titles)
- Police : Inter
- Taille : `text-2xl` (24px)
- Poids : Bold (700)
- Couleur : gray-900

#### H4 (Card Titles)
- Police : Inter
- Taille : `text-xl` (20px)
- Poids : Semibold (600)
- Couleur : gray-900

### Corps de Texte

#### Paragraphe Standard
- Police : Inter
- Taille : `text-base` (16px)
- Poids : Regular (400)
- Couleur : gray-700
- Line-height : `1.7`

#### Paragraphe Large
- Taille : `text-lg` (18px) ou `text-xl` (20px)
- Usage : Introduction, texte d'accroche

#### Petit Texte
- Taille : `text-sm` (14px)
- Usage : Annotations, labels, informations secondaires
- Couleur : gray-500

### Labels & Tags
- Police : Inter
- Taille : `text-sm` (14px)
- Poids : Bold (700)
- Transform : `uppercase`
- Tracking : `tracking-wide`
- Couleur : orange-600 ou purple-600

---

## 🖼️ Composants Visuels

### Boutons

#### CTA Principal
```html
<button class="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
  Je m'inscris
</button>
```

**Spécifications :**
- Background : orange-500
- Texte : white
- Padding : `px-8 py-4` (32px horizontal, 16px vertical)
- Border-radius : `rounded-full` (9999px)
- Font : Inter Bold
- Hover : `scale-105` (légère augmentation de taille)
- Shadow : `shadow-lg`

#### Lien Navigation
```html
<a class="text-gray-700 hover:text-orange-500 font-medium transition">
  Lien
</a>
```

**Spécifications :**
- Couleur par défaut : gray-700
- Hover : orange-500
- Font : Inter Medium (500)
- Transition : smooth

### Cartes (Cards)

#### Carte Standard
```html
<div class="bg-white border border-gray-200 rounded-lg p-6">
  <!-- Contenu -->
</div>
```

**Spécifications :**
- Background : white
- Border : 1px solid gray-200
- Border-radius : `rounded-lg` (8px)
- Padding : `p-6` (24px)
- Pas de shadow (design épuré)

#### Carte Colorée
```html
<div class="bg-orange-50 rounded-lg p-6">
  <!-- Contenu -->
</div>
```

**Variations :**
- `bg-orange-50` : Sections chaleureuses
- `bg-purple-50` : Sections alternatives
- `bg-pink-50` : Accents doux

### Navigation

#### Barre de Navigation Fixe
```html
<nav class="fixed top-0 left-0 right-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-lg">
  <!-- Contenu -->
</nav>
```

**Spécifications :**
- Position : Fixed top
- Background : white avec 90% opacité
- Backdrop-filter : blur
- Shadow : `shadow-lg`
- Z-index : 50 (au-dessus de tout)

#### Menu Mobile
- Sidebar : Gauche, 320px width
- Overlay : Background noir 50% opacité avec blur
- Animation : Translate-x pour l'apparition

### Espacements

#### Sections
- Padding vertical : `py-16` (64px) desktop
- Padding horizontal : `px-6` (24px)
- Max-width container : `max-w-7xl` (1280px)
- Margin auto : Pour centrage

#### Grilles
- Gap standard : `gap-6` (24px)
- Gap large : `gap-8` (32px)

#### Éléments
- Margin-bottom titre : `mb-6` (24px)
- Margin-bottom paragraphe : `mb-4` (16px)

---

## 🎭 Animations & Interactions

### Animations d'Entrée

#### Fade In Up (Titres Hero)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-title {
  animation: fadeInUp 0.8s ease-out;
}
```

#### Fade In (Contenu)
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 1s ease-out;
}
```

### Interactions Hover

#### Boutons
- Transform : `scale-105` (5% agrandissement)
- Duration : `300ms`
- Ease : `ease-out`

#### Liens
- Couleur : Transition vers orange-500
- Duration : `200ms`
- Ease : `ease`

#### Cartes (si hover activé)
- Shadow : Augmentation de l'ombre
- Transform : Légère élévation

### Smooth Scroll
- Behavior : `smooth`
- Offset : Compensation pour navigation fixe (hauteur nav + 20px)

---

## 🌈 Identité Visuelle

### Logo

**Composition :**
- **"merci"** en rose/rouge (`#E91E63` approximatif)
- **"pour ton"** en orange/jaune dégradé
  - Orange : `#FFA726`
  - Violet : `#9C27B0`
- **"non"** en turquoise/teal (`#26A69A`)

**Style :**
- Police : Bebas Neue ou similaire (Display bold)
- Lettres en minuscules mais avec hauteur de capitales
- Espacement serré
- Éléments graphiques circulaires dans les "o"

**Usage :**
- Logo principal : Taille `text-xl` à `text-2xl`
- Couleur texte : orange-500 dans la navigation
- Classe : `.title-font`

### Ton & Voix

**Valeurs transmises :**
- 🤝 Bienveillance
- 🌈 Inclusivité
- 💪 Empowerment
- 🎓 Accessibilité
- ❤️ Communauté

**Style de Communication :**
- Tutoiement (proximité)
- Langage inclusif (·e·s)
- Ton chaleureux mais professionnel
- Transparence (prix libre, contenu détaillé)

---

## 📱 Responsive Design

### Breakpoints (Tailwind)

- **Mobile** : < 640px (défaut)
- **Tablet** : ≥ 640px (`sm:`)
- **Desktop** : ≥ 768px (`md:`)
- **Large Desktop** : ≥ 1024px (`lg:`)
- **XL Desktop** : ≥ 1280px (`xl:`)

### Adaptations

#### Navigation
- **Desktop** : Menu horizontal avec liens visibles
- **Mobile** : Hamburger menu avec sidebar gauche

#### Typographie
- **H1 Desktop** : `text-7xl` (72px)
- **H1 Mobile** : `text-3xl` (30px)
- **Réduction progressive** entre les breakpoints

#### Layout
- **Desktop** : Grilles 2-3 colonnes (`lg:grid-cols-3`)
- **Tablet** : Grilles 2 colonnes (`md:grid-cols-2`)
- **Mobile** : Single column

#### Espacements
- **Padding vertical sections** : `py-16` desktop → `py-8` mobile
- **Padding horizontal** : `px-6` constant

---

## ✨ Principes de Design

### 1. Clarté & Lisibilité
- Contrastes élevés pour accessibilité
- Hiérarchie visuelle claire
- Espaces blancs généreux

### 2. Simplicité
- Design épuré, sans surcharge visuelle
- Borders subtils plutôt que shadows lourdes
- Focus sur le contenu

### 3. Chaleur & Accessibilité
- Palette orange/violet chaleureuse
- Ton inclusif et rassurant
- Prix libre mis en avant

### 4. Conversion Optimisée
- CTAs visibles et contrastés
- Navigation fixe pour accès permanent
- Smooth scroll pour fluidité
- Témoignages et preuves sociales

### 5. Performance
- Images optimisées
- Lazy loading
- Minimal JavaScript
- CSS utility-first (Tailwind)

---

## 📦 Assets & Ressources

### Polices
- **Bebas Neue** : [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue)
- **Inter** : [Google Fonts](https://fonts.google.com/specimen/Inter)

### Framework CSS
- **Tailwind CSS** v4.1.13

### Icônes
- SVG inline pour meilleure performance
- Style : Outline, stroke de 2px

### Images
- Format : JPEG pour photos
- Optimisation : Compression avec qualité 80-85%
- Lazy loading : Activé
- Alt text : Descriptif et accessible

---

## 🎯 Checklist d'Implémentation

### Couleurs
- ✅ Orange #F97316 pour CTAs principaux
- ✅ Purple #9333EA pour accents
- ✅ Gris neutres pour textes
- ✅ Dégradés subtils pour backgrounds

### Typographie
- ✅ Bebas Neue pour tous les titres
- ✅ Inter pour corps de texte
- ✅ Hiérarchie claire H1-H4
- ✅ Tailles responsive

### Composants
- ✅ Navigation fixe avec blur
- ✅ Boutons arrondis (rounded-full)
- ✅ Cartes avec borders simples
- ✅ Smooth scroll actif

### UX
- ✅ Menu mobile fonctionnel
- ✅ CTAs accessibles en permanence
- ✅ Animations subtiles
- ✅ Feedback hover sur interactions

### Accessibilité
- ✅ Contrastes WCAG AA minimum
- ✅ Alt text sur images
- ✅ Navigation au clavier possible
- ✅ Langage inclusif

---

## 📝 Notes de Mise à Jour

**Version** : 1.0
**Date** : 2025-01-08
**Statut** : En production

**Évolutions futures possibles :**
- Intégration de Neue Machina pour variations
- Mode sombre (dark mode)
- Animations plus poussées (scroll-triggered)
- Illustrations custom associatives

---

**Contact Design :** design@mercipourtonnon.fr (si applicable)
**Site Web :** [mercipourtonnon.fr](https://mercipourtonnon.fr)
