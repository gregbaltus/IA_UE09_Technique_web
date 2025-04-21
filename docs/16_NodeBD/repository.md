# 3. Repository

## 3.1 Introduction au concept de Repository

Pour pouvoir **discuter avec une base de données**, nous allons organiser notre code de manière claire et structurée.

La méthode que nous allons utiliser est la suivante :
Créer une **classe dédiée** à la gestion de la base de données, que l’on appelle un **repository**.


### Qu’est-ce qu’un repository ?

Un **repository** est un fichier JavaScript (une classe) qui a pour rôle de :

- **se connecter à la base de données** (au moment de sa création),

- contenir des **méthodes** (fonctions) qui permettent de faire des actions sur la base.

Chaque méthode aura une mission bien précise :

- récupérer toutes les données d’une table (`SELECT *`)

- récupérer une donnée par son identifiant (`SELECT WHERE id = ...`)

- ajouter une donnée (`INSERT INTO`)

- éventuellement modifier ou supprimer une donnée (`UPDATE`, `DELETE`)


### Pourquoi faire ça dans une classe à part ?

- Cela permet de **séparer la gestion des données** du reste de l’application (routes, logique du site, etc.)

- Le code est **plus lisible**, **plus réutilisable**, et plus facile à tester

- Si on change de base de données plus tard, on n’aura à modifier que cette partie


Pour l’instant, vous pouvez voir un repository comme un **fichier `.js`** contenant plusieurs fonctions, et qui est chargé de **parler avec la base de données**.

## 3.2 Rappel : classe / objet

Même si vous n’avez pas encore vu ce concept en profondeur, il est utile de connaître quelques bases sur les **classes** et les **objets**, car nous allons déjà en utiliser pour les `Repository`.

---

### Classe et objet, c’est quoi ?

- Une **classe**, c’est un peu comme un **modèle** ou un **plan** que l’on écrit dans un fichier.

- Un **objet**, c’est une **version concrète** de ce plan, avec laquelle on peut interagir dans le code.

Par exemple :  

On peut imaginer qu’une classe représente un "robot", et chaque objet est un **robot réel** qui exécute des actions.


### Et dans notre cas ?

Dans notre cas, on va créer une classe qui représente un **accès à la base de données** (ce qu’on appelle un *repository*).  
Ce repository contiendra :

- une **connexion à la base**

- plusieurs **méthodes** pour effectuer des actions : lire, ajouter, chercher...

---

### Pourquoi utiliser une classe ?

On pourrait faire tout ça dans un simple fichier `.js` avec quelques fonctions,  
mais ce ne serait **pas très organisé**.

En utilisant une classe :

- on suit une structure **plus propre** et **standard** (comme dans les vrais projets)

- on **regroupe toutes les fonctions liées à la base de données** dans un seul endroit

- on pourra plus facilement **faire évoluer le code plus tard**

Ainsi, on va se permettre d'écrire la syntaxe d'une classe même si vous n'avez pas encore bien vu ce concept. Pour le moment, vous pouvez retenir que c'est similaire à un fichier qui contient différentes fonctions similaires. 

## 3.3 Détails sur la classe Repository

Nous allons maintenant construire un **exemple concret de repository**.

Imaginons que nous avons une base de données contenant une table appelée `users`.  
Cette table pourrait contenir les colonnes suivantes :

- `id` : identifiant unique

- `nom` : le nom de l’utilisateur

- `email` : son adresse mail

*(Voir image ci-dessous pour une représentation visuelle de la table)*


### Objectif

Nous allons créer une **classe `UserRepository`** dont le rôle sera de :

- se connecter à la base de données

- proposer plusieurs **méthodes** (=fonctions) pour interagir avec la table `users`

Cette classe sera définie dans un **fichier à part**, par exemple `UserRepository.js`.


### Pourquoi faire ça ?

Créer une classe comme celle-ci nous permet de :

- **centraliser** toute la logique d’accès aux données

- **réutiliser** facilement les méthodes dans notre serveur Express

- écrire un code plus **propre, clair et standardisé**

---

### Exemple de structure de la classe `UserRepository`

```js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

class UserRepository {
  constructor() {
    // Le constructeur est appelé lorsqu’on crée un "objet" UserRepository
    // C’est ici que l’on se connecte à la base de données
    this.db = new sqlite3.Database(path.join(__dirname, "../data/site.db"));
  }

  // Méthode pour récupérer tous les utilisateurs
  getAllUsers(callback) {
    const query = "SELECT * FROM users";
    this.db.all(query, [], (err, rows) => {
        if (err) {
        return callback(err);
        }
        callback(null, rows); // rows est un tableau contenant tous les utilisateurs
    });
  }

  // Méthode pour récupérer un utilisateur par son ID
  getUserById(id, callback) {
    const query = "SELECT * FROM users WHERE id = ?";
    this.db.get(query, [id], (err, row) => {
        if (err) {
        return callback(err);
        }
        callback(null, row); // row est l’objet représentant l’utilisateur, ou null si non trouvé
    });

  }

  // Méthode pour insérer un nouvel utilisateur
  insertUser(nom, email, callback) {
    const query = "INSERT INTO users (nom, email) VALUES (?, ?)";
    this.db.run(query, [nom, email], function (err) {
        if (err) {
        return callback(err);
        }
        // this.lastID contient l’id du nouvel utilisateur inséré
        callback(null, { id: this.lastID });
    });
  }
}

module.exports = UserRepository;
```

