# Les fonctions

Tout comme en Python, JavaScript permet de définir et d'utiliser des fonctions, qui sont des blocs de code réutilisables. Une fonction en JavaScript peut être déclarée avec le mot-clé function, prendre des paramètres et retourner une valeur avec return. Elles permettent de structurer le code, d'éviter les répétitions et de rendre le programme plus modulaire. 

## Déclarer une fonction

La déclaration d'une fonction peut être placée après son utilisation dans le code grâce au mécanisme de "hissage".

Par contre, il n'est pas possible de déclarer une fonction dans une structure conditionnelle puisque la déclaration de la fonction est interprétée durant la phase de "compilation" du code.

```javascript
function nomFonction(parametre1, parametre2){	
…
}
```

En JavaScript, une fonction est un objet. Il est donc possible de créer une fonction anonyme et l'affecter à une variable.

```javascript
let nomFonction = function(parametre1, parametre2){ … }
```

La déclaration d'une fonction par expression doit absolument être placée avant son utilisation mais peut être placée dans une structure conditionnelle. La raison est simple: la fonction n'est détectée qu'au moment de l'exécution du code lors de la réalisation de l'opération d'affectation.

## Les fonctions fléchées
Une fonction fléchée en JavaScript est une syntaxe plus concise pour déclarer une fonction, introduite avec ES6. Elle utilise l'opérateur => au lieu du mot-clé function. Voici comment l'on déclare une fonction fléchée :

```javascript
let circleArea = (pi, r) => {	
    let area = pi * r * r;
    return area;
};
	
let result = circleArea(3.14, 3);
console.log(Math.round(result * 100) / 100);  //=> "28.26"
```

ou plus court encore :
```javascript
let circleArea = (pi, r) => pi * r * r;
let result = circleArea(3.14, 3);
console.log(Math.round(result * 100) / 100);  //=> "28.26"
```

Ces expressions sont équivalentes à :

```javascript
let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
	
};
	
let result = circleArea(3.14, 3);
console.log(Math.round(result * 100) / 100);  //=> "28.26"
```

Il existe également certaines conventions sur JavaScript qui nous permette de rédiger des codes encore plus concis. L'utilisation d'accolades dans les fonctions fléchées n'implique plus de valeur de retour.
```javascript
let circleArea = (pi, r) => pi * r * r;
```
... est égal à ... 
```javascript
let circleArea = (pi, r) => { return pi * r * r; };
```

... par contre ...
```javascript
let circleArea = (pi, r) => { pi * r * r; };
```

... ne retourne rien.

!!! Tip "Exercice"
    Créez une fonction fléchée qui reçoit un montant HTVA et un taux de TVA et qui retourne le montant TVAC arrondi à 2 chiffres après la virgule. Affichez en console le résultat de l'appel à la fonction avec les valeurs 1026,6€ et 15%. (Exemple: "Montant TVAC: 1180.59€")
   
	??? note "Réponses"
        ```javascript
        let calculTVAC = (montantHTVA, taux) => Math.round(100 * montantHTVA * (1 + taux)) / 100;
        console.log(`Montant TVAC: ${calculTVAC(1026.6, 0.15)}€`);
        ```


!!! Tip "Exercice"
    Modifiez votre fonction pour qu'elle retourne un objet contenant le montant HTVA, le taux de TVA et le montant TVAC. Conservez le même résultat d'affichage en console. (Exemple: "Montant TVAC: 1180.59€")
   
	??? note "Réponses"
        ```javascript
        let calculTVAC = (montantHTVA, taux) => {return {montantHTVA: montantHTVA, tauxTVA: taux, montantTVAC: Math.round(100 * montantHTVA * (1 + taux)) / 100}};
        console.log(`Montant TVAC: ${calculTVAC(1026.6, 0.15).montantTVAC}€`);
        ```
## Les valeurs par défault
La valeur par défaut d'un argument est spécifiée selon une syntaxe classique.
```javascript
function myFunction(x = 1, y = 2, z = 3){
    console.log(x, y, z);	
}
myFunction(6,7); //=> "6 7 3"
```

!!! Tips "Question"
    ```javascript
    function test (x = 1, y, z = 2){
        return (y === undefined) ? x : z;
    }
    console.log(test(9));
    console.log(test(9,10));
    console.log(test(9,10,11));  
    console.log(test(9,10,11,12));
    ```
    Qu'est-ce qui sera affiché en console ?

    ??? note "Réponse"
        Les lignes : "9", "2", "11", "11". En JavaScript, une fonction peut être appelée avec trop peu d'arguments (ceux-ci sont "undefined" s'il n'y a pas de valeur par défaut) ou avec trop d'arguments.

## Fonctions imbriquées
Une fonction imbriquée est une fonction déclarée à l'intérieur du corps d'une autre fonction.

L'enchainement de portée (scope chain) de la fonction imbriquée inclut celle de la fonction qui la contient; en d'autres termes, la portée des variables locales de la fonction contenante recouvre l'entièreté de la fonction imbriquée.

!!! Tip "Exercice"
    Quelle valeur est affichée dans la console par le code ci-dessous ?
    ```javascript
    function calcule(a, b){
        let bonus = 10;
        function incremente(x){
            return x+bonus+a;
        }
        return incremente(a) + incremente(b);
    }
    console.log(calcule(2,3)); 
    ```
   
	??? note "Réponses"
        29.. car calcule(2,3) retourne incremente(2) + incremente(3). Or incremente(x) retourne x + 12 puisque bonus vaut 10 et a vaut 2.
        Nous avons donc (2 + 12) + (3 + 12) = 29.
        
