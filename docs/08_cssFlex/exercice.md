##Exe1 : Offre de prix

###**Méthode**

- Créez un nouveau dossier nommé `flexOffrePrix` 
- Dans ce dossier,

  - créez un nouveau fichier nommé `flexOffrePrix.html`
  - copiez-collez ce code dans le fichier html

??? abstract "Code à copier"
  
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <h1>Nos offres</h1>
                <article>
                    <h2>Beginner</h2>
                    <h3>$10 <span>/ month</span></h3>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <a href="#">Get Started</a>
                </article>
                <article>
                    <h2>Standard</h2>
                    <h3>$20 <span>/ month</span></h3>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <a href="#">Get Started</a>
                </article>
                <article>
                    <h2>Premium</h2>
                    <h3>$30 <span>/ month</span></h3>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <a href="#">Get Started</a>
                </article>
            </section>
        </main>
        <footer>
        <div>@Flexbox</div>
        </footer>
    </body>
    </html>

    ```

  - créez un nouveau dossier nommé `css`
  - dans ce dossier css, créez un nouveau fichier nommé `flexOffrePrix.css`

- Reproduisez l'interface en tenant compte des consignées données ci-dessous [>> Voir l'interface](../img/08_cssFlex/exeFlexOffrePrix.jpg){:target="\_blank"}

###**Contraintes**

- Vous ne pouvez pas utiliser de techniques comme le float, position absolue, position relative.
- Le code html ne peut être modifié, seuls des class ou id peuvent être ajoutés
- Le code Html doit être valide W3C
- Le code Css doit être valide W3C

###**Par où commencer ?**

- Analysez le code html fourni.
- La feuille de style doit être externe et liée à la page html. Elle sera située dans le dossier `css`. ([Liaison](../06_cssBase/liaison.md#liaisonCss){:target="\_blank"})

###**Consignes**

!!! warning
    Pour vous aider, vous avez des _astuces_. Utilisez l'astuce uniquement si vous êtes bloqués ou si vous désirez vérifier ce que vous avez réalisé.

####Styles généraux

- Le titre de la page est "Offres de prix"
??? tip "Astuce"
    Le titre de la page s'affiche dans l'onglet via la balise `<title>`. [>> info ](../03_htmlBalise/index.md#titre-de-la-page){:target="\_blank"}
- La police utilisée est `Tahoma` mais attention, prévoyez une sélection automatique d'une autre police sans empattement (sans-serif) si `Tahoma` n'est pas disponible.
??? tip "Astuce"
    Utilisez l'héritage et spécifiez la police à utiliser dans le body. [>> info ](../06_cssBase/miseFormeTexte.md#font-family){:target="\_blank"}
- La couleur de fond de la page est `#eee;`
??? tip "Astuce"
    Utilisez l'héritage et spécifiez la couleur de fond à utiliser dans le body. [>> info ](../06_cssBase/arrierePlan.md#background-color){:target="\_blank"}
- La taille de la police doit être une fois celle spécifiée par le navigateur
??? tip "Astuce"
    Utilisez l'héritage et spécifiez la taille de la police à utiliser dans le body. Utilisez l'unité rem.

- Quand on regarde le modèle, on s'aperçoit que le contenu ne prend pas toute la largeur du navigateur. Utilisons une classe générique qui sera appliquée aux différents éléments html.
??? tip "Astuce"
    ```css   
    .centrage{
        /* ici les déclarations des styles*/
    }
    ```
    Pour centrer un élément de type bloc, vous devez lui donner une largeur et des marges latérales automatiques.
    [>> info ](../07_cssBoite/centrerBloc.md){:target="\_blank"}

    La class doit être appliquée aux conteneurs qui seront centrés.
    `<nav class="centrage">`
    `<section class="centrage>`
    `<div class="centrage>`
    A votre avis, pourquoi appliquer la class centrage au div et non au footer ?

