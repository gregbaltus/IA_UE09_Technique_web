# Express

## 3.1 Express pour faciliter

Dans la partie précédente, nous avons créé un serveur Node.js **sans outil externe**, en utilisant uniquement les fonctionnalités de base fournies par Node.js.

C’est une très bonne façon de comprendre ce qui se passe **"sous le capot"**, mais tu as peut-être remarqué que cela demande pas mal d'efforts, même pour un petit projet :  
- Il faut gérer manuellement les chemins vers les fichiers ;
- Déterminer le type de contenu à envoyer (HTML, CSS, JSON…) ;
- Lire les fichiers à la main avec `fs.readFile` ;
- Et écrire beaucoup de code, même pour des actions simples.

Heureusement, la communauté JavaScript a développé des **outils qui simplifient tout ça**, et l’un des plus populaires s’appelle **Express**.


### Qu’est-ce qu’Express ?

**Express** est ce qu’on appelle un **framework** : c’est un ensemble d’outils et de fonctionnalités qui viennent se greffer à Node.js pour faciliter la création de serveurs web.

Concrètement, Express nous permet :

- de créer un serveur plus rapidement ;

- de définir des routes (pages, API…) de manière plus lisible ;

- d’envoyer facilement des fichiers, des données JSON ou du HTML ;

- et de ne pas réécrire toujours le même code pour des tâches courantes.


### Pourquoi utiliser Express dans ce cours ?

Dans un contexte professionnel, les développeurs utilisent très souvent Express pour gagner du temps et éviter les erreurs.  
Et dans notre cas, **avec le nombre limité de séances dont nous disposons**, Express va nous permettre :

- d’aller plus vite ;

- de nous concentrer sur **l’essentiel** : comprendre comment fonctionne un serveur ;

- et de construire **des projets concrets** sans trop de complexité technique.

Tu peux voir Express comme une **boîte à outils** qui rend la construction d’un serveur **plus simple, plus propre, et plus rapide**.


## 3.2 Installation d’Express

Maintenant que nous savons pourquoi **Express** est utile, voyons comment l’installer dans notre projet.


### Étape 1 : Initialiser un projet 

Créez un nouveau projet Node.js, commencez par créer un dossier et initialiser votre projet avec :

```bash
npm init -y
```

Cela va créer un fichier package.json qui permet à Node.js de gérer les dépendances (comme Express).

### Étape 2 : Installer Express

Dans votre terminal toujours à la racine de ton projet, tapez la commande suivante :

```bash
npm install express
```

Cette commande va :

- télécharger le module express ;

- l’ajouter à ton projet dans un dossier appelé node_modules ;

- enregistrer cette dépendance dans ton fichier package.json.

Un fichier package-lock.json va également apparaître. Ce fichier aide à gérer les versions exactes des modules installés.

### Étape 3 : Vérification

Une fois l’installation terminée, vous pouvez ouvrir votre fichier package.json et vérifier que tu vois quelque chose comme ceci :

```json
"dependencies": {
  "express": "^4.18.2"
}
```


### 3.3 Express : les bases

Maintenant qu’Express est installé, voyons ensemble les **principes de base** de son fonctionnement.  
Express permet de créer un serveur de manière **plus simple, plus claire et plus rapide** qu’avec Node.js pur.

Dans cette section, nous allons découvrir les éléments les plus importants d’Express, accompagnés de **petits extraits de code** pour bien comprendre.

---

## Créer une application Express

Voici la structure de base d’un serveur Express :

```js
const express = require("express");
const app = express();
```

- ```require("express")``` permet d’importer la bibliothèque Express.

- ```express()``` crée une application Express, c’est-à-dire votre serveur.

#### Écouter les requêtes (lancement du serveur)
Pour que le serveur Express réponde aux utilisateurs, il faut lui indiquer sur quel port il doit écouter :

```js
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```

Ici, le serveur écoutera les requêtes envoyées à l’adresse ```http://localhost:3000```.

### Créer une route simple (GET)

Une route permet de dire à Express quoi faire lorsqu’un utilisateur accède à une certaine adresse de votre site.

```js
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur Express !");
});
```

- ```app.get()``` indique que l’on gère une requête HTTP de type GET.

- Le premier argument ```" / "``` est le chemin (ici la page d’accueil).

- ```res.send()``` permet d’envoyer une réponse au client.

