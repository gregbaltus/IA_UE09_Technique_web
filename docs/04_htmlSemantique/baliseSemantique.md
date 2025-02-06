
#Balises sémantiques
##Balises de contenu
**RAPPEL :** 
  
###Titres
Les recommandations de l'usage des différentes niveaux de titres (h1 à h6) sont les suivantes :

- Hiérarchie correcte des niveaux de titres (Exemple: pas de `<h3>` s'il n'y a pas un `<h2>` et un `<h1>`),
- Un seul `<h1>` pour une même page. 
- Les `<article>` et les `<section>` commencent, si possible, par un `<h2>`,
- Les titres sont rédigés pour le lecteur en premier lieu et non comme un agrégat de mot clefs pour manipuler les robots indexeurs de contenus,
- Les balises de titre sont utilisées pour donner du sens au contenu et non pour l'aspect graphique d'un texte. Les feuilles de style CSS servent à définir le rendu visuel de n'importe quel élément HTML.
- Pas trop de titres, ni trop peu ! En général un titre par page, article, section ; des sous-titres si nécessaire

###Enumération d'élements
- Utiliser une liste pour énumérer des éléments
- Utiliser une liste pour les items d'un menu de navigation

###Temporalité
La temporalité (date de publication d’un article ou la date à venir d’un événement...) peut s'exprimer à l'aide de la balise `<time>`

###Adresse
La balise `<address>` est utilisée pour mentionnée une adresse

###Citation
Les balises `<blockquote>` et `<cite>` seront utilisées pour les citations

!!! tip
    Il existe énormément de balises.  A vous de trouver celles qui sont les plus adaptées.  Utiliser des cites de référence comme : [la doc mdn](https://developer.mozilla.org/fr/docs/Web/HTML/Element){:target="_blank"}

##Balises de structuration
Différentes balises de structuration existent :

###`<main>` 
Contenu principal de la page supposé varier de page en page d'un même site 
###`<section>` 
Représente un bloc générique de contenu ayant la même thématique, souvent regroupé par sujet ou fonction. Bien que non obligatoire, il est conseillé de spécifier un titre aux sections pour une meilleure définition de la structure du document.
###`<article>` 
Désigne une portion du document potentiellement autonome dans le sens où elle pourrait être reprise ou réutilisée, comme un article de journal, de blog ou de forum tout en continuant à faire du sens.
###`<header>` 
En-tête de page, d'article ou de section 
###`<footer>` 
Pied de page , d'article ou de section 
 ###`<nav>`  
 Groupement d'éléments de navigation (menus)
###`<aside>`  
Information supplémentaire facultative liée à la page, une section ou un article, non nécessaire à la compréhension du contenu lié. Il est recommandé que le contenu d'un `<aside>` puisse se suffire à lui-même (sur mobile, `<aside>` peut être affiché à la demande et masquer le contenu lié!)

Mais que représentent les balises `<div>` et `<span>`


###`<div>`
Conteneur générique, ne possède aucun sens sémantique. Utiliser pour regrouper des éléments pour des raisons de style (sera vu dans la partie CSS) 
###`<span>`  
Idem que le `<div>` mais ne provoque pas de retour à la ligne 
 









