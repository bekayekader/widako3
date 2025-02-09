# Structure du Projet WIDAKO IMMOBILIER

## Configuration Files
- `package.json` - Configuration NPM et scripts
- `vite.config.ts` - Configuration Vite
- `tsconfig.json` - Configuration TypeScript
- `tailwind.config.ts` - Configuration Tailwind CSS
- `postcss.config.js` - Configuration PostCSS
- `drizzle.config.ts` - Configuration Base de données Drizzle

## Client (Frontend)
### /client/src
- `main.tsx` - Point d'entrée React
- `App.tsx` - Composant principal
- `index.css` - Styles globaux

### /client/src/components
#### Layout
- `MainLayout.tsx` - Layout principal
- `Navbar.tsx` - Barre de navigation
- `Footer.tsx` - Pied de page

#### UI Components
- `accordion.tsx` - Composant accordéon
- `chart.tsx` - Composants graphiques
- `slider.tsx` - Composant slider
- Et autres composants UI...

### /client/src/pages
- `home-page.tsx` - Page d'accueil
- `properties-page.tsx` - Liste des propriétés
- `admin-page.tsx` - Dashboard admin
- `auth-page.tsx` - Page d'authentification

### /client/src/hooks
- `use-auth.tsx` - Hook d'authentification
- `use-notifications.tsx` - Hook de notifications
- `use-toast.tsx` - Hook pour les toasts

## Server (Backend)
### /server
- `index.ts` - Point d'entrée serveur
- `routes.ts` - Routes API
- `auth.ts` - Configuration authentification
- `storage.ts` - Gestion du stockage
- `websocket.ts` - Configuration WebSocket
- `db.ts` - Configuration base de données

### /shared
- `schema.ts` - Schémas de données partagés

## Base de données
- Utilise PostgreSQL avec Drizzle ORM
- Les migrations sont gérées automatiquement

## Scripts disponibles
```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build pour production
npm run start    # Démarre en production
npm run check    # Vérifie les types TypeScript
npm run db:push  # Met à jour la base de données
```

## Variables d'environnement requises
```
DATABASE_URL=postgresql://[user]:[password]@localhost:5432/widako
```
