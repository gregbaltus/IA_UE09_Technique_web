##Intro

Nous allons réaliser un formulaire qui pourrait permettre à la société de vente de produits en ligne "iBaie" de mieux cerner les attentes de leurs clients dès leur inscription sur leur site d'e-commerce.


??? quote "Méthodes"
    - Créez un dossier dans lequel vous créez un fichier nommé `formInscription.html` et un dossier nommé `img`
    - Créez la  [structure de base](../02_htmlBase/structure.md#base){:target="_blank"} dans le fichier .html
    
!!! warning 
    <span class="red-text"><b>Résistez à la tentation d'utiliser des `<br>` ou des `<p>`, voire des `<div>` pour afficher des formulaires plus "user-friendly".  En effet, ces balises sont soit sémantiquement incorrectes, soit complètement inutiles.  Nous verrons avec les CSS que nous pourrons afficher ce formulaire sans ajouter des balises supplémentaires. </b></span>

## Balise `<form>`

Un formulaire est un conteneur d'un ou plusieurs champs et devrait contenir au moins un élément de soumission (bouton). Tous les éléments du formulaire doivent être contenus (ou liés) à une balise `<form>`.

Dans cette balise, il est nécessaire de spécifier les attributs suivants :

**Attribut** | **Description**
--- | --- 
**action** | indique l'adresse à laquelle sont envoyées les données
**method** | la méthode d'envoi des données (soit liées à l'adresse (GET), soit placées dans le corps de la requête HTTP (POST))
**enctype** | la méthode d'encodage des données


!!! note "formInscription.html"
    ```html  
    <h1>Création de votre compte</h1>
    <form action="#" method="post" >
        <!-- Tous les champs seront placés ici -->
    </form>
    ```



## Balise `<input>` : champs texte

La plupart des champs d'un formulaire reposent sur la balise `<input>` et se différencient par  l'attribut `type`.   

Plusieurs types de champs permettent à l'utilisateur d'écrire une information textuelle courte :

* Texte court: `<input type="text" …`
* Mot de passe: `input type="password" …`
* Url: `<input type="url" …`
* Courriel: `<input type="email" …`
* Nombre: `<input type="number" …`
* Date : `<input type="date" …`
* Heure: `<input type="time" …`
* Caché: `<input type="hidden" …`

Exemple : 

```html
<input type="text" name="nom" id="nom" required placeholder="Entrez votre nom" value=""   >
```
Comme on peut le voir, la balise `input` peut contenir différents attributs obligatoires ou optionnels.

**Attribut** | **Description**
--- | --- 
 `type="text"` | Définit le type d'input comme un champ de texte, permettant la saisie de caractères. ( Spécifique aux champs de texte. )
`name="nom"` | Le nom de ce champ, utilisé pour identifier la donnée lors de la soumission du formulaire. Si l'utilisateur entre "Dupont", la valeur envoyée sera nom=Dupont. Obligatoire pour tous les champs interactifs (text, radio, checkbox, select, textarea, etc.) qui envoient des données au serveur. Sans cet attribut, le champ ne sera pas pris en compte lors de la soumission.
`id="nom"` | Attribue un identifiant unique au champ, souvent utilisé pour faire référence au champ via CSS ou JavaScript.
`required` | Indique que ce champ est obligatoire. Si l'utilisateur tente de soumettre le formulaire sans le remplir, une validation sera effectuée, et un message d'erreur s'affichera. ( Spécifique pour tous les champs où une saisie est attendue  )
`placeholder="Entrez votre nom"` | Affiche un texte indicatif à l'intérieur du champ avant la saisie, guidant l'utilisateur sur ce qui est attendu. ( Spécifique aux champs de texte. )
`value=""` | Définit la valeur initiale du champ. Ici, il est vide, mais il pourrait être utilisé pour pré-remplir le champ avec une valeur par défaut. ( Spécifique à presque tous les champs de texte. )

:warning: en fonction de l'interaction proposée, la balise html aura ses propres attributs. 

