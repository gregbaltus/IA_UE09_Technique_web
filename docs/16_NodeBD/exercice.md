# 8. Exercice – Étendre le MiniBlog avec une base de données

Dans cet exercice, vous allez reprendre le **MiniBlog** que vous aviez réalisé lors du cours précédent, et vous allez l’améliorer pour qu’il soit **connecté à une base de données réelle** grâce à Express et SQLite.

---

### Objectif

Jusqu’à présent, les articles étaient écrits **en dur dans le HTML**.  
L’objectif est maintenant de rendre le site **dynamique**, c’est-à-dire :

- les articles sont **enregistrés dans une base de données** ;

- la page d’accueil (`index.html`) affiche automatiquement tous les articles présents dans la base ;

- la page d’un article (`article.html`) affiche dynamiquement le contenu correspondant à l’ID dans l’URL ;

- la page d’ajout (`ajout.html`) permet **d’ajouter un nouvel article** via un formulaire HTML classique.


### Consignes

1. **Reprenez le projet MiniBlog du cours précédent.**

2. **Créez une base de données SQLite** nommée par exemple `blog.db` dans un dossier `data/`.  
   À l’aide de DataGrip (ou d’un script SQL), créez une table `articles` avec les colonnes suivantes :

    - `id` (entier, clé primaire, auto-incrémenté)

    - `titre` (texte)

    - `contenu` (texte)

3. **Ajoutez au moins 10 articles** dans cette base de données.

4. **Créez une classe `ArticleRepository`** dans un dossier `repository/`, contenant les méthodes suivantes :

    - `getAllArticles(callback)` → retourne tous les articles

    - `getArticleById(id, callback)` → retourne un article spécifique

    - `insertArticle(titre, contenu, callback)` → insère un nouvel article

5. **Modifiez `server.js`** pour :

    - ajouter une route `GET /api/articles` pour retourner tous les articles en JSON

    - ajouter une route `GET /api/articles/:id` pour retourner un article spécifique

    - ajouter une route `POST /ajouter` qui insère un article depuis un formulaire HTML

6. **Modifiez `index.html`** pour qu’il affiche dynamiquement tous les articles présents dans la base (via `fetch()`).

7. **Modifiez `article.html`** pour qu’il affiche l’article correspondant à l’`id` passé dans l’URL.

8. **Modifiez `ajout.html`** pour que le formulaire fonctionne et insère les données dans la base.

9. Ajoutez un message de confirmation ou d’erreur après soumission du formulaire.

---

### Astuce

Le code a déjà été vu **étape par étape** durant la séance. Vous pouvez vous appuyer sur les exemples du mini tutoriel (section 7) pour vous guider dans l'exercice.

---

### À la fin, votre site doit être capable de :

- **afficher dynamiquement** une liste d’articles depuis la base ;

- **afficher le détail** d’un article sélectionné ;

- **ajouter un nouvel article** depuis un formulaire HTML.

---

Bon courage et n’hésitez pas à tester chaque partie **au fur et à mesure** de votre avancement.