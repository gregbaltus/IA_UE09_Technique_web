##Exe1 : Offre 

###**Méthode**
 
* Créez un nouveau dossier nommé exeOffre
* Dans ce dossier, 
    * créez un nouveau fichier nommé `offre.html` 
    * copiez-collez ce code dans le fichier html

    ??? abstract "Code à copier"
        ```html 
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title></title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        </head>
        <body>
            <header>
                <h1>Découvrez nos offres de voyage</h1>
            </header>
            <main>
                <section>
                    <h2>Voyage à Bali</h2>
                    <p>Profitez de nos offres spéciales pour découvrir les plages magnifiques de Bali.</p>
                    <ul>
                        <li class="stars">
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star_half</span>
                        </li>
                        <li>500 commentaires</li>
                    </ul>
                    <a href="#">Réserver</a>
                </section>
            </main>
        </body>
        </html>
        ```
    * créez un nouveau dossier nommé `css`
    * dans ce dossier css, créez un nouveau fichier nommé `offre.css`
    * copiez-collez ce code dans la feuille css

    ??? abstract "Code à copier"
        ```css 
        /* Icônes étoile */
        .stars .material-icons {
            font-size: 1.2rem;
            color: #FFD700;
        }
        ```
* Reproduisez l'interface en tenant compte des consignées données ci-dessous  [>> Voir l'interface](../img/07_cssBoite/exe_offre.jpg){:target="_blank"}  

###**Contraintes**

* Vous ne pouvez pas utiliser de techniques comme le flexbox, float, position absolue, position relative.
* Le code Html ne peut être modifié, seuls des class ou id peuvent être ajoutés
* Le code Html doit être valide W3C
* Le code Css doit être valide W3C

###**Par où commencer ?**

