# 2. SQLite

## 2.1 Utilisation de DataGrip

Pour manipuler facilement une base de données, il est utile d’avoir un **outil visuel**.  
Dans ce cours, nous allons utiliser **DataGrip**, un logiciel de JetBrains (les créateurs d’IntelliJ et WebStorm).


### À quoi sert DataGrip ?

DataGrip est une **interface graphique pour les bases de données**.  
Il vous permet de :

- visualiser les tables et leur contenu,

- écrire et exécuter des requêtes SQL (SELECT, INSERT, etc.),

- créer, modifier ou supprimer des tables,

- explorer les relations entre les données.


###  Installer DataGrip

1. Allez sur le site officiel : [https://www.jetbrains.com/datagrip/](https://www.jetbrains.com/datagrip/)

2. Cliquez sur **Download**.

3. Choisissez votre système d’exploitation (Windows, macOS, Linux).

4. Installez le programme comme n’importe quelle application.

Vous pouvez activer **une licence gratuite** avec votre adresse mail académique sur [JetBrains Student Program](https://www.jetbrains.com/community/education/#students).

---

### Une fois installé...

Lorsque DataGrip est lancé, vous pourrez :

- créer une nouvelle **connexion** vers une base SQLite,

- **naviguer visuellement** dans vos données,

- tester vos requêtes SQL avant de les utiliser dans le code.

## 2.2 Création d'une base de données SQLite

Nous allons maintenant créer notre **première base de données SQLite** à l’aide de **DataGrip**.

---

### Étapes pour créer une base SQLite dans DataGrip

1. Ouvrez DataGrip

2. Dans la colonne de gauche, cliquez sur le bouton **"+"** puis sur **"Data Source" → "SQLite"**

3. Une nouvelle fenêtre s’ouvre :

   - Cliquez sur **"..."** à droite de **"Database file"**

   - Choisissez l’emplacement où vous souhaitez enregistrer votre base (par exemple, dans un dossier `data/` de votre projet)

   - Donnez-lui un nom, par exemple : `site.db`

   - Cliquez sur **OK**.


### Où se trouve la base de données ?

- La base est un **fichier .db** stocké à l’endroit que vous avez choisi.

- Ce fichier contient **toutes les données, tables et schémas** de votre base.

- Il est facilement partageable ou transportable (c’est un des avantages de SQLite).

---

### Connexion automatique

Une fois la base créée, **DataGrip s’y connecte automatiquement**.  
Vous verrez apparaître dans l’arborescence de gauche :

- votre nouvelle base de données,

- et un dossier `Tables` (vide pour l’instant).

Vous pouvez maintenant :

- créer des tables,

- insérer des données,

- exécuter des requêtes SQL.


### Attention : suppression ≠ disparition

Si vous cliquez-droit sur la connexion et choisissez **"Remove"** dans DataGrip :
- Cela **supprime la connexion dans DataGrip**,

- **Mais cela ne supprime pas le fichier `.db`** !

Vous pouvez **vous reconnecter à tout moment** à cette base existante :

- Cliquez sur **"+" → "Data Source" → "SQLite"**

- Dans **"Database file"**, choisissez le fichier `.db` déjà existant

La base SQLite est un simple fichier. Tant que ce fichier n’est pas supprimé, vos données sont conservées.


## 2.3 Créer une table dans la BD

Maintenant que la base est créée, nous allons y **ajouter une première table** contenant des données.  
Pour cela, nous allons écrire des **requêtes SQL** dans DataGrip.


### Créer une table via un script SQL

Dans DataGrip :

1. Faites clic droit sur le nom de votre base → **"New" → "Console"**  
   Une nouvelle fenêtre s’ouvre pour écrire du SQL.

2. Collez le script suivant pour créer une table `messages` :

```sql
CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  contenu TEXT NOT NULL
);
```

3. Cliquez sur le bouton vert

Il crée la table nommée `messages` avec 4 colonnes.

### Ajouter des lignes (exemples de données)
Toujours dans la console SQL, ajoutez maintenant quelques lignes dans la table :

```sql
INSERT INTO messages (nom, email, contenu) VALUES
  ('Alice', 'alice@example.com', 'Bonjour !'),
  ('Bob', 'bob@example.com', 'Je suis intéressé par votre site.'),
  ('Claire', 'claire@example.com', 'Merci pour l’info !');
```

!!! Tip "Créez via js"
    Il est aussi possible de créer des tables et d’insérer des données via du code JavaScript (avec Node.js), ce que nous verrons plus tard.
    Mais DataGrip est parfait pour tester, comprendre, et corriger rapidement vos tables.

## 2.4 Installer SQLite pour l’utiliser avec Node.js

Pour pouvoir **interagir avec une base SQLite depuis notre serveur Express (en JavaScript)**, nous devons installer une **bibliothèque Node.js** qui permet de se connecter à une base `.db`.

---

### Le module `sqlite3`

Nous allons utiliser le module `sqlite3`, qui est la solution la plus simple et la plus répandue pour ce type de projet.

---

### Étapes d’installation

1. Ouvrez un terminal dans le dossier de votre projet Node.js 

2. Tapez la commande suivante :

```bash
npm install sqlite3
```
3. Une fois installé, vous pouvez utiliser cette bibliothèque dans vos fichiers .js avec :
```js
const sqlite3 = require("sqlite3").verbose();
```

### Exemple de chemin vers une base existante
Si votre fichier de base de données s'appelle `site.db` et se trouve dans un dossier `data/`, vous pouvez y accéder avec :

```js
const path = require("path");
const db = new sqlite3.Database(path.join(__dirname, "data", "site.db"));
```
!!! Tip "SQLite c'est simple"
    SQLite ne nécessite aucun serveur à lancer séparément.
    Une fois le fichier .db accessible, votre application peut s’y connecter directement.

Dans la section suivante, nous allons voir comment `fetch()` va nous permettre d'afficher facilement des données présentes dans notre base de données en utilisant les méthodes de notre classe `Repository`.