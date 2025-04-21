#  Récupérer des données dans Express

## 2.1 Récupération des données

Lorsque l’utilisateur remplit un formulaire et clique sur "Envoyer", son navigateur envoie une **requête HTTP ou HTTPS** vers le serveur.

Cette requête contient toutes les **informations saisies dans le formulaire** : par exemple le prénom, le message, ou le contenu d’un article.  
Ces données sont transmises **selon la méthode définie dans le formulaire** (`GET` ou `POST`), et sont envoyées avec la requête.


###  Côté client

Le navigateur prend les données du formulaire et les **prépare** pour les envoyer :

- soit **dans l’URL** (si on utilise `GET`),

- soit **dans le corps de la requête** (si on utilise `POST`).

---

### Côté serveur

Le serveur, lui, **reçoit la requête**, l’analyse, et en **extrait les données**.  
Grâce à Express, ces données peuvent être **représentées sous forme d’objet JavaScript**, ce qui les rend faciles à lire, à afficher, ou à utiliser dans un traitement.


Le serveur joue donc le rôle d’interprète : il reçoit une requête contenant des informations, et les convertit en données exploitables dans le code js.


## 2.2 Traitement des données avec GET

Nous allons maintenant voir **comment récupérer les données envoyées par un formulaire GET** dans Express.


### Exemple de formulaire HTML (méthode GET)

```html
<form action="/bonjour" method="GET">
  <label for="prenom">Prénom :</label>
  <input type="text" id="prenom" name="prenom">
  <button type="submit">Envoyer</button>
</form>
```

Ce formulaire enverra une requête de ce type au serveur :

```bash
/bonjour?prenom=Alice
```


### Côté serveur : récupérer la donnée dans Express

Dans le fichier `server.js`, on définit **une route GET** correspondant à `/bonjour` :

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/bonjour", (req, res) => {
  const prenom = req.query.prenom;
  res.send(`Bonjour ${prenom} !`);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
```

- `req.query` est un objet contenant toutes les données envoyées dans l’URL.

- Ici, `req.query.prenom` va contenir la valeur tapée dans le champ du formulaire.

-  Le serveur répond avec un message personnalisé grâce à `res.send('Bonjour ${prenom} !')`. 

Lorsqu’un utilisateur soumet le formulaire, il envoie une **requête HTTP** au serveur.
La fonction `res.send("Bonjour Alice !")` permet au serveur d’**envoyer une réponse HTTP** contenant le texte `"Bonjour Alice !"` au client (le navigateur).

Si l’utilisateur tape "Alice" et clique sur "Envoyer", il verra :

```html
Bonjour Alice !
```

## 2.3 Traitement des données avec POST

Contrairement à la méthode GET, avec POST, les données ne sont **pas visibles dans l’URL**.  
Elles sont envoyées dans le **corps de la requête**, de manière invisible pour l’utilisateur.

Voyons comment récupérer ces données dans Express.

---

###  Exemple de formulaire HTML (méthode POST)

```html
<form action="/contact" method="POST">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom">

  <button type="submit">Envoyer</button>
</form>
```

### Côté serveur : récupérer la donnée dans Express

```js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware nécessaire pour lire les données POST (formulaires HTML)
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const nom = req.body.nom;
  res.send(`Bonjour ${nom}, votre message a été reçu.`);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

- `app.use(express.urlencoded(...))` est un middleware qui permet à Express de lire les données envoyées par un formulaire HTML.

- `req.body` contient toutes les valeurs envoyées via POST.

- `req.body.nom` permet ici de récupérer la valeur du champ "nom".

- `res.send(...)` envoie une réponse HTTP contenant un message personnalisé.

!!! Tip "urlencoded"
    Sans le middleware `express.urlencoded(...)`, `req.body` serait undefined.
    Ce middleware est indispensable pour traiter les données des formulaires POST.

Si l’utilisateur entre "Alice" et clique sur "Envoyer", il recevra comme réponse :

```bash
Bonjour Alice, votre message a été reçu.
```


## 2.4 Envoyer une réponse

Dans les sections précédentes, nous avons déjà vu que le serveur peut **répondre** à une requête du client avec la méthode `res.send(...)`.  
C’est grâce à cela que nous avons pu afficher un message simple comme :


