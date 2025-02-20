# Les variables

## Types et différentes variables

En JavaScript, il existe deux types que peuvent prendre les variables, il s'agit du type primitif ou du type objet. Les types primitifs (comme `string`, `number`, `boolean`, `null`, `undefined`, `bigint` et `symbol`) sont immuables et stockés directement en mémoire. Ils sont copiés par valeur lorsqu'on les assigne à une autre variable. En revanche, les types objets (comme les objets, tableaux et fonctions) sont des structures plus complexes stockées par référence. Cela signifie que lorsqu'une variable contenant un objet est assignée à une autre, elles partagent la même référence en mémoire, et toute modification affecte l’original.

Ces types peuvent être déclarer dans différentes sortes de variables.  Une variable peut être déclarée avec `var`, `let` ou `const`. Les variables mutables sont celles dont la valeur peut être modifiée après leur déclaration, comme celles définies avec `let` et `var`. En revanche, une variable non mutable (ou immuable) est une variable dont la référence ne peut pas être changée, comme celles déclarées avec `const`. Toutefois, si `const` est utilisé pour un objet ou un tableau, son contenu reste modifiable, mais la référence elle-même ne peut pas être réassignée.

En JavaScript, `let` et `var` permettent de déclarer des variables, mais avec des différences importantes. `var` a une portée fonctionnelle et peut être redeclaré dans le même bloc, ce qui peut entraîner des comportements imprévus. En revanche, `let` a une portée de bloc ({}), ce qui le rend plus sûr en évitant les redéclarations involontaires. De plus, `var` est sujet au hoisting, ce qui signifie qu'il est déclaré en haut de la fonction mais initialisé à undefined, tandis que let est aussi hoisté mais non initialisé, générant une erreur si utilisé avant sa déclaration. Dans la pratique, il est vivement recommandé de toujours utiliser des `let`et de ne plus utiliser des `var`.



### Les nombres

En JavaScript, tous les nombres sont représentés par le type `Number`, qu'ils soient entiers (int) ou à virgule flottante (float). Contrairement à d'autres langages, JavaScript ne distingue pas explicitement ces deux types : un nombre comme 10 et 10.5 appartiennent tous les deux au type Number. JavaScript utilise un format IEEE 754 en double précision (64 bits), ce qui peut entraîner des imprécisions dans les calculs en virgule flottante, comme 0.1 + 0.2 !== 0.3.

Pour les grands nombres, le caractère "_" peut être utilisé comme séparateur des milliers pour faciliter la lecture:
```js
let  population = 10_953_235
console.log(population)
```

### Les chaines
Les caractères d'une chaine sont encodés en UTF-16. En JavaScript les chaines sont déclarée avec des guillements (double ou simple, il n'y a pas de différence).
L'opérateur de concaténation est le signe "+". De nombreuses méthodes existent pour manipuler des chaines comme: `length`, `charAt`, `indexOf`, `slice`, `substring`, `split`, `replace`, `toUpperCase`, …

```js
let maChaine = "Hello"
let maChaine2 = "World"
let maConcat = maChaine + " " + maChaine2  + " !"

console.log(maConcat)
```


#### `length`
Retourne la longueur d'une chaîne de caractères.  

```javascript
let text = "JavaScript";
console.log(text.length); // 10
```

#### charAt
Retourne le caractère à une position donnée.

```javascript
let text = "JavaScript";
console.log(text.charAt(4)); // 'S'
```
#### indexOf
Retourne l'index de la première occurrence d'un caractère ou d'une sous-chaîne, ou -1 si non trouvé.
```javascript
let text = "JavaScript";
console.log(text.indexOf("S")); // 4
console.log(text.indexOf("a")); // 1 (première occurrence)
```

#### slice
Extrait une portion de la chaîne entre deux indices (le second non inclus).
```javascript
let text = "JavaScript";
console.log(text.slice(0, 4)); // 'Java'
console.log(text.slice(-6));  // 'Script'
```

#### substring
Similaire à `slice`, mais ne supporte pas les indices négatifs.
```javascript
let text = "JavaScript";
console.log(text.substring(0, 4)); // 'Java'
```

#### split
Divise une chaîne en un tableau selon un séparateur.
```javascript
let text = "apple,banana,cherry";
console.log(text.split(",")); // ['apple', 'banana', 'cherry']
```
replace
Remplace une occurrence d'une sous-chaîne par une autre.
```javascript
let text = "Hello World";
console.log(text.replace("World", "JavaScript")); // 'Hello JavaScript'
```

#### toUpperCase
Convertit toute la chaîne en majuscules.
```javascript
let text = "JavaScript";
console.log(text.toUpperCase()); // 'JAVASCRIPT'
```


### Les booléens

Les valeurs booléennes sont: true et false.

