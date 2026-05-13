# Appels d’API simples

## 2.1 – Appeler une API depuis le frontend

La manière la plus simple d'utiliser une API dans un site web, c’est de faire l’appel directement depuis le navigateur, c’est-à-dire depuis le code JavaScript du frontend.

Cela permet de :

- faire une requête API avec `fetch()`,

- récupérer la réponse (souvent en JSON),

- et l’afficher directement sur la page.

C’est la méthode que nous utiliserons dans ce cours pour découvrir le fonctionnement des APIs.


### Avantages

- Facile à mettre en place

- Aucun besoin de serveur ou de backend

- Réponse directement disponible pour mise à jour de l'interface


### Inconvénients

Même si c’est simple, ce **n’est pas la méthode la plus sécurisée**, car :

- Les clés d’API sont visibles dans le code source accessible à tous via les outils du navigateur

- Vous ne pouvez pasprotéger vos requêtes ou contrôler l’usage de l’API

- Certaines APIs refusent les appels directs depuis le navigateur pour cette raison (problème de CORS)


Dans les cas où l’on veut protéger une clé API ou contrôler l’accès, il est préférable de passer par un backend (comme un serveur Node.js) pour faire les appels à l’API en toute sécurité.


## 2.2 – Exemple : API Advice Slip (frontend)

Dans cet exemple, nous allons créer un mini site qui appelle une API publique nommée [Advice Slip](https://api.adviceslip.com), qui renvoie un conseil de vie aléatoire.

L'appel se fera directement depuis le navigateur, sans passer par un backend.

---

### Structure du projet

```php-template
advice-frontend/
├── public/
│ ├── index.html
│ └── css/
│   └── style.css
│ └── js/
│   └── advice.js
├── server.js
```


### `server.js`

Nous utilisons un petit serveur Express uniquement pour servir les fichiers HTML et JS.

```js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
```

!!! Tip "import"
    Il est important de noter la différence dans les `import`. Nous n'utilisons plus le `require` comme nous le faisions avant. Quand on travaille avec des API, on va utiliser des `module` ceux-ci demande que l'on utilise des `import` plutôt que des `require`.


### `public/index.html` et `public/css/style.css`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Conseil du jour</title>
  <script src="js/advice.js" defer></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Besoin d’un conseil ?</h1>
  <button id="getAdvice">Donne-moi un conseil</button>
  <p id="advice"></p>
</body>
</html>
```

```css
body {
      font-family: sans-serif;
      text-align: center;
      padding: 2rem;
    }
    #advice {
      margin-top: 2rem;
      font-size: 1.2rem;
      color: #333;
    }
```

### `public/js/advice.js`
```js
document.getElementById("getAdvice").addEventListener("click", () => {
  const adviceDisplay = document.getElementById("advice");
  adviceDisplay.textContent = "Chargement...";

  // Appel direct à l'API externe
  fetch("https://api.adviceslip.com/advice?timestamp=" + Date.now())
    .then(res => res.json())
    .then(data => {
      adviceDisplay.textContent = `💡 ${data.slip.advice}`;
    })
    .catch(err => {
      adviceDisplay.textContent = "Impossible d'obtenir un conseil.";
      console.error(err);
    });
});
```

Dans ce fichier `advice.js`, nous utilisons fetch pour envoyer une requête HTTP vers l’API.

- `fetch("https://api.adviceslip.com/advice")` déclenche une requête GET.

- `.then(res => res.json())` convertit la réponse en objet JSON.

- `data.slip.advice` contient la chaîne de texte (le conseil).

- Le texte est ensuite affiché dans la page.

### Rappel AJAX
Dans les exemples du point précédent (AJAX), nous avions déjà utilisé fetch pour communiquer avec notre propre backend Express, par exemple pour :

```js
fetch("/api/users")
```
ou

```js
fetch("/api/addUser", { method: "POST", body: ... })
```

Ici, le principe est identique, mais au lieu d'appeler notre propre backend, nous appelons un service extérieur, exactement comme s’il s’agissait d’un autre serveur Express.

On parle toujours d'AJAX : appel asynchrone qui ne recharge pas la page et traite les données en arrière-plan.

**Conclusion :** cet exemple montre que faire un appel d’API externe avec fetch est aussi simple que d’appeler une route locale de notre propre serveur.


## 2.3 – Appeler une API depuis le backend (via Express)

Jusqu’à présent, nous avons vu comment appeler une API directement depuis le frontend, c’est-à-dire depuis le code JavaScript exécuté dans le navigateur.

Même si cette méthode est simple et rapide à mettre en place, elle n’est pas toujours possible ni souhaitable.


### Raisons pour lesquelles on préfère parfois passer par le backend

#### 1. Protéger une clé d’API
Lorsqu’une API nécessite une clé d’accès, cette clé ne doit jamais apparaître dans le code visible du navigateur. Si elle est visible, n’importe qui peut la copier et l’utiliser abusivement.

En faisant l’appel depuis le backend (le serveur Express), la clé reste confidentielle, car elle est stockée côté serveur.

#### 2. Contourner les limitations techniques (CORS)
Certaines APIs ne permettent pas les appels directs depuis un navigateur.  
C’est ce qu’on appelle une restriction CORS (Cross-Origin Resource Sharing).  
Dans ce cas, l’appel sera bloqué par le navigateur.

En passant par notre propre serveur, ce problème disparaît, car le navigateur ne contacte plus l’API externe directement : il contacte notre propre serveur, qui s’occupe de faire l’appel à l’API.

#### 3. Ajouter un contrôle ou un traitement
Lorsque l’on passe par le backend, on peut aussi traiter les données avant de les envoyer au client : filtrer, reformater, journaliser, valider, etc.


### En résumé

Appeler une API depuis le backend permet :

- de **protéger les clés API** sensibles,

- de **contourner les restrictions de sécurité du navigateur** (CORS),

- et de **mieux structurer** les appels à des services externes dans des projets professionnels.


Dans la section suivante, nous allons refaire notre exemple précédent (l’API de conseils "Advice Slip") mais cette fois en passant par le backend avec Express.

## 2.4 Exemple : API Advice Slip (via backend)

Dans cet exemple, nous allons refaire le petit site qui donne un conseil de vie aléatoire, mais cette fois-ci, nous allons passer par notre propre serveur Express pour contacter l’API.

Le navigateur n’appelle donc plus directement l’API `https://api.adviceslip.com`, il appelle notre propre route `/api/advice`.  
Notre backend se charge alors d’appeler l’API externe et de transmettre la réponse au frontend.


