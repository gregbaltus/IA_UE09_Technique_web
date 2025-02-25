# Les tableaux

## Fonctionnement de base 

### Initialisation
En JavaScript, un tableau est une structure de données qui permet de stocker plusieurs valeurs sous un même nom. Contrairement aux variables classiques qui ne contiennent qu’une seule valeur, un tableau peut regrouper une liste d’éléments, accessibles individuellement via leur position. Ces éléments peuvent être de n’importe quel type (nombres, chaînes de caractères, objets, etc.). 

Les tableaux en JavaScript sont similaires aux listes en Python : ils permettent de stocker plusieurs valeurs et de les manipuler via leur index. Cependant, en JavaScript, un tableau est un objet et peut contenir des éléments de types variés, tandis qu'en Python, les listes offrent plus de méthodes intégrées pour la manipulation des données.


Tout comme en les listes en python, les tableaux en JavaScript peuvent contenir des données de types différents. Par exemple:

```javascript
let tab = ["a", 2, 3.2, function(x){ return ++x;}];
```

Dans l'exemple ci-dessus, notez la présence d'une fonction dans le tableau. En effet, en JavaScript une fonction est un objet, elle peut donc être placée dans un tableau comme n'importe quel autre objet.

### Un élément
L'accès à l'élément d'indice 'i' s'effectue selon la syntaxe classique:
```javascript
console.log(tab[0]); //"a"
console.log(tab[3](5));//6
```

La méthode at() permet l'accès à un élément selon sa position relative à la fin du tableau:

```javascript
let tab = ['a','b','c','d','e','f','g','h'];
console.log(`${tab.at(2)}${tab.at(-1)}${tab.at(4)}${tab.at(-3)}`); //chef
```

### La longueur
La longueur d'un tableau est obtenue par la propriété "length".
```javascript
console.log(tab.length); //4
```

### L'ajout d'un élément
L'ajout d'un élément est possible soit en affectant une valeur à l'indice égale à la longueur actuelle du tableau ou en utilisant la méthode "push(elem, elem, ...)".

```javascript
let tab = [];
tab[tab.length] = 3; ou tab.push(3);
```
### Supprimer un élément

L'opérateur delete supprime la valeur contenue dans le tableau et la remplace par "undefined". La case du tableau existe donc toujours (Cette technique est peu recommandée, il vaut mieux utiliser "splice" ou "pop").

La méthode pop() retourne le dernier élément du tableau après avoir supprimé la dernière case du tableau.

Pour retirer un ou plusieurs éléments à partir de n'importe quelle position d'un tableau, il faut utiliser la méthode splice


!!! Tip "question"
    ```javascript
    let tab = [1,2,3,4];
    tab[tab.length] = 5;
    delete tab[1];
    console.log(tab.length);
    console.log(tab[1]);
    let a = tab.pop();
    console.log(tab.length);
    tab.splice(1,2);
    console.log(tab.length);
    console.log(tab.toString());
    ```
    Sans exécuter le code ci-dessous, qu'est-ce qui sera affiché en console ?

    ??? note "Réponse"
        5 undefined 4 2 "1,4" car tab[1] vaut undefined suite à l'appel à delete; la dernière valeur ajoutée (5) est supprimée par l'appel à "pop" et l'appel à "splice" retire 2 éléments à partir de l'indice 1 compris.

### l'opérateur "spread" (...)
L'opérateur `spread` (symbole composé de trois points) "..." permet de scinder un objet itérable, donc aussi les tableaux, en ses valeurs individuelles.

```javascript
let array1 = [2,3,4];
let array2 = [1, ...array1, 5, 6, 7];
console.log(array2.toString()); //=> "1, 2, 3, 4, 5, 6, 7"
	
let array3 = [2,3,4];
let array4 = [1];
array4.push(...array3);
console.log(array4.toString()); //=> "1, 2, 3, 4" 
function myFunction(a, b) {
    return a + b	
}
let data = [1, 4];
let result = myFunction(...data);
console.log(result); //=> "5"
```


### D'autres fonctions utiles sur les tableaux
Comme tout langage de programmation, JavaScript dispose de bien d'autres fonctions et méthodes de manipulation de tableaux, comme : join(), reverse(), sort(), concat(), slice(), splice(), unshift(), shift(),….

