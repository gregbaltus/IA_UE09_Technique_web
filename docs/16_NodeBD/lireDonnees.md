# 5. Lire des données depuis la base de données

## 5.1 Lire toutes les données avec Express + fetch (getAllUser)

Nous avons maintenant tous les éléments nécessaires pour :

- interroger la base de données (avec notre méthode `getAllUsers()` du repository),

- récupérer ces données dans le serveur Express,

- les envoyer au navigateur via une route `GET`,

- et les afficher côté client avec `fetch()`.

### Étapes résumées

1. Le client (navigateur) utilise `fetch("/api/users")`

2. Express intercepte cette requête via une route `GET /api/users`

3. Le serveur appelle la méthode `getAllUsers()` de notre `UserRepository`

4. Le résultat est renvoyé au client au format JSON


### Exemple de code dans `server.js`

```js
const UserRepository = require("./repository/UserRepository");
const userRepo = new UserRepository();

app.get("/api/users", (req, res) => {
  userRepo.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la récupération" });
    }
    res.json(users);
  });
});
```

Cette route interagit avec la base et renvoie la liste complète des utilisateurs en JSON.

### Exemple de code côté client `script.js`

```js
fetch("/api/users")
  .then(response => response.json())
  .then(users => {
    const container = document.getElementById("users");

    users.forEach(user => {
      const p = document.createElement("p");
      p.textContent = `${user.nom} – ${user.email}`;
      container.appendChild(p);
    });
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  });
```

Lorsque la page se charge, le script :

- récupère les utilisateurs depuis le serveur,

- crée dynamiquement des éléments HTML (dans le `forEach`),

- et les insère dans la page sans rechargement (`container.appendChild(p)`).

C’est une utilisation simple et efficace de fetch + DOM pour afficher des données dynamiques.

### Exemple HTML associé (index.html ou autre)

```html
<body>
  <h1>Liste des utilisateurs</h1>
  <section id="users"></section>
</body>
```

Au final avec tous ces codes voici ce qu'il se passe :

- Lorsque la page est chargée, le navigateur envoie automatiquement une requête `GET` vers `/api/users`

- Le serveur récupère les données dans la base et les retourne au client

- Le JavaScript affiche les utilisateurs dynamiquement dans la page


## 5.2 Lire toutes les données avec Express + fetch (getUserById)

Dans cette section, nous allons utiliser la méthode `getUserById()` de notre `UserRepository` pour **récupérer un seul utilisateur** en fonction de son identifiant.

---

### Objectif

- Le frontend appelle une route comme `/api/users/2`

- Le serveur interroge la base de données et renvoie **uniquement l’utilisateur avec l’ID 2**

- Le JavaScript affiche ses informations dans la page

---

### Exemple de route dans `server.js`

```js
app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;

  userRepo.getUserById(id, (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.json(user);
  });
});
```

### Explication
- `:id` dans l’URL signifie que l’on attend un paramètre dynamique (ex. : `/api/users/3`)

- `req.params.id` permet de récupérer cette valeur dans le code

- La méthode `getUserById` cherche dans la base un utilisateur correspondant

- On retourne une **erreur 404** si aucun utilisateur n’est trouvé

- Si l'utilisateur est trouvé, on le retourne dans un `json`

### Exemple de code client `script.js`
```js
fetch("/api/users/2")
  .then(response => response.json())
  .then(user => {
    const container = document.getElementById("user");

    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${user.nom}</h2>
      <p>Email : ${user.email}</p>
    `;
    container.appendChild(div);
  })
  .catch(error => {
    console.error("Erreur lors de la récupération de l’utilisateur :", error);
  });
```

On récupère la réponse contenant les informations sur l'utilisateurs et on les affiche dans un nouveau `div`.

### Exemple HTML associé
```html
<body>
  <h1>Fiche utilisateur</h1>
  <section id="user"></section>
</body>
```
Au terme de tous ces scripts le résultat attendu est le suivant :

- L’utilisateur avec l’ID 2 est récupéré depuis le serveur

- Ses informations sont affichées dans la page

- Le tout se fait **sans rechargement**, grâce à `fetch()`
