# Introduction

## 1.1 Bases de données pour les sites web

Lorsque l’on crée un site web dynamique, il devient vite nécessaire de **stocker des informations** quelque part.  
On parle alors de **base de données** : un outil qui permet de **sauvegarder, rechercher, modifier ou supprimer** des données de manière structurée.

Les données sont évidemment sauvegardées du côté serveur (backend), l'utilisateur et donc le frontend, n'y a pas accès directement. Pourtant, les données sont souvent utilisées dans le frontend :

- Le site web doit afficher des données sauvegardées dans une BD (par exemple le nom de l'utilisateur connecté, l'état de son panier,...)

- L'utilisateur envoie des données au serveur. Par exemple, quand il s'enregistre sur un site web, il le fait via un formulaire se trouvant dans le frontend. Le backend (le serveur) doit récupérer ces données et puis les enregistrer dans une base de données.

---

## 1.2 Rappel SQL

Le **SQL (Structured Query Language)** est un langage utilisé pour **manipuler des bases de données relationnelles**.

Avec SQL, on peut :
- créer une table (`CREATE TABLE`)
- ajouter des données (`INSERT INTO`)
- lire des données (`SELECT`)
- modifier ou supprimer des données (`UPDATE`, `DELETE`)

## Rappel SGBD (Système de Gestion de Base de Données)

Un SGBD est un programme qui gère les bases de données et permet d’y accéder depuis un langage de programmation.

Quelques SGBD connus :

- MySQL

- PostgreSQL

- Oracle

- SQLite (celui que nous allons utiliser)

## 1.4 Pourquoi utiliser SQLite dans ce cours ?
Pour ce cours, nous allons utiliser SQLite, un SGBD léger et intégré.

**Avantages de SQLite :**

- Très simple à installer : une base = 1 seul fichier .db

- Parfait pour un projet local

- Compatible avec Node.js

- Aucune configuration serveur nécessaire

**Limites :**

- Pas adapté à des sites avec beaucoup de trafic ou d’utilisateurs

- Pas conçu pour être utilisé à distance sur un serveur web réel


