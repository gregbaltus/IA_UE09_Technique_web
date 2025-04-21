# 7. Mini tutoriel guidé – Liste et ajout d’utilisateurs

Nous avons vu beaucoup de théorie jusqu’à présent : création de table, repository, insertions, lectures, et gestion des routes avec Express.

Dans ce tutoriel, nous allons **mettre tout cela en pratique** pour bien comprendre **comment connecter un site web à une base de données**.

---

###  Objectif du mini-projet

Nous allons créer un **mini site avec deux pages** :

1. **`liste.html`** : affiche un **tableau** contenant tous les utilisateurs enregistrés dans la base de données.

2. **`ajout.html`** : contient un **formulaire** pour ajouter un nouvel utilisateur (nom + email).  

Une fois l’ajout effectué, l’utilisateur est redirigé vers la même page avec un message de confirmation.

---

### Structure du projet
```php-template
mini-projet-users/ 
├── public/ 
|    ├── css/
|    |    └── style.css
|    ├── js/
|    |    └── script_ajout.js
|    |    └── script_liste.js
│    ├── ajout.html
│    └── liste.html
├── Repository/
|    └── UserRepository.js 
├── data/  
|    └── users.db 
└── server.js
```

### Création de la table `users` dans SQLite
Dans DataGrip entrez les commande suivante pour créer et peupler la table : 

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT NOT NULL,
  email TEXT NOT NULL
);
```

```sql
INSERT INTO users (nom, email) VALUES
  ('Alice', 'alice@example.com'),
  ('Bob', 'bob@example.com'),
  ('Charlie', 'charlie@example.com');
```

### Fichier liste.html

```html 
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Liste des utilisateurs</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script_liste.js" defer></script>
</head>
<body>
  <h1>Liste des utilisateurs</h1>
  <table>
    <thead>
      <tr><th>Nom</th><th>Email</th></tr>
    </thead>
    <tbody id="liste-users"></tbody>
  </table>

  <a href="/ajout.html">Ajouter un utilisateur</a>
</body>
</html>
```

Il s'agit ici d'un simple site contenant un tableau avec la liste des utilisateurs.

### Fichier ajout.html
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ajouter un utilisateur</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script_ajout.js" defer></script>
</head>
<body>
  <h1>Ajouter un utilisateur</h1>

  <p id="message"></p>

  <form action="/ajouter-user" method="POST">
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom" required>

    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Envoyer</button>
  </form>

  <a href="/liste.html">Retour à la liste</a>
</body>
</html>
```

Il s'agit ici d'un simple formulaire contenant la liste des utilisateurs. 

### Fichier style.css
```css
body {
  font-family: sans-serif;
  padding: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

form {
  max-width: 400px;
}

input {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 5px;
}
```

### Fichier script_liste.js

```js
// Ce script est utilisé uniquement dans liste.html pour charger les utilisateurs
fetch("/api/users")
  .then(response => response.json())
  .then(users => {
    const tbody = document.getElementById("liste-users");
    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${user.nom}</td><td>${user.email}</td>`;
      tbody.appendChild(row);
    });
  })
  .catch(err => console.error("Erreur chargement utilisateurs :", err));
```
Ce script, permet d'appeler le serveur sur la route `"/api/users"`, le serveur va alors renvoyer une réponse sous forme d'un tableau json contenant l'ensemble des utilisateurs. Ce script va alors parcourir ce tableau et créer autant de ligne dans le tableau HTML.

### Fichier script_ajout.js
```js
const params = new URLSearchParams(window.location.search);
const etat = params.get("etat");
const message = document.getElementById("message");

if (etat === "ok") {
    message.textContent = "Utilisateur ajouté avec succès.";
    message.style.color = "green";
} else if (etat === "erreur") {
    message.textContent = "Une erreur est survenue.";
    message.style.color = "red";
}
```
Ce script regarde les paramètres dans l'URL, plus précisément, il regarde le paramètre `"etat"` si celui-ci à la valeur "Ok", il affiche un message de succès, s'il a la valeur "erreur" il affiche un message d'erreur.

### Fichier UserRepository.js

```js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

class UserRepository {
  constructor() {
    this.db = new sqlite3.Database(path.join(__dirname, "../data/users.sqlite"));
  }

  getAllUsers(callback) {
    const query = "SELECT * FROM users";
    this.db.all(query, [], (err, rows) => {
      if (err) return callback(err);
      callback(null, rows);
    });
  }

  insertUser(nom, email, callback) {
    const query = "INSERT INTO users (nom, email) VALUES (?, ?)";
    this.db.run(query, [nom, email], function (err) {
      if (err) return callback(err);
      callback(null, { id: this.lastID });
    });
  }
}

module.exports = UserRepository;
```
Ce script contient la classe `UserRepository` qui discute avec la BD. Le `consructor` établit la connexion à la BD. La méthode `getAllUsers` permet d'obtenir l'entièreté des utilisateurs. La méthode `insertUser` permet d'ajouter un utilisateur à la table de la BD.

### Fichier server.js
```js
const express = require("express");
const path = require("path");
const UserRepository = require("./Repository/UserRepository");

const app = express();
const PORT = 3000;
const userRepo = new UserRepository();

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// API - Récupération de tous les utilisateurs
app.get("/api/users", (req, res) => {
  userRepo.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    res.json(users);
  });
});

// Traitement du formulaire
app.post("/ajouter-user", (req, res) => {
  const { nom, email } = req.body;
  if (!nom || !email) return res.redirect("/ajout.html?etat=erreur");

  userRepo.insertUser(nom, email, (err) => {
    if (err) return res.redirect("/ajout.html?etat=erreur");
    res.redirect("/ajout.html?etat=ok");
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

Le serveur établit plusieurs routes, quand la première (`"/api/users"`) est appelée, elle va utiliser la fonction `getAllUsers` pour récupérer l'ensemble des utilisateurs, elle va ensuite envoyer ces informations sous forme d'un tableau json à la page qui l'a contacté.
La deuxième route (`"/ajouter-user"`) va vérifier si le formulaire qui l'a contacté est bien complet (sinon il envoi un message d'erreur). S'il est bien complet, il va utiliser la méthode `insertUser` pour ajouter une ligne dans la table `users` si cette ligne est ajoutée, il redirige vers la page `"/ajout.html"` avec un paramètre dans l'URL : `"etat=ok"`.

### Explication rapide des rôles

- `UserRepository.js` : contient les fonctions pour lire et écrire dans la base SQLite.

- `server.js` : définit les routes Express qui reçoivent les requêtes, appellent les bonnes fonctions, et redirigent ou envoient des réponses.

- `liste.html` : affiche dynamiquement les utilisateurs grâce à fetch().

- `ajout.html` : contient un formulaire HTML classique envoyé en POST.

