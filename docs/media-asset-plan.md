# Lume — Plan Média & Assets

## Captures d'écran à produire

Pour remplacer les placeholders visuels sur le site, capturer les écrans suivants depuis le produit Lume (lume-crm) :

### Priorité haute (Homepage)
1. **Dashboard** — Vue complète avec KPIs, graphiques, activité récente
2. **Pipeline** — Vue Kanban avec quelques leads dans chaque colonne
3. **Carte D2D** — Carte avec pins de différentes couleurs et une zone de territoire
4. **Leaderboard** — Classement avec noms, scores et badges
5. **Assistant IA** — Conversation avec l'assistant vocal

### Priorité moyenne (Features page)
6. **Formulaire de demande** — Le widget de capture de lead
7. **Calendrier** — Vue semaine avec quelques jobs planifiés
8. **Automatisations** — Le workflow builder avec quelques nœuds
9. **Notifications** — Le centre de notifications avec alertes de devis
10. **Avis Google** — L'interface de suivi des avis
11. **Performance équipe** — Dashboard de performance par rep

### Comment capturer
1. Lancer `lume-crm` en local (`npm run dev`)
2. Peupler avec des données de démonstration
3. Capturer en **1920×1080** ou **2560×1440** (2x)
4. Utiliser Chrome DevTools > capture full size screenshot
5. Sauvegarder dans `public/marketing/screenshots/`

### Mockups à créer
Pour chaque capture, créer une version dans un cadre navigateur :
- Utiliser un template simple (barre d'adresse arrondie, 3 points colorés)
- Optionnel : version laptop/phone pour la homepage

### Outils recommandés
- **Captures** : Chrome DevTools, CleanShot X, ou Playwright screenshot
- **Mockups** : Figma (templates gratuits), ou CSS dans le code
- **Optimisation** : `npx sharp-cli` ou `squoosh` pour compresser en WebP

---

## Storyboard — Vidéo Hero (20-30 sec)

### Concept
"Votre entreprise, dans un seul écran."

### Plans

| # | Durée | Plan | Description | Source |
|---|-------|------|-------------|--------|
| 1 | 0-3s | Titre + logo | "Lume" apparaît avec tagline | Motion text |
| 2 | 3-6s | Dashboard | Zoom out depuis un KPI vers le dashboard complet | Screenshot animé |
| 3 | 6-9s | Pipeline | Drag d'une carte de "Nouveau" à "Contact" | Screen recording |
| 4 | 9-12s | Carte D2D | Survol de la carte avec pins qui apparaissent | Screen recording |
| 5 | 12-15s | Leaderboard | Classement qui se met à jour en temps réel | Screen recording |
| 6 | 15-18s | IA vocale | Message vocal → lead créé automatiquement | Screen recording |
| 7 | 18-21s | Notifications | Alerte "Devis ouvert par Jean T." | UI animation |
| 8 | 21-24s | Avis Google | 5 étoiles qui s'affichent | Motion graphics |
| 9 | 24-27s | Stats | "10+ outils remplacés", "2x plus rapide" | Motion text |
| 10 | 27-30s | CTA | "Réservez votre démo" + logo | Motion text |

### Direction musicale
- Moderne, clean, upbeat léger
- Pas de voix — musique instrumentale seulement
- Style : lo-fi corporate, electronic léger

### Prompts de génération vidéo (Runway/Kling)

**Plan 1 — Intro**
```
Minimal black screen, white text "LUME" appears with elegant tracking animation, clean modern SaaS branding, dark background, centered composition, smooth reveal
```

**Plan 9 — Stats**
```
Clean white background, large numbers counting up, modern sans-serif typography, minimal data visualization, professional SaaS aesthetic, smooth counter animation
```

**Plan 10 — CTA**
```
Clean minimal ending card, "Book a Demo" call to action button centered, dark rounded button on light background, Lume logo above, modern SaaS landing page aesthetic
```

---

## Prompts d'images pour placeholders

### Dashboard Hero
```
Clean modern SaaS CRM dashboard interface, light mode, minimal design, KPI stat cards across top showing revenue metrics, kanban pipeline below with colored cards, sidebar navigation with icons, Inter font, subtle gray borders, white background, professional business software UI, 4K screenshot mockup
```

### Pipeline Kanban
```
Kanban board CRM interface, 4 columns labeled New Contact Quoted Won, drag and drop cards with customer names and values, clean minimal design, light gray borders, blue accent color, white cards on light background, modern SaaS aesthetic, professional CRM software screenshot
```

### Map D2D
```
Interactive map interface for door-to-door sales, colored pins on residential streets showing visit status green blue red, territory overlay with semi-transparent zone, sidebar with lead details, clean minimal SaaS design, Leaflet-style map tiles, modern CRM software
```

### Leaderboard
```
Sales team leaderboard interface, ranked list of team members with scores and badges, gold silver bronze medals, clean modern SaaS design, bar chart comparison, gamification elements, competitive sales dashboard, minimal white interface with blue accents
```

---

## Structure des fichiers attendue

```
public/marketing/
  screenshots/
    dashboard.webp
    pipeline.webp
    map-d2d.webp
    leaderboard.webp
    ai-assistant.webp
    calendar.webp
    automations.webp
    notifications.webp
    reviews.webp
    team-performance.webp
    request-form.webp
  mockups/
    hero-browser.webp
    hero-laptop.webp
    hero-phone.webp
  video/
    hero-poster.webp
```
