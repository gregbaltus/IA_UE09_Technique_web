# Introduction 

Dans ce cours nous allons faire une introduction rapide aux API. 

## 1.1 Qu’est-ce qu’une API ?
Le mot API signifie Application Programming Interface, soit en français : interface de programmation d'application.

Une API est un intermédiaire qui permet à deux programmes ou applications de communiquer entre eux.
C’est un peu comme un serveur de restaurant : vous (le client) commandez un plat, le serveur transmet la commande en cuisine, puis revient avec le plat. L’API joue ce rôle de messager entre vous (votre site web) et un système externe (un service web, une base de données, un moteur d’intelligence artificielle…).

Dans le contexte du web, on utilise souvent des APIs pour :

- récupérer des données (comme la météo, des actualités, des images…),

- envoyer des informations (formulaire, login, score d’un jeu…),

- ou déclencher des actions (traduire un texte, générer une image, répondre à une question…).

Concrètement, une API web fonctionne grâce à des requêtes HTTP (comme quand on visite un site web), mais au lieu de recevoir une page HTML, on reçoit des données structurées, généralement en JSON.

### Exemple concret
Imaginons un site qui affiche une blague aléatoire.

Ce site n’a pas besoin d’inventer lui-même des blagues : il peut appeler une API publique (par exemple : https://official-joke-api.appspot.com/random_joke) et afficher la blague reçue.


## 1.2 Pourquoi utiliser une API ?

Utiliser une API permet d'intégrer des fonctionnalités puissantes dans un site web ou une application sans devoir tout programmer soi-même.

Prenons un exemple : imaginons que vous souhaitiez intégrer un **chatbot intelligent** à votre site.  
Développer un chatbot de zéro avec compréhension du langage, logique de réponse et base de données d’apprentissage prendrait des mois de développement, des connaissances en intelligence artificielle, et une infrastructure complexe.

Grâce à des APIs comme celles proposées par **Hugging Face**, vous pouvez envoyer une question à un modèle d’IA (comme *Janus* ou *Mistral*) et recevoir une réponse prête à afficher, en quelques lignes de code seulement.

---

### Avantages d’utiliser une API :

- **Gain de temps** : vous utilisez une fonctionnalité prête à l’emploi.

- **Accès à des services avancés** (traduction, reconnaissance vocale, analyse d’image, génération de texte…).

- **Pas besoin d’héberger ou de maintenir le système complexe** derrière l’API.

- **Facilité d’intégration** dans un site web avec des requêtes HTTP simples.


## 1.3 Exemples d’API utilisées dans le web

Les APIs sont présentes partout sur le web. Voici quelques exemples concrets de services qui proposent des APIs largement utilisées :

- **Google Maps API** – pour afficher une carte ou calculer un itinéraire.

- **OpenWeatherMap API** – pour récupérer la météo d’une ville.

- **Hugging Face API** – pour utiliser des modèles d’IA comme des chatbots ou des générateurs de texte.

- ...

Ces APIs permettent à n’importe quel site web d’intégrer ces fonctionnalités sans devoir tout coder soi-même.


## 1.4 – Clé d’API

Certaines APIs sont **protégées** et ne sont pas accessibles librement à tout le monde. Pour pouvoir les utiliser, il faut généralement fournir une clé d’API (API key).

Une clé d’API est une chaîne de caractères unique, souvent générée après la création d’un compte sur le site du service (comme Hugging Face, OpenWeatherMap, etc.).


### À quoi sert une clé d’API ?

- Elle permet au service de **savoir qui fait la requête**.

- Elle peut être utilisée pour **limiter le nombre de requêtes** (ex : 100 requêtes par jour).

- Elle permet au fournisseur de **facturer les usages si l’API est payante**.


###  Ce qu’il faut savoir

- Une clé d’API est personnelle : elle est associée à votre compte.

- Il ne faut jamais la partager publiquement (par exemple dans un dépôt GitHub).

- Lors d’un appel à l’API, la clé est envoyée dans les en-têtes HTTP (généralement dans le champ `Authorization`).

### Exemple :

Pour utiliser une API Hugging Face, vous devez :

1. Créer un compte sur le site [huggingface.co](https://huggingface.co)

2. Générer une clé API dans votre profil

3. L’utiliser dans vos requêtes pour accéder aux modèles

