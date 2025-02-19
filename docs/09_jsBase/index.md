# Les bases du JavaScript

JavaScript est un langage de programmation principalement utilisé pour le développement web. Il permet de rendre les pages web interactives en manipulant le contenu HTML et CSS, en réagissant aux actions des utilisateurs et en communiquant avec des serveurs via des requêtes réseau. Initialement conçu pour s'exécuter dans les navigateurs, il est aujourd'hui utilisé côté serveur grâce à des environnements comme Node.js. Polyvalent et largement adopté, JavaScript est un élément clé du développement web moderne, permettant de créer des applications dynamiques, des jeux en ligne et même des solutions basées sur l'intelligence artificielle.

## Historique

Les étapes clés du développement du JavaScript :


- 1995: Brendan Eich, employé de Netscape, conçoit un nouveau langage de script côté serveur, LiveScript, en s'inspirant, tout en simplifiant, la syntaxe de Java. Netscape, en partenariat avec Sun Microsystems, adapte le langage pour une version côté client et le publie sous le nom de JavaScript pour profiter de la popularité croissante auprès des développeurs du nom "Java".

- 1996: Microsoft, grand concurrent, lance Jscript

- 1997: A la demande de Netscape, l'ECMA standardise la première version du langage sous l'appellation ECMAScript (ES) …
    
- 2009: ECMAScript 5 apporte entre autres, le support de JSON, le mode strict, les accesseurs et des fonctions supplémentaires de manipulation de tableaux
    
- 2015: ECMAScript 6 apporte des fonctionnalités devenues incontournables comme les modules, les classes, les promesses, ...
    
- 2016: A partir de 2015, l'ECMA prévoit de publier une nouvelle version presque chaque année. ECMAScript 7 apporte seulement une méthode "include" aux tableaux pour vérifier si une valeur existe et l'opérateur mathématique exposant : "**"
    
- 2017: ECMAScript 8 apporte quelques simplifications syntaxiques dont notamment "async/await" pour la conception de fonctions asynchrones

## Java vs JavaScript 

Java et JavaScript sont deux langages de programmation aux usages et aux concepts bien distincts, malgré la similarité de leur nom. Java est un langage compilé, orienté objet et utilisé pour des applications lourdes, des logiciels d'entreprise et du développement mobile (notamment avec Android). En revanche, JavaScript est un langage interprété, principalement utilisé pour le développement web afin de rendre les pages interactives. La similarité de leur nom est uniquement du marketing.

Comme tout langage de script, JavaScript est un langage qui doit être interprété par un environnement hôte et qui dépend de celui-ci. Voici une liste non exhaustive des environnements hôtes permettant d'interpréter JavaScript :

- navigateurs web (Firefox, Chrome, Explorer, Safari, Opera, ...)

- Adobe Photoshop

- Brackets

- Node.js (exécution de scripts côté serveur web)

- MongoDb (base de données no SQL)

- GNOME (environnement de bureau sur Linux)

- ...


JavaScript n'offre pas d'opérations I/O qui sont fournies par l'environnement hôte. Ainsi, un script JavaScript au sein d'un navigateur ne peut accéder au système de fichiers, alors qu'il le pourra dans l'environnement GNOME.

| Critère         | Java                              | JavaScript                          |
|---------------|--------------------------------|----------------------------------|
| Type         | Langage compilé (JVM)          | Langage interprété              |
| Usage       | Applications desktop, mobile (Android), backend | Développement web, frontend et backend (Node.js) |
| Paradigme    | Orienté objet, fortement typé  | Orienté objet, faiblement typé  |
| Exécution    | JVM (Java Virtual Machine)     | Navigateur ou serveur (Node.js) |
| Syntaxe      | Plus stricte, nécessite une compilation | Plus souple, exécuté directement |



## Environnement de développement

### js.do
L'éditeur en ligne [http://js.do](http://js.do) vous permet facilement de tester un bout de code JS associé à du code HTML et CSS dans l'environnement d'un navigateur, donc vous bénéficiez notamment des fonctionnalités de stockage local, d'appels AJAX, de canvas,...