Vous pouvez aussi créer d’autres routes, comme :

```js
app.get("/contact", (req, res) => {
  res.send("Page de contact");
});
```

### 📬 Et les requêtes POST ?

Jusqu'ici, nous avons utilisé `app.get()` pour répondre à des requêtes **GET** (souvent utilisées pour afficher des pages ou récupérer des informations).  
Mais il existe aussi un autre type très courant de requête : la **requête POST**.

Les requêtes **POST** sont souvent utilisées pour **envoyer des données au serveur**, comme lorsqu’un utilisateur remplit un formulaire.

Voici un exemple de route POST dans Express :

```js
// Middleware pour lire les données JSON envoyées au serveur
app.use(express.json());

app.post("/contact", (req, res) => {
  const nom = req.body.nom;
  const message = req.body.message;

  console.log("Message reçu :", nom, message);

  res.send("Merci pour votre message !");
});
```

Dans cet exemple :

- Le client envoie un message au serveur via une requête POST (par exemple, depuis un formulaire).

- Le serveur lit les données envoyées (req.body) grâce au middleware express.json().

- Il peut ensuite traiter ces données (par exemple les enregistrer), puis envoyer une réponse.



### Envoyer des fichiers HTML ou des ressources statiques

Express permet aussi d’envoyer des fichiers comme des pages HTML, des images, ou des fichiers CSS.

Pour cela, on utilise :

```js
app.use(express.static("public"));
```

Cela signifie que tous les fichiers placés dans un dossier ```public/``` pourront être servis automatiquement.

Par exemple :

Un fichier ```public/index.html``` sera accessible via ```http://localhost:3000/index.html```.

Un fichier ```public/style.css``` sera également accessible.

### Résumé des éléments de base

- ```express()``` : crée une application serveur

- ```app.listen()``` : démarre le serveur sur un port donné

- ```app.get()``` : crée une route pour répondre à une requête GET

- ```app.post()``` : crée une route pour répondre à une requête POST

- ```res.send()``` : envoie une réponse (texte, HTML, etc.)

- ```express.static()``` : sert des fichiers statiques (HTML, CSS, images…)




### 3.5 Les middlewares (notion)

Un **middleware** est un **élément intermédiaire** qu’Express exécute **avant d’arriver à la réponse finale**.  
Il permet d’ajouter des fonctionnalités au serveur, comme :

- lire les données envoyées par un formulaire ;

- autoriser ou refuser certaines requêtes ;

- enregistrer des logs ;

- ou encore servir des fichiers statiques (HTML, CSS…).

---

### Des middlewares que vous utilisez déjà

Voici deux exemples de middlewares très courants, que nous allons utiliser bientôt :

```js
app.use(express.json());
```

→ Ce middleware permet à Express de comprendre les données JSON envoyées par un formulaire ou une application.

```js
app.use(express.static("public"));
```

→ Celui-ci permet de servir automatiquement les fichiers HTML, CSS, images… contenus dans le dossier ```public/```.

### Comment les reconnaître ?

Tous les middlewares s’utilisent avec la méthode ```app.use()```.
Ils s’intercalent entre la requête du client et la réponse finale.
On peut imaginer que chaque requête "passe par un tunnel" où différents traitements sont appliqués avant que la réponse ne soit envoyée.

Vous n’avez pas besoin de tout comprendre sur les middlewares maintenant.
Retenez simplement que ce sont des **"outils intermédiaires"** très pratiques pour enrichir les fonctionnalités du serveur.



Dans Express, certains éléments que nous utilisons souvent peuvent **ressembler à des middlewares**, mais ne le sont pas tous vraiment.
    

| Élément                     | Est-ce un middleware ?  | Rôle principal                                                   |
|-----------------------------|-------------------------|------------------------------------------------------------------|
| `app.get()`, `app.post()`   | NON                     | Permet de **définir une route** (chemin + fonction associée)     |
| Fonction dans `app.get()`   | OUI (souvent)           | Fonction **exécutée à chaque requête**, typique d’un middleware  |
| `res.send()`                | NON                     | Méthode utilisée pour **envoyer une réponse** au client          |
| `express.static("public")`  | OUI                     | **Middleware fourni par Express** pour envoyer des fichiers      |

Un **middleware** est une fonction qui agit **entre la requête et la réponse**.


