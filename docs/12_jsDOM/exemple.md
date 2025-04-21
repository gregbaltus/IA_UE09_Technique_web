# Mini tutoriel : Manipuler le DOM avec JavaScript

Nous allons illustrer quelques notions de base de la manipulation du DOM en JavaScript à travers un petit exemple.

## Objectif du site

Nous allons créer une page contenant **trois boutons** :

1. **Afficher une phrase** → affiche une phrase dans la page.
2. **Cacher la phrase** → supprime cette phrase de la page.
3. **Changer le fond** → change la couleur de la phrase.

Ce petit exemple permettra de manipuler :

- `document.getElementById("id")`

- `document.createElement("tag")`

- `unNoeudParent.appendChild(autreNoeud)`

- `unNoeudParent.removeChild(noeudEnfant)`

- `unElement.classList.add("nomClasse")`


## Structure HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exemple Sélecteurs JS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Manipulation DOM simple</h1>

    <div id="button-container">
        <button id="btnShow">Afficher la phrase</button>
        <button id="btnHide">Cacher la phrase</button>
        <button id="btnChangeColor">Changer la couleur</button>
    </div>

    <div id="phrase-container"></div>

    <script src="script.js"></script>
</body>
</html>
```

**Explication :**

- Trois boutons sont définis avec des identifiants (id) pour pouvoir les manipuler en JavaScript.

- Un conteneur vide `#phrase-container` servira à afficher dynamiquement une phrase.

## Style CSS


```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 40px;
    background-color: white;
}

#button-container {
    margin-bottom: 20px;
}

.phrase-style {
    font-size: 1.5em;
    color: #333;
    margin-top: 20px;
}
```

## Script JavaScript

```js
const btnShow = document.getElementById("btnShow");
const btnHide = document.getElementById("btnHide");
const btnChangeColor = document.getElementById("btnChangeColor");
const container = document.getElementById("phrase-container");

function afficherPhrase(){
    if (!document.getElementById("phrase")) {
        const phrase = document.createElement("p");
        phrase.id = "phrase";
        phrase.textContent = "Bonjour, ceci est une phrase magique !";
        phrase.classList.add("phrase-style");
        container.appendChild(phrase);
    }
}

// Bouton 1 : Afficher une phrase
btnShow.addEventListener("click", afficherPhrase);

// Bouton 2 : Cacher la phrase
btnHide.addEventListener("click", () => {
    const phrase = document.getElementById("phrase");
    if (phrase) {
        container.removeChild(phrase);
    }
});

// Bouton 3 : Changer la couleur de la phrase
btnChangeColor.addEventListener("click", () => {
    const phrase = document.getElementById("phrase");
    if (phrase) {
        phrase.style.color = "#0000FF";
    }
});
```

- `document.getElementById(...)` permet de récupérer un élément HTML.

- `document.createElement("p")` crée dynamiquement une balise paragraphe.

- `appendChild(...)` ajoute cette balise dans le DOM.

- `removeChild(...)` permet de la retirer.

- `classList.add(...)` applique un style CSS défini.

- On modifie le style du fond via `style.color`.


### Quand on ouvre la page dans un navigateur :

- Le bouton "Afficher la phrase" insère une phrase dans la page.

- Le bouton "Cacher la phrase" la supprime.

- Le bouton "Changer la couleur" modifie la couleur de la phrase.