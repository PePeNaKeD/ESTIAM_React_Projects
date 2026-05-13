📝 ToDo List App
Une application de gestion de tâches performante et intuitive développée avec React et Vite. Ce projet a été conçu pour démontrer la maîtrise des fondamentaux de React, notamment la gestion d'état local et la décomposition en composants réutilisables.

🚀 Fonctionnalités
Ajout de tâches : Création instantanée via un formulaire dédié.

Validation : Empêche l'ajout de tâches vides.

Gestion d'état : Marquage des tâches comme "complétées" avec un retour visuel (barré).

Suppression : Retrait définitif d'une tâche de la liste.

Identifiants uniques : Utilisation de crypto.randomUUID() pour une gestion précise des éléments du DOM.

🏗️ Architecture Technique
Le projet suit une structure modulaire pour garantir la maintenabilité du code :

App.jsx : Composant parent gérant la "source de vérité" (le state global de la liste).

TodoForm.jsx : Composant de saisie gérant son propre état local pour l'input.

TodoList.jsx : Composant de structure chargé de mapper les données vers les items.

TodoItem.jsx : Composant d'affichage gérant les interactions unitaires (clic, suppression).

🛠️ Installation
Accédez au dossier du projet :

Bash
cd 01-ToDoApp
Installez les dépendances :

Bash
   npm install
Lancez le serveur de développement :

Bash
npm run dev
