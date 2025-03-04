# Async/await

En JavaScript, certaines opérations prennent du temps avant de donner un résultat, comme :

- Récupérer des données d’une API

- Lire un fichier

- Attendre une réponse d’un serveur

Si on exécute ces tâches de manière synchronisée, JavaScript va bloquer l’exécution du reste du programme en attendant la fin de l’opération.
Solution : JavaScript permet d’exécuter ces tâches de façon asynchrone, sans bloquer le reste du code.

## async/await : Une syntaxe simple et lisible

Avant `async`/`await`, on utilisait les `promises` (`.then()`, `.catch()`), mais elles rendaient le code parfois difficile à lire.
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
Cliquer [ici](https://codepen.io/Gregory-Baltus/pen/ogNZOwy) pour essayer le code.

Dans cette exemple, `fetch()` est une fonction asynchrone qui retourne une promesse. `await` attend que la réponse soit reçue avant de continuer le reste de la fonction `getData()`. Mais le reste du code hors de la fonction `getData()` continue de s'exécuter normalement. C'est pour cela que la ligne `console.log("Autre code qui continue sans attendre !");` s'exécute avant que les données soient receptionnées.

L'utilsiation de ces `async`/`await` permet d'écrire facilement des codes asynchrones de façon simple et lisible (plus que avec des promesses). Ils permettent aussi d'éviter l'enchaînement compliqué que peut avoir les promesses. Le dernier atout de cette façon de programmer de l'asynchrone est qu'il est facile à déboguer avec des `try...catch`

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