```js
res.send("Bonjour Alice !");
```

Mais il existe plusieurs façons d’envoyer une réponse au client.

### Envoyer directement du HTML via res.send()

Il est tout à fait possible d’envoyer du code HTML directement depuis le serveur.

```js
res.send("<h1>Merci pour votre message !</h1>");
```

Cela fonctionne, mais :

- ce n’est pas très pratique pour de longues pages HTML,

- le code HTML est mélangé avec le JavaScript du serveur,

- difficile à maintenir sur le long terme

À utiliser pour des messages très simples uniquement.

### Rediriger vers une autre page HTML

Une solution plus propre est de rediriger le client vers un fichier HTML statique, que l’on aura placé dans le dossier `public/`.

```js
res.redirect("/merci.html");
```

Dans ce cas, le serveur demande au navigateur d’aller chercher la page `/merci.html`. Le problème est que dans ce cas nous n'envoyons aucune information contenu dans le formulaire...

### Rediriger vers une page HTML + transmettre des données simples

Il est possible de transmettre des données **dans l’URL** pour qu’une page HTML dynamique (grâce à JavaScript) les récupère.

```js
res.redirect(`/resultat.html?nom=${encodeURIComponent(prenom)}`);
```

Dans la page `resultat.html`, un script JavaScript peut alors lire la valeur depuis l’URL et adapter l’affichage :

```js 
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");
document.getElementById("message").textContent = `Bonjour ${nom} !`;
```

Ce script est à mettre dans le frontend et non pas dans le fichier backend (server.js).

**Limites :**

- Données visibles dans l’URL

- Impossible d’envoyer des objets complexes

- Pas sécurisé pour des informations sensibles

D'autres méthodes sont possibles pour outre-passer ces limites, comme l'utilisation de **AJAX**, néanmoins il s'agit là de fonctionnalité plus avancée que nous ne verrons pas dans le cadre de ce cours.

<!-- Nous verrons dans le cours suivant comment lever ces limitations en utilisant **AJAX**, qui permet d’échanger des données plus librement entre client et serveur.

###  Envoyer une réponse au format JSON

Lorsque l’on construit une API, il est courant de répondre avec du JSON, que le frontend peut lire avec JavaScript.

```js 
res.json({ message: "Données reçues", success: true });
```

Cela n’est **pas encore utile dans notre cours actuel**, mais ce sera essentiel dès que nous utiliserons **AJAX**. -->


## 2.5 Lire les informations dans l’URL côté client

Il peut arriver que le **serveur veuille transmettre une information** à une page HTML, sans passer par AJAX ou stockage local.  
Une méthode simple consiste à **ajouter des paramètres dans l’URL** (par exemple après une redirection), et à les lire ensuite **côté client avec JavaScript**.

### Exemple d’URL avec paramètres :

```url
http://localhost:3000/resultat.html?user=John&id=123
```
Cette URL contient l'adresse de la page html à affiché `resultat.html` et également deux paramètres `user` dont la valeur est `John` et l'`id` dont la valeur est `123`. À partir de cette URL il est possible de récupérer ces paramètres en utilisant simplement un code JS côté client (c'est-à-dire sans utiliser node.js)

### Code JS pour lire ces paramètres

```js
const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get("user");  // 'John'
const id = urlParams.get("id");      // '123'

console.log(user, id);
```

### Explication

- window.location.search récupère la partie de l’URL après le ? (appelée query string)

- URLSearchParams permet d’analyser cette partie et d’accéder facilement aux différentes valeurs envoyées

- Vous pouvez ensuite utiliser ces valeurs pour personnaliser l’affichage de la page

### À quoi ça sert ?
Cela peut être un moyen simple pour le serveur d’envoyer une information au frontend, sans recharger de données ni utiliser de base de données.
Par exemple :

- Afficher un message personnalisé (Bonjour John !)

- Charger un élément en fonction d’un ID

- Adapter le contenu ou l’apparence de la page

!!! Tip "Attetntion"
    Attention : les données envoyées dans l’URL sont visibles par tout le monde.
    Ce n’est pas une méthode sécurisée, et elle a des limitations (taille, confidentialité…).
    Une façon plus sécurisée de faire serait, par exemple, d'utiliser AJAX.

