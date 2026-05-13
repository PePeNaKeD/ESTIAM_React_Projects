# 03 - Blog App

Application React multi-pages permettant de s'inscrire, se connecter, et gérer des articles (créer, modifier, supprimer).

## Technologies

- React + Vite
- React Router v6
- CSS vanilla
- Connexion à une API REST NodeJS (JWT)

## Lancer le projet

```bash
npm install
npm run dev
```

> L'application nécessite un backend NodeJS lancé sur `http://localhost:3000`

## Fonctionnalités

- Inscription et connexion avec stockage du token JWT
- Accès protégé aux pages de création et modification
- Liste publique de tous les articles
- Détail d'un article avec auteur et date
- Création / modification / suppression (auteur uniquement)
- Barre de navigation dynamique selon l'état de connexion
- Page 404 pour les routes inexistantes

## Structure
src/
├── context/        # Contexte d'authentification
├── lib/            # Appels API centralisés
├── components/     # Navbar, ProtectedRoute, ArticleCard, ArticleForm
└── pages/          # Une page par route
## Routes

| Chemin | Accès | Description |
|---|---|---|
| `/` | Public | Liste des articles |
| `/article/:id` | Public | Détail d'un article |
| `/login` | Public | Connexion |
| `/register` | Public | Inscription |
| `/create` | Privé | Créer un article |
| `/edit/:id` | Privé (auteur) | Modifier un article |
| `/my-articles` | Privé | Mes articles |

