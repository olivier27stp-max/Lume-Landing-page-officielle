# Lume Marketing Site — Plan d'implémentation

## Stack technique
- **Framework** : React 19 + TypeScript
- **Build** : Vite 6
- **Styling** : Tailwind CSS 4 (via @tailwindcss/vite)
- **Routing** : React Router v7
- **Animations** : Motion (Framer Motion)
- **Icônes** : Lucide React
- **Déploiement** : Vercel / Netlify (statique)

## Architecture

```
lume-site/
├── public/
│   ├── lume-logo.svg          # Logo SVG original
│   ├── lume-logo.png          # Logo PNG original
│   └── marketing/             # Assets marketing (screenshots, mockups)
├── src/
│   ├── components/marketing/
│   │   ├── MarketingLayout.tsx # Layout wrapper (scroll-to-top, header+footer)
│   │   ├── Header.tsx         # Nav avec mega-menu desktop + mobile
│   │   ├── Footer.tsx         # Footer avec CTA + liens + brand
│   │   └── Section.tsx        # Composants réutilisables (Section, SectionHeader, FadeIn)
│   ├── pages/
│   │   ├── Home.tsx           # Homepage complète (12 sections)
│   │   ├── Features.tsx       # 10 fonctionnalités détaillées
│   │   ├── Solutions.tsx      # 4 rôles (propriétaires, vente, terrain, dispatch)
│   │   ├── Industries.tsx     # 9 industries cibles
│   │   ├── Pricing.tsx        # 4 plans + FAQ tarifs
│   │   └── Contact.tsx        # Formulaire de démo + info
│   ├── App.tsx                # Router principal
│   ├── main.tsx               # Entry point
│   └── index.css              # Tokens Lume + Tailwind config
├── docs/
│   ├── implementation-plan.md # Ce fichier
│   └── media-asset-plan.md    # Plan de captures et médias
└── index.html                 # SEO meta tags
```

## Design System

### Tokens préservés de Lume CRM
- **Couleurs** : primary #2563eb, text-primary #171717, surfaces whites/neutrals
- **Typographie** : Inter avec font-features cv02/cv03/cv04/cv11, letter-spacing -0.011em
- **Ombres** : Subtiles (shadow-xs à shadow-xl), opacity 4-10%
- **Borders** : 1px solid #e5e5e5 (outline), border-radius 0.5rem (cartes), 0.75rem (modals)
- **Boutons** : Primary = bg-text-primary (noir), rounded-xl, font-medium 13px

### Conventions de style
- Headings : font-extralight tracking-tight (style Lume existant)
- Eyebrows : text-[10px] uppercase tracking-[0.2em] font-semibold text-primary
- Body : text-sm/text-base font-light text-text-tertiary
- Cards : border border-outline rounded-xl hover:border-text-tertiary transition-colors
- CTAs : Noir avec ArrowRight icon, hover opacity 0.85

## Routes

| Route | Page | Statut |
|-------|------|--------|
| `/` | Homepage | Fait |
| `/features` | Fonctionnalités (10 features) | Fait |
| `/solutions` | Solutions par rôle (4 rôles) | Fait |
| `/industries` | Industries (9 secteurs) | Fait |
| `/pricing` | Tarifs (4 plans) | Fait |
| `/contact` | Formulaire de démo | Fait |

## Sections de la Homepage

1. Hero (badge, titre, sous-titre, CTAs, mockup produit)
2. Trust Strip (industries cibles)
3. Value Pillars (3 colonnes)
4. Feature Showcase (4 features alternées avec visuels interactifs)
5. Feature Grid (6 features supplémentaires)
6. Stats (4 métriques clés, fond noir)
7. Role Sections (3 cartes par rôle)
8. Industry Strip (9 icônes cliquables)
9. Why Lume (4 raisons différenciatrices)
10. Testimonials (3 placeholders)
11. FAQ (8 questions en accordéon)
12. Footer CTA + liens

## Ce qui reste à faire

### Priorité haute
- [ ] Capturer les screenshots du produit réel (lume-crm)
- [ ] Remplacer les placeholders visuels par les vraies captures
- [ ] Connecter le formulaire de contact à un backend (Supabase, Resend, etc.)
- [ ] Ajouter les vrais témoignages clients
- [ ] Configurer le déploiement (Vercel/Netlify)

### Priorité moyenne
- [ ] Ajouter des animations de scroll plus élaborées sur les visuels
- [ ] Créer la vidéo hero (voir media-asset-plan.md)
- [ ] Ajouter analytics (Plausible, PostHog, ou GA4)
- [ ] Ajouter un chat bot ou widget Intercom
- [ ] Tester et optimiser la version mobile

### Priorité basse
- [ ] Blog / ressources
- [ ] Page "À propos"
- [ ] Intégrations / partenaires
- [ ] Comparatif avec concurrents
- [ ] Pages SEO par industrie individuelles
- [ ] Version anglaise complète
