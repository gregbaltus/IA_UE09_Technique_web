# Les promesses

Une promesse est un objet `Promise` qui permet une simplification de l'écriture de fonctions asynchrones. Un objet Promise est instancié en lui fournissant en argument la fonction asynchrone à exécuter qui prend elle-même en arguments la fonction callback à exécuter en cas de succès (`resolve`) et celle à exécuter en cas d'erreur (`reject`).

Essayez [ce code](https://codepen.io/Gregory-Baltus/pen/NPWjaap)

```javascript
document.getElementById("launch").addEventListener("click", () => {
    let output = document.getElementById("output");

    let resultat = new Promise(function(resolve, reject){
        setTimeout(() => {
            let a = Math.round(Math.random() * 10);
            a % 2 === 0 ? resolve(a) : reject(a);
        }, 3000);
    });

    output.textContent = "Promesse en attente...";

    resultat.then(function(value){
        output.textContent = `Promesse résolue : nombre pair ${value}`;
    }).catch(function(error){
        output.textContent = `Promesse rejetée : nombre impair ${error}`;
    });
});
```

??? note "opérateur ternaire '?'"
    Cette ligne :
    ```javascript
    a % 2 === 0 ? resolve(a) : reject(a);
    ```
    est totalement équivalente à ce code 
    ```javascript
    if (a % 2 === 0) {
        resolve(a);
    } else {
        reject(a);
    }
    ```
    Pour alléger l'écriture, on utilise l'opérateur ternaire '?' qui nous permet de résumer ce if/else en une seule ligne.

Ce code ajoute un gestionnaire d’événements au bouton avec l’ID "launch", de sorte que chaque fois qu’on clique dessus, une promesse est créée et exécutée. Cette promesse simule un tirage aléatoire d’un nombre entre 0 et 10 après un délai de 3 secondes (`setTimeout`). Si le nombre est pair, la promesse est résolue (`resolve`), sinon elle est rejetée (`reject`). Avant l’attente, le texte du paragraphe avec l’ID "output" est mis à jour pour indiquer que la promesse est en attente. Ensuite, lorsque la promesse se termine, si elle est résolue, le message affiche la valeur paire obtenue, et si elle est rejetée, il indique que la valeur est impaire.

Une promesse est donc un objet qui représente la réussite ou l’échec d’une opération asynchrone. Voici comment elle est construite :

## Création de la promesse

Une promesse est instanciée avec `new Promise(function(resolve, reject) {...})`. Elle prend en paramètre une fonction qui a deux arguments :

- resolve(value): à appeler lorsque l’opération réussit.

- reject(error): à appeler lorsque l’opération échoue.

Dans l'exemple il s'agit de cette partie :

```javascript 
let resultat = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let a = Math.round(Math.random() * 10);
        a % 2 === 0 ? resolve(a) : reject(a);
    }, 3000);
});
```

La fonction génère un nombre aléatoire entre 0 et 10 après un délai de 3 secondes.

- Si ce nombre est pair, `resolve(a)` est appelé : la promesse est réussie.

- Si ce nombre est impair, `reject(a)` est appelé : la promesse est rejetée.

## Utilisation de la promesse

Une fois créée, la promesse est utilisée avec .then() et .catch() :

```javascript
resultat.then(function(value){
    output.textContent = `Promesse résolue : nombre pair ${value}`;
}).catch(function(error){
    output.textContent = `Promesse rejetée : nombre impair ${error}`;
});
```

- `.then()` est exécuté si la promesse est résolue (succès).

- `.catch()` est exécuté si la promesse est rejetée (échec).

Cela permet de gérer le résultat sans bloquer l’exécution du programme, et d’attendre la fin du traitement asynchrone. C'est donc la méthode `then()` de l'objet Promise qui permet de définir la fonction "resolve" et donc, en d'autres termes, d'exploiter le résultat de la fonction asynchrone. Quand au `catch()` il peremettra d'attraper l'erreur si la promesse à échoué.

Il existe beaucoup d'autres méthodes des promesses qui peuvent permettre des comportement plus complexes. Plus d'informations [ici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).