### Ce qu’on remarque ici

- **Le constructeur (constructor)** est exécuté une fois lorsqu’on crée un objet `UserRepository`

- La base de données est ouverte une seule fois, grâce à `sqlite3.Database(...)`

- Chaque méthode correspond à une action possible sur la base de données :

        1. lire tous les utilisateurs

        2. lire un utilisateur spécifique

        3. ajouter un nouvel utilisateur


## 3.4 La méthode `getAll()`

Commençons par la méthode la plus simple : celle qui permet de **récupérer tous les éléments** d’une table.  
Dans notre exemple, on souhaite récupérer **tous les utilisateurs** présents dans la table `users`.

---

### Objectif

La méthode `getAllUsers()` va :

- envoyer une requête SQL à la base de données (`SELECT * FROM users`)

- récupérer tous les utilisateurs sous forme d’un tableau

- passer ce tableau à une fonction callback, pour que notre serveur Express puisse ensuite **les envoyer au frontend en JSON** (on en rediscute à la section suivante)


### Exemple de méthode `getAllUsers()`

```js
getAllUsers(callback) {
  const query = "SELECT * FROM users";
  this.db.all(query, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows); // rows est un tableau contenant tous les utilisateurs
  });
}
```

Détail du fonctionnement :

-`this.db.all(...)` est une méthode fournie par SQLite pour exécuter une requête qui retourne plusieurs résultats.

- `rows` est un tableau d’objets JavaScript, où chaque objet correspond à une ligne de la table `users`.

Exemple de contenu de rows :
```js
[
  { id: 1, nom: "Alice", email: "alice@example.com" },
  { id: 2, nom: "Bob", email: "bob@example.com" }
]
```
- Le `callback(null, rows)` permet d’utiliser ce tableau ailleurs dans le code, typiquement pour l’envoyer au navigateur.

Cette méthode est très pratique pour afficher une **liste complète d’éléments** depuis la base dans une page web.
On l’utilisera pour afficher dynamiquement des données avec JavaScript.

Nous verrons comment nous pouvons utiliser cette méthode dans la section suivante. 

## 3.5 La méthode `getById()`

Cette méthode permet de **récupérer un seul élément précis** depuis la base de données, en fonction de son identifiant (`id`).

---

### Objectif

La méthode `getUserById(id, callback)` va :

- recevoir un identifiant (par exemple `3`)

- exécuter une requête SQL qui recherche l’utilisateur correspondant

- renvoyer cet utilisateur à travers le callback


### Exemple de méthode `getUserById()`

```js
getUserById(id, callback) {
  const query = "SELECT * FROM users WHERE id = ?";
  this.db.get(query, [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row); // row est l’objet représentant l’utilisateur, ou null si non trouvé
  });
}
```

### Détail du fonctionnement

- On utilise this.db.get(...) car on attend un seul résultat.

- Le `?` dans la requête est un paramètre sécurisé (empêche les injections SQL).

- `row` contient l’objet utilisateur, par exemple :

```js
{ id: 3, nom: "Claire", email: "claire@example.com" }
```

- Si aucun utilisateur ne correspond à l’ID donné, `row` vaudra `null`.

Cette méthode est utile lorsqu’on veut afficher ou utiliser un seul élément précis, identifié par son ID.

## 3.6 La méthode `insert()`

Cette méthode permet **d’ajouter une nouvelle ligne dans la base de données**.  
Dans notre exemple, cela signifie ajouter un nouvel utilisateur.

---

### Objectif

La méthode `insertUser(nom, email, callback)` va :
- recevoir un nom et un email
- exécuter une requête SQL `INSERT INTO`
- appeler le callback lorsque l’insertion est terminée

---

### Exemple de méthode `insertUser()`

```js
insertUser(nom, email, callback) {
  const query = "INSERT INTO users (nom, email) VALUES (?, ?)";
  this.db.run(query, [nom, email], function (err) {
    if (err) {
      return callback(err);
    }
    // this.lastID contient l’id du nouvel utilisateur inséré
    callback(null, { id: this.lastID });
  });
}
```

### Détail du fonctionnement

- `this.db.run(...)` permet d’exécuter une requête sans attendre de résultat (comme un `INSERT`)

- Les `?` sont des paramètres sécurisés

- La fonction callback reçoit un objet `{ id: ... }` contenant l’identifiant du nouvel utilisateur inséré

- On utilise `function (...)` (et non une arrow function) pour pouvoir accéder à `this.lastID`

Cette méthode est utile pour enregistrer une nouvelle donnée dans la base, généralement suite à un formulaire rempli par l’utilisateur.

**Avant d'apprendre à utiliser ces fonctions** pour pouvoir les utiliser dans le backend et le frontend, il va falloir discuter de comment on peut transférer les résultats de ces méthodes du backend au frontend. Pour cela, nous allons introduire **AJAX**.

