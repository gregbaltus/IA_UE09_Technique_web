# Exercice

## Mini-blog (partie 1)

Nous allons maintenant commencer un petit projet qui va évoluer au fil des séances :  
la création d’un **mini-site de blog**.

Ce site ne sera pas encore totalement fonctionnel pour l’instant :  
vous allez poser les bases de l’interface, et configurer le serveur Express pour que le site s’affiche correctement.

### Structure attendue du projet

```php-template
mini-blog/
 ├── public/ 
 │      ├── css/ 
 │      │ └── style.css 
 │      ├── index.html 
 │      ├── article.html 
 │      └── ajout.html 
 └── server.js
```

Votre seul travail est d’écrire le fichier `server.js`.

Voici les différrents fichiers du frontend :

### Fichier `index.html`

```html
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Accueil - Blog</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Mon mini blog</h1>
    <nav>
      <a href="/index.html">Accueil</a> |
      <a href="/ajout.html">Ajouter un article</a>
    </nav>
  </header>

  <main>
    <section class="articles-container">
      <article>
        <h2>Titre de l'article 1</h2>
        <p>Contenu de l'article 1...</p>
        <a href="/article.html">Lire la suite</a>
      </article>
      <article>
        <h2>Titre de l'article 2</h2>
        <p>Contenu de l'article 2...</p>
        <a href="/article.html">Lire la suite</a>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 - Mon mini blog</p>
  </footer>
</body>
</html>
```

### Fichier `article.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Article</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Mon mini blog</h1>
    <nav>
      <a href="/index.html">Accueil</a> |
      <a href="/ajout.html">Ajouter un article</a>
    </nav>
  </header>

  <main>
    <h2>Titre de l'article</h2>
    <p>Voici le contenu détaillé de l'article.</p>
  </main>

  <footer>
    <p>&copy; 2025 - Mon mini blog</p>
  </footer>
</body>
</html>
```

### Fichier `ajout.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ajouter un article</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Mon mini blog</h1>
    <nav>
      <a href="/index.html">Accueil</a> |
      <a href="/ajout.html">Ajouter un article</a>
    </nav>
  </header>

  <main>
    <h2>Ajouter un nouvel article</h2>
    <form>
      <label for="titre">Titre :</label>
      <input type="text" id="titre" name="titre">

      <label for="contenu">Contenu :</label>
      <textarea id="contenu" name="contenu" rows="5"></textarea>

      <button type="submit">Publier</button>
    </form>
  </main>

  <footer>
    <p>&copy; 2025 - Mon mini blog</p>
  </footer>
</body>
</html>
```

### Fichier `style.css` (dans /public/css/)

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

header, footer {
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
  flex-shrink: 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.articles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

article {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

form {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

form input[type="text"],
form textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
}

form button {
  padding: 10px 20px;
  background-color: #336699;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #2b5c8a;
}
```

Créez un fichier `server.js` contenant un serveur Express qui :

- Sert les fichiers du dossier `public/`

- Permet d’accéder aux 3 pages HTML depuis le navigateur

Lorsque vous ouvrez `http://localhost:3000`, la page d’accueil doit s’afficher correctement avec son style.

??? note "Astuce"
    La solution est quelque part dans le tutoriel de la page précédente.

