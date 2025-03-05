# Les collections

## Les itérateurs et les itérables

### Objets itérables

Sans rentrer dans les détails, un objet est `itérable` s'il définit un comportement lors d'une itération ("parcours des valeurs").

En JavaScript, les objets suivants sont, par défaut, itérables:

- les tableaux (`Array`),
    
- les chaines de caractères (`String`),

- les ensembles (`Set`),

- les dictionnaires (`Map`)

### Objets itérateurs

Un objet `itérateur` est un objet qui implémente la méthode `next()` qui permet de parcourir les éléments d'un objet `itérable`; cet objet peut être lui-même. Un `itérateur` peut être `itérable`.

La méthode `next()` doit retourner un objet {`done: booléen`, `value: objet/primitif`}:

- `done`: `True` si plus aucun élément restant à parcourir dans l'itérable,

- `value`: n'importe quelle valeur retournée par l'itérateur, facultative si `done === True`

Les fonctions génératrices sont des exemples d'objets itérateurs:

```javascript
function* voyelles(){
    yield* ['a','e','i','o','u','y'];
}
	
let voyelle = voyelles();
console.log(voyelle.next()); //{value: 'a', done: false}
console.log(voyelle.next()); //{value: 'e', done: false}
console.log(voyelle.next()); //{value: 'i', done: false}	
console.log(voyelle.next()); //{value: 'o', done: false}
console.log(voyelle.next()); //{value: 'u', done: false}	
console.log(voyelle.next()); //{value: 'y', done: false}	
console.log(voyelle.next()); //{value: undefined, done: true}
```

### Convertir un itérable en tableau

La méthode Array.from(itérable) crée un nouveau tableau contenant les valeurs de l'itérable.

```javascript
console.log(Array.from('aeiouy')); //Array ["a","e","i","o","u","y"]
```

## Les dictionnaire

Les dictionnaires (objets `Map`) conservent des couples "clé"-"valeur". Chaque "clé" est unique pour un même dictionnaire et peut être de n'importe quel type. Cette structure ressemble aux objets, mais à quelques caractéristiques différentes, comme la possibilité d'utiliser n'importe quel type de clé. Contrairement aux objets, une Map conserve l'ordre d'insertion et accepte des clés de tout type (nombre, booléen, objet, etc.), ce qui la rend plus flexible.

### Propriétés et méthodes principales d'un dictionnaire

- `size`: nombre de couples clé/valeur présents dans le dictionnaire,

- `clear()`: suppression de tous les couples clé/valeur,

- `get(clé)`: retourne la valeur associée à la clé, undefined si clé non trouvée,
    
- `has(clé)`: true si clé présente, false sinon,
    
- `set(clé, valeur)`: insère un couple clé/valeur,
    
- `delete(clé)`: supprime un couple clé/valeur,
    
- `keys()`: retourne un objet itérateur et itérable qui contient les clés,
    
- `values()`: retourne un objet itérateur et itérable qui contient les valeurs
    
- `entries()`: retourne un objet itérateur et itérable qui contient des tableaux [clé, valeur]

```javascript
let map = new Map();
map.set("pomme", "Un fruit rouge ou vert, sucré et croquant.");
map.set("chat", "Un animal domestique à quatre pattes qui miaule.");
map.set(42, "Un nombre mystérieux.");
map.set(true, "Une valeur booléenne.");

console.log(map.get("chat")); // "Un animal domestique à quatre pattes qui miaule."
console.log(map.has(42)); // true
map.delete(true);

map.forEach((valeur, cle) => {
    console.log(`${cle} : ${valeur}`);
});

```




!!! Tip "Questions"
    ```javascript
    let eleves = new Map();
    eleves.set('s203468', {nom: 'DUPONT', prenom: 'Jeanne'});
    eleves.set('s206987', {nom: 'ALTAIR', prenom: 'Luc'});
    eleves.set('s204385', {nom: 'PIONG', prenom: 'Chang'});
    console.log(`Matricules: ${Array.from(eleves.keys()).join(', ')}`);

    if (eleves.has('s206987')){
        console.log(`Elève ${eleves.get('s206987').nom} trouvé, puis supprimé`);
        eleves.delete('s206987');
    }
    eleves.set('s203468', {nom: 'POPOULOS', prenom: 'Dimitrius'});
    eleves.forEach(e => console.log(`${e.prenom[0]}. ${e.nom}\n`));

    eleves.clear();
    if(eleves.size === 0){
        console.log('Tous les élèves sont supprimés');
    }
    ```
    Sans exécuter le code ci-dessus, qu'est-ce qui sera affiché en console ?

    ??? Note "Réponse"
        ```javascript
        Matricules: s203468, s206987, s204385
        Elève ALTAIR trouvé, puis supprimé
        D. POPOULOS
        C. PIONG
        Tous les élèves sont supprimés
        ```