###  Structure du projet

```php-template
advice-frontend/
├── public/
│ ├── index.html
│ └── css/
│   └── style.css
│ └── js/
│   └── advice.js
├── server.js
```

### 📄 `server.js`

```js
import express from "express";
import fetch from "node-fetch"; // À installer avec npm install node-fetch
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Sert les fichiers HTML, CSS et JS
app.use(express.static(path.join(__dirname, "public")));

// Route que le frontend peut appeler
app.get("/api/advice", async (req, res) => {
  try {
    // Ici, c’est le backend qui appelle l’API externe
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    // On transmet simplement la réponse au frontend
    res.json(data);
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API :", error);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
```

!!! Tip "Installer node-fetch"
    On utilise le package `node-fetch`, il faut donc l'installer avec la commande suivante :
    ```bash
    npm install node-fetch
    ```



### Explication du fetch dans server.js
Dans ce fichier, on utilise fetch dans le backend (avec node-fetch) pour appeler l’API https://api.adviceslip.com.
Le serveur Express agit comme un intermédiaire : il reçoit une requête du navigateur, appelle l’API, puis transmet la réponse.

Ce fetch(...) est différent de celui du frontend : ici, c’est notre serveur Node.js qui fait l’appel à un service externe (l'API).


### `public/index.html` et `public/css/style.css`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Conseil du jour</title>
  <script src="js/advice.js" defer></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Besoin d’un conseil ?</h1>
  <button id="getAdvice">Donne-moi un conseil</button>
  <p id="advice"></p>
</body>
</html>
```
```css
    body {
      font-family: sans-serif;
      text-align: center;
      padding: 2rem;
    }
    #advice {
      margin-top: 2rem;
      font-size: 1.2rem;
      color: #333;
    }
```

### `public/js/advice.js`

```js
document.getElementById("getAdvice").addEventListener("click", () => {
  const adviceDisplay = document.getElementById("advice");
  adviceDisplay.textContent = "Chargement...";

  // Appel à notre propre backend (route /api/advice)
  fetch("/api/advice")
    .then(res => res.json())
    .then(data => {
      adviceDisplay.textContent = `💡 ${data.slip.advice}`;
    })
    .catch(err => {
      adviceDisplay.textContent = "Erreur de communication avec le serveur.";
      console.error(err);
    });
});
```

### Explication du fetch dans advice.js
Dans ce fichier, on utilise fetch côté client (dans le navigateur) pour appeler notre propre route `/api/advice`.

C’est le même principe que dans les séances précédentes où l’on utilisait `fetch("/api/users")` pour interroger notre base de données.

Ici, au lieu de parler à une base de données, le serveur va parler à une API externe.

Autrement dit :

- Le frontend fait un fetch vers notre backend,

- Le backend fait un fetch vers l’API publique,

- Et il transmet la réponse.

### Résultat
Quand l’utilisateur clique sur le bouton :

- Le navigateur envoie une requête à `/api/advice`

- Le serveur appelle l’API `https://api.adviceslip.com/advice`

- Le serveur renvoie le conseil au navigateur

- Le conseil est affiché sur la page

Cette méthode est plus propre, plus sûre, et plus robuste que l’appel direct depuis le frontend.