- Analysez le code html fourni.
- La partie `head` comprend un lien vers la bibliothèque d'icônes Material Icons de Google
??? tip "Material Icons"
    Le lien [https://fonts.googleapis.com/icon?family=Material+Icons](https://fonts.googleapis.com/icon?family=Material+Icons) importe la bibliothèque d'icônes Material Icons de Google, une collection de symboles visuels (étoiles, flèches, etc.) utilisée pour embellir les interfaces web.
    
    Ce lien permet de :
    
    - Charger les icônes comme une police : Les icônes sont traitées comme du texte, ce qui facilite leur redimensionnement et leur stylisation (couleur, taille).
    - Accéder à un large choix d’icônes ([https://fonts.google.com/icons](https://fonts.google.com/icons)).

    [>>Info Material Symbols](https://developers.google.com/fonts/docs/material_symbols?hl=fr)


- La feuille de style doit être externe et liée à la page html.  Elle sera située dans le dossier `css`. ([Liaison](../06_cssBase/liaison.md#liaisonCss){:target="_blank"})

###**Consignes**

!!! warning
    Pour vous aider, vous avez des *astuces*.  Utilisez l'astuce uniquement si vous êtes bloqués ou si vous désirez vérifier ce que vous avez réalisé. 

- Le titre de la page est "Offres de Voyage"
??? tip  "Astuce"
    Le titre de la page s'affiche dans l'onglet via la balise `<title>`.  [>> info ](../03_htmlBalise/index.md#titre-de-la-page){:target="_blank"}
- La police utilisée est l'arial mais attention, prévoyez une sélection automatique d'une autre police sans empattement (sans-serif) si l'Arial n'est pas disponible.
??? tip  "Astuce"
    Utilisez l'héritage et spécifier la police à utiliser dans le body.  [>> info ](../06_cssBase/miseFormeTexte.md#font-family){:target="_blank"}
- La couleur de fond de la page est `#f7f7f7;`
??? tip  "Astuce"
    Utilisez l'héritage et spécifier la couleur de fond à utiliser dans le body.  [>> info ](../06_cssBase/arrierePlan.md#background-color){:target="_blank"}
- Pour une meilleure lisibilité, la hauteur de ligne est 1,5 fois la taille de la police de l'élément. ([>>info](https://developer.mozilla.org/fr/docs/Web/CSS/line-height){:target="_blank"}  )
??? tip  "Astuce"
    Utilisez l'héritage et spécifier la hauteur de ligne à utiliser dans le body.  

- Tous les titres de niveau 1 du site seront de couleur `#008CBA;`
??? tip  "Astuce"
    Etant donné que tous les titres du site auront le même look, préférez utiliser la redefinition de balise à une classe  [>> info ](../06_cssBase/selecteur.md#selecteurType){:target="_blank"}
- Tous les titres de niveau 2 du site seront de couleur `#333;`
??? tip  "Astuce"
    Etant donné que tous les titres du site auront le même look, préférez utiliser la redefinition de balise à une classe  [>> info ](../06_cssBase/selecteur.md#selecteurType){:target="_blank"}
- Tous les bords arrondis auront une valeur de `0.5rem`
??? tip  "Astuce"
    Prévoyez une classe générique qui pourra être utilisée à chaque fois que vous avez besoin de bords arrondis.  N'oubliez pas qu'une balise html peut posséder plusieurs valeur pour l'attribut class. [>> info ](../06_cssBase/selecteur.md#selecteurBalise){:target="_blank"}
- Le titre dans le header est centré
??? tip  "Astuce"
    On peut aligner le texte via la propriété text-align. [>> info ](../06_cssBase/miseFormeTexte.md#text-align){:target="_blank"}
- La vignette est centrée sur la page du navigateur
??? tip  "Astuce"
    La propriété text-align ne permet pas de centrer des éléments de type bloc.  Pour centrer un élément de type bloc, vous devez lui donner une largeur et des marges latérales automatiques.
     [>> info ](../07_cssBoite/centrerBloc.md){:target="_blank"}
- La vignette a une couleur de fond `#f0f8ff`
- La vignette possède une bordure de couleur `#008CBA`
- La vignette comprend des bords arrondis
??? tip  "Astuce"
    Utilisez le style générique créé précédemment.
- Le contenu n'est pas collé au bord de la vignette
??? tip  "Astuce"
    Pour espacer le contenu par rapport à la boite, utilisez des marges intérieures appelées padding.
     [>> info ](../07_cssBoite/boite.md#padding){:target="_blank"}
- Les étoiles et le nombre de commentaires sont côte à côte sur la même ligne et les puces de la liste sont masquées.
??? tip  "Astuce"
    **Positionnement des `<li>`**<br>
    Les `<li>` sont *par défaut* des éléments de type bloc. Cela signifie qu'ils se positionnent les uns au-dessus des autres. Pour les aligner côte à côte, nous pouvons modifier leur propriété display.[>> info ](../07_cssBoite/display.md){:target="_blank"}

    **Masquage des Puces de Liste**<br>
    Pour masquer les puces de la liste, la propriété `list-style-type` peut être utilisée.
    [>> info ](https://developer.mozilla.org/fr/docs/Web/CSS/list-style-type){:target="_blank"} 

    **Alignement des Étoiles et du Nombre de Votes**<br>
    Les étoiles sont décalées sur la droite. Utilisez l'inspecteur et vérifiez s'il n'existe pas une marge extérieure (margin) et/ou une marge intérieure (padding) par défaut.  Si oui, annulez-les. [>> info ](../07_cssBoite/boite.md ){:target="_blank"}

    Le nombre de commentaire doit être aligné sur la droite.  Une idée est d'utiliser l'alignement du texte sur la droite `text-align:right` . 
    Testez-le.  Autre astuce, vous pouvez utiliser un sélecteur avancé pour cibler le dernier `<li>` de la liste.
    ```css
    .vignette ul li:last-child {
        text-align: right;
    }
    ```
   
    Si vous avez appliqué cette déclaration sur le 2e `<li>`, vous constaterez que le texte n'est pas aligné à droite.  Utilisez l'inspecteur pour regarder l'espace occupé par les `<li>`. Vous constaterez que la largeur de `<li>` dépend du contenu.  L'alignement sur la droite est bien appliqué mais n'est pas visible pas faute de place. 
    L'idée est de donc d'attribuer une largeur aux 2 `<li>`.  Mais rappelez-vous, nous avons modifié le display des `<li>` pour qu'ils puissent se positionner côte à côte.  Ils se comportent désormais comme des élément inline et un élément inline ne peut avoir de largeur.  Nous allons donc leur demander de se comporter comme un élement inline tout en gardant les propriétés d'un élément de type bloc.  
    ```html  
    display: inline-block;
    width : 50%;
    ```
    Oups, cela ne fonctionne pas... Utilisez l'inspecteur.  Vous consaterez que chaque `<li>` possède une largeur de 50% et que l'alignement est bien respecté. 

    Pourquoi les éléments ne se positionnent-ils pas côte à côte alors ? <br>Toujours à l'aide de l'inspecteur, modifiez la largeur(ex : 48%).  Que constatez-vous ? 

    Les éléments sont donc capables de se positionner côte à côte. Et par conséquent, deux élements de largeur de 50% doivent pouvoir se positionner côte à côte.

    Rappelez-vous : Quand les éléments sont en `display: inline-block`, des espaces indésirables apparaissent souvent entre eux. Ces espaces proviennent des espaces blancs dans le code HTML lui-même (comme des sauts de ligne ou des espaces entre les balises). Le navigateur interprète ces espaces comme des espaces entre les éléments inline, et cela crée des espaces visibles. [>> info ](../07_cssBoite/display.md ){:target="_blank"}<br>
    Pour corriger ce problème, vous pouvez supprimer l'indentation dans le code html ou ajouter un commentaire
     
    ```html    title="exemple" 
    </li><!--
    --><li>500 commentaires</li>
    ```

     
- La vignette possède une ombre ([>>info](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow){:target="_blank"}  )
- La vignette possède un bouton de réservation qui 
    - est de couleur `#008CBA;`
    - comprend du texte blanc
    - des bords arrondis 
    ??? tip  "Astuce"
        Pensez à utiliser votre classe générique
    - le texte est centré sur le bouton
    ??? tip  "Astuce"
        Utilisez `text-align: center`
    - le texte n'est pas collé au bord du bouton 
    ??? tip  "Astuce"
        Utilisez des marges intérieures (padding)
    - le bouton est espacé par rapport aux éléments qui lui sont proches
    ??? tip  "Astuce"
        Utilisez des marges extérieures (margin).
        Oups, cela ne donne pas le rendu voulu.  Utilisez l'inspecteur.  Voyez-vous les marges haut et bas ? 
        Non ?
        Rappelez-vous, les propriétés padding vertical, margin vertical, bordures verticales (vus prochainement) seront appliquées mais ne provoqueront pas de déplacement des éléments.
        Pour palier à cela, nous allons lui modifier son display par défaut `display:block`.
    - est centré sur la largeur de la vignette
    ??? tip  "Astuce"
        Comme nous avons modifié son display, la balise `<a>` se comporte comme une balise de type block.  Pour le centrer, il suffit de lui appliquer une largeur et des marges latérale auto.
    - quand la souris passe sur le bouton, celui-ci change de couleur `#005f6b;`
    ??? tip  "Astuce"
        Utilisez la pseudo class :hover
        [>>info](https://developer.mozilla.org/fr/docs/Web/CSS/:hover)

##Exe2 : Carte Offre Spéciale

###**Méthode**
 
* Créez un nouveau dossier nommé exeOffreSpec
* Dans ce dossier, 
    * créez un nouveau fichier nommé `carteOffreSpec.html` 
    * copiez-collez ce code dans le fichier html

    ??? abstract "Code à copier"
        ```html 
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Carte Offre spéciale</title>
        </head>
        <body>
            <main>
                <article>
                    <header>
                    <h2>Offre Spéciale</h2>
                    <p>Profitez de notre tarif réduit !</p>
                    </header>
                    <ul>
                        <li>€99</li>
                        <li>€49</li>
                    </ul>
                    <ul class="avantage">
                        <li>Illimité </li>
                        <li>Support 24/7</li>
                        <li>Garantie</li>
                    </ul>
                    <a href="#">Acheter Maintenant</a>
                </article>
            </main>
        </body>
        </html>
        ```
    * créez un nouveau dossier nommé `css`
    * dans ce dossier css, créez un nouveau fichier nommé `exeOffreSpec.css`
    * copiez-collez ce code dans la feuille css

    ??? abstract "Code à copier"
        ```css 
        .avantage li::before {
            content: "";
            display: inline-block;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path fill='%2306be1e' d='M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z'/></svg>");

            /* Taille de l'icône */
            background-size: 1.875rem;
            /* Largeur de l'icône */
            width: 1.875rem;
            /* Hauteur de l'icône */
            height: 1.875rem;
            /* Espace entre l'icône et le texte */
            margin-right: 0.625rem;
            /* Alignement de l'icône avec le texte */
            vertical-align: middle;
        }
        ```
        ??? tip  "Info"
            Le pseudo-élément `::before` est une technique CSS permettant d'insérer du contenu virtuel avant le contenu réel d'un élément sans avoir à ajouter d'éléments HTML supplémentaires. Il est couramment utilisé pour insérer des icônes, des guillemets, des décorations, ou toute autre sorte de contenu visuel.

            Dans l'exemple donné :

            **Pseudo-élément ::before** <br>
            Le ::before crée un pseudo-élément avant chaque élément de liste (li) de .avantage. Cela permet d'ajouter une icône avant le contenu du li.<br>
            **content: ""**<br>
            Ce pseudo-élément n'a pas de texte, car il utilise uniquement une image en arrière-plan.<br>
            **Icône en SVG**<br>
            background-image : Cette propriété inclut une icône SVG en tant qu’image d’arrière-plan directement intégrée dans le CSS via une URL encodée en data:image/svg+xml.

            [Générateur d'icône SVG](https://iconmonstr.com/){:target="_blank"}

* Reproduisez l'interface en tenant compte des consignées données ci-dessous  [>> Voir l'interface](../img/07_cssBoite/exe_offreSpeciale.jpg){:target="_blank"}  

###**Contraintes**

* Vous ne pouvez pas utiliser de techniques comme le flexbox, float, position absolue, position relative.
* Le code html ne peut être modifié, seuls des class ou id peuvent être ajoutés

* Aucune information supplémentaire n'est fournie.  Rapprochez-vous le plus du modèle.
 
 









