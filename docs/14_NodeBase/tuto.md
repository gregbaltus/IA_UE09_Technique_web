# Creation d'un mini-site web avec Node.js et Express

## 4.1 Le frontend

Dans cette section, nous allons créer un **mini site web** composé de :

- Deux pages HTML différentes (`index.html` et `about.html`) ;

- Un fichier CSS partagé (`style.css`) ;

- Un petit script JavaScript côté client (`script.js`) ;

- Un serveur Node.js avec Express (`serveur.js`), pour servir tous ces fichiers.

Ce mini-site permettra de :

- **naviguer entre deux pages** via des liens `<a>` ;

- **changer la couleur de fond** de la page en appuyant sur un bouton (grâce au fichier `script.js`) ;

- comprendre comment **Express sert les fichiers statiques** (HTML, CSS, JS…).


### Structure du projet

Voici la structure du dossier du projet :

```php-template
mini-site/ 
├── public/ 
|    ├── css/
|    |    └── style.css
|    ├── js/
|    |    └── script.js
│    ├── index.html
│    └── about.html
└── serveur.js
```


### Fichier `index.html`

Commencons par créer les fichiers index.html et about.html.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Page d'accueil</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>
  <h1>Bienvenue sur mon site</h1>
  <p>Ceci est la page d'accueil.</p>
  <button id="changeColor">Changer la couleur de fond</button>
  <br><br>
  <a href="/about.html">Aller à la page À propos</a>
</body>
</html>
```

### Fichier `about.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>À propos</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>
  <h1>À propos</h1>
  <p>Ceci est une seconde page.</p>
  <button id="changeColor">Changer la couleur de fond</button>
  <br><br>
  <a href="/index.html">Retour à l'accueil</a>
</body>
</html>
```

### Fichier `style.css`

Définissez le style dans le fichier style.css

```css
body {
  font-family: sans-serif;
  text-align: center;
  padding: 50px;
  background-color: white;
}
```

### Fichier `script.js`

Enfin créer le fichier script.js. Ce fichier permet de changer la couleur du backgroud quand l'on appuie sur le bouton. 

```js
function changerCouleur() {
    document.body.style.backgroundColor = "#e0f7fa";
  }

let bouton = document.getElementById("changeColor");
bouton.addEventListener("click", changerCouleur);
```

Tous ces fichiers sont le frontend, ils sont dans un dossier `public/` et ils seront éventuellement envoyé au client. 

Maintenant, nous allons commencer coder le backend avec le fichier `serveur.js`.

## 4.2 Le backend

### Fichier `server.js`

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

Comme mentionné précédemment : 

- `const express = require("express")` : Nous permet d'importer la bibliothèque Express.

- `const app = express()` : Va créer le serveur 

- `app.use(express.static("public"))` : pour signifier que tous les fichiers dans `public/`

```js
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

Va nous permettre d'écouter les requêtes envoyées à l’adresse `http://localhost:3000` 


###  Lancer le projet

Dans votre terminal, à la racine du projet, lancez le serveur :

```bash
node serveur.js
```

Ouvrez ensuite votre navigateur à l’adresse suivante : `http://localhost:3000`

Vous verrez la page d’accueil. Vous pouvez cliquer sur le lien pour aller vers la page "À propos", et appuyer sur le bouton pour changer la couleur de fond.

!!! Tips "N'oubliez pas"
    N'oubliez pas de lancer la commande à la racine de votre projet :
    ```bash
    npm init -y
    ```
    Et éventuellement de réinstaller express :
    ```bash
    npm install express
    ```

### Pourquoi n’avons-nous pas défini de routes ?

Vous avez peut-être remarqué que nous n’avons **défini aucune route avec `app.get(...)`** dans notre fichier `serveur.js`.  
Et pourtant, tout fonctionne !

Cela est possible grâce à cette ligne clé :

```js
app.use(express.static("public"));
```

Cette instruction dit à Express : “Sers automatiquement tous les fichiers qui se trouvent dans le dossier public/.”

Autrement dit :

- Si on va sur `http://localhost:3000/index.html`, Express envoie le fichier `public/index.html` ;

- Si on va sur `http://localhost:3000/about.html`, Express envoie le fichier `public/index.html` ;

- Si on demande `css/style.css` ou `js/script.js`, Express les retrouve tout seul ;

### Et pourquoi arrive-t-on automatiquement sur la page d’accueil ?

Quand vous ouvrez l’URL `http://localhost:3000`, vous arrivez directement sur la page d’accueil, sans écrire `/index.html`.
C’est parce qu’Express (et les navigateurs en général) cherchent par défaut un fichier nommé `index.html` dans le dossier public.

Faites le test :

- Renommez le fichier `index.html` en `accueil.html` dans le dossier public.

- Rechargez votre page sur `http://localhost:3000`.

Vous verrez que ça ne fonctionne plus : Express ne trouve plus de fichier `index.html`, car ce nom est attendu par défaut.

Pour corriger ce comportement, vous pouvez définir une route personnalisée, comme ceci :

```js
const express = require("express");
const path = require("path"); // ligne à ajouter
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Définir une route personnalisée pour la page d'accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "accueil.html"));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

```

Ceci nous dit que quand nous allons demander l'accès à `"/"` c'est-à-dire à `http://localhost:3000/`, il va nous envoyer vers la page `accueil.html` se trouvant dans `public/`.

!!! Tip "À retenir"
    - Express sert automatiquement tous les fichiers du dossier public.

    - Si le fichier s’appelle index.html, il est utilisé par défaut à la racine /.

    - Si on change le nom du fichier d’accueil, il faut alors définir une route manuelle pour le remplacer.

    Cela vous montre l’équilibre entre :

    - le mode simple avec express.static() (tout est automatique),le mode simple avec express.static() (tout est automatique),

    - et le mode plus avancé avec des routes personnalisées (plus flexible).









