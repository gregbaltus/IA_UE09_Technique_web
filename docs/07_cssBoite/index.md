#Bloc-inline

Tout élément html est inclus dans une boîte ("box" en anglais).
Il existe deux types de boites : le boite de type bloc  ("block boxes" en anglais) et les boîtes en ligne ("inline boxes").

##Type bloc

Les principales caractéristiques d'une boite de type bloc sont

- l'élément occupe tout l'espace disponible de son parent
- l'élément provoque un retour à la ligne et fait passer l'élément suivant à la ligne
- on peut jouer sur les propriétés de largeur (`width`) et hauteur (`height`)
- les propriétés padding, margin, et border du modèle de boîte (vues prochainement) influencent la disposition des éléments 

Exemples : `<p>`, `<div>`, `<ul>`, `<h1>`, `<section>`, `<header>`...

##Type en ligne

Les principales caractéristiques d'une boite de type en ligne sont

- l'élément, par défaut, occupe la place de son contenu
- l'élément ne provoque pas de retour à la ligne, les autres éléments se suivent donc en ligne
- les propriétés de largeur (`width`) et hauteur (`height`) ne s'appliquent pas
- les propriétés padding vertical, margin vertical, bordures verticales (vues prochainement) seront appliquées mais ne provoqueront pas de déplacement des éléments
- les propriétés padding horizontal, margin horizontal, bordures horizontal (vues prochainement) seront appliquées et provoqueront des déplacements des éléments

Exemples : `<span>`, `<img>`,`<a>`, `<strong>`...

##Flux courant

Le flux courant des éléments HTML décrit la manière dont les éléments sont disposés sur une page en fonction de leur ordre dans le code et de leurs propriétés CSS. 

Voici les points clés :

- Ordre de rendu : Les éléments sont affichés dans l'ordre dans lequel ils apparaissent dans le code, de haut en bas et de gauche à droite.
- Modèle de boîte : Chaque élément est traité comme une boîte avec des marges, du padding et une bordure (vus prochainement), influençant son espacement et son positionnement.

**Par défaut, les éléments html sont donc placés sur la page d'après le flux courant.**
