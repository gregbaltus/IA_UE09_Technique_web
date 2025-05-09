# Tuto chatbot

## 4.1 – Construire un mini chatbot avec une API Hugging Face

Dans ce tutoriel, nous allons construire un **mini site web de type chatbot** qui envoie des messages à un modèle d’intelligence artificielle hébergé sur Hugging Face et reçoit des réponses automatiquement.

Nous utiliserons le modèle [`deepseek-ai/Janus-Pro-7B`](https://huggingface.co/spaces/deepseek-ai/Janus-Pro-7B), un modèle multimodal capable de répondre à des questions basées sur du texte et des images.

Pour ce projet, nous utiliserons uniquement le texte, comme le modèle à besoin d'une image pour fonctionner, nous lui en donnerons une en dur dans le code, mais nous ne l'utiliserons pas directement.


### Structure du projet
```php-template
chatbot-janus/
├── public/
│ ├── index.html
│ └── css/
│   └── style.css
│ └── js/
│   └── script.js
├── server.js
├── package.json
```

### Fichier `package.json`

Voici un fichier `package.json` minimal :

```json
{
  "name": "chatbot-janus",
  "type": "module",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
Ce package est déjà créé lorsque vous initiez le projet avec npm et installer Express, néanmoins, il faut ajouter la ligne `"type": "module",`.



### Installation nécessaire

Il vous faudra également installer ceci :

```bash 
npm install node-fetch
npm install @gradio/client
```

### `server.js`

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
Ce fichier sert à lancer un petit serveur Express pour :

- rendre accessibles les fichiers HTML, CSS et JS dans le dossier /public

- permettre de visiter l’application sur http://localhost:3000


### `public/index.html` et `public/css/style.css`

```css
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Chatbot Hugging Face</title>
  <link rel="stylesheet" href="css/style.css">
  <script type="module" src="js/script.js" defer></script>
</head>
<body>
  <header>
    <h1>Chatbot IA (Janus)</h1>
  </header>

  <main>
    <div id="chatbox">
      <div id="messages"></div>
      <input id="userInput" type="text" placeholder="Tapez votre message..." />
      <button onclick="sendMessage()">Envoyer</button>
    </div>
  </main>

  <footer>
    <p>Propulsé par Hugging Face – Janus-Pro-7B</p>
  </footer>
</body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 700px;
  margin: auto;
}

header, footer {
  text-align: center;
  margin-bottom: 20px;
}

#chatbox {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: white;
}

#messages {
  height: 300px;
  overflow-y: auto;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #f5f5f5;
}

#messages p {
  margin: 5px 0;
}

.user-message {
  text-align: right;
  color: blue;
}

.bot-message {
  text-align: left;
  color: green;
}

input {
  width: 80%;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
```

### `public/js/script.js`

```js
import { Client } from "https://esm.sh/@gradio/client";

const apiKey = "MyAccessToken"; // Remplace par ta clé Hugging Face

async function sendMessage() {
  const userMessage = document.getElementById("userInput").value;
  if (!userMessage.trim()) return;

  displayMessage(userMessage, "user");

  const headers = {
    Authorization: `Bearer ${apiKey}`
  };

  try {
    const client = await Client.connect("deepseek-ai/Janus-Pro-7B", { headers });

    // L'API nécessite une image, on en charge une par défaut
    const imageResponse = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
    const exampleImage = await imageResponse.blob();

    const result = await client.predict("/multimodal_understanding", {
      image: exampleImage,
      question: userMessage,
      seed: 3,
      top_p: 0,
      temperature: 0,
    });

    displayMessage(result.data[0], "bot");
  } catch (err) {
    displayMessage("Erreur de communication avec l'API.", "bot");
    console.error("Erreur API :", err);
  }

  document.getElementById("userInput").value = "";
}

window.sendMessage = sendMessage;

function displayMessage(message, type) {
  const messagesContainer = document.getElementById("messages");
  const p = document.createElement("p");
  p.className = type === "user" ? "user-message" : "bot-message";
  p.textContent = message;
  messagesContainer.appendChild(p);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
```
Dans ce code, nous voyons deux fonctions. La seconde `displayMessage()` est une fonction qui va permettre d'afficher le message dans la zone de discussion (l'historique des messages). La première `sendMessage()` est une fonction asynchrone qui va permettre d'interroger l'API de Hugging Face. Cette fonction commence par récupérer le texte entré par l'utilisateur, elle va ensuite afficher ce texte dans la zone des messages grâce à `displayMessage()`. Elle va ensuite suivre le code que Hugging Face nous a suggéré pour utiliser correctement l'API. Remarquer le `try/catch` dans le cas où il y aurait un problème avec le serveur hébergeant l'API. Une fois le résultat obtenu, il est affiché dans la zone de discussion.

### Comparaison avec le code proposé sur Hugging Face

Lorsque vous cliquez sur "Use via API" dans le Space Janus-Pro-7B, vous voyez ce code proposé :

```js
import { Client } from "@gradio/client";

const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
const exampleImage = await response_0.blob();

const client = await Client.connect("deepseek-ai/Janus-Pro-7B");

const result = await client.predict("/multimodal_understanding", {
  image: exampleImage,
  question: "Hello!",
  seed: 3,
  top_p: 0,
  temperature: 0,
});

console.log(result.data);
```
Notre version apporte plusieurs améliorations pratiques :

- Elle utilise un champ de saisie dynamique (pas une question codée en dur)

- Elle utilise un affichage interactif de messages

- Elle ajoute l’authentification via une clé API dans les en-têtes HTTP

- Elle sépare le backend du frontend avec un petit serveur Express

### Résultat
En lançant le projet avec node server.js et en accédant à http://localhost:3000, vous pourrez :

- écrire une question dans le champ texte,

- voir votre message s’afficher à droite,

- recevoir une réponse du modèle Janus-Pro-7B à gauche.



## 4.2 – Note : déplacer l’appel API dans le backend (bonne pratique)

Dans notre projet, nous avons choisi de faire l’appel à l’API de Hugging Face **depuis le code JavaScript du frontend**, c’est-à-dire directement dans le navigateur.

C’est la solution la plus simple à mettre en œuvre, mais ce n’est pas la plus sécurisée ni la plus propre :

- La clé API est visible dans le code source, ce qui n’est pas recommandé.

- Le navigateur est directement responsable de la communication avec l’API externe.


### Une bonne pratique : déplacer l’appel vers le backend

Dans un vrai projet, on préfère faire l’appel API dans le serveur Express, c’est-à-dire dans `server.js`, et non dans le fichier `script.js`.

Cela permettrait de :

- garder la **clé API confidentielle** sur le serveur,

- mieux **contrôler ou limiter les requêtes**,

- et éviter les éventuelles **erreurs de CORS**.


### Pourquoi ne le fait-on pas ici ?

Ce genre de structure nécessite un peu plus de logique côté serveur (gestion des paramètres, communication entre modules, etc.).  
Par manque de temps, nous ne verrons pas cette architecture complète cette année, mais vous en connaissez maintenant le principe et les avantages.


