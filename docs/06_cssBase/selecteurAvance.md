#Sélecteurs avancés

Ce chapitre est optionnel.
Mais n'hésitez pas à le parcourir et utiliser les techniques pour être plus performant.


##Descendants directs

Pour les exemples suivants, utilisons ce codePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="LYwWxNe" data-pen-title="Untitled" data-user="Flolec" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Flolec/pen/LYwWxNe">
  Untitled</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


Obervez la structure du code html enfant.
Le code suivant permet de cibler les `p` si ils sont descendants directs d'une section.
Nous pouvons donc voir que le `p` présent dans le `blockquote` n'est pas atteint.

```css  title="CSS"
section > p{ 
	color: red;
}
```
Permet de cibler les `p` qui sont enfants directs de la `section`.

A votre avis, que se passe-t-il si on enlève le signe `>` ? Testez-le dans le codePen.

##Voisins directs

Commentez-le premier sélecteur et décommentez le second.
Qu'observez-vous ?
```css  title="CSS"
section + p{
	color: blue;
}
```
Seul  le `p` directement voisin de la `section` est impacté. (cibler le `p` qui est placé directement après la `section` ) 

##Voisins

Commentez-le deuxième sélecteur et décommentez le troisième.
Qu'observez-vous ?
```css  title="CSS"
section ~ p{
	color: green;
}
```
Seuls  les `p` qui suivent la `section` sont impactés. (cibler les `p` qui sont placés après la `section` tout en ayant le même parent) 

##:first-child

Pour les exemples suivants, utilisons ce codePen.

La pseudo-classe `:first-child` permet de cibler un élément qui est le premier élément enfant par rapport à son  parent.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWNppjQ" data-pen-title="pseudo-class" data-user="Flolec" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Flolec/pen/MWNppjQ">
  pseudo-class</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


##:last-child

La pseudo-classe `:last-child` permet de cibler un élément qui est le dernier enfant de son parent.

Commentez-le premier sélecteur et décommentez le second.

##Pseudo-classes

Vous avez maintenant compris le principe des pseudos-classe, observez les exemples suivants dans le doc MDN :

[:last-of-type](https://developer.mozilla.org/fr/docs/Web/CSS/:last-of-type){:target="_blank"}
[:nth-child](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child){:target="_blank"}
[:nth-last-child](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-last-child){:target="_blank"}

##pseudo-élément ::before

Le pseudo-élément `::before` est utilisé en CSS pour insérer du contenu avant l'élément ciblé, sans modifier le HTML.

Voici les points clés de son fonctionnement :

**Principes de Base**

* Déclaration et contenu

  `::before` est déclaré avec content, qui définit ce qu’il affiche. Le contenu peut être du texte, une image, un symbole, ou même laissé vide (content: "") pour styliser l'élément.

  Ce pseudo-élément est idéal pour ajouter des décorations, icônes, ou même des éléments graphiques, sans toucher à la structure HTML.

* Position et rendu

  `::before` est toujours positionné avant le contenu réel de l'élément ciblé.

  Il hérite du type de boîte de l’élément parent (bloc ou en ligne), mais peut aussi être modifié indépendamment en ajoutant des propriétés comme display: block ou display: inline-block.

* Exemples d’utilisation

  Icônes et symboles : En ajoutant une icône ou un symbole avant un texte, comme un coche (✓) ou une puce.
  Éléments graphiques : Créer des éléments de décorations comme des bordures ou des arrière-plans stylisés (soulignement de titres, puces de liste).

```css
 a::before {
  content: "||";
}
```
* Avantages

Séparation du style et du contenu : Permet d'enrichir visuellement le contenu sans complexifier le HTML.

Optimisation du code : Les éléments décoratifs peuvent être ajoutés via CSS seulement, évitant la duplication de balises HTML.

 