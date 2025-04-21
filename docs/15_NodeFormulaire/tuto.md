# Tuto récupérer des données d'un formulaire

## 3.1 Tuto mini-site : formulaire de contact avec validation serveur

Dans ce tutoriel, nous allons créer une petite page de **formulaire de contact** avec les champs suivants :
- Prénom
- Nom
- Email
- Message

Ce formulaire sera envoyé avec la **méthode POST** vers un serveur Express.

### Objectif :
- Le serveur vérifie que **tous les champs sont remplis**
- Si c’est le cas ➜ **redirection vers une page de confirmation**
- Sinon ➜ **redirection vers le formulaire avec un paramètre d’erreur dans l’URL**
- Le message d’erreur est affiché dynamiquement via JavaScript

!!! Tip "Vérification des champs côté client"
    Notez qu'il est également possible de vérifier que les champs soient bien complétés du côté client avec la balise `required` (voir tuto HTML sur les formulaires).
    Ici, pour le but de l'exercice, nous le vérifions uniquement du côté serveur, mais il est généralement bon de le vérifier des deux côtés. 

### Structure du projet

```php-template
mini-site/ 
├── public/ 
|    ├── css/
|    |    └── style.css
|    ├── js/
|    |    └── script.js
│    ├── contact.html
│    └── confirmation.html
└── serveur.js
```


### La partie HTML (contact.html et confirmation.html)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Contact</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>
  <main>
    <h1>Formulaire de contact</h1>

    <p id="erreur" class="erreur-message"></p>

    <form action="/contact" method="POST">
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom"><br>

      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom"><br>

      <label for="email">Email :</label>
      <input type="email" id="email" name="email"><br>

      <label for="message">Message :</label><br>
      <textarea id="message" name="message" rows="5"></textarea><br>

      <button type="submit">Envoyer</button>
    </form>
  </main>
</body>
</html>
```


```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Confirmation</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <main>
    <h1>Merci !</h1>
    <p>Votre message a bien été envoyé.</p>
    <a href="/contact.html">Retour au formulaire</a>
  </main>
</body>
</html>
```

### Le CSS (style.css)

```css 
body {
  font-family: sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}

main {
  max-width: 500px;
  margin: auto;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

label {
  display: block;
  margin-top: 15px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #336699;
  color: white;
  border: none;
  border-radius: 4px;
}

.erreur-message {
  color: red;
  font-weight: bold;
}
```

### Le script frontend (script.js)

```js
const params = new URLSearchParams(window.location.search);
const erreur = params.get("erreur");

if (erreur === "1") {
  const messageErreur = document.getElementById("erreur");
  messageErreur.textContent = "Tous les champs doivent être remplis.";
}
```

Ce script regarde si un paramètre erreur est présent dans l'URL, si c'est le cas, il sélectionne la balise `"erreur"` du code HTML et y ajoute un texte. 

### Le script backend (server.js)

```js
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware pour lire les données de formulaire
app.use(express.urlencoded({ extended: true }));

// Sert les fichiers statiques (HTML, CSS, JS)
app.use(express.static("public"));

// Pour envoyerr sur la page de contact (plutôt que index.html)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
  });

app.post("/contact", (req, res) => {
  const { prenom, nom, email, message } = req.body;

  if (!prenom || !nom || !email || !message) {
    // Redirection avec un paramètre dans l'URL en cas d'erreur
    return res.redirect("/contact.html?erreur=1");
  }

  // Si tout est rempli, redirection vers une page de confirmation
  res.redirect("/confirmation.html");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```
Ce code permet de créer un serveur et de vérifier que les données reçues par une requête post sont bien complète, si c'est le cas, on redirige vers la page de confirmation, sinon on redirige vers la page de contact, mais avec un paramètre `"erreur"` dans l'URL. 

Ce projet montre un cycle complet : formulaire → validation → redirection   