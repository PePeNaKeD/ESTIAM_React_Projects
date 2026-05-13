📇 Contact Manager App
Une application complète de gestion de répertoire permettant de gérer un carnet d'adresses de manière dynamique. Ce projet met l'accent sur la manipulation de formulaires complexes, la validation de données et la préparation à l'intégration d'une API Backend.

🚀 Fonctionnalités
Gestion CRUD complète : Ajouter, afficher, modifier et supprimer des contacts.

Recherche en temps réel : Filtrage instantané de la liste par nom ou prénom via une barre de recherche.

Tri Alphabétique : Organisation automatique des contacts par nom de famille.

Validation de Formulaire :

Vérification des champs obligatoires.

Validation du format de l'email via Regex.

Mode Édition : Pré-remplissage du formulaire pour modifier un contact existant sans doublon.

🏗️ Architecture des Composants
L'application est découpée pour respecter une logique de responsabilité unique :

App.jsx : Point d'entrée gérant la logique de synchronisation avec l'API (fetch) et l'état global.

ContactForm.jsx : Formulaire intelligent gérant à la fois la création et la mise à jour (Update).

ContactList.jsx : Composant de présentation traitant la logique de filtrage (recherche) et de tri.

ContactItem.jsx : Carte d'affichage pour un contact individuel avec actions dédiées.

🛠️ Installation
Accédez au dossier du projet :

Bash
cd 02-ContactApp
Installez les dépendances :

Bash
   npm install
Lancez le serveur de développement :

Bash
npm run dev
📋 Concepts Avancés Maîtrisés
Hooks Avancés : Utilisation de useEffect pour le chargement initial des données.

Persistance (Mock) : Logique prête pour une connexion avec un serveur NodeJS/Express.

Filtrage de Données : Utilisation combinée de .filter() et .sort() pour une expérience utilisateur fluide.

UX/UI : Feedback visuel lors des erreurs de saisie dans le formulaire.
