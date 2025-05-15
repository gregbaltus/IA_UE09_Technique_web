# 6. Sauvegarder des données dans la base de données

Jusqu’à présent, nous avons utilisé notre base de données uniquement pour **lire des informations**.  
Nous allons maintenant apprendre à **insérer de nouvelles données** dans la base grâce à un **formulaire HTML classique**.

---

## 6.1 Objectif

Nous allons :

- créer un formulaire HTML permettant d’ajouter un utilisateur (`nom`, `email`)

- envoyer ce formulaire via une requête POST vers le serveur

- insérer les données dans la base grâce à `insertUser(...)`

- rediriger vers une page de confirmation ou d'erreur

---

###  Exemple de formulaire HTML (`ajout.html`)

```html
<h2>Ajouter un utilisateur</h2>

<form action="/ajouter-user" method="POST">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" required>

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Envoyer</button>
</form>
```

Remarquez l'attribut `action="/ajouter-user"` : c’est l’adresse vers laquelle le formulaire va être envoyé.
L'attribut `method="POST"` indique qu’il s’agit d’un envoi de données.

###  Route Express dans server.js
```js
app.use(express.json()); // Middleware pour lire le JSON dans le corps de la requête

app.post("/ajouter-user", (req, res) => {
  const { nom, email } = req.body;

  if (!nom || !email) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  userRepo.insertUser(nom, email, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erreur d’insertion" });
    }
    res.status(201).json({ id: result.id });
  });
});
```

Dans ce code, on voit que l'on crée une route qui va (si pas d'erreur), appeler la méthode insertUser pour pouvoir sauvegarder les informations dans la base de données.

### Résultat attendu

- L’utilisateur remplit le formulaire et clique sur **"Envoyer"**

- Le navigateur envoie la requête `POST` au serveur

- Le serveur insère les données dans la base avec `insertUser(...)`

- L’utilisateur est redirigé vers la page d’ajout, avec un message de succès ou d’erreur

Cette méthode ne nécessite pas de JavaScript avancé et fonctionne très bien pour des formulaires simples.



