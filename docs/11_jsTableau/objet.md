# Les objets

En JavaScript, un objet est une structure permettant de regrouper des données sous forme de paires clé-valeur (un peu semblable au dictionnaire en Pyhton). Il sert à modéliser des entités du monde réel en regroupant leurs propriétés et comportements. Contrairement aux tableaux, qui utilisent des indices numériques, les objets utilisent des clés (souvent des chaînes de caractères) pour accéder aux valeurs. Ils sont très utilisés en programmation pour organiser les informations et structurer les données de manière claire et réutilisable.

```javascript
let obj = {
    propriete1: false,
    propriete2: 42,
    propriete3: {x: 3, y: 4},
    propriete4: function(x){ return ++x; }
}
```

La valeur d'une propriété peut être de n'importe quel type. Elle peut être elle-même un objet (propriete3) ou encore une fonction anonyme (propriete4); ce qui permet de déclarer des méthodes à un objet.

## Appel des propriétés/méthodes

Il y existe deux façons de faire. La première est dite "explicite" : 

```javascript	
console.log(obj.propriete2); //42
console.log(obj.propriete4(5)); //6
```

L'autre est dite "dynamique".

```javascript
console.log(obj["propriete2"]); //42
console.log(obj["propriete4"](5)); //6
```
L'objet peut être vu comme un "tableau associatif" dont les clés sont les noms des propriétés.

## Propriétés non-définies
Les objets JS sont dynamiques et peuvent avoir des propriétés qui sont ajoutées ou retirées en cours d'exécution. L'accès à une propriété non définie d'un objet retourne `undefined`. Mais l'accès à une propriété d'une propriété non définie d'un objet provoque une erreur et l'interruption du code exécuté. L'opérateur `?`. retourne la valeur de la propriété d'un objet si elle est définie, "undefined" sinon. Évidemment, il ne faut pas utiliser systématiquement cet opérateur lorsque ce n'est pas nécessaire afin de ne pas alourdir le code.

```javascript
let eleveA = { matricule: "e123456", bulletin: {math: 15, francais: 16}};
let eleveB = { matricule: "e125789" };
	
console.log(`(${eleveA.matricule}) cote: ${eleveA.bulletin.math}`);
//(e123456) cote: 15
	
//console.log(`(${eleveB.matricule}) cote: ${eleveB.bulletin.math}`); 
//console.log(`(${eleveB.matricule}) cote: ${eleveB?.bulletin.math}`);
//Les lignes de code ci-dessus provoquent une erreur et une interruption du code si décommentées...
	
console.log(`(${eleveB.matricule}) cote: '${eleveB.bulletin?.math}'`);
//(e125789) cote: undefined
	
console.log(`(${eleveB.matricule}) cote: '${eleveB.bulletin?.math ?? "manquante"}'`);
//(e125789) cote: 'manquante'
```


## Suppression d'une propriété
La fonction "delete" supprime une propriété d'un objet.

```javascript
let student = {
    lastName: "John",
    firstName: "Doe",
    birthDate: "05/06/1978"	
}
delete(student.birthDate);
console.log(student.birthDate); // undefined
```

## Vérification si un objet possède une propriété
En JavaScript, les objets peuvent voir leurs propriétés ajoutées ou supprimées dynamiquement. Il est donc parfois utile de vérifier si une propriété existe avec `hasOwnProperty`.

```javascript
if (student.hasOwnProperty('birthDate')) {
    console.log(student.birthDate);
};
```

## Parcours des propriétés d'un objet

```javascript
for(prop in obj){
   console.log(prop + " : " + obj[prop]);
}
```

Il est cependant préférable d'utiliser "Object.keys" qui ne prend en compte que les propriétés de l'objet sans tenir compte des propriétés héritées par la chaine de prototypes (En JS, un objet est construit à partir d'un autre et possède ses propriétés en plus des siennes.); ce qui en général est préférable pour une bonne découpe (responsabilité) du code.

```javascript	
Object.keys(obj).forEach(function (prop) { 
    console.log(prop + " : " + obj[prop]);
});
```

## Sérialisation
La sérialisation consiste à obtenir une représentation textuelle d'un objet; la désérialisation étant l'opération inverse.

La syntaxe de déclaration d'objets JavaScript a été dérivée pour définir la sérialisation d'objets au format JSON (JavaScript Object Notation).

Les fonctions sont :

- `JSON.stringify(obj)`: sérialisation d'un objet obj,
    
- `JSON.parse(txt)`: désérialisation d'une chaîne textuelle txt

```javascript
let elem = {
    num:1,
    obj: { tab: [false,null,""] },
    fct: function(i) { return ++i },
    und: undefined,
    nan: NaN,
    dat: new Date('2019-02-20T10:02:00')
}; 

console.log(elem.dat); //Wed Feb 20 2019 10:02:00 GMT+0100 (heure normale d’Europe centrale)
console.log(elem.dat.toDateString()); //Wed Feb 20 2019
let elemStr = JSON.stringify(elem);
console.log(elemStr); //{"num":1,"obj":{"tab":[false,null,""]},"nan":null,"dat":"2019-02-20T09:02:00.000Z"}

let elemCopy = JSON.parse(elemStr);
console.log(elemCopy.dat); //2019-02-20T09:02:00.000Z
console.log(elemCopy.dat.toDateString()); //TypeError: elemCopy.dat.toDateString is not a function
```


Comme vous pouvez le constater ci-dessus, les méthodes et certaines propriétés, en fonction de leur valeur, ne sont pas conservée lors de la sérialisation:

- Sérialisés: objets, tableaux, chaines de caractères, nombres, booléens et null,
    
- Remplacés: NaN, Infinity, -Infinity => null; Date => format ISO,

- Supprimés : fonctions, RegExp, Error, undefined

Pour restaurer toutes les propriétés et méthodes d'un objet sérialisé, il est parfois nécessaire de créer une fonction spécifique :

```javascript
	
let elemClone = JSONreviver(elemCopy);
console.log(elemClone.dat);
console.log(elemClone.dat.toDateString());

function JSONreviver(obj){
    let e = obj;
    e.fct = function(i) { return ++i };
    if(!obj.hasOwnProperty("und")){
            e.und = undefined;
    }
    if(!obj.hasOwnProperty("nan")){
            e.nan= NaN;
    }
    e.dat = new Date(obj.dat);
    return e;
    }
```

Pour vérifier vos chaînes JSON, utilisez un [validateur online](https://jsonlint.com/)

## Affectation par décomposition
L'affectation des différentes valeurs d'un tableau ou des propriétés d'un objet à des nouvelles variables se réalise grâce à la syntaxe suivante :

```javascript
let {prenom, nom} = { nom: "Gendry", prenom: "Lucie",  age: 22};
console.log(prenom); //"Lucie";
	
let dossards = ["#5687", "#4857", "#3879", "#2198", "#7832"];
let [premier, second, ...peloton] = dossards;
console.log("Gagnants: " + premier + " et " + second); // Gagnants: #5687 et #4857
console.log("et " + peloton.length + " finishers");    // et 3 finishers
```