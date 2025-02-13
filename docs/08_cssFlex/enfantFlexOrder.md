#Propriétés sur enfant Flex<br>order : 

##Découverte #1

!!! Abstract " Sur codePen "
    [<span class="editCpLong">CSS</span>  Le code complet à tester se trouve sur CodePen ](https://codepen.io/Flolec/pen/NWvQagO){:target="_blank"}  

Observez le rendu et le code.
Testez différentes valeurs pour le order.

##order

Les items sont placés par ordre croissant de la valeur "order" et, pour des valeurs égales, par ordre d'apparition dans le code HTML.

Par défaut, la valeur de la propriété order est 0 pour les éléments flexibles. Aussi, si on utilise un coefficient supérieur à 0, les éléments concernés seront affichés après les éléments pour lesquels aucune valeur explicite n'a été fournie pour order.

On peut également utiliser des valeurs négatives. Cela est plutôt pratique si on souhaite afficher un élément en premier sans avoir à indiquer de valeurs pour les autres éléments : il suffira d'affecter l'ordre -1 au premier élément. Cette valeur étant inférieure à 0, l'élément sera toujours affiché en premier.