- Quand on regarde le modèle, on s'aperçoit que le header et le footer ont les mêmes styles.
??? tip "Astuce"
    Regroupez les sélecteurs.
    [>> info ](../06_cssBase/selecteur.md#liste-de-selecteurBalise){:target="\_blank"}

    Appliquez les styles communs (color et background)

- Le contenu du header et du footer ne sont pas collés au bord. Espacez le contenu des bords du header et du footer
??? tip "Astuce"
    Utiliser un padding sur le header et le footer

- Les bords des header et footer doivent être collés au bord du navigateur. A votre avis, d'où vient l'espace ?
??? tip "Astuce"
    Annuler les marges externes (margin) du body

####Concentrons-nous sur le menu.
Quand on regarde le modèle, on s'aperçoit que

- Les éléments du menu n'ont pas de puce. Masquons-les.
??? tip "Astuce"
    Utilisez une classe, par exemple, `nav-menu` sur la liste `<ul class="nav-menu">`
    Utilisez la propriété `list-style-type`
    [>>Info](https://developer.mozilla.org/fr/docs/Web/CSS/list-style-type){:target="\_blank"}

- Nous constatons que la couleur du texte des liens n'est pas blanche mais bleue. En effet, la couleur du texte des liens n'est pas héritée. Nous allons donc, explicitement, leur spécifier une couleur de texte. De plus, le texte de lien est plus grands, gras et non-souligné.
??? tip "Astuce" 
    - Spécifions que nous travaillons sur les liens du menu `.nav-menu li a` 
    - Blanc => [>>Info](../06_cssBase/miseFormeTexte.md#color){:target="\_blank"} - Gras => [>>Info](../06_cssBase/miseFormeTexte.md#font-weight){:target="\_blank"} 
    - Plus Grand (1.1 )=> [>>Info](../06_cssBase/miseFormeTexte.md#font-size){:target="\_blank"} - Non souligné => [>>Info](https://developer.mozilla.org/fr/docs/Web/CSS/text-decoration){:target="\_blank"}

- Les éléments du menu doivent être positionnés les uns à côté des autres.
  Nous allons donc utiliser le flex.
  Posez-vous les questions suivantes :
    - Qui est le parent direct des éléments qui doivent être positionnés côte à côte ? Cet élément sera le conteneur Flex.
    - Les éléments positionnés côte à côte doivent-ils autoriser le retour à la ligne ?
    - Comment les enfants du conteneur occupent-ils l'espace ?
    - Les enfants du conteneur doivent-il posséder une largeur définie ?
??? tip "Astuce"
    Qui est le parent direct des éléments qui doivent être positionnés côte à côte ? Cet élément sera le conteneur Flex. ==> la balise `<ul>` aura son display en flex. [>>Info](../08_cssFlex/conteneur.md){:target="\_blank"} 
    >:warning: Utilisons la class nav-menu appliquée sur `<ul>`

    Les éléments positionnés côte à côte doivent-ils autoriser le retour à la ligne ? Oui pour être responsive => le balise `<ul>` qui est le conteneur flex autorisera le retour à la ligne de ses enfants directs => wrap [>>Info](../08_cssFlex/conteneurWrap.md){:target="_blank"}
    >:warning: Utilisons la class nav-menu appliquée sur `<ul>`

    Les éléments se positionnent côte à côte mais ils sont collés.  Nous ne désirons pas qu'ils prennent tous l'espace disponible.  On va donc simplement les espacer.  Nous pouvons travailler avec les marges mais nous pouvons également travailler avec la propriété `gap`  [>>Info](https://developer.mozilla.org/fr/docs/Web/CSS/gap){:target="_blank"}
    >:warning: Utilisons la class nav-menu appliquée sur `<ul>`

    Observez bien, le menu est décalé vers la droite.  Utilisons l'inspecteur pour identifier d'où provient ce décalage.
    `ul` comprend des marges et des padding implicites.
    Supprimons les marges et les padding de cet ul.
    >:warning: Utilisons la class nav-menu appliquée sur `<ul>`

####Réalisons les cartes

- Les cartes ont un fond blanc, une ombre et des bords arrondis
??? tip "Astuce"
    Créez un sélecteur par exemple `price-card`. Cette class sera attribuée aux articles.
    Attribuez-lui

    - un fond blanc ([>>info](../06_cssBase/arrierePlan.md){:target="_blank"}  )

    - une ombre ([>>info](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow){:target="_blank"}  )

    - des bords arrondis ([>>info](https://developer.mozilla.org/fr/docs/Web/CSS/border-radius){:target="_blank"}  )

- Les 3 cartes doivent être positionnées les unes à côté des autres.
    Nous allons donc utiliser le flex.
    Posez-vous les questions suivantes :
    - Qui est le parent direct des éléments qui doivent être positionnés côte à côte ? Cet élément sera le conteneur Flex.
    - Les éléments positionnés côte à côte doivent-ils autoriser le retour à la ligne ?
    - Les enfants du conteneur doivent-il posséder une largeur définie ?
    -   Comment les enfants du conteneur occupent-ils l'espace ?

??? tip "Astuce"
    _Qui est le parent direct des éléments qui doivent être positionnés côte à côte ? Cet élément sera le conteneur Flex._ ==> la balise `<section>` aura son display en flex. [>>Info](../08_cssFlex/conteneur.md){:target="\_blank"}
    Utilisons, par exemple, une classe nommée `pricing-section` qui sera attribuée à la section parente.

    Rappel : plusieurs class peuvent être attribuées au même élément html `<section class="centrage pricing-section">`

    *Les éléments positionnés côte à côte doivent-ils autoriser le retour à la ligne ?* Oui pour être responsive => la balise `<section>` qui est le conteneur flex autorisera le retour à la ligne de ses enfants directs => wrap [>>Info](../css_flexbox/conteneurWrap.md){:target="_blank"}
    
    >:warning: Utilisons la class `pricing-section` appliquée sur `<section>`

    Oups, le titre se met à côté des cartes.  Pas de panique, c'est normal.
    En effet, une fois la `<section>` devenue conteneur flex, tous ses enfants directs sont positionnés côte à côte.  Le titre se place donc à côté des cartes.

    Pour éviter cela, nous allons demander au titre d'occuper tous l'espace disponible.  Pour ce faire, utilisons la propriété `flex-basis`.
    ```css
        .pricing-section h1 {
            flex-basis: 100%;
        }
    ```
    Eh hop, le tour est joué !

    *Les enfants du conteneur doivent-il posséder une largeur définie ?* Actuellement, la largeur de la carte est dépendante de son contenu. Nous allons leur imposer une taille en utilisant la propriété `flex-basis`. Ex : `flex-basis: 15rem;`
    >:warning: La propriété `flex-basis` doit être appliquée aux enfants ! Utilisons la classe   `.price-card` déclarée précédemment.

    *Comment les enfants du conteneur occupent-ils l'espace ?* Nous désirons qu'ils soient centrés sur la largeur de leur parent et posséder un espace entre eux.  Pour cela, utilisons les propriétés `justify-content` et `gap`.   [>>Info](../css_flexbox/conteneurJustifyContent.md){:target="_blank"}`
    >:warning: Utilisons la class `pricing-section` appliquée sur `<section>`

- Le contenu de la vignette n'est pas collé au bord

??? tip "Astuce"  
    Utilisez des marges intérieurs (padding) 
    >:warning: Utilisons la class `price-card`

- Le texte est centré.

??? tip "Astuce"  
    Utilisez text-align: center; 
    >:warning: Utilisons la class `price-card`

- La liste ne contient pas de puce.

??? tip "Astuce"  
    Utilisez list-style: none 
    >:warning: Vous pouvez spécifier la liste de la class price-card => `.price-card ul  `

    Observez le décalage.  A votre avis, d'où vient-il ?
    Supprimer les marges et le padding de la liste. A ce moment, nous observons que la liste est collée au lien Get Started.  Modifions les marges haut / bas.  `margin: 1rem 0;`

- La vignette possède un bouton de réservation qui

  - est de couleur `#008CBA;`
  - comprend du texte blanc
  - des bords arrondis
  - des marges intérieures pour éviter que le contenu colle au bord du bouton.

??? tip "Astuce"
    Créez, par exemple, une class nommée `buttonAction`

    Oups,  le bouton chevauche d'autres éléments.  Pourquoi ? Rappelez-vous : `<a>` est une balise en ligne. Le comportement des padding ne sont pas les mêmes pour les éléments en ligne et pour les éléments de type block.  Modifiez le display pour que l'élément se comporte comme un inline-block.

- Les vignettes ne sont pas collées au bord du footer et le titre "Nos offres" est plus bas.
??? tip "Astuce"
    Utilisons un padding sur la section pour que l'ensemble de son contenu ne soit pas collé au bord. 
    >:warning: Utilisez la class `pricing-section`

- Modifions la couleur du prix et la taille  
??? tip "Astuce"
    Appliquons du vert sur l'ensemble du h3 / modifions la taille / modifions les marges externes / modifions l'épaisseur de la police
    `.price-card h3 {
        font-size: 2rem;
        color: #27ae60;
        margin: 0.5rem 0;
        font-weight: lighter;
    }`

- Modifions la couleur du prix et la taille /month
??? tip "Astuce"
    Modifions la taille et la couleur du texte
    `.price-card h3 span {
        font-size: 0.8rem;
        color: #888;
    }`

- Augmontons l'espace entre les éléments Feature
??? tip "Astuce"
    `.price-card ul li {
            margin: 0.5rem 0;
    }`

##Exe2 : Crearchitex

###**Méthode**

- Créez un nouveau dossier nommé `flexCrearchitex` 
- Dans ce dossier,

  - créez un nouveau fichier nommé `flexCrearchitex.html`
  - copiez-collez ce code dans le fichier html

??? abstract "Code à copier"
    ```html

    <!DOCTYPE html>
    <html lang="fr">
    
    <head>
        <meta charset="utf-8">
        <title>CrearchiteX</title>
    </head>

    <body>
        <header>
            <div>
                <img src="img/logo.png" alt="CrearchiteX Logo">
                <nav>
                    <ul>
                        <li><a href="" id="current">Home</a></li>
                        <li><a href="">Equipe</a></li>
                        <li><a href="">Projet</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <section>
                <blockquote>Le bureau d’architecture <span>CrearchiteX</span> allie création et
                    techniques.<br> Construction, rénovation et design intérieur.</blockquote>
                <img src="img/presentation.jpg" alt="Présentation bureau">

                <h1>Nos forces</h1>
                <ul>
                    <li><span>Construction</span>Proin iaculis purus consequat sem cursus digni
                        ssim. Donec porttitor entume suscipit. Aenean rhoncus posuere odio in tincidunt.</li>
                    <li><span>Rénovation</span>Nam aliquam volutpat leo vel lorem bibendum.
                        Nuncea
                        elit purusa, tempus pulvinar rhoncus egesta vel nibh volutpat leo.</li>
                    <li><span>Intérieur</span>Fusce porttitor turpis quis urna molestie cons
                        equat.
                        Nam felis purus, tincidunt sed dapibus ugravida fusce et magna libero.</li>
                </ul>
            </section>
            <section>
                <h2>Travaux récents</h2>
                <article>
                    <img src="img/travRecent01.jpg" alt="Travaux récents 01 Maison unifamiliale ">
                    <h3>Maison unifamiliale</h3>
                    <p>Rénovation complète des façades principales, extensions magnifiques.</p>
                </article>
                <article>
                    <img src="img/travRecent02.jpg" alt="Travaux récents 02 Fermette ">
                    <h3>Fermette</h3>
                    <p>Restauration d'une fermette à colombages du 16e s. en deux habitations.</p>
                </article>
                <article>
                    <img src="img/travRecent03.jpg" alt="Travaux récents 03 Multi-logements">
                    <h3>Multi-logements</h3>
                    <p>Transformation d'un immeuble en deux logements.</p>
                </article>
                <article>
                    <img src="img/travRecent01.jpg" alt="Travaux récents 01 ">
                    <h3>Maison unifamiliale</h3>
                    <p>Rénovation complète des façades principales, extensions magnifiques.</p>
                </article>
                <article>
                    <img src="img/travRecent02.jpg" alt="Travaux récents 02 ">
                    <h3>Fermette</h3>
                    <p>Restauration d'une fermette à colombages du 16e s. en deux habitations.</p>
                </article>
                <article>
                    <img src="img/travRecent03.jpg" alt="Travaux récents 03 ">
                    <h3>Multi-logements</h3>
                    <p>Transformation d'un immeuble en deux logements.</p>
                </article>
                <article>
                    <img src="img/travRecent03.jpg" alt="Travaux récents 03 ">
                    <h3>Multi-logements</h3>
                    <p>Transformation d'un immeuble en deux logements.</p>
                </article>
                <article>
                    <img src="img/travRecent03.jpg" alt="Travaux récents 03 ">
                    <h3>Multi-logements</h3>
                    <p>Transformation d'un immeuble en deux logements.</p>
                </article>
            </section>


        </main>
        <footer>
            <div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Rue de l'espoir, 666 <br>4000 Liège</li>
                        <li>04 123 45 69</li>
                    </ul>
                </div>
                <div>
                    <h3>Jobs</h3>
                    <ul>
                        <li><a href="#">Collaborateurs</a></li>
                        <li><a href="#">Administratifs</a></li>
                        <li><a href="#">Informatique</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Liens rapides</h3>
                    <ul>
                        <li><a href="#">Projets</a></li>
                        <li><a href="#">Collaborateurs</a></li>
                        <li><a href="#">Nous contacter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </body>

    </html>

    ```

  - créez un nouveau dossier nommé `css`
  - dans ce dossier css, créez un nouveau fichier nommé `flexCrearchitex.css`
  - téléchargez les images [image crearchitex](../img/08_cssFlex/imgCrearchitex.zip)

- Reproduisez l'interface en tenant compte des consignées données ci-dessous [>> Voir l'interface](../img/08_cssFlex/exeCrearchitexFlex.pdf){:target="\_blank"}

###**Contraintes**

- Vous ne pouvez pas utiliser de techniques comme le float, position absolue, position relative.
- Le code Html ne peut être modifié, seuls des class ou id peuvent être ajoutés
- Le code Html doit être valide W3C
- Le code Css doit être valide W3C

###**Par où commencer ?**

- Analysez le code html fourni.
- La feuille de style doit être externe et liée à la page html. Elle sera située dans le dossier `css`. ([Liaison](../06_cssBase/liaison.md#liaisonCss){:target="\_blank"})
- Travaillez étape par étape. Inspirez-vous de l'exercice précédent.
