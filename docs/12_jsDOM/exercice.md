# Exercices

## Exercice js.dom1
Le BMR (Basal Metabolic Rate, en français Taux Métabolique de Base - TMB) représente la quantité minimale d'énergie (exprimée en kilocalories par jour) dont le corps a besoin pour fonctionner au repos.

Le BMR dépend de plusieurs facteurs :

- **Âge** : Plus on vieillit, plus le métabolisme ralentit.
- **Sexe** : En général, les hommes ont un BMR plus élevé que les femmes en raison de leur masse musculaire plus importante.
- **Poids et taille** : Un corps plus grand et plus lourd nécessite plus d'énergie pour fonctionner.

Pour le calculer nous utilisons la **formule de Mifflin-St Jeor** :

- Pour les hommes : BMR = 10 * poids(kg) + 6.25 * taille (cm) + 5* âges (années) + 5

- Pour les femmes : BMR = 10 * poids(kg) + 6.25 * taille (cm) + 5* âges (années) - 161


Sur base du fichier HTML fournies dans l'archive "[BMR.zip](../img/12_jsDOM/BMR.zip)", réaliez le calcul du BMR avec les fonctionnalités suivantes :

- L'utilisateur encode les valeurs des différents champs et appuie sur le bouton calculer, le programme affiche en vert "Votre BMR est de xxxxx kcal/jour."

- Si il manque des informations ou si certaines ne sont pas correctes, le programme affiche en rouge "Veuillez entrer des valeurs valides."

![capture d'écran de l'album photo](../img/12_jsDOM/ExoBMR.png)

**Astuce** : pour récupérer [les valeurs d'un champs input](https://www.w3schools.com/jsref/prop_text_value.asp).


## Exercice js.dom2

Sur base du fichier HTML et des images fournies dans l'archive "[fantasy.zip](../img/12_jsDOM/fantasy.zip)", réalisez la visualisation d'un album photo avec les fonctionnalités suivantes:

- Il existe 5 images nommées 'fantasy-1.jpg', ..., 'fantasy-5.jpg',

- L'album permet de voir une image en grand et d'ajouter une à une des vignettes d'aperçu (images en petit format),
    
- Au départ, seule la première vignette est visible. L'image est affichée également en grand format,
    
- Au clic sur le bouton d'ajout, une vignette supplémentaire est ajoutée et l'image remplace celle affichée en grand format,
    
- À partir de la sixième vignette, la suite des vignettes recommence à 1,
    
- Lorsque 10 vignettes ont été affichées, le bouton d'ajout disparaît,

- Au clic sur une des vignettes, son image remplace celle affichée en grand format.

![capture d'écran de l'album photo](../img/12_jsDOM/Exo1.png)
