# Async/await

## async/await : Une syntaxe simple et lisible

Malgré leur efficactité, les `promises` (`.then()`, `.catch()`) peuvent rendre le code difficile à lire.
Avec `async`/`await`, on peut écrire du code asynchrone qui ressemble à du code synchrone.

1. async permet de définir une fonction asynchrone.

2. await met une pause dans la fonction jusqu'à ce que la promesse soit résolue.

### Exemple 

```javascript
async function getData() {
    console.log("Chargement des données...");
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    
    console.log("Données reçues :", data);
}

getData(); 
console.log("Autre code qui continue sans attendre !");
```
Cliquez [ici](https://codepen.io/Gregory-Baltus/pen/ogNZOwy) pour essayer le code.

Dans cette exemple, `fetch()` est une fonction asynchrone qui retourne une promesse. `await` attend que la réponse soit reçue avant de continuer le reste de la fonction `getData()`. Mais le reste du code hors de la fonction `getData()` continue de s'exécuter normalement. C'est pour cela que la ligne `console.log("Autre code qui continue sans attendre !");` s'exécute avant que les données soient receptionnées.

L'utilsiation de ces `async`/`await` permet d'écrire facilement des codes asynchrones de façon simple et lisible. Ils permettent aussi d'éviter l'enchaînement compliqué que peut avoir les promesses. Le dernier atout de cette façon de programmer de l'asynchrone est qu'il est facile à déboguer avec des `try...catch`

## Gestion des erreurs avec try/catch

Si l'API ne répond pas, elle peut potentiellement faire crasher tout le code JS. Il est donc important de bien gérer les erreurs quand on utilise des outils extérieurs. Pour celà, on peut les gérer assez simplement avec `try`/`catch`(voir chapitre [Gestion des exceptions](../10_jsFonction/exceptions/)).

### Exemple

```javascript
async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url"); // URL invalide
        if (!response.ok) {
            throw new Error("Erreur lors du chargement des données !");
        }
        let data = await response.json();
        console.log("Données reçues :", data);
    } catch (error) {
        console.error("Problème détecté :", error.message);
    }
}

getData();
console.log("Autre code qui continue sans attendre !");
```

Dans ce cas, si un problème intervient lors du `fetch`, une exception est lancée avec `throw` et est ensuite attrapée dans le `catch`. Ceci permet de gérer prorpement les erreurs. 

### Exemple du lancé de dé

À la section précédente nous avions vu ce code :

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
        output.textContent = Promesse résolue : nombre pair ${value};
    }).catch(function(error){
        output.textContent = Promesse rejetée : nombre impair ${error};
    });
});
```

Voyons comment nous pouvons le transformer pour utiliser `async`/`await` :

```javascript
document.getElementById("launch").addEventListener("click", async () => {
    let output = document.getElementById("output");

    // Fonction qui simule une promesse avec un délai
    function lancerDe() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let a = Math.round(Math.random() * 10);
                a % 2 === 0 ? resolve(a) : reject(a);
            }, 3000);
        });
    }

    output.textContent = "Promesse en attente...";

    try {
        // Attente de la résolution de la promesse
        let resultat = await lancerDe();
        output.textContent = `Promesse résolue : nombre pair ${resultat}`;
    } catch (error) {
        // Gestion de l'erreur si la promesse est rejetée
        output.textContent = `Promesse rejetée : nombre impair ${error}`;
    }
});
```

Vous pouvez essayer ce code [ici](https://codepen.io/Gregory-Baltus/pen/azbWVZb). Plutôt que définir directement un objet qui est une promesse, on crée une fonction qui retourne une promesse, ceci nous permettra d'utiliser le mot-clé `await`. Il faut également bien préciser que notre fonction anonyme est une fonction `async`. Il nous suffit ensuite d'appeler notre fonction `lancerDe()` dans un `try`, si une erreur survient, elle sera attrapée dans le `catch`, c'est similaire à une façon de faire synchrone.


