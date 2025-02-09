# WIDAKO IMMOBILIER - Plateforme Immobilière Professionnelle

## Description
Plateforme web professionnelle WIDAKO IMMOBILIER offrant une solution complète de gestion et consultation immobilière avec des fonctionnalités avancées pour les utilisateurs et administrateurs.

## Prérequis
- Node.js (version 20.x ou supérieure)
- PostgreSQL (version 12 ou supérieure)
- npm ou yarn
- Un éditeur de code (VSCode recommandé)

## Installation

1. Cloner le projet :
```bash
git clone [URL_DU_REPO]
cd widako-immobilier
```

2. Installer les dépendances :
```bash
npm install
```

3. Configuration de l'environnement :
Créer un fichier `.env` à la racine du projet avec les variables suivantes :
```env
DATABASE_URL=postgresql://[user]:[password]@localhost:5432/widako
```

4. Initialiser la base de données :
```bash
# Créer la base de données PostgreSQL
createdb widako

# Appliquer les migrations
npm run db:push
```

5. Lancer l'application :
```bash
# Mode développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm run start
```

## Scripts Disponibles
- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run start` : Démarre l'application en mode production
- `npm run check` : Vérifie les types TypeScript
- `npm run db:push` : Met à jour le schéma de la base de données

## Structure du Projet

### Frontend (client/)
```
client/
├── src/
│   ├── components/     # Composants React réutilisables
│   ├── hooks/         # Hooks React personnalisés
│   ├── lib/           # Utilitaires et configurations
│   ├── pages/         # Pages de l'application
│   └── App.tsx        # Composant racine
```

### Backend (server/)
```
server/
├── routes.ts          # Routes API
├── auth.ts           # Configuration authentification
├── storage.ts        # Gestion du stockage
├── websocket.ts      # Configuration WebSocket
└── index.ts         # Point d'entrée serveur
```

### Shared (shared/)
```
shared/
└── schema.ts         # Schémas de données partagés
```

## Configuration VSCode Recommandée

Extensions recommandées :
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense

Settings recommandés (`.vscode/settings.json`) :
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Fonctionnalités Principales
- Gestion complète des biens immobiliers
- Système d'authentification multi-rôles
- Interface administrateur avec historique des actions
- Notifications en temps réel
- Design responsive et moderne
- Système de recherche avancé
- Intégration WhatsApp et réseaux sociaux

## Support
Pour toute question ou problème, veuillez ouvrir une issue dans le repository du projet.