## Les ensembles

Les ensembles (objets `Set`) conservent des valeurs. Chaque valeur est unique pour un même ensemble et peut être de n'importe quel type. Un `Set` est utile pour stocker des éléments uniques et vérifier rapidement l'existence d'une valeur. Contrairement aux tableaux, il ne permet pas d'accéder directement à un élément par son index.

### Propriétés et méthodes principales d'un ensemble


- ``size`: nombre de valeurs présentes dans l'ensemble,
    
- `clear()`: suppression de toutes les valeurs,
    
- `has(valeur)`: true si valeur présente, false sinon,
    
- `add(valeur)`: ajoute une valeur,

- `delete(valeur)`: supprime une valeur,
    
- `values()`: retourne un objet itérateur et itérable qui contient les valeurs,

- `keys()`: alias de values(),
    
- `entries()`: retourne un objet itérateur et itérable qui contient des tableaux [valeur, valeur]

```javascript
let fruits = new Set();

fruits.add("pomme");
fruits.add("banane");
fruits.add("orange");
fruits.add("pomme"); // Ignoré car déjà présent

console.log(fruits.has("banane")); // true
console.log(fruits.has("cerise")); // false

fruits.delete("orange");

fruits.forEach(fruit => {
    console.log(fruit);
});

console.log(fruits.size); 
```

!!! Tip "Question"
    ```javascript
    let eleves = new Set();
    eleves.add({matricule: 's203468', nom: 'DUPONT', prenom: 'Jeanne'});
    eleves.add({matricule: 's206987', nom: 'ALTAIR', prenom: 'Luc'});
    eleves.add({matricule: 's204385', nom: 'PIONG', prenom: 'Chang'});
    console.log(`Matricules: ${Array.from(eleves.values()).map(e => e.matricule).join(', ')}`);
	
    if (eleves.has({matricule: 's206987', nom: 'ALTAIR', prenom: 'Luc'})){
        console.log(`Elève ALTAIR trouvé, puis supprimé`);
        eleves.delete({matricule: 's206987', nom: 'ALTAIR', prenom: 'Luc'});
    }
    eleves.add({matricule: 's203468', nom: 'POPOULOS', prenom: 'Dimitrius'});
    eleves.add({matricule: 's203468', nom: 'POPOULOS', prenom: 'Dimitrius'});
    eleves.forEach(e => console.log(`(${e.matricule}) ${e.prenom[0]}. ${e.nom}\n`));
	
    eleves.clear();
    if(eleves.size === 0){
        console.log('Tous les élèves sont supprimés');
    }
    ```
    Sans exécuter le code ci-dessus, qu'est-ce qui sera affiché en console ?

    ??? Note "Réponse"
        ```javascript
        Matricules: s203468, s206987, s204385
        (s203468) J. DUPONT
        (s206987) L. ALTAIR
        (s204385) C. PIONG
        (s203468) D. POPOULOS
        (s203468) D. POPOULOS
        Tous les élèves sont supprimés
        ```
        Attention, tout comme d'en d'autres langages, il ne faut pas confondre référence d'un objet et les données qu'il contient lui-même. Testez et comparez à présent avec le code ci-dessous:
        ```javascript
        let eleves = new Set();
        let altair = {matricule: 's206987', nom: 'ALTAIR', prenom: 'Luc'};
        eleves.add({matricule: 's203468', nom: 'DUPONT', prenom: 'Jeanne'});
        eleves.add(altair);
        eleves.add({matricule: 's204385', nom: 'PIONG', prenom: 'Chang'});
        console.log(`Matricules: ${Array.from(eleves.values()).map(e => e.matricule).join(', ')}`);
        
        if (eleves.has(altair)){
            console.log(`Elève ALTAIR trouvé, puis supprimé`);
            eleves.delete(altair);
        }
        let popoulos = {matricule: 's203468', nom: 'POPOULOS', prenom: 'Dimitrius'};
        eleves.add(popoulos);
        eleves.add(popoulos);
        eleves.forEach(e => console.log(`(${e.matricule}) ${e.prenom[0]}. ${e.nom}\n`));
        
        eleves.clear();
        if(eleves.size === 0){
            console.log('Tous les élèves sont supprimés');
        }
        ```


