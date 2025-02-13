Nous avons vu que les balises html possèdent des styles par défaut.

##Découverte #1

Dans l'exemple utilisé précédemment, nous avons vu que les styles étaient encodés directement dans la page html au sein de la balise `<head>`.

###Feuille de styles interne

Les règles CSS sont regroupées dans le contenu de la page HTML (mais toujours dans la section `<head>`) au moyen des balises `<style>..</style`>

```html
<head>
    [code existant]
    <style>
        les règles CSS...
    </style>
    [code existant]
</head>
```
A votre avis, pourquoi n'est-ce pas une bonne pratique ?


##Découverte #2 

Modifiez le code suivant (surligné en bleu) dans votre fichier html

```html  hl_lines="2-2" linenums="1" 
[code précédent]
<section style="background-color: LightGrey;" >
    <h2>Nos agences</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dignissimos hic in, distinctio deleniti corporis esse mollitia odit ratione doloremque architecto perferendis explicabo veritatis nesciunt assumenda voluptatum consequatur aspernatur libero?</p>
</section>
[code suivant]
```
Que constatez-vous ? 
Toutes les sections ont un fond de couleur "blanc" exceptée celle qui possède un style interne ("inline").


###Style interne

Les propriétés de style peuvent être définies directement au niveau de chaque balise à l'aide de l'attribut `style`. Cette technique est à éviter car le mélange de code HTML et CSS rend plus complexe la maintenance de la page.

```html
<section style="background-color: LightGrey;" >
```
A votre avis, pourquoi n'est-ce pas une bonne pratique ?

##Découverte #3

Modifiez maintenant ce code :

```html  hl_lines="20-20" linenums="1" 
[code précédent]
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing</title>
	<style>
		body {
			background-color: Lavender;
			color : Purple;	 
		}
		
		h1{
			color: DarkGreen;
			font-size : 3rem;
		}
		section {
			background-color: white;
		}
	</style>
    <link rel="stylesheet" type="text/css" href="css/testing.css" />
</head>
[code suivant]
```

- Créez un dossier nommé `css` dans lequel vous créez un fichier nommé `testing.css`

Dans ce fichier, copiez-collez ce code
```css
section{
    background-color: LightBlue;
} 
```

Que constatez-vous ? 
Pourquoi ? 

###Feuille de styles externe <a name="liaisonCss"></a>

La méthode recommandée est de centraliser l'ensemble des règles CSS d’un site dans un fichier *.css et lier celui-ci aux pages HTML en plaçant ce qui suit dans le `<head>` :

```html
<link rel="stylesheet" type="text/css" href="chemin vers fichier *.css"  >
```

| Attribut          | Explication                          |
| ------------------------------- | ------------------------------- |
| `rel`   | définit la relation entre le fichier .html et le fichier lié. Ici, il s'agit de notre feuille de style. |
| `type`   | définit le type de document lié. Ici, il s'agit d'un fichier .css |
| `href`   | permet d'indiquer le chemin vers le fichier css |
 
##Priorités
Nous venons donc de voir qu'il y a 3 niveaux de style en cascade :

- La feuille de styles interne définie au niveau d'une page
- Les styles internes (inlines) définis  au niveau d'une balise spécifique
- La feuille de style externe appliquée à toutes les pages d'un site


!!! Tip 
    **Le style le plus proche de la balise est prioritaire :
        inline > interne > externe**


##Que faut-il utiliser ?

Sauf cas particulier, l'utilisation d'une feuille de styles externe est recommandée :

- Tous les styles sont **regroupés** dans un seul document ce qui facilite la maintenance
- Les styles ne sont **pas dupliqués** dans chaque page voire pour chaque balise
- Le document HTML est **plus « léger » et plus lisible**
- La feuille de styles, unique pour un site, peut être mise en cache par le navigateur, ce qui améliore le **temps de chargement** des pages HTML
- En ne mélangeant pas les types de styles (inline, interne ou externe), on évite les **conflits** liés à des déclarations multiples pour les mêmes éléments