# Les variables

## Types et différentes variables

En JavaScript, il existe deux types que peuvent prendre les variables, il s'agit du type primitif ou du type objet. Les types primitifs (comme `string`, `number`, `boolean`, `null`, `undefined`, `bigint` et `symbol`) sont immuables et stockés directement en mémoire. Ils sont copiés par valeur lorsqu'on les assigne à une autre variable. En revanche, les types objets (comme les objets, tableaux et fonctions) sont des structures plus complexes stockées par référence. Cela signifie que lorsqu'une variable contenant un objet est assignée à une autre, elles partagent la même référence en mémoire, et toute modification affecte l’original.

Ces types peuvent être déclarer dans différentes sortes de variables.  Une variable peut être déclarée avec `var`, `let` ou `const`. Les variables mutables sont celles dont la valeur peut être modifiée après leur déclaration, comme celles définies avec `let` et `var`. En revanche, une variable non mutable (ou immuable) est une variable dont la référence ne peut pas être changée, comme celles déclarées avec `const`. Toutefois, si `const` est utilisé pour un objet ou un tableau, son contenu reste modifiable, mais la référence elle-même ne peut pas être réassignée.

En JavaScript, `let` et `var` permettent de déclarer des variables, mais avec des différences importantes. `var` a une portée fonctionnelle et peut être redeclaré dans le même bloc, ce qui peut entraîner des comportements imprévus. En revanche, `let` a une portée de bloc ({}), ce qui le rend plus sûr en évitant les redéclarations involontaires. De plus, `var` est sujet au hoisting, ce qui signifie qu'il est déclaré en haut de la fonction mais initialisé à undefined, tandis que let est aussi hoisté mais non initialisé, générant une erreur si utilisé avant sa déclaration. Dans la pratique, il est vivement recommandé de toujours utiliser des `let`et de ne plus utiliser des `var`.

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



