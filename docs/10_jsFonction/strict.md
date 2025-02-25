# Le mode strict 

Comme nous avons pu le constater, certaines libertés autorisées dans le langage peuvent être sources d'erreurs. Certaines bonnes pratiques peuvent être imposées en passant en mode strict.

Le passage en mode strict s'effectue au sein de chaque fonction ou pour l'ensemble du script en ajoutant ceci comme première ligne:

```javascript
"use strict"; //mode strict pour l'ensemble du script
	
function doSomething() {
    "use strict"; //mode strict pour cette fonction uniquement
    ...	
}
```

>:warning: Toute classe ou module JavaScript est par défaut en mode strict !

Pour rappel, en JS une fonction n'est pas obligatoirement inclue dans une classe ou un module.

Les contraintes imposées par le mode strict sont les suivantes: 

## Obligation de déclarer les variables

Toute variable doit être déclarée par "let" ou "var" avant de pouvoir être utilisée.

## Noms de paramètres d'une fonction distincts

Les noms de paramètres d'une fonction doivent être tous différents.

!!! Tips "Question"
    ```javascript
    function f(x,x){
        return x+x;
    }
    console.log(f(3,4));
    ```
    Qu'affiche le code ci-dessus dans la console ?

    ??? note "Réponse"
        "8" puisque x prend la valeur du second paramètre qui écrase le premier.

## Certains noms sont réservés aux mots-clefs du langage
Contrairement à bien des langages de programmation, JavaScript bloque sans avertir les affectations sur certains mots-clefs comme "undefined", "arguments", "let", ...

!!! Tips "Question"
    ```javascript
    arguments = [10, 5];
    function diff(a, b){
        if (a === arguments[0]){
            return a;   
        } else {
            return "diff";
        } 
    }
        
    console.log(diff(3, 4));
    ```
    Quel est le résultat affiché en console ?

    ??? note "Réponse"
        "3" et non "diff" puisque la modification d'"arguments" est ignorée et reste équivalent au tableau des arguments reçus.

        Testez à présent ce code en ajoutant "use strict"; en première ligne en dehors de la fonction.


## Littéral octal interdit

La présence d'un "0" devant un nombre pour indiquer que le littéral est un octal peut provoquer des erreurs.
```javascript
let x = 0644;
```

doit être remplacé par :
```javascript
let x = parseInt("0644", 8);
```