## Passage d'une fonction en argument
En JavaScript, les fonctions sont des objets, ce qui signifie qu'elles peuvent être passées en paramètre à d'autres fonctions. 

```javascript
let add = function(x,y){ return x+y;}
let mult = function(x,y){ return x*y; }
function calc(x,y,f){
    return f(x,y);
}
console.log(calc(3,2,mult)); // affiche 6
console.log(calc(3,2,add)); // affiche 5
```

La fonction `calc` prend trois paramètres : deux nombres `(x et y)` et une fonction `(f)`. Elle exécute `f(x, y)`, ce qui permet d'appliquer une opération différente selon la fonction fournie en argument.

Lorsque `calc(3, 2, mult)` est appelé, `mult(3, 2)` est exécuté et retourne `6`.

Lorsque `calc(3, 2, add)` est appelé, `add(3, 2)` est exécuté et retourne `5`.

Ce principe est utilisé en programmation fonctionnelle, permettant d’écrire du code plus modulaire et réutilisable.

## Une fonction comme résultat d'une fonction
Suivant le même principe, comme une fonction est un objet, une fonction peut donc très bien retourner une autre fonction.

```javascript
function generateurSalaire(role){
    let result = null;
    switch(role){
        case "manager":
            result = function(salireFixe, anciennete) { return salaireFixe + 0.3 * anciennete; }
            break;
        default:
            result = function(salireFixe, anciennete) { return salaireFixe + 0.1 * anciennete; }
    }
    return result;
}
	
let prenom =  "Jean";
let role = "vendeur";
let salaireFixe = 3000;
let anciennete = 10;

let getSalaire = generateurSalaire(role);
console.log(" Salaire de " + prenom + ": " +  getSalaire(salaireFixe, anciennete) + "€"); // Salire de Jean : 3001€
```
Dans le code ci-dessus, La fonction `generateurSalaire(role)` retourne une fonction spécifique en fonction du rôle de l’employé. Cette fonction est stockée dans la variable `getSalaire`. Dans cette exemple comme le rôle est celui d'un vendeur, c'est la seconde fonction qui sera utilisée et le salaire vaudra donc `3000 + 10*0.1 = 3001`.

# Fonction génératrice 
Une fonction génératrice est une fonction déclarée avec function* dont l'exécution peut être interrompue puis reprise. Le contexte de la fonction génératrice, ses variables, est conservé entre les différentes exécutions.

Un appel à une fonction génératrice n'exécute pas directement le corps de la fonction, il retourne un itérateur dont la méthode `next()` permet d'exécuter le corps de la fonction jusqu'à l'interruption suivante provoquée par `yield`

```javascript
function* listePairs(n) {
     let p = n;
     do {
         p+=2;
         yield p;
     } while(p < 100);
}
let pairs = listePairs(94);
console.log(pairs.next().value); //96
console.log(pairs.next().value); //98
console.log(pairs.next().value); //100
console.log(pairs.next().value); //undefined
```

Chaque appel à la méthode `next()` retourne un objet `{"value": valeur,"done":false}`. "Value" est la valeur retournée par "yield" et "done" indique si l'itérateur est arrivé à la fin (plus aucun "yield").

Une fonction génératrice peut contenir le motclef "return"; dans ce cas, l'itérateur se termine lorsque l'instruction "return" est atteinte.
```javascript
function* listePairs(n) {
     let p = n;
     do {
         p+=2;
         yield p;
     } while(p < 100);
     return 0;
     yield n; //yield inatteignable;
}
	
let pairs = listePairs(94);
console.log(pairs.next().value); //96
console.log(pairs.next().value); //98
console.log(pairs.next().value); //100
console.log(pairs.next().value); //0
console.log(pairs.next().value); //undefined
```

!!! Tips "Utilisation d'une fonction génératrice"
    ```javascript
    function* intervalle(deb, fin){
        for(var v=deb; v < fin; v++){
            yield v;
        }
    }
    // Ex d'utilisations d'une fonction génératrice autres que boucle    
    let values = Array.from(intervalle(1,10));   
    console.log(values);    
    console.log(...intervalle(1,10));
        ```
    Qu'est-ce que le code ci-dessus affiche en console ? Essayez de le deviner sans exécuter le code...

    ??? note "Réponse"
        Tout d'abord, l'affichage d'un tableau contenant les valeurs de 1 à 9; puis l'affichage des valeurs 1 à 9 séparées par un espace.

## Une fonction génératrice appelée dans une autre
L'appel d'une fonction génératrice dans une autre fonction génératrice est réalisé via `yield*`. L'instruction `yield*` itérable peut être interprétée comme des `yield` sur chaque valeur de l'itérable. Consultez la page [yield* (MDN moz://a)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*) pour plus d'exemples.
```javascript
function* intervalle(deb, fin){
    for(var v=deb; v < fin; v++){
        yield v;
    }
}
	
function* listeValeurs(){
    yield 0;
    yield* intervalle(3,6);
    yield* intervalle(9,12);
    yield 20;
}
	
function afficheValeurs(){
   let valeurs = listeValeurs();
   let valeur = valeurs.next();
   while (!valeur.done) {
       console.log(valeur.value);
       valeur = valeurs.next();
   }
}
afficheValeurs();
```

Le code ci-dessus va afficher la séquence : "0 3 4 5 9 10 11 20" dans la console avant de s'arrêter.

L'utilisation de fonctions génératrices permet d'écrire des boucles imbriquées de manière plus concise et de faire du lazy loading en générant la valeur suivante au fur et à mesure du traitement plutôt que de charger l'ensemble des données d'un tableau ou d'une liste de très grande taille.