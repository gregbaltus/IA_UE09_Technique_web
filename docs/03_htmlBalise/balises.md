# Premières balises de contenu

!!! note "Avertissement"
	Cette page vous montre les balises principales.  Il en existe bien plus... <br>  [>>N'hésitez pas à consulter une doc de référence.](https://developer.mozilla.org/fr/docs/Web/HTML/Element/){:target="_blank"}  Vous avez un aperçu des balises existantes dans le menu latéral de gauche.

??? note "Comment choisir les balises ?"
	 Les balises doivent identifier le contenu affiché. Est-ce un titre, un paragraphe, une citation, une liste, etc. ? Une fois que le contenu est identifié, recherchez la balise la plus adéquate pour le représenter.

    Exemple : 

    <pre>
      &lt;p>Activités&lt;/p&gt;
      &lt;p>Voici mes activités favorites :&lt;/p&gt;
      &lt;p>Sport&lt;/p&gt;
      &lt;p>Basket&lt;/p&gt;
      &lt;p>Natation&lt;/p&gt;
      &lt;p>Jeux&lt;/p&gt;
      &lt;p>Fortnite&lt;/p&gt;
      &lt;p>Doom&lt;/p&gt;
     </pre>    
     <pre>    
        &lt;h1>Activités&lt;/h1&gt;
        &lt;p>Voici mes activités favorites :&lt;/p&gt;
        &lt;ul&gt;
          &lt;li>Sport 
            &lt;ol&gt;
              &lt;li>Basket&lt;/li&gt;
              &lt;li>Natation&lt;/li&gt;
            &lt;ol&gt;
          &lt;li&gt;
          &lt;li>Jeux 
            &lt;ol&gt;
              &lt;li>Fortnite&lt;/li&gt;
              &lt;li>Doom&lt;/li&gt;
            &lt;ol&gt;
          &lt;li&gt;
        &lt;ul&gt;
      </pre>    
    Pour vous aider, voici les questions à vous poser : 

      - **Que représente le contenu ?**

        Il est important d'identifier la nature du contenu : est-ce un titre, un paragraphe, une citation, une liste, etc. ? Par exemple, un titre principal utilisera une balise `<h1>`, tandis qu'un paragraphe simple utilisera `<p`>.

      - **Quelle est la hiérarchie de l'information ?**
        
        Les balises de titre (`<h1>` à `<h6>`) permettent de structurer l'information en niveaux, facilitant ainsi la lecture par les utilisateurs et les moteurs de recherche.

      - **S'agit-il d'une information visuelle ou fonctionnelle ?**
        
        Certaines balises, comme `<strong>` et `<em>`, ajoutent de la signification au texte, tandis que d'autres, comme `<div>` ou `<span>`, sont purement structurelles et n'apportent aucune sémantique.

      - **Le contenu doit-il être interactif ?**
        
        Si le contenu nécessite une interaction utilisateur (boutons, formulaires), des balises spécifiques comme `<button>`, `<form>`, ou `<input>` sont nécessaires pour assurer accessibilité et fonctionnalité.

      **La sémantique est un élément très important.  Nous y reviendrons en datail dans le [chapitre suivant](../04_htmlSemantique/index.md)**

## Titre <a name="titre"></a>

Les éléments `<h1><h2>...` représentent des titres.  Il y a 6 niveaux de titres.

`<h1>` correspond au niveau  le plus haut et `<h6>` correspond au niveau le plus faible.
>:warning: Il ne peut y avoir qu'un seul titre principal dans une page, représenté par un `<h1>`
>
>:warning: La hiéarchie des titres doit être respectée.  Vous ne pouvez donc pas avoir de `<h3>` si vous n'avez pas de `<h2>`, vous ne pouvez pas avoir de `<h2>` si vous n'avez pas de `<h1>`, ...

Ajoutez 6 niveaux de titre (`<h1>` jusque `<h6>`). Que constatez-vous visuellement ?
??? quote "Solution"
    Plus le niveau du titre est haut, plus la taille de la police est grande.  L'erreur courante lorsqu'on début est de choisir le niveau du titre en fonction de sa taille.  :fontawesome-solid-skull-crossbones: Grande erreur ! :fontawesome-solid-skull-crossbones: En effet,  le niveau des titres permet de structurer le contenu.  Les lecteurs d'écran utilisent cette hiérarchie pour naviguer efficacement à travers le contenu, améliorant ainsi l'accessibilité. Les moteurs de recherche utilisent ces balises pour comprendre la structure et l'importance du contenu, ce qui peut influencer le classement des pages.

    Toute page doit possèder un titre principale `<h1>` et les titres suivants respectront la hiérachie.  Et ne vous tracassez pas du visuel, celui-ci sera réalisé en CSS.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="bGPbmML" data-pen-title="html :  6 titres " data-user="Flolec" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Flolec/pen/bGPbmML">
  html :  6 titres </a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>  

## Paragraphe <a name="para"></a>

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YzoKRKV" data-pen-title="Untitled" data-user="Flolec" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Flolec/pen/YzoKRKV">
  Untitled</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Remarquez, par défaut, la balise provoque un retour à la ligne. Résistez à la tentation d'englober des éléments avec des `<p>` uniquement pour réaliser des retours à la ligne...

La balise `<p>` doit être utilisée pour englobler du contenu représentant des paragraphes. 
 
Exemple avec une énumération de données.

!!! Failure  inline ":fontawesome-regular-rectangle-xmark:{.redWhite } Don't do this "
    ```html  
      Liste de courses
      <p>Pomme</p>
      <p>Poire</p>
      <p>Pêche</p>
    ``` 

!!! Success inline ":white_check_mark: Do this "
    ```html  
      Liste de courses
      <ul>
        <li>Pomme</li>
        <li>Poire</li>
        <li>Pêche</li>
      </ul>
    ```

<div class="clearFloat"></div> 
 
## Liste <a name="liste"></a>

### Liste ordonnée

<p class="codepen" data-height="200" data-default-tab="html,result" data-slug-hash="bGPbQLZ" data-pen-title="Html : liste ordonnée" data-user="Flolec" style="height: 200px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Flolec/pen/bGPbQLZ">
  Html : liste ordonnée</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Liste non ordonnée
<iframe height="200" style="width: 100%;" scrolling="no" title="Html : liste non ordonnée" src="https://codepen.io/Flolec/embed/wvLwQyN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Flolec/pen/wvLwQyN">
  Html : liste non ordonnée</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Listes imbriquées
<iframe height="300" style="width: 100%;" scrolling="no" title="Html : liste non ordonnée" src="https://codepen.io/Flolec/embed/NWZKEYV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Flolec/pen/NWZKEYV">
  Html : liste non ordonnée</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


Erreur classique : les enfants directs du `<ul>` doivent être obligatoirement des `<li>`.
Les sous-listes doivent donc être incluses dans les balises `<li>…</li>` de la liste principale.

!!! Failure  inline ":fontawesome-regular-rectangle-xmark:{.redWhite } Don't do this " 
    ```html  hl_lines="3-7" linenums="1"
      <ul>
        <li>Cerise</li>
        <li>Pomme</li>
          <ul>
            <li>Gala</li>
            <li>JonaGold</li>
          </ul>
        <li>Poire</li>
        <li>Pêche</li>
      </ul>
    ``` 

!!! Success inline ":white_check_mark: Do this "  
    ```html  hl_lines="3-7" linenums="1"
      Liste de courses
      <ul>
        <li>Cerise</li>
        <li>Pomme
          <ul>
            <li>Gala</li>
            <li>JonaGold</li>
          </ul>
        </li>
        <li>Poire</li>
        <li>Pêche</li>
      </ul>
    ```

<div class="clearFloat"></div> 

##Strong (gras) <a name="evidence"></a>

La balise  `<strong>` indique que le texte a une importance particulière. Cela se traduit généralement par un affichage en gras.

##Emphase (italique)

La balise  `<em>` indique un texte sur lequel on veut insister. Cela se traduit généralement par un affichage en italique.

 
:octicons-light-bulb-16:
**Tip:** On peut bien sûr cumuler les balises
 
 <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/Flolec/embed/ExBYOrm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Flolec/pen/ExBYOrm">
  Untitled</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

##Image <a name="image"></a>

```
<img src="/chemin/fichier.ext" alt="texte alternatif" width="100" height="50" >
```
 

*   L'attribut `src:` le chemin de l'image...
*   L'attribut `alt:` obligatoire et contient le texte qui sera affiché si l'image ne peut être chargée. Ce texte est également important pour les non-voyants.
*   Les attributs `width` et `height` : ils permettent de spécifier en pixels la taille de l'image. Pour accélérer le rendu de la page, il est recommandé de spécifier les dimensions de l'image.

**:warning: Remarque importante** : Pour assurer la qualité du rendu des images et éviter un temps de chargement trop important, les images d'un site doivent être redimensionnées aux dimensions finales d'affichage à l'aide d'un logiciel de traitement d'images (Photoshop, Gimp, ...). Il est aussi nécessaire d'utiliser le meilleur format de fichier pour les images; ainsi pour les plus courants:

*   PNG: (Portable Network Graphic) format compressé sans perte, supporte la transparence, idéal pour logo, dessin,...
*   JPG: (Joint Photographic Expert Group) format très compressé pour photo, pas de transparence, perte de qualité à la sauvegarde,
*   GIF: (Graphics Interchange Format) format peu compressé sans perte, supporte la transparence et les animations, idéal pour image avec peu de dégradés de couleurs, animations simples.

 
:octicons-light-bulb-16:
**Rappel:** Évitez les espaces et les caractères accentués dans les noms de dossiers et noms de fichiers.
 
## Hyperlien <a name="lien"></a>

```
<a href="url" target="_blank"> élément cliquable </a>
```
 

*   L'attribut `href`: l'url vers la ressource vers laquelle pointe le lien
*   L'attribut `target`: indique si le lien sera ouvert dans un nouvel onglet (\_blank). Si attribut omis, le lien est ouvert dans le même onglet.
*   L'attribut `title`: texte d'info-bulle qui apparait au survol du lien
 
:octicons-light-bulb-16:
**Tip :** L'élément cliquable peut être un texte, une image, un bouton, ....
 


## Saut de ligne <a name="saut"></a>

```
<br>
```
Affiche un saut de ligne (en général dans un paragraphe).

**:warning: Remarque importante** : N'utilisez pas la balise `<br>` pour espacer les éléments ! Toutes les mises en page seront réalisées via les CSS.

  
## Les tableaux <a name="tab"></a>

Un tableau  `<table>`  est conçu ligne  `<tr>`  par ligne. Chaque ligne contient des cellules  `<td>` . Les cellules d'entête  `<th>`  sont placées généralement dans la première ligne du tableau.

 
:octicons-light-bulb-16:
**Tip:** Sans css, il n'est pas possible d'afficher des bordures, des espaces... Attention à ne pas utiliser des attributs ***dépréciés***.

**:warning: Remarque importante** :  les tableaux ne sont pas utilisés pour réaliser des mises en pages.  Les tableaux sont utilisés pour afficher des données tabulaires.

<iframe height="300" style="width: 100%;" scrolling="no" title="Hrml : tableau" src="https://codepen.io/Flolec/embed/GRbKwLP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Flolec/pen/GRbKwLP">
  Hrml : tableau</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe> 
 
## Les entités HTML <a name="entite"></a>

 Deux formats existent :

*   par code UTF-8 : le signe égal peut être affiché par `&#61;` (code décimal) ou `&#x3D;` (code hexadécimal)
*   par mot-clef: le signe égal peut être affiché par `&equals;`
 
Tous les caractères peuvent être écrits grâce aux entités HTML. Les entités commencent toujours par "&" et se terminent par ";".
Les entités sont généralement utilisées pour afficher des caractères réservés (qui seraient autrement interprétés comme du code HTML) et des caractères invisibles (comme des espaces insécables).

Vous pouvez exploiter cette [liste des entités HTML](https://dev.w3.org/html5/html-author/charref "Liste d'entités HTML").

Comparez les codes html et les rendus :

<iframe height="300" style="width: 100%;" scrolling="no" title="Html : entités html" src="https://codepen.io/Flolec/embed/gONYQNE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Flolec/pen/gONYQNE">
  Html : entités html</a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
 