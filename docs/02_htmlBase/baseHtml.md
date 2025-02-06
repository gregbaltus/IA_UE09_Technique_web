# Les bases de l'HTML

HTML est l'acronyme de HyperText Markup Language.

Un hypertexte est un document contenant des éléments cliquables (hyperliens) qui pointent vers d'autres documents. La lecture n'est donc plus linéaire.

Un langage de balisage (markup language) est un langage opérant grâce à des balises délimitant des parties du texte du document. L'utilisation des balises permet de combiner la structure et le contenu du document.

La plupart des balises (tags) servent de conteneurs dont la syntaxe est la suivante :


## Les balises
``` html
<balise attribut="valeur">contenu</balise> 
```

Exemple :

``` html
<p>Ceci est un paragraphe</p>
```
Il existe deux types  de balises :

- les **balises conteneurs**
	- Elles ont une *balise d'ouverture* et une *balise de fermeture*  
		``` html
		<h1>Je suis le titre principal de la page</h1>
		<p>Je suis un paragraphe</p>
		```
		
<img src="docs/img/02_htmlBase/balise.png" alt="Balise" width="600">
		
- les **balises autofermantes**
	- Elles ne nécessitent pas de fermeture
		``` html
		Je suis un texte qui contient un <br> retour à la ligne 
		```
<details>
  <summary>info</summary>
  Une balise autofermante peut contenir un "/" de fermeture.
	<pre><code>&lt;br/&gt;</code></pre>
	Afin de ne pas se tromper, nous vous recommandons dans ce cours de ne pas le mettre.
	La position du "/" dans une balise autofermante est importante!! &lt;br&gt; n'est pas valide !!
</details>
	


## Les attributs

Les balises peuvent contenir des attributs. Ceux-ci modifient ou précisent le comportement ou l'apparence de l'élément.
Certains attributs sont **obligatoires**, d'autres **optionnels**.

Les attributs sont placés dans la balise d'ouverture, sous la forme **`nom=valeur`**.  

<img src="docs/img/02_htmlBase/attribut.png" alt="Attribut" width="600">