`undefined`, `null`, `0`, `-0`, `NaN`, "", '' sont associé à false, tout le reste à true.

Les opérateurs booléens:

- ou: ||,

- et: &&,

- non: !

L'opérateur "||" retourne la valeur de la première expression équivalente à true !

>:warning: L'opérateur "||" retourne la valeur de la première expression équivalente à true !

```javascript
console.log(0 || 'A' || 'B'); //Affiche 'A' en console et non true
```

Ce comportement est fréquemment utilisé dans l'affectation conditionnelle de valeur à une variable:
```javascript
let data = []; 
let a = data[0] || -1; //si data est vide, la valeur -1 est retournée
console.log(a);
```
>:warning: L'opérateur "??" retourne la valeur de la première expression ni "null" ni "undefined" !

La différence entre `||` et `??` (appelé "nullish coalescing operator"), c'est que le second considère les valeurs 0 et chaine vide comme des valeurs à retourner; alors que l'opérateur `||` ne les retourne pas puisqu'elles sont équivalentes à false.

```javascript
let personne = {nom: "Leblanc", prenom:"Juste", nbr:0, ville: ""};
console.log(`nbr: '${personne.nbr || "nbr non défini"}', ville: '${personne.ville || "ville non définie"}'`);	
//nbr: 'nbr non défini', ville: 'ville non définie'
	
console.log(`nbr: '${personne.nbr ?? "nbr non défini"}', ville: '${personne.ville ?? "ville non définie"}'`);
//nbr: '0', ville: ''
	
console.log(`sexe: '${personne.sexe || "inconnu"}'`);
console.log(`sexe: '${personne.sexe ?? "inconnu"}'`);
//les deux lignes ci-dessus affichent la même chose: sexe: 'inconnu'
```

### Les booléens
`undefined` correspond à une variable non initialisée, une fonction non définie ou un bug du script.

`null` doit correspondre à une absence de valeur ou à un comportement attendu du script.

Puisque les valeurs de null et undefined sont considérées comme false :

```javascript
(null == undefined) == true
```

mais 

```javascript
(null === undefined) == false
```

En JavaScript, `==` (égalité faible) compare deux valeurs en effectuant une conversion de type si nécessaire, tandis que `===` (égalité stricte) compare à la fois la valeur et le type sans conversion. Par exemple, `5 == "5"` retourne true car JavaScript convertit la chaîne `"5"` en nombre avant la comparaison, alors que `5 === "5"` retourne false car les types sont différents (number vs string). Il est recommandé d'utiliser `===` pour éviter des résultats inattendus dus aux conversions implicites.


### Conversion de variables

Par défaut, l'interpréteur JavaScript réalise les conversions de types implicites si nécessaire.




!!! Tip "Castings implicites"
    Considérez le code suivant, sans utiliser d'interpréteur, qu'est ce que la console va afficher ?
    ```javascript
    console.log("1"+2);
    console.log(1+"08");
    console.log("08" - 1);
    console.log("gains " + 10);
    console.log("perte " + (- 10));
    console.log("perte" - 10);
    ```
	??? note "Réponses"
        "12", "108" : car le signe "+" est une concaténation de chaine par défaut avant d'être l'opérateur arithmétique d'addition.
        7 : car le signe "-" correspont sans ambiguité à la soustraction.
        "gains 10","perte -10" : car "+" concaténation de chaines.
        NaN: car il est impossible de convertir "perte" en un nombre pour l'opération de soustraction.

Le casting explicite en JavaScript peut être effectué par la création d'objets ou grâce à certaines fonctions.

```javascript
Number("3");
String(false);
Boolean([]);
Object(3);
```

Quelques fonctions de conversion

- `parseInt(valeur, base)`: conversion d'une chaine en entier dans une base donnée,

- `parseFloat(valeur)`: conversion d'une chaine en flottant,

- `valeur.toString()`: conversion d'une valeur en chaine,

- `valeur_numerique.toString(base)`: conversion d'une valeur décimale en une chaine dans la base donnée.


!!! Tip "Conversion explicite"
    Comment corriger le code ci-dessous pour afficher le code RGB dans le format '#' suivi des composantes R, G et B en hexadécimal en console ?
    ```javascript
    rouge = "255";
    vert = 128;
    bleu = 24;
    console.log("code rgb: #" + rouge + vert + bleu);
    ```
	??? note "Réponses"
        ```javascript
        rouge = parseInt("255");
        vert = 128;
        bleu = 24;
        console.log("code rgb: #" + rouge.toString(16) + vert.toString(16) + bleu.toString(16));
        ```
### Connaitre le type d'une variable

La fonction `typeOf` retourne le nom du type d'une variable.

```javascript	
result = typeof("chaine");
```

