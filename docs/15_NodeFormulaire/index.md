# Introduction


## 1.1 Rappel sur les formulaires HTML

Un **formulaire HTML** permet à un utilisateur de **remplir des informations** (texte, mot de passe, sélection, etc.) et de les **envoyer au serveur**.

Les formulaires sont présents partout sur le web : inscription, connexion, recherche, envoi de message, etc.

Voici un exemple simple de formulaire HTML :

```html
<form action="/bonjour" method="GET">
  <label for="prenom">Prénom :</label>
  <input type="text" id="prenom" name="prenom">
  <button type="submit">Envoyer</button>
</form>
```

- `action="/bonjour"` : Indique l’adresse vers laquelle les données doivent être envoyées.

- `method="POST"` : Indique la méthode HTTP utilisée pour envoyer les données (GET ou POST).

- `name="nom"` : l’attribut name sert de **clé** côté serveur. Sans lui, Express ne pourra pas récupérer la valeur du champ.


Dans cet exemple :

- L’utilisateur entre son prénom,

- Lorsqu’il clique sur le bouton `"Envoyer"`, une requête `GET` est envoyée à l’adresse `/bonjour`,

- Les données du champ sont envoyées au serveur, et peuvent être traitées.


## 1.2 Rappel sur les méthodes GET et POST

Lorsqu’un formulaire est envoyé, il utilise une **méthode HTTP** pour transmettre les données au serveur.  
Les deux méthodes les plus courantes sont **GET** et **POST**.

---

#### Méthode GET

Avec la méthode **GET**, les données sont ajoutées directement dans l’URL.

```html
<form action="/bonjour" method="GET">
  <input type="text" name="prenom" value="Alice">
  <button type="submit">Envoyer</button>
</form>
```

Si l’utilisateur clique sur "Envoyer", cela produit une requête de ce type :

```bash
/bonjour?prenom=Alice
```

#### Méthode POST

Avec la méthode POST, les données sont envoyées dans le corps de la requête (invisible dans l’URL).

```html
<form action="/bonjour" method="POST">
  <input type="text" name="prenom" value="Alice">
  <button type="submit">Envoyer</button>
</form>
```

Cette fois, l’URL sera simplement `/bonjour`, mais les données (`prenom=Alice`) seront envoyées en arrière-plan.


## 1.3 Récupérer les données côté serveur

Suivant la méthode, utiliser dans le formulaire (GET ou POST) la récupération des données sera un peu différent du côté serveur. La prochaine section explique comment faire avec Express.