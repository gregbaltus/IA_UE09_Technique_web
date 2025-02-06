# Balises

##Intro
C'est parti pour le premier exercice.

??? quote "Exercice à réaliser"
    ![alt](docs/img/03_htmlBalise/exeGaming.jpg) 

* Créez un nouveau fichier (veiller à lui attribuer un emplacement et un nom cohérents)
* Téléchargez l'image [>>Lien de téléchargement  ](../img/03_htmlBalise/carteRTX.jpg) 

* Créez la  [structure de base](../02_htmlBase/structure.md#base) dans le fichier .html 
* Copiez ce texte dans le `body`

??? quote "Texte à copier"
    ```
      ASUS Dual GeForce RTX 4060 EVO OC Edition 8GB    
      Au coeur du jeu
      Basée sur l'architecture NVIDIA Ada Lovelace, la carte graphique ASUS Dual GeForce RTX 4060 EVO OC Edition 8GB s'appuie sur la technologie DLSS 3 et le ray tracing matériel pour sublimer les jeux les plus récents et vous permettre de vivre une expérience vidéoludique immersive et réaliste. Au-delà du jeu, les cartes graphiques NVIDIA GeForce RTX 4060 offrent de hautes performances pour créer et streamer. 
      L'ASUS DUAL-RTX4060-O8G EVO cumule durabilité, compatibilité et performances pour apporter satisfaction aux gamers les plus exigeants. Les fonctionnalités de cette carte graphique incluent des technologies de pointe ainsi qu'un système de refroidissement exclusif avec des ventilateurs équipés de la technologie Axial-tech.
      Hyper-réaliste et hyper-rapide, le Ray tracing vous rapproche au plus près de la réalité. L’architecture Ada exploite toute la puissance du ray tracing, qui simule le comportement de la lumière dans le monde réel. Grâce à la puissance des GPU RTX série 40 et aux cœurs RT de troisième génération, vous profitez de mondes virtuels plus détaillés que jamais. 
      Architecture 
      Nouveaux multiprocesseurs de flux 
      Broadcast 
      DLSS 3 
      Studio  
      Découvrir des infos  sur la carte 
    ```

## Titre de la page
Rappelez-vous la [structure d'une page](../02_htmlBase/structure.md#base).  Le titre de la page, qui s'affiche dans l'onglet, et non dans la page elle-même utilise la balise `<title>` au sein de la balise `<head>`.
??? quote "Solution"
    ```html  
        <title>Pièces détachées</title>
    ```

## Titres    
Les éléments `<h1><h2>...` représentent des titres.  Il y a 6 niveaux de titres.
`<h1>` correspond au niveau  le plus haut et `<h6>` correspond au niveau le plus faible.

>:warning: Il ne peut y avoir qu'un seul titre principal dans une page, représenté par un `<h1>`
>
>:warning: La hiéarchie des titres doit être respectée.  Vous ne pouvez donc pas avoir de `<h3>` si vous n'avez pas de `<h2>`, vous ne pouvez pas avoir de `<h2>` si vous n'avez pas de `<h1>`, ...
 [Info complète >>](balises.md#titre)

Entourez le titre principale de la page à l'aide des balises `<h1>`
??? quote "Solution"
    ```html  
        <h1>ASUS Dual GeForce RTX 4060 EVO OC Edition 8GB</h1>
    ```
 
Quelle est la balise que vous allez utiliser pour les titres secondaires ?
??? quote "Solution"
    ```html  
         <h2>Au coeur du jeu</h2>
         <h2>Architecture</h2>
    ```
## Paragraphes et saut de ligne
Utilisez la balise `<p>` pour englobler les différents paragraphes.
Que se passe-t-il lorsque vous redimensionnez la fenêtre du navigateur ?   [Info complète >>](balises.md#para)
??? quote "Solution"
    Le texte se réajuste pour s'adapter à la largeur disponible.  C'est pour cela que les coupures de paragraphes peuvent être différentes de celles du modèle.

Si on désire forcer un retour à la ligne, indépendamment de la largeur du navigateur, il faut utiliser la balise `<br>`.  Placez-la correctement.  [Info complète >>](balises.md#saut)

??? quote "Solution"
    ```html  
        <p>Hyper-réaliste et hyper-rapide, <br>
        le Ray tracing vous rapproche au plus près de la réalité. 
        L’architecture Ada exploite toute la puissance du ray tracing, 
        qui simule le comportement de la lumière dans le monde réel. 
        Grâce à la puissance des GPU RTX série 40 et aux cœurs 
        RT de troisième génération, vous profitez de mondes 
        virtuels plus détaillés que jamais.  </p>
    ```
 

## Mise en évidence par le gras et l'italique
Testez les balises `<strong>` et `<em>`.  Comment allez-vous les placer ?  [Info complète >> ](balises.md#evidence)

??? quote "Solution"
    ```html  
         <p>Basée sur l'architecture <strong>NVIDIA Ada <em>Lovelace</em></strong>, 
         la carte graphique ASUS Dual GeForce RTX 4060 EVO OC Edition 8GB s'appuie 
         sur la technologie DLSS 3 et le ray tracing matériel pour sublimer les 
         jeux les plus récents et vous permettre de vivre une expérience 
         vidéoludique immersive et réaliste. Au-delà du jeu, les cartes 
         graphiques NVIDIA GeForce RTX 4060 offrent de hautes 
         performances pour créer et streamer.</p>
    ```

 
## Liste
Lorsque vous avez une énumération, vous devez utiliser les balises représentant des listes.
Il existe deux types de liste : les listes ordonnées et les listes non ordonnées.

La balise `<ul>` indique qu'une liste non ordonnée commence et chaque élément de la liste sera indiquée entre des balises `<li>`. [Info complète >> ](balises.md#liste)

??? quote "Solution"
    ```html 
        <ul>
            <li>Nouveaux multiprocesseurs de flux</li>
            <li>Broadcast</li>
            <li>DLSS 3</li>
            <li>Studio </li>
        </ul>
    ```

## Image
:octicons-light-bulb-16:
**Rappel:** Les images doivent être rangées dans un dossier nommé `img` situé à la racine du "site".

Testez le code suivant dans votre page :
```html  
<img src="carteRTX.jpg" alt="Carte graphique">    
<img src="img/carteRTX.jpg" alt="Carte graphique">
```
Que constatez-vous ?

??? quote "Solution"
    * La première image est *brisée*, le navigateur ne la trouve pas car le chemin d'accès est incorrect.  En effet, l'image est stockée dans un dossier nommé `img`.  Ici, le navigateur cherche une image qui serait stockée à côté du fichier html.  La valeur de l'attribut `alt` apparait à l'écran.
    * La deuxième image s'affiche correctement.  Si ce n'est pas le cas, vérifiez
     que l'image soit bien stockée dans un dossier nommé `img` situé à côté du fichier html.

[Info complète](balises.md#image)
## Hyperliens
Lorsqu'on clique sur le mot *info*, la page  [https://www.ldlc.com/fr-be/fiche/PB00559140.html](https://www.ldlc.com/fr-be/fiche/PB00559140.html) doit s'ouvrir.
Pour afficher un élément cliquable, on va utiliser la balise et l'attribut suivant `<a href="destination">élément cliquable</a>`.  [Info complète](balises.md#lien)

A vous de jouer.
??? quote "Solution"
    ```html 
    <p>Découvrir des <a href="https://www.ldlc.com/fr-be/fiche/PB00615606.html">infos</a> sur la carte</p>
    ```
Comment pourriez-vous faire pour que lorsqu'on clique sur l'image, la page [https://www.ldlc.com](https://www.ldlc.com) s'ouvre ?

??? quote "Solution"
    ```html 
    <a href="https://www.ldlc.com/fr-be/fiche/PB00615606.html"><img src="img/carte.jpg" alt="Carte graphique"></a>
    ```