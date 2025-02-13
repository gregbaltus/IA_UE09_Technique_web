Cette partie est consacrée au texte et sa mise en forme.
Les styles vus ne sont pas exhaustifs.  Plus vous les utilisez, mieux vous les connaitrez.

##font-family

??? quote "font-family: La police de caractères"
    Historiquement, il n'existe que très peu de polices utilisables sur un site internet :
        Arial
        Verdana
        Times New Roman
        ...
    Cette liste est très réduite.  Pourquoi ? ces typos sont appelées **Web Safe Fonts**, des polices standardisées qui sont préinstallées sur la plupart des systèmes d'exploitation et navigateurs, garantissant ainsi leur affichage cohérent sur tous les appareils et plateformes sans nécessiter de chargement externe.

    ```css title="Exemple css"   
    body { 
	    font-family: Arial, Verdana, sans-serif;
    }
    ```
    Dans l'exemple ci-dessus, la liste des polices est spécifiée dans l'ordre de préférence. Si ni Arial ni Verdana ne sont disponibles, le navigateur appliquera la police par défaut sans-serif.

    Polices génériques :

    - Serif: empattements aux extrémités
    - Sans-serif: extrémités simples et droites
    - Monospace: tous les caractères ont la même largeur (i,l,o,m)
    - Cursive: écriture liée
    - Fantasy: police décorative

##font-weight 

??? quote "font-weight: Le texte en gras"
    Permet de contrôler la "graisse" du texte

    ```css title="Exemple css"   
    .item { 
        font-weight: bold;
    }
    ```
    Différentes valeurs sont possibles :

    - **normal** : Niveau de graisse regular.
    - **bold** : Niveau de graisse gras.
    - **lighter** : Diminue d'un niveau la valeur de graisse.
    - **bolder** : Augmente d'un niveau la valeur de graisse.

    Il est aussi possible de donner une valeur comprise en 0 et 1000 :

        font-weight: 100; /* Thin (Hairline) */
        font-weight: 200; /* Extra Light (Ultra Light) */
        font-weight: 300; /* Light*/
        font-weight: 400; /* Normal */
        font-weight: 500; /* Medium */
        font-weight: 600; /* Semi Bold (Demi Bold) */
        font-weight: 700; /* Bold */
        font-weight: 800; /* Extra Bold (Ultra Bold) */
        font-weight: 900; /* Black (Heavy) */
     
##font-style

??? quote "font-style: Le texte en italique"
    Permet de déterminer l'orientation du texte

    ```css title="Exemple css"   
    h3 { 
	    font-style: italic;
    }
    ```
    Valeurs possibles :

    - **italic**: recherche variante de police si elle existe, si elle n'existe pas : elle apparait "normale"
    - **oblique**: génère à la volée une police italique en inclinant chaque caractère, ce qui implique un rendu plus lent mais permet de présenter n'importe quelle police inclinée
    - **normal** : valeur par défaut
     
##font-size

??? quote "font-size: La taille de la police"
    Permet de déterminer la taille du texte

    ```css title="Exemple css"   
    body { 
	    font-size: 1.5rem;
    }
    ```
     
##text-align 

??? quote "text-align: L'alignement du texte"
    Permet de déterminer l’alignement du contenu d’un bloc

    ```css title="Exemple css"   
    p { 
        text-align: center;
    }
    ```
    Valeurs possibles :

    - **left**: texte aligné à gauche
    - **right**: texte aligné à droite
    - **center**: texte centré dans son élément parent
    - **justify**: texte justifié dans son élément parent
     
##text-decoration 

??? quote "text-decoration: Le soulignement du texte"
    Permet de déterminer une "décoration" pour le texte


    ```css title="Exemple css"   
    p { 
        text-decoration: underline;
    }
    ```
    Valeurs possibles :

    - **none**: aucun soulinement, par défaut
    - **underline**: texte souligné
    - **overline**: texte surligné
    - **line-through**: texte barré
     
##line-height 

??? quote "line-height: La hauteur d'une ligne de texte"
    Permet de déterminer la hauteur d'une ligne pour un texte

    ```css title="Exemple css"   
    p { 
        line-height: 1rem;
    }
    ```
    Valeurs possibles :

    - **normal**: par défaut
    - **un nombre**: facteur de multiplication appliqué à la taille de police courante,
    - **une longueur**: exprimée en %, px, em, rem, pt, cm, ...
        
##color 

??? quote "color: La couleur du texte"
    
    Permet de déterminer la couleur de premier plan d'un élément


    ```css title="Exemple css"   
    body { 
        color : #CCC; /*gris*/
    }
    ```
     Valeurs possibles :

    - Un nom prédéfini de couleur : red, blue,…
    - Une combinaison RGB : #ff0000 ou rgb(255,0,0)
    - Une combinaison RGBa : rgba(255,0,0,0.5)
 