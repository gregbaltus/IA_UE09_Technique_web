# 4. Introduction à AJAX

## 4.1 Qu’est-ce qu’AJAX ?

Lorsque vous remplissez un formulaire ou cliquez sur un bouton, le navigateur peut :

- soit recharger toute la page pour obtenir une réponse du serveur,

- soit, plus discrètement, envoyer une requête **en arrière-plan**, et mettre à jour la page **sans la recharger**.

Ce deuxième cas s’appelle **AJAX** (Asynchronous JavaScript And XML).


### À quoi ça sert ?

AJAX permet au **JavaScript dans le navigateur** de :

- envoyer une requête vers le serveur (souvent avec `fetch()`)

- recevoir une réponse (souvent en JSON)

- mettre à jour le contenu de la page sans quitter l’écran

Cela rend les sites **plus réactifs** et **plus agréables à utiliser**.


### Ce que nous allons faire

Dans ce cours, **nous n’allons pas explorer toutes les possibilités d’AJAX**, mais nous allons :

- utiliser **`fetch()`** pour interroger le serveur,

- recevoir des données au format **JSON**,

- **afficher dynamiquement** ces données sur la page grâce au JavaScript frontend.

Cela nous suffira largement pour :

- exploiter les **fonctions du repository** que nous venons de créer,

- par exemple pour **afficher la liste des utilisateurs** de la base de données.


Vous n’avez pas besoin de connaître tous les détails techniques d’AJAX.  
Vous devez surtout comprendre que cela nous permet de **connecter JavaScript au serveur**, et d’utiliser les **données dynamiques** sans recharger la page.


## 4.2 Introduction à `fetch()`

Pour faire une requête AJAX avec JavaScript moderne, on utilise généralement la fonction **`fetch()`**.  
Elle permet de **demander des données au serveur**, et de **récupérer une réponse** sans recharger la page.


### Exemple simple : récupérer un message depuis le serveur

#### 1. Route côté serveur

Dans votre fichier `server.js`, ajoutez cette route très simple :

```js
app.get("/api/message", (req, res) => {
  res.json({ message: "Bonjour depuis le serveur !" });
});
```
Ce code crée une route qui, quand elle sera appelé, renverra une réponse sous un format `json` à la page qui l'a appelé. 

#### 2. Code JavaScript côté client (dans script.js par exemple)

```js
fetch("/api/message")
  .then(response => response.json())
  .then(data => {
    console.log("Message du serveur :", data.message);
  })
  .catch(error => {
    console.error("Erreur lors du fetch :", error);
  });
```
Explication :

- `fetch(...)` envoie une requête `GET` vers l’URL `/api/message`

- `response.json()` transforme la réponse reçue (format JSON) en un objet utilisable

- Ensuite, on peut utiliser les données retournées dans le code JS

- En cas d’erreur (connexion impossible, mauvaise URL, etc.), le `.catch(...)` permet d’afficher un message d’erreur

#### 3. Résultat dans la console du navigateur

Message du serveur : 
```bash
Bonjour depuis le serveur !
```

!!! Tip "fetch"
    `fetch()` est une méthode très pratique pour connecter le JavaScript côté client avec les données du serveur.


