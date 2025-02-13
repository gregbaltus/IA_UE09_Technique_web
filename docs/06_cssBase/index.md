
L'acronyme **CSS** signifie (**Cascading Style Sheets**) ou feuilles de styles en cascade en français.

*   Feuilles de styles... : documents spécifiant le rendu visuel d'éléments HTML
*   ... en cascade : les styles peuvent être spécifiés dans différentes feuilles de styles, à différents niveaux d'imbrications de balises et sont appliqués les uns après les autres, en cascade.

Pour rappel, depuis le XHTML 1.0 et HTML 4.0, il est fortement recommandé de **séparer les données** du document de leur **représentation visuelle**. La structure et le contenu du document sont décrits en HTML, le rendu visuel de ces éléments est réalisé en CSS.

??? note "Comprendre l'impact des feuilles de styles CSS"
	Consultez le site : [CSS Zen Garden](https://csszengarden.com/){:target="_blank"}

    Il s'agit de la même page html mais avec des feuilles de styles différentes.

    Cliquez sur un élément du menu latéral droit pour modifier le fichier CSS, et donc le visuel, le contenu du document HTML en lui-même ne change pas.

En plus de cette séparation, l'utilisation des feuilles de styles CSS permet :

* d'**uniformiser** toutes les pages d'un même site web, puisqu'une même feuille de styles peut être appliquée à toutes les pages du site.
* de réaliser **plusieurs rendus** différents plus facilement  
* de **simplifier** la structure HTML puisqu'il n'y a plus d'attributs ou balises liés au rendu visuel

Le **rendu visuel** d'un élément HTML par CSS comprend:

* Sa position et sa taille,
* Sa couleur d'avant et d'arrière-plan,
* Son espacement par rapport aux autres éléments,
* Ses bordures,
* Son opacité, son ombrage,
* …