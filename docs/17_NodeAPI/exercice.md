# 5 – Exercice : Génération automatique du contenu d’un article

Dans cet exercice, vous allez **réutiliser le site Mini-Blog** que vous avez construit lors des cours précédents (stockage en base de données inclus).

Nous allons maintenant y intégrer une fonctionnalité d’intelligence artificielle : un bouton permettra de **générer automatiquement le contenu d’un article** à partir de son titre, grâce à une API de Hugging Face.


### Objectif

Modifier le fichier `ajout.html` pour y ajouter un **bouton "Générer article"**.

Lorsque l’utilisateur entre un titre d’article, il pourra cliquer sur ce bouton pour générer automatiquement un contenu, à l’aide d’un **modèle de langage** (comme `deepseek-ai/Janus-Pro-7B`).

Le contenu généré s’affichera automatiquement dans le champ `<textarea>` prévu pour le corps de l’article.

Si l'utilisateur essaie d'appuyer sur le bouton permettant de générer l'article sans avoir mis de titre, un message s'affiche dans la zone de contenu "Veuillez d'abord remplir un titre".

### Fichiers à modifier

- `public/ajout.html` :  
  Ajouter un **bouton de génération** juste à côté du bouton de soumission.
  
- `public/js/script_ajout.js` :  
  Ajouter le code JavaScript qui :

  - récupère le titre,

  - construit un **prompt** (texte de demande),

  - appelle l’API de Hugging Face,

  - insère la réponse dans le champ `contenu`.

### Détail important sur le prompt

Le prompt envoyé au modèle doit être **partiellement en dur** et **partiellement dynamique** :

```text
Je veux que tu écrives un article sur : [titre fourni par l'utilisateur]
```

### Conseils

- Vous pouvez réutiliser le même modèle que dans l’exemple du chatbot (deepseek-ai/Janus-Pro-7B) et la même image d’exemple si nécessaire.

- La génération doit se faire en JavaScript frontend, avec @gradio/client et un import via un CDN (comme https://esm.sh).

- Si vous avez des erreurs d’appel API, vérifiez que :

    - votre clé API Hugging Face est valide,

    - vous utilisez bien le bon nom de modèle,

    - vous avez défini type="module" (dans le package.json).

### Résultat attendu
Vous devez obtenir un site où l’on peut :

- Saisir un titre d’article

- Cliquer sur "Générer article"

- Voir un contenu généré automatiquement apparaître dans la zone de texte

- Vous pouvez toujours l'enregistrer dans la base de données avec le bouton "Publier"


!!! Tips  "Utilisation de `node-fetch` et passage aux modules `import/export` :"
    Lorsque vous installez `node-fetch` avec la commande suivante :
    ```bash 
    npm install node-fetch
    ```
    Cela vous oblige à travailler avec la **syntaxe ES module** (import/export) au lieu de l’ancienne syntaxe CommonJS (`require/module.exports`), car `node-fetch` ne fonctionne plus avec `require`.
    #### Exemple de conversion dans server.js
    Avant (CommonJS – ne fonctionne plus) :
    ```js
    const fetch = require("node-fetch");
    const express = require("express");
    ```
    Après (ES module) :
    ```js
    import fetch from "node-fetch";
    import express from "express";
    ```
    N’oubliez pas d’ajouter "type": "module" dans votre package.json.
    ### Changer aussi module.exports
    Si vous utilisez un fichier comme `articleRepository.js` et qu’il contient :
    ```js
    module.exports = ArticleRepository;
    ```
    Vous devez remplacer cette ligne par la version `ES module` :
    ```js
    export default ArticleRepository;
    ```
    Et dans les fichiers où vous l’utilisez :
    ```js
    import ArticleRepository from "./repository/articleRepository.js";
    ```
    Cela permet de garder une structure moderne et compatible avec tous les outils que nous utilisons (comme fetch, @gradio/client, etc.).