Ajoutons la possiblité d'insérer les nom et prénom :
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="BaXNeqY" data-pen-title="HTML : form " data-user="Flolec" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Flolec/pen/BaXNeqY">
  HTML : form </a> by Flolec (<a href="https://codepen.io/Flolec">@Flolec</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


!!! note "formInscription.html"
    Modifier le fichier et ajouter les deux inputs

Grâce aux valeur des placeholder, l'utilisateur connait les données à entrer. Cependant, les placeholders disparaissent dès que l'utilisateur commence à saisir du texte, ce qui peut rendre l'objectif du champ moins clair. De plus, les lecteurs d'écran, utilisés par les personnes malvoyantes, ne lisent pas toujours les placeholders correctement (accessibilité). 

Nous allons donc ajouter des libellés pour rendre les champs identifiables.

Mais avant, voyons comment les données sont récupérées au niveau du serveur.

###Au niveau serveur

Comment les données sont-elles récupérées au niveau du serveur ?
Prenons l'exemple suivant : 

```html
<input type="text" name="nom" id="nom" required placeholder="Entrez votre nom" value=""   >
<input type="text" name="prenom" id="prenom" required placeholder="Entrez votre prenom" value=""   >
```

Lorsque les données sont envoyées à un serveur via un formulaire, voici comment le processus se déroule de manière simplifiée :

* **Saisie par l'utilisateur**: L'utilisateur remplit le formulaire en ligne (par exemple, en saisissant son nom, son email, etc.).
* **Soumission du formulaire** : Lorsque l'utilisateur clique sur le bouton, toutes les données des champs sont rassemblées sous forme de "paires clé-valeur". Chaque champ du formulaire est identifié par son attribut `name` et la valeur correspond à ce que l'utilisateur a saisi ou sélectionné.

Dans notre exemple : 
Si l'utlisateur entre `"Dupont"` dans le champ `name="nom"`,  une paire sera créée comme `nom=Dupont`.
Si l'utlisateur entre `"Tom"` dans le champ `name="prenom"`,  une paire sera créée comme `prenom=Tom`.

* **Envoi des données au serveur :** 
Les données sont envoyées au serveur via une méthode HTTP (généralement GET ou POST).
    * Avec GET, les données sont envoyées dans l'URL (visibles dans la barre d'adresse).
    * Avec POST, les données sont envoyées dans le corps de la requête (invisibles dans l'URL).

* **Réception par le serveur** : Le serveur reçoit ces paires clé-valeur et les traite. Chaque champ du formulaire est donc "compris" par le serveur via son nom et sa valeur. 
Pour notre exmple : 
Le serveur reçoit  : nom=Dupont&prenom=Tom

* **Traitement** : Le code est traité au niveau du serveur.  Par exemple, un enregistrement dans une base de données, un envoi d'un email, génération d'une réponse, redirection vers une nouvelle page...

* **Retour d'information à l'utilisateur** : Le serveur envoie une réponse à l'utilisateur. Cela peut être une confirmation de la soumission, un message d'erreur ou une nouvelle page en fonction du traitement des données.

En tant que développeur, il est donc important d'identifier et connaitre comment les infos sont envoyées au serveur.  Même si actuellement vos formulaires ne sont pas encore traités via php, il est important de les préparer au mieux.


!!! Defi01 
    **Voici un petit défi :**
    
    * Créer un nouveau fichier nommé defiForm01.html
    * Créer un formulaire permettant à l'utilisateur d'entrer son nom, son prenom et sa ville de résidence (saisie obligatoire).
    * Le formulaire doit être envoyé à l'adresse suivante `/~p170025/supportCours/form/q1Form01.php`
    * La méthode utilisée doit être le  `GET`
    * Le serveur attend des valeurs  via des clés nommées  `nom`, `prenom` et `ville`
    * Utiliser cette balise pour soumettre les données  `<input type="submit" name="btn_submit" value="Envoyer">`
    * Uploader votre fichier sur panoramix
    * Tester votre code
![Testing form](docs//img/05_htmlFormulaire/formTesting.png)

## Balise `<label>` 

Grâce aux valeur des placeholders, l'utilisateur connait les données à entrer. Cependant, les placeholders disparaissent dès que l'utilisateur commence à saisir du texte, ce qui peut rendre l'objectif du champ moins clair. De plus, les lecteurs d'écran, utilisés par les personnes malvoyantes, ne lisent pas toujours les placeholders correctement (accessibilité).

Nous allons donc ajouter des libellés pour rendre les champs identifiables.

Le libellé permet de comprendre la signification du champ.

Deux techniques sont possibles pour lier un intitulé à un champ de formulaire :

* Par l'identifiant du champ:

```html  
<label for="champ1">libellé</label> <input id="champ1" name="monchamp" type="text" >
```
L'`id`permet de lier l'`input` au `label`.
La valeur de l`id` doit donc être *identique* à la valeur du `for`

!!! Failure  inline ":fontawesome-regular-rectangle-xmark:{.redWhite } Don't do this "
    ```html  
     <label for="tonNom">Votre nom</label> <input id="votreNom" name="nom" type="text" >
    ``` 

!!! Success inline ":white_check_mark: Do this "
    ```html  
      Liste de courses
      <label for="votreNom">Votre nom</label> <input id="votreNom" name="nom" type="text" >
    ```
<div class="clearFloat"></div> 
:octicons-light-bulb-16:
**Tip:** Vous pouvez donner les mêmes valeurs à l'id, au name et au for
```html  
<label for="nom">Votre nom</label> <input id="nom" name="nom" type="text" >
```

* Par l'imbrication du champ dans le libellé:

```html  
<label>libellé<input id="champ1" name="monchamp"  type="text" ></label> 
```
Ajoutons des labels au formulaire de la page `formInscription.html`

!!! note "formInscription.html"
    ```html  
    <h1>Création de votre compte</h1>
    <form action="#" method="post" >

        <label for="nom"> Votre nom : </label>
        <input type="text" name="nom" id="nom" required placeholder="Entrez votre nom" value=""   >
        
        <label for="prenom"> Votre prénom : </label>
        <input type="text" name="prenom" id="prenom" required placeholder="Entrez votre prenom" value=""   >
    </form>
    ```

## Balise `<textarea>`

Pour qu'un utilisateur puisse encoder un **long texte**, de plusieurs lignes (exemples: une description, un commentaire, ...), il faut utiliser la balise `<textarea>`. Celle-ci possède les attributs **rows** (nombre de lignes visibles par défaut) et **cols** (nombre de caractères visibles par ligne par défaut).

 
```html  
<label>libellé<textarea name="message" ></textarea></label>
```
Ajoutons une zone pour laisser un message. Observez l'aspect du champ message. Entrez-y un texte d'au moins 5 lignes. Essayez de redimensionner le champ.

!!! note "formInscription.html"
    ```html  
    <h1>Création de votre compte</h1>
    <form action="#" method="post" >
    
        [...code précédent...]

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="3" cols="20"></textarea>
    </form>
    ```

##Des choix exclusifs: les boutons radio
Ajoutons la possiblité de choisir un choix.

!!! note "formInscription.html"
    ```html  
    <h1>Création de votre compte</h1>
    <form action="#" method="post" >
    
       [...code précédent...]

        <strong>Sexe</strong> 
        <input  name="femme" type="radio" value="Femme">
        <input  name="homme" type="radio" value="Homme">
        <input name="autre" type="radio" value="Autre">	


    </form>
    ```
Affichez le formulaire dans votre navigateur, constatez qu'aucun intitulé ne permet de différencier les deux choix.

Modifiez ces champs comme suit et testez à nouveau:

!!! note "formInscription.html"
    ```html  
    <h1>Création de votre compte</h1>
    <form action="#" method="post" >
    
       [...code précédent...]

        <strong>Sexe</strong> 
        <label><input  name="sexeF" type="radio" value="Femme">Femme</label>
        <label><input  name="sexeH" type="radio" value="Homme">Homme</label>
        <label><input  name="sexeA" type="radio" value="Autre">Autre</label> 

    </form>
    ```
Constatez qu'un clic sur le label permet de cocher le bouton radio correspondant, ce qui est beaucoup plus pratique !!
Cependant, il reste un problème : cocher "Homme" ET "Femme" simultanément est possible !! Pourquoi ? Parce que ces deux champs ont des valeurs de *name* différents et donc il est impossible pour le navigateur de savoir que ces deux boutons radio sont liés.

Modifiez ces champs comme suit et testez à nouveau:

!!! note "formInscription.html"
    ```html  
    <h1>Création de votre compte</h1>
    <form action="#" method="post" >
    
       [...code précédent...]

        <strong>Sexe</strong> 
        <label><input  name="sexe" type="radio" value="Femme">Femme</label>
        <label><input  name="sexe" type="radio" value="Homme">Homme</label>
        <label><input  name="sexe" type="radio" value="Autre">Autre</label> 

    </form>
    ```
Il est possible de spécifier un bouton radio coché par défaut grâce à l'attribut **checked**
```html  
    <input id="sexe" name="sexeH" type="radio" value="homme" checked>
```

###Au niveau serveur
Nous avons vu précédemment que les données étaient récupérées au niveau du serveur sous forme de paires "clé-valeur".  Ici les valeurs ne sont pas entrées par l'utilisateur mais déterminées par le développeur.

Pour ce code :

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <strong>Sexe</strong> 
        <label><input id="sexe"  name="sexe" type="radio" value="femme">Femme</label>
        <label><input id="sexe" name="sexe" type="radio" value="homme">Homme</label>
        <label><input id="sexe" name="sexe" type="radio" value="autre">Autre</label> 
    </form>
    ```
Si je choisis l'option "Femme", le serveur recevra `sexe=femme`

!!! Defi02
    **Petit défi :**
    
    * Créer un nouveau fichier nommé defiForm02.html
    * Créer un formulaire permettant à l'utilisateur de choisir un choix parmi ceux-ci : "BaseBall", "Course à pied", "Judo" . Utilisez des boutons radios.
    * Le formulaire doit être envoyé à l'adresse suivante `/~p170025/supportCours/form/q1Form02.php`
    * La méthode utilisée doit être le  `GET`
    * Le serveur attend des valeurs  via une clé nommée "sport"
    * La valeur attendue pour le choix "BaseBall" est "baseball"
    * La valeur attendue pour le choix "Course à pied" est "course"
    * La valeur attendue pour le choix "Judo" est "judo"
    * Utiliser cette balise pour soumettre les données  `<input type="submit" name="btn_submit" value="Envoyer">`
    * Uploader votre fichier sur panoramix
    * Tester votre code

    Si votre code est correct, la page doit afficher votre choix (et non plus le formulaire).


##Des choix non exclusifs: les  cases à cocher
Ajoutons la possiblité de choisir plusieurs choix.

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <strong>Catégories préférées</strong> 

        <label for="cat1">Vêtements</label>
        <input id="cat1" name="cat[]" type="checkbox" value="cat1"> 
        
        <label for="cat2">Livres</label>
        <input id="cat2" name="cat[]" type="checkbox" value="cat2"> 
        
        <label for="cat3">Bandes Dessinées</label>
        <input id="cat3" name="cat[]" type="checkbox" value="cat3"> 
         
        <label for="cat4">Jeux</label>
        <input id="cat4" name="cat[]" type="checkbox" value="cat4"> 
        
    </form>
    ```
De même que pour les boutons radio, l'association des cases à cocher s'effectue en leur donnant la même valeur de **name**.
Observez la valeur donnée à l'attribut **name**.  Elle se termine par **[]**.  Cela signifie que les valeurs seront récupérées sous forme de tableau.  Cela permet de récupérer des valeurs multiples.

Il est possible de spécifier des cases cochées par défaut grâce à l'attribut **checked**
```html  
<input id="cat3" name="cat[]" type="checkbox" value="cat3" checked> 
```
  
###Au niveau serveur
Nous avons vu précédemment que les données étaient récupérées au niveau du serveur sous forme de paires "clé-valeur".  Ici les valeurs ne sont pas entrées par l'utilisateur mais déterminée par le développeur.

Pour ce code :

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <label for="cat1">Catégories</label>
        <input id="cat1" name="cat[]" type="checkbox" value="cat1"> 
        
        <label for="cat2">Livres</label>
        <input id="cat2" name="cat[]" type="checkbox" value="cat2"> 
        
        <label for="cat3">Bandes Dessinées</label>
        <input id="cat3" name="cat[]" type="checkbox" value="cat3"> 
         
        <label for="cat4">Jeux</label>
        <input id="cat4" name="cat[]" type="checkbox" value="cat4"> 
    </form>
    ```
Si je choisis les options "Livres" et "Jeux, le serveur recevra `cat[]=cat2&cat[]=cat4`


!!! Defi03
    **Petit défi :**
    
    * Créer un nouveau fichier nommé defiForm03.html
    * Créer un formulaire permettant à l'utilisateur de choisir plusieurs cours parmi ceux-ci : "DevWeb", "BD", "Java", "Python" .
    * Le formulaire doit être envoyé à l'adresse suivante `/~p170025/supportCours/form/q1Form03.php`
    * La méthode utilisée doit être le  `GET`
    * Le serveur attend des valeurs  via une clé nommée "cours"
    * La valeur attendue pour le choix "DevWeb" est "crs1"
    * La valeur attendue pour le choix "BD" est "crs2"
    * La valeur attendue pour le choix "Java" est "crs3"
    * La valeur attendue pour le choix "Python" est "crs4"
    * Utiliser cette balise pour soumettre les données  `<input type="submit" name="btn_submit" value="Envoyer">`
    * Uploader votre fichier sur panoramix
    * Tester votre code

    Si votre code est correct, la page doit afficher vos choix (et non plus le formulaire).

##Une liste de choix: les listes déroulantes  
Ajoutons une liste déroulante limitée à 1 choix

!!! note "formInscription.html"
    ```html  
     
    <form action="#" method="post" >
    
       [...code précédent...]

        <label for="livraison">Mode de livraison</label>
        <select id="livraison" name="livraison">
            <option value="D">A domicile</option>
            <option value="M">Au magasin</option>
            <option value="P">En point relais</option>
        </select> 


    </form>
    ```
Les balises **option** permettent de définir les différents éléments présents dans la liste déroulante. Le texte à afficher à l'utilisateur est placé entre les balises ouvrante et fermante; par contre, la valeur qui est envoyée lors de la soumission du formulaire est placée dans l'attribut **value**. Si celle-ci n'est pas spécifiée, la valeur renvoyée est le texte affiché.

Il est possible de spécifier une option par défaut grâce à l'attribut **selected**
```html  
<option value="M" selected>Au magasin</option>
```

###Au niveau serveur
Nous avons vu précédemment que les données étaient récupérées au niveau du serveur sous forme de paires "clé-valeur".  Ici les valeurs ne sont pas entrées par l'utilisateur mais déterminée par le développeur.

Pour ce code :

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <label for="livraison">Mode de livraison</label>
        <select id="livraison" name="livraison">
            <option value="D">A domicile</option>
            <option value="M">Au magasin</option>
            <option value="P">En point relais</option>
        </select> 
    </form>
    ```
Si je choisis l'option "Au magasin", le serveur recevra `livraison=M`

!!! Defi04 
    **Petit défi :**
    
    * Créer un nouveau fichier nommé defiForm04.html
    * Créer un formulaire permettant à l'utilisateur de choisir un choix parmi une liste déroulante : "Ans", "Oupeye", "Juprelle" .
    * Le formulaire doit être envoyé à l'adresse suivante `/~p170025/supportCours/form/q1Form04.php`
    * La méthode utilisée doit être le  `GET`
    * Le serveur attend des valeurs  via une clé nommée "ville"
    * La valeur attendue pour le choix "Ans" est "ans"
    * La valeur attendue pour le choix "Oupeye" est "oupeye"
    * La valeur attendue pour le choix "Juprelle" est "juprelle"
    * Utiliser cette balise pour soumettre les données  `<input type="submit" name="btn_submit" value="Envoyer">`
    * Uploader votre fichier sur panoramix
    * Tester votre code

    Si votre code est correct, la page doit afficher vos choix (et non plus le formulaire).

##Boutons
Il existe plusieurs types de bouton avec un usage particulier :

* **les boutons de soumission**: pour envoyer les données du formulaire, comportement par défaut,
* **les boutons de ré-initialisation**: pour annuler les changements de valeurs des champs depuis le chargement du formulaire,
* **les boutons d'action**: pour exécuter des actions programmées en Javascript sans soumettre le formulaire,
* **les boutons de téléversement de fichier**: pour lier un fichier aux données du formulaire.

Deux balises permettent de créer des boutons:

* La balise `<input>` : pour un label textuel uniquement
* La balise `<button>` : pour un label plus graphique avec du contenu HTML

##Bouton de soumission

Ajoutez deux boutons de soumission

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <input type="submit" name="buttsub1" value="Valider">
        <button type="submit" name="buttsub1" ><u>Autre valider</u></button>

    </form>
    ```
Regardez l'aspect des deux boutons "Valider" sur différents navigateurs.

Vérifiez que le formulaire est bien soumis lors d'un clic sur un des boutons de soumission.

##Bouton de ré-initialisation

Ajoutez deux boutons de ré-initialisation

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <input type="reset" name="reset1" value="Réinitialiser">
        <button type="reset" name="reset2"><u>Autre réinitialiser</u></button>

    </form>
    ```
Ajoutez des valeurs dans votre formulaire, puis cliquez sur un des bouton de ré-initialisation.
Que se passe-t-il ? 

##Bouton  d'action

Ajoutez deux boutons d'actions

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <input type="button" name="bouton1" value="Buzzer">
        <button type="button" name="bouton2" >Buzzer</button>

    </form>
    ```
Ajoutez des valeurs dans votre formulaire, puis cliquez sur un des bouton d'action
Que se passe-t-il ? 

##Bouton de téléversement de fichier

Ajoutez cet input de type file

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
       [...code précédent...]

        <input type="file" name="avatar" accept="image/*, .jpg, .png">

    </form>
    ```
Testez. Que se passe-t-il ? 
Notez que si vous désirez uploader un fichier, il faut impérativement spécifier ``enctype=multipart/form-data` dans la balise `form`.

##Balise `<fieldset>`
Pour aider l'utilisateur à percevoir la structure d'ensemble des champs d'un formulaire, il est parfois nécessaire de regrouper des sous-ensembles de champs. Dans notre exemple, nous allons regrouper toutes les demandes d'informations des données personnelles du client.

Pour cela, nous allons utiliser la balise `<fieldset>`. Visuellement, par défaut, cette balise va dessiner un cadre autour des champs qu'elle contient. Il est possible d'afficher l'intitulé du groupement via la balise `<legend>`

!!! note "formInscription.html"
    ```html  
    <form action="#" method="post" >
    
        <fieldset>
		    <legend>Votre Coordonnées</legend>
			<label for="nom"> Votre nom : </label>
			<input type="text" name="nom" id="nom" required placeholder="Entrez votre nom" value=""   >

			<label for="nom"> Votre prénom : </label>
			<input type="text" name="prenom" id="prenom" required placeholder="Entrez votre prenom" value=""   >
			
		</fieldset>
        [...code suivant...]
    </form>
    ```

Visualisez le résultat.

**Un `<fieldset>` qui regroupe tous les champs est inutile. Si vous désirez un encadrement, utilisez plutôt une bordure sur la balise `<form>`**

##Testing

Créez un nouveau fichier nommé `formTesting.html`
Copiez-collez ce code dans un nouveau fichier.

??? quote "Code à copier"
    ```html  
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <title>Demo formulaire</title>
            <meta charset="utf-8">
        </head>
        <body>
            <form action="#"  method="POST"  >
                <input id="counter" name="counter" type="hidden" value="100">
            
                <label for="nom">Nom</label>
                <input id="nom" name="nom" type="text" > 
                
                <label for="courriel">Courriel</label>
                <input id="courriel" name="courriel" type="email" >
                
                <label for="motPasse">Mot de passe</label>
                <input id="motPasse" name="motPasse" type="password" >
                
                <label for="webPerso">Votre site web</label>
                <input id="webPerso" name="webPerso" type="url"> 
                
                <label for="quantite">Quantité</label>
                <input id="quantite" name="quantite" type="number" value="0">
                
                <label for="date">Livré le</label>
                <input id="date" name="date" type="date"> 
                
                <label for="heure">A partir de</label>
                <input id="heure" name="heure" type="time"> 
                
                <label for="couleur">Couleur</label>
                <input id="couleur" name="couleur" type="color"> 
                
                <input type="submit" name="Valider">
            </form>
        </body>
    </html>
    ```


Tout d'abord, regardez l'aspect du formulaire sur différents navigateurs (Chrome, Firefox, Opera, Edge, Safari, ...). Que constatez-vous pour les champs "date", "heure", "couleur" notamment ?

Ensuite, testez votre formulaire en encodant des données et en cliquant sur le bouton "Valider". Que se passe-t-il si vous entrez une adresse courriel au format incorrect (Exemple: jdupont#hotmail.com) ?
A votre avis, est-ce des validations incontournables ?

Constatez également que le champ "counter" est invisible à l'affichage. Il sert à conserver une information entre l'affichage d'un formulaire et son traitement. Il ne peut servir à stocker une information sensible puisqu'il reste visible via le code source de la page !

##En résumé 

![Testing form](docs/img/05_htmlFormulaire/cheatSheetInput.png)

##Attributs          
**Adapter le comportement des champs**
Chaque champ possède des attributs facultatifs permettant de s'assurer de la validité des données ou de guider l'utilisateur. Notamment, les `<input>` possèdent l'attribut value qui permet de placer une valeur par défaut au chargement du formulaire.

??? quote "`<autofocus>`: Élément actif au chargement de la page"
    Pour faciliter l'utilisation d'un formulaire, il est parfois utile de rendre actif un élément dès la fin du chargement de la page. Par défaut, c'est le premier élément du formulaire.
    
    !!! note "formInscription.html"
        Ouvrez le fichier inscriptionForm.html dans votre navigateur et commencez à taper quelque chose au clavier. Quel champ a le focus par défaut ?
        Éditez ensuite le fichier comme suit:
        ```html  
             
        [...code précédent...]

        <textarea id="message" name="message" rows="3" cols="20" autofocus></textarea>
            
        [...code suivant...]

        ```
        Rechargez la page, commencez à taper au clavier.. le texte sera écrit dans le champ "message".

??? quote "`<autocomplete>`: Auto-complétion"
    L'auto-complétion fait apparaître les différentes valeurs déjà entrées par l'utilisateur dans le champ texte lors de soumissions antérieures. L'attribut peut être placé sur la balise `<form>` ou sur un champ précis du formulaire.
    
    !!! note "formInscription.html"
        Validez trois fois votre formulaire en plaçant successivement les mots "pomme", "poire" et "cerise" comme valeur dans le champ "Nom". Tapez ensuite "po" dans le champ "Nom" et constatez les propositions du navigateur.
        Editez ensuite le fichier comme suit:
        ```html  
             
        [...code précédent...]

        <input type="text" name="nom" id="nom" required placeholder="Entrez votre nom" value=""  autocomplete="off" >
            
        [...code suivant...]

        ```
        Rechargez la page, recommencez le même test pour vérifier que le navigateur ne vous propose plus de suggestions.

??? quote "`<disabled>`: Élément désactivé"
    Un élément désactivé est affiché par défaut en grisé, n'est pas éditable par l'utilisateur et ne sera pas envoyé lors de la soumission du formulaire. L'utilité d'une telle option est de pouvoir activer un élément, par Javascript, si les conditions sont remplies. (élément d'une liste sélectionné, ...).
    
    !!! note "formInscription.html"
        Editez ensuite le fichier comme suit:
        ```html  
             
        [...code précédent...]

        <input type="text" name="prenom" id="prenom" required placeholder="Entrez votre prenom" value="" disabled  >
            
        [...code suivant...]

        ```
        Savez-vous éditer la valeur du champ "Preénom" ? Lors de la soumission, le champ est-il envoyé comme les autres données ?

  

 
??? quote "`<pattern>`: Expression régulière"
    Les expressions régulières permettent de garantir, côté client, qu'un texte entré par un utilisateur respecte un format donné.
    
    !!! note "formInscription.html"
        Ajouter cet input :
        ```html  
             
        [...code précédent...]

        <label for="plaque">Voiture</label><input id="plaque" name="plaque" type="text" pattern="^\d-[A-Z]{3}\d{3}$" > 

            
        [...code suivant...]

        ```
        Essayez de soumettre votre formulaire avec les valeurs "LIA533" puis "1-LIA533".


---
??? quote "`<placeholder>`: Indication à destination de l'utilisateur"
    La valeur du "placeholder" (traduit littéralement: espace réservé) est un texte expliquant ce que représente le champ texte (sur mobile, par gain de place, en remplacement d'un `<label>`) ou pour indiquer le format attendu . (Par exemple pour un champ date : "jj/mm").
    Dès que l'utilisateur commence à entrer du texte dans le champ et tant que ce champ n'est pas vide, le "placeholder" disparaît.
    
    !!! note "formInscription.html"
        Editez ensuite le fichier comme suit:
        ```html  
             
        [...code précédent...]

        <input type="text" name="prenom" id="prenom" required placeholder="Entrez votre prenom" value="" disabled  >
            
        [...code suivant...]

        ```
        Commencez à taper un mot dans le champ "Nom". Que constatez-vous ? Et lorsque vous videz à nouveau le champ ? Remarquez également qu'à la soumission d'un champ non obligatoire sans valeur, le "placeholder" n'est pas envoyé à la place !
     
??? quote "`<readonly>`: Élément en lecture seule"
    Contrairement à un élément désactivé, un élément en lecture seule, bien que non modifiable par l'utilisateur, sera toutefois envoyé lors de la soumission du formulaire.
    
    !!! note "formInscription.html"
        Ajoutez cet input
        ```html  
             
        [...code précédent...]

        <label for="statut">Statut</label><input id="statut" name="statut" type="text" readonly value="NOUVEAU"> 
            
        [...code suivant...]

        ```
        SEssayez de modifier la valeur du champ "statut". Soumettez le formulaire et vérifiez que la valeur de statut est bien envoyée.
               
??? quote "`<required>`: Élément obligatoire"
    Certains éléments de formulaire doivent être rendus obligatoires pour garantir que l'utilisateur a bien encodé le minimum d'informations nécessaire.
    
    !!! note "formInscription.html"
        Editez ensuite le fichier comme suit:
        ```html  
             
        [...code précédent...]

        <input type="text" name="prenom" id="prenom" required placeholder="Entrez votre prenom" value="" disabled  >
            
        [...code suivant...]

        ```
        Soumettez le formulaire sans spécifier de nom. Que constatez-vous ?

##Allez plus loin
!!! note  
	Pour des illustrations et explications supplémentaires sur les attributs possibles des champs de formulaires, consultez-les sur [W3Schools.com](https://www.w3schools.com/html/html_form_attributes.asp)