Cet éditeur vous permet également d'intégrer quelques librairies comme jQuery, Bootstrap,...

Par contre, cet éditeur ne propose pas de mécaniques de débogage; bien qu'il soit toujours possible d'utiliser les outils de développement inclus dans le navigateur lui-même.

### Visual Studio Code

Visual Studio Code est également un éditeur pratique et adapter au développement de JavaScript. Si vous optez pour cette solution, il faudra lancer un navigateur web pour excécuter vos scriptes. Il s'agit probagblement de la version la plus simple pour commencer.

### PHPStorm

Une autre solution est d'utiliser PHPStorm de la suite JetBrains, pour utiliser cet éditeur, vous devez vous connecter avec votre compte HELMo et demander une licence : *Educational Licenses*. 

Il vous faudra également installé Node.js pour pouvoir utiliser PHPStorm. Pour cela, rendez-vous sur le site de [node.js](https://nodejs.org/en), téléchargez la version courante (Current version with lastest features) et installez-la sur votre ordinateur avant d'ouvrir PHPStorm (si PHPStorm était déjà ouvert, veuillez le fermer et le relancer pour qu'il prenne en compte les variables d'environnements).

Par défaut, un script JS exécuté directement dans cet éditeur bénéficie d'un environnement node.js; et donc ne peut utiliser les fonctionnalités liées au navigateur (stockage local, canvas, ...).

Bien entendu, vous pouvez, à partir de l'éditeur, exécuter vos scripts dans un des navigateurs disponibles (Chrome, Firefox, Safari, Opera, Internet Explorer, Edge).

Dans un cas comme dans l'autre, vous pouvez utiliser les mécaniques de débogage (point d'arrêt, ...).

Dans PHPStorm, créez un projet "PHP Empty Project" qui contiendra vos résolutions d'exercices de ce cours. Créez un sous-répertoire par chapitre du cours.

## Vos premiers codes en JavaScript
Nous allons commencer par inclure du code JavaScript dans du fichier HTML. Créez un nouveau fichier HTML et copier le code suivant :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Console Log Example</title>
</head>
<body>
    <h1>C'est bien vide ici !</h1>
    <script>
        console.log("Hello World !");
    </script>
</body>
</html>
```
La balsie `script` vous permet d'inclure directement du code JS dans vos fichiers HTML.
Ouvrez, maintenant, cette page web dans votre naviguateur favoris, inspecté la page et rendez-vous dans la console. 
C'est là que vous pouvez visualiser le résultat de votre script. Celui-ci affiche simplement "Hello World !". Le code : 

```javascript
console.log("Hello World !");
```

Est l'équivalent du code python : 
```python
print("Hello World !")
```

Une bonne habitude à prendre est de ne pas mettre vos scriptes JS dans le même fichier  HTML. Comme on sépare le code CSS du HTML, on fait la même chose pour le code JS. Crée un fichier nommé script.js. Supprimer les balises `script` et sont contenu dans votre fichier HTML, et ajouter cette ligne dans le fichier script.js : 

```javascript
console.log("Hello World !");
```

Il reste à lié les deux fichier. Dans le `head` ajouter cette ligne : 
```html
<script src="script.js" defer></script>
```
Recharger la page sur le naviguateur et assurez vous qu'il est toujours bien écrit "Hello World !" dans la console.

L'attribut `src` permet donc de donner au code HTML un fichier contenant du code JS. L'attribut `defer` dans une balise `<script>` permet de différer l'exécution du script jusqu'à ce que le HTML soit complètement chargé. Contrairement à un script classique qui bloque le rendu de la page en se chargeant immédiatement, un script avec defer est téléchargé en parallèle mais exécuté seulement après l'analyse complète du DOM. Cela améliore les performances et empêche les erreurs liées à des éléments HTML encore non chargés lorsque le script s'exécute.

