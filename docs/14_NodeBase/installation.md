# Node.js

## 2.1 Introduction

Comme nous l’avons vu, **Node.js** est un environnement qui nous permet d’exécuter du JavaScript côté serveur.  
Grâce à Node.js, nous allons pouvoir écrire des programmes qui :
- reçoivent et répondent à des requêtes HTTP ;
- gèrent des formulaires ;
- lisent ou écrivent des fichiers ;
- et bien plus encore…

Pour l’instant, nous allons surtout l’utiliser pour **créer un petit serveur web**, capable de communiquer avec un site web.


## Installation de Node.js 
Voici les étapes pour installer Node.js sur un ordinateur Windows :

1. Rendez-vous sur le site officiel :  [https://nodejs.org](https://nodejs.org)

2. Cliquez sur le bouton **"LTS" (Long Term Support)** pour télécharger la version recommandée.  

3. Une fois le fichier `.msi` téléchargé, **ouvrez-le** et suivez les instructions d’installation par défaut.  

4. Une fois l’installation terminée, ouvrez le menu **Démarrer**, cherchez **"Invite de commandes"** ou **"CMD"**, puis tapez :  

```bash
node -v
```

Cela vous affichera la version installée de Node.js (ex. : v20.9.0).

5. Vous pouvez aussi tester que npm est bien installé (npm = Node Package Manager) :
```bash
npm -v
```
Vous verrez également s’afficher un numéro de version (ex. : 10.1.0).

## 2.2 Création d’un premier projet Node.js

Maintenant que Node.js est installé, nous allons créer un tout premier projet très simple.  
Le but est de comprendre **comment fonctionne un serveur**, et de voir **comment il peut envoyer des fichiers HTML et CSS au navigateur**.


Créez un nouveau dossier monPremierNode. Placez vous dans ce dossier.

### Étape 1 : Initialiser le projet Node.js

Dans votre terminal (ou dans le terminal intégré de VS Code), tapez :

```bash
npm init -y
```
Cela va créer un fichier package.json qui contient les informations de base de ton projet.

### Étape 2 : Créer les fichiers du projet
Crée 3 fichiers dans votre dossier :

```bash
monPremierNode/ 
│
├── index.html       → Le fichier HTML à envoyer au client
├── style.css        → Le fichier CSS pour le style
└── serveur.js       → Le fichier Node.js (notre serveur)
```

Le fichier index.html :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Mon premier serveur Node.js</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Bienvenue !</h1>
  <p>Cette page est servie par un serveur Node.js</p>
</body>
</html>
```

Le fichier style.css :

```css
body {
  background-color: #f0f0f0;
  font-family: sans-serif;
  text-align: center;
  padding: 50px;
}

h1 {
  color: #336699;
}
```

Le fichier serveur.js : 

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Requête reçue : " + req.url);

  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  const extname = path.extname(filePath);
  let contentType = "text/html";

  if (extname === ".css") {
    contentType = "text/css";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Fichier non trouvé");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

Le code est relativement long, n'essayons pas de le comprendre entièrement à ce stade. Les deux parties importantes sont :

```js
const server = http.createServer((req, res) =>
```
Qui va créer le serveur et : 
```js
onst PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```
Qui va mettre le serveur en écoute sur le port 3000.

### Étape 3 : Lancer le serveur
Dans ton terminal, tapez :

```bash
node serveur.js
```

Vous verrez s'afficher :

```bash
Serveur démarré sur http://localhost:3000
```

Ouvrez ensuite ton navigateur et rendez-vous à cette adresse :
http://localhost:3000

Vous devriez voir votre page HTML stylisée avec ton CSS ! 


### Expliquation 

- Le fichier ```serveur.js``` est un petit serveur backend : c’est lui qui répond aux requêtes HTTP du navigateur.

- Quand vous ouvrez ```localhost:3000```, votre navigateur envoie une requête ```GET```, et le serveur répond avec le fichier HTML (et ensuite le CSS).

- Votre navigateur joue le rôle du client (frontend), et le fichier serveur.js celui du serveur (backend).

Vous venez de créer votre premier site web servi par un vrai serveur Node.js !  
Node.js est un outil très complet. Pour le maîtriser entièrement, un cours dédié serait nécessaire.

Pour nous faciliter la vie, et pour apprendre à utiliser un serveur Node.js plus facilement, nous allons utiliser **Express**.  
Il s'agit d'un outil (ou plus précisément d’un framework) qui simplifie l'utilisation de Node.js.

L'utilisation de cet outil va nous permettre, en quelques séances de cours, de réaliser toutes les opérations de base que l’on attend d’un serveur.
