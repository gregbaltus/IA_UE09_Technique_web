# Les branchements


## Les alternatives

### Le if
En JavaScript, `if` et `switch` sont utilisés pour exécuter du code en fonction de conditions. La structure `if` permet d'exécuter un bloc de code si une condition est vraie et peut être suivie d'un `else` ou de plusieurs `else if` pour tester différentes conditions. 
```javascript
let age = 18;
if (age < 18) {
    console.log("Mineur");
} else {
    console.log("Majeur");
}
```

### Le switch
Le `switch` est utilisé lorsqu'on doit comparer une variable à plusieurs valeurs possibles. Il est souvent plus lisible que plusieurs `if else`. 
```javascript
let fruit = "pomme";
switch (fruit) {
    case "pomme":
        console.log("C'est une pomme !");
        break;
    case "banane":
        console.log("C'est une banane !");
        break;
    default:
        console.log("Fruit inconnu");
}
```

Ce code est équivalent à celui-ci :
```javascript
let fruit = "pomme";
let fruit = "pomme";

if (fruit === "pomme") {
    console.log("C'est une pomme !");
} else if (fruit === "banane") {
    console.log("C'est une banane !");
} else {
    console.log("Fruit inconnu");
}
```
## Les boucles
 
### Les boucles for 

La boucle for est utilisée lorsque l'on connaît à l'avance le nombre d'itérations. Elle se compose de trois parties : initialisation, condition et incrémentation. 
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Cette boucle commence avec `i = 1`, s'exécute tant que `i <= 5`, et augmente i à chaque itération.

>:warning: Ces boucles ne fonctionnent pas exactement de la même manière que en python. Nous verrons une forme de `for` plus proche du python quand nous verrons les tableaux.


### La boucle while

La boucle `while` s'exécute tant qu'une condition donnée est vraie. Elle est utile lorsqu'on ne connaît pas le nombre exact d'itérations à l'avance. 
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

### La boucle do...while

La boucle `do...while` est similaire à `while`, mais elle garantit qu'au moins une itération aura lieu, car la condition est vérifiée après l'exécution du bloc. 
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```


