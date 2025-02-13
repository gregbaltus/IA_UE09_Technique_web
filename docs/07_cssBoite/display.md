#Display

**La propriété `display` définit le type d'affichage utilisé pour le rendu d'un élément.**

##Découverte


Observons et testons le code suivant :

<p class="codepen" data-height="600" data-default-tab="html,result" data-slug-hash="YzmaWPJ" data-pen-title="display inline-block" data-user="Flolec" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Flolec/pen/YzmaWPJ">
  display inline-block</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

- Décommentez la ligne `display: inline;`
Qu'observez-vous concernant la `<li>` (position et largeur) ?
- Supprimez la ligne `display: inline;`
- Décommentez la ligne `display: inline-block;`
Qu'observez-vous concernant la `<li>` (position et largeur) ?

Vous pouvez constatez qu'un léger écart est présent entre les deux `<li>`.
Inspectez le code.  Voyez-vous une marge ?
D'où vient cet espace ? 

- Dans le code html, supprimez l'indentation entre les `<li>`.

```html    linenums="1" 
<li><em>Auteur : </em>Pixabay</li><li><em>Commentaires : </em>15</li>
```
Qu'observez-vous ?

##En résumé

On peut modifier le display d’un élément en CSS pour adapter son comportement de mise en page. Les valeurs inline et inline-block sont particulièrement utiles :

**display: inline** transforme un élément de type bloc en élément de ligne. Ainsi, il s’insère dans le flux du texte et prend uniquement la largeur de son contenu. Toutefois, il ne permet pas de définir une largeur, une hauteur ou des marges et padding verticaux spécifiques.

**display: inline-block** combine les avantages d’un élément en ligne (s’insérant dans le flux de texte) et d’un élément de bloc. Contrairement à inline, il permet de définir explicitement la largeur, la hauteur, les margin et padding.

Ces options offrent une flexibilité accrue pour structurer des éléments de manière harmonieuse dans un flux de texte .

Attention, cette technique n'est pas adaptée pour réaliser complètement une mise en page.  Nous verrons que le `display: flex;` est plus adapté.

Quand les éléments sont en display: inline-block, des espaces indésirables apparaissent souvent entre eux. Ces espaces proviennent des espaces blancs dans le code HTML lui-même (comme des sauts de ligne ou des espaces entre les balises). Le navigateur interprète ces espaces comme des espaces entre les éléments inline, et cela crée des espaces visibles.

*Solutions pour éliminer ces espaces :*

- Supprimer les espaces dans le code HTML 

```html  
<li><em>Auteur :</em> Pixabay</li><li><em>Commentaires :</em> 15</li>
```

- Utiliser des commentaires HTML 
```html  
<li><em>Auteur :</em> Pixabay</li><!--
--><li><em>Commentaires :</em> 15</li>
```