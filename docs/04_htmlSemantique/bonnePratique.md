
#Bonnes Pratiques
##Écriture du code HTML

Lorsque vous rédigez du code HTML, veillez à respecter les conventions suivantes :

- Les balises et attributs écrits en minuscules
- Spécifier la version HTML (DOCTYPE)
- Utilisation de " et non ' pour les attributs
- Fermer chaque balise (même les non obligatoires comme `<li>`, `<body>`…)
- Les éléments imbriqués sont indentés
- Spécifier l'encodage des caractères en UTF-8 (meta charset)
- Spécifier la langue utilisée pour le contenu (html lang="fr")
- Pas de / pour fermer les balises autofermantes.(img, br, hr,…)
- Respecter la hiérarchie des titres (h1…h6) et la sémantique des balises (i.e. : pas de tableau pour mise en page)
- Spécifier la langue utilisée pour le contenu est utile aux synthèses vocales (pour adopter le bon accent) et aide au référencement par une meilleure interprétation des termes par les robots indexeurs. 

##Réduire les balises au minimum

Plus vous utilisez des balises et plus vous les imbriquez et plus cela risque d'augmenter le temps de chargement de la page. De plus, une structure de balises simplifiée est également plus facile à maintenir. Evitez donc les balises inutiles.

Mauvais exemple 
```html
<div class="titrePrincipal"><h1>About Us<h1></div>
```
Bon exemple
```html
<h1 class="titrePrincipal">About Us<h1>
```
##Ordre des attributs

Pour le navigateur, l'ordre des attributs des balises n'a aucune importance. Par contre, pour les développeurs et les web designers qui manipulent ce code, avoir une convention d'ordre des attributs permet de faciliter la lecture du code. Comparez vous-mêmes.

Attributs dans un ordre quelconque
```html
<ul>
    <li data-auteur="J.R.R Tolkien" class="livre" id="livre1">Le Hobbit</li>
    <li id="livre2" data-auteur="F. Herbert" class="livre">Dune</li>
    <li class="livre" id="livre3" data-auteur="H.P. Lovecraft">L‘appel de Cthulhu</li>
</ul>
```

Attributs ordonnés
```html
<ul>
    <li class="livre" id="livre1" data-auteur="J.R.R Tolkien">Le Hobbit</li>
    <li class="livre" id="livre2" data-auteur="F. Herbert">Dune</li>
    <li class="livre" id="livre3" data-auteur="H.P. Lovecraft">L‘appel de Cthulhu</li>
</ul>
```
L'ordre des attributs recommandé est le suivant:

- **class** : liaison la plus courante avec les feuilles de styles CSS,
- **id, name** : identifiants généralement manipulés par Javascript ou par soumission de formulaire,
- **data-*** : attributs de données personnalisables
- **src, for, type, href, value** : attributs contenant une valeur de taille réduite
- **title, alt** : attributs contenant une expression plus ou moins longue
- **role, aria-*** : attributs liés à l'amélioration de l'accessibilité ou au web sémantique.