Consultez la documentation pour découvrir [les propriétés et méthodes des tableaux](https://262.ecma-international.org/6.0/#sec-properties-of-the-array-prototype-object).

## Le parcours de tableau

### forEach
Comme son nom l'indique, `forEach(function(valeur, index, tab){})` permet de parcourir un tableau et d'appliquer une fonction sur chaque élément.

Cette fonction peut prendre de 1 à trois paramètres; dans l'ordre: la valeur et l'indice de l'élément courant et la référence du tableau.

Veuillez noter qu'il est possible de modifier directement le tableau en utilisant la référence du tableau !

```javascript
let data = [1,2,3,4,5]; 
let sum = 0;
data.forEach(function(value) { sum += value; });
console.log(sum); // => 15
data.forEach(function(v, i, a) { a[i] = v + 1; });
console.log(data.toString()); // => "2,3,4,5,6"
```

### map
La méthode `map(function(valeur, index, tab){})` est presque identique à la méthode `forEach` à une différence fondamentale près: la méthode retourne un nouveau tableau avec le résultat retourné par chaque appel de la fonction fournie en argument.

```javascript
let data = [1,2,3,4,5]; 
let sum = 0;
data.map(function(value) { sum += value; });
console.log(sum); // => 15
data.map(function(v, i, a) { a[i] = v + 1; });
console.log(data.toString()); // => "2,3,4,5,6"
let dataCopy = data.map(v => v * 2);
console.log(data.toString()); // => "2,3,4,5,6"
console.log(dataCopy.toString()); // => "4,6,8,10,12"
```

### filter

La méthode `filter(function(valeur, index, tab){})` appliquée à un tableau retourne un nouveau tableau, après filtrage des éléments pour lesquels la fonction passée en argument renvoie true.

```javascript
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(x =>  x < 3); // [2, 1]
everyother = a.filter((x,i) => i%2==0); // [5, 3, 1]
```

### find
La méthode `find(function(valeur, index, tab){})` retourne la première valeur du tableau pour laquelle la fonction passée en argument renvoie true.

Si aucun élément n'est trouvé, la méthode retourne "undefined".

```javascript	
let a = [1,2,3,4,5];
let four = a.find(x => x > 3); // 4
let seven = a.find(x => x > 6); //undefined
```

### findIndex

La méthode `findIndex(function(valeur, index, tab){})` retourne le premier indice de l'élément du tableau pour lequel la fonction passée en argument renvoie true.

Si aucun élément n'est trouvé, la méthode retourne "-1".

```javascript
let a = [1,2,3,4,5];
let posFour = a.findIndex(x => x > 3); // 3
let posSeven = a.findIndex(x => x > 6); // -1
```

### every
La méthode `every(function(valeur, index, tab){})` retourne true si la fonction passée en argument retourne true pour tous les éléments du tableau.

```javascript
a = [1,2,3,4,5];
a.every(function(x) { return x < 10; }); // => true
a.every(function(x) { return x % 2 === 0; });  // => false
```

### some
La méthode `some(function(valeur, index, tab){})` retourne true si la fonction passée en argument retourne true pour au moins un élément du tableau.

```javascript
a = [1,2,3,4,5];
a.some(function(x) { return x%2===0; }); // => true
a.some(isNaN);// => false
```

### reduce
La méthode `reduce(function(accumulateur, valeur, index, tab){}, valeur_initiale)` applique une fonction qui accumule le résultat obtenu sur chaque élément pour réduire le tableau à une seule valeur.

La fonction prend au minimum en arguments la variable accumulateur qui contient la valeur cumulée et la variable représentant la valeur de l'élément courant.

La méthode `reduce` peut prendre en second paramètre la valeur initiale de l'accumulateur. Si celle-ci n'est pas spécifiée, l'accumulateur prend la valeur du premier élément et commence l'itération à partir du second élément.

```javascript
let a = [1,2,3,4,5];
let sum = a.reduce((x,y) => x+y, 5); //5 +1 +2 +3 +4 +5 = 20
let product = a.reduce((x,y) => x*y, 1); //1 *2 *3 *4 *5 = 120
let max = a.reduce((x,y) => (x>y) ? x : y); //1 >2? >3? >4? >5? =  5
let sub1 = a.reduce((x,y) => x-y); //1 -2 -3 -4 -5 = -13
let sub2 = a.reduce((x,y) => x-y, 0); //0 -1 -2 -3 -4 -5 = -15
let sum2 = a.reduce((acc, v, i, t) => acc+t[i], 10); //10 +1 +2 +3 +4 +5 = 25
```

### reduceRight
la méthode `reduceRight(function(accumulateur, valeur, index, tab){}, valeur_initiale)` est identique à `reduce` sauf qu'elle parcourt le tableau du dernier élément jusqu'au premier.

```javascript
let a = [1,2,3,4,5];
let sumbis = a.reduceRight((x,y) => x+y); //5 +4 +3 +2 +1 = 15
```

### Tri de tableaux

La méthode "sort(function(a,b){})" d'un tableau trie les éléments du tableau par ordre croissant.

```javascript
let valeurs= [5,9,68,23,2,1,68];
valeurs.sort();
console.log(valeurs.join(', ')); //1, 2, 23, 5, 68, 68, 9
```

Cette méthode peut recevoir une fonction en argument qui permet de comparer deux éléments a et b du tableau. La valeur retournée est positive si a < b, négative si a > b et nulle si a == b.

```javascript
let valeurs = [5, 9, 68, 23, 2, 1, 68];
valeurs.sort((a, b) => b - a);
console.log(valeurs.join(', ')); //68, 68, 23, 9, 5, 2, 1
```


!!! Tip "Question"
    ```javascript
    let eleves = [
        {nom: 'DUPONT', prenom: 'Jeanne', classe: 'A'},
        {nom: 'ALTAIR', prenom: 'Luc', classe: 'A'},
        {nom: 'DUPONT', prenom: 'Pierre', classe: 'B'},
        {nom: 'DUPONT', prenom: 'Arthur', classe: 'A'},
        {nom: 'PIONG', prenom: 'Chang', classe: 'B'},
        {nom: 'POPOULOS', prenom: 'Dimitrius', classe: 'B'},
        {nom: 'ATAC', prenom: 'Djamila', classe: 'A'} 
    ];
    ```Comment trier le tableau des élèves par classe, nom et prénom ? (Astuce: [String.localeCompare()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)) permet de comparer 2 chaînes. Réalisez l'affichage en console de chaque éléve (classe nom prenom), 1 élève par ligne.
    Sans exécuter le code ci-dessous, qu'est-ce qui sera affiché en console ?

    ??? note "Réponse"
        ```javascript
        eleves.sort((eleveA, eleveB) => eleveA.classe.localeCompare(eleveB.classe) || eleveA.nom.localeCompare(eleveB.nom) || eleveA.prenom.localeCompare(eleveB.prenom));
        console.log(eleves.map(e => `${e.classe} ${e.nom} ${e.prenom}`).join('\n'));
        ```
        
