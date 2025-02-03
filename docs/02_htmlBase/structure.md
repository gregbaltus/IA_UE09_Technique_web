#Structure d'une page web

## Structure globale <a name="base"></a>

``` html 
<!DOCTYPE html>
<html lang="fr"><!-- commentaire: l'attribut "lang" indique 
        aux moteurs de recherche que le contenu textuel de la page est en français -->
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Initiation au langage HTML</title>
	</head>
	<body>
		
	</body>
</html>
```
Tout document HTML doit contenir la structure de balises ci-dessus. 


:material-square-edit-outline:{ .blue-text } A vous de jouer :


!!! Abstract " A vous de jouer ! "

    * Copiez-collez cette structure dans un nouveau fichier.

		:warning: Veuillez à enregistrer correctement votre fichier.  [>>> Infos](organisation.md)
	* Ajouter ceci à l'interieur des balises `<body>`
	```
	<p>Je suis un paragraphe</p>
	```

	* Où s'affiche le titre du document (`<title>`) ? 
	* Le contenu de quelle balise s'affiche sur la page  ?

	??? note "Réponses"
		Le contenue de la balise `<title>` s'affiche dans l'onglet de fenêtre. 
		
		Seul le contenu placé entre les balise `<body>` est affiché dans le navigateur.


Analysons les différents balises qui constituent cette structure de base.

### Le DOCTYPE
Le "DOCTYPE" est la première instruction qui doit être rédigée dans la page html.
Le "Doctype" informe de la version HTML utilisée dans le document (dans l'exemple c'est la version HTML 5).

### La balise  &lsaquo;html&rsaquo;
La balise `<html>` englobe tout le contenu de la page. L'attribut  `lang="fr"` spécifie que la langue principale du contenu est le français.

### La balise  &lsaquo;head&rsaquo;

La balise `<head>` contient des informations sur la page, comme le titre et les métadonnées, mais ce contenu n'est pas affiché dans le navigateur.

### La balise &lsaquo;meta&rsaquo;
La balise `<meta charset="utf-8">` définit l'encodage des caractères utilisé dans la page, ici l'UTF-8.

[>>Infos concernant le codage des caractères](codage.md)

### La balise &lsaquo;title&rsaquo;
La balise `<title>` définit le titre de la page, affiché dans l'onglet du navigateur.  Il n'apparait pas dans le contenu de la page du navigateur.

### La balise &lsaquo;body&rsaquo;
La balise `<body>` contient  le contenu visible de la page, comme le texte, les images, les liens, etc.


