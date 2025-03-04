# Les Évènements
Un événement en JavaScript est une interaction qui se produit sur une page web, comme un clic sur un bouton, le survol d'un élément ou la pression d'une touche. Les événements permettent de rendre une page interactive en exécutant du code lorsqu'une action spécifique est détectée. Par exemple, un clic sur un bouton peut déclencher une fonction qui applique un style CSS ou affiche un message.

## L'interface Event
Lorsque l'utilisateur interagit avec la page web (clic, scroll,...), un événement est généré au sein du DOM. D'autres événements peuvent également être générés par des API (chargement complet de la page, lecture suspendue de vidéo, ...).

Un événement ne doit pas être confondu avec une exception.

Pour réagir à un événement, il faut définir un gestionnaire d'événement (`event handler`).

Certaines balises HTML comme `<a>`, `<button>` possèdent un gestionnaire d'événement par défaut.

Ces gestionnaires sont définis soit :

- Par un attribut (voir GlobalEventHandlers): 
```html
Où est <span onclick="alert('trouvé!');">Charly</span> ?
```

- Par script (méthode `addEventListener`): 
```html
Où est <span id="charly">Charly</span> ?
…
<script>
    document.getElementById("charly").addEventListener("click",function(event){  alert("trouvé!"); });
</script>
```

Le gestionnaire d'événement reçoit un objet [Event](https://developer.mozilla.org/fr/docs/Web/API/Event), qui peut être spécialisé en fonction du type d'événement généré.

!!! Tip "Gestionnaires d'événements"
    Visualisez la propagation d'événements en survolant avec la souris les éléments de la liste dans l'exemple ci-dessous:
    [https://js.do/marvi/js-dom-events](https://js.do/marvi/js-dom-events)
    Testez ensuite les différentes possibilités pour interrompre la propagation d'événements en sélectionnant une des possibilités dans la liste déroulante puis en cliquant sur le lien "Clique sur span".

Veuillez lire attentivement cette excellente [introduction aux événements](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/Events#Event_bubbling_and_capture)

## Suppression de gestionnaire d'événement
La suppression d'un gestionnaire d'événement n'est possible qu'en passant la référence de la fonction activée lors de la capture de l'événement.

!!! Tip "Suppression d'un gestionnaire d'événement"
    Considérez le code ci-dessous:
    ```htmt
    <button id="button1">Clic clic clic!!</button>
    <script>
    (() => {
        document.getElementById("button1").addEventListener("click", () => { 
            console.log('ce gestionnaire ne peut être retiré');
        });
        function consoleLog(){
            console.log('ce gestionnaire peut être retiré');
            document.getElementById("button1").removeEventListener("click", consoleLog);
        }
        document.getElementById("button1").addEventListener("click", consoleLog);
    })();
    </script>
    ```
    Qu'est ce qui sera affiché en console après un premier clic sur le bouton, puis après un seconde clic, et pourquoi ?

    ??? note "Réponse"
        Au premier clic, les deux gestionnaires sont appelés; donc les deux phrases apparaissent. Cependant, l'appel à la fonction consoleLog() retire le deuxième gestionnaire d'événement. En conséquence, le second clic sur le bouton ne fait apparaître que la première phrase.

## Impact d'une fonction fléchée dans le gestionnaire d'événement
Si la fonction appelée par le gestionnaire est définie par le motclef `function`, l'élément à l'origine de l'événement est accessible par `this`.

!!! Tip "Comparaison function vs ()=>"
    Créez le fichier events.html avec le code ci-dessous, ouvrez la page et cliquez sur un des fruits. Comparez l'effet des deux gestionnaires d'événement:
    ```html
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Exemple d'évènements</title>
        <script type="module">
            let fruits = ['Abricot','Banane','Fraise','Kiwi','Pomme','Poire'];
            document.querySelector('ul').innerHTML = fruits
                .map((fruit,i) => `<li id="fruit${i+1}">${fruit}</li>`)
                .join("");
            document.querySelectorAll('li').forEach(item => {
                item.addEventListener('click', function(event) {
                    document.getElementById("fruit-fct").innerHTML = this.innerHTML;
                    document.getElementById("id-fruit-fct").innerHTML =`identifiant du fruit (fct): ${event.target.id}`;
                });
                item.addEventListener('click', (event) => {
                    document.getElementById("fruit-flc").innerHTML = event.target.innerHTML;
                    document.getElementById("id-fruit-flc").innerHTML = `identifiant du fruit (flc): ${this?.id}`;
                });
            });
        </script>
    </head>
    <body>
        <h1>Exemples de captures d'évènements</h1>
        <p>Cliquez sur le fruit: </p>
        <ul>
        </ul>
        <p>Fruit sélectionné (fct): <span id="fruit-fct"></span>(<span id="id-fruit-fct"></span>)</p>
        <p>Fruit sélectionné (=> ): <span id="fruit-flc"></span>(<span id="id-fruit-flc"></span>)</p>
        <button type="button" id="confirmBtn">Commander</button>
        <h2>Fruits commandés</h2>
        <p id="fruits"></p>
    </body>
    </html>
    ```

## Eviter l'accumulation de gestionnaires d'événements

Lorsqu'une application rafraichit des éléments de l'écran, il y a un risque de lier une nouvelle occurrence d'un gestionnaire d'événement sur un élément qui en posséde déjà; ce qui provoque une multitude d'appels qui peut devenir exponentielle.

!!! Tip "Comparaison function vs ()=>"
    Dans le fichier events.html créé précédemment, imaginons que nous devons lier un gestionnaire d'événement sur le bouton "confirmBtn" chaque fois qu'un <li> est affiché. Nous devons donc placer le code suivant quelque part dans le bloc `document.querySelectorAll('li').forEach(item => { })` :
    ```javascript
        document.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function(event) {
            document.getElementById("fruit-fct").innerHTML = this.innerHTML;
            document.getElementById("id-fruit-fct").innerHTML =`identifiant du fruit (fct): ${event.target.id}`;
        });
        item.addEventListener('click', (event) => {
            document.getElementById("fruit-flc").innerHTML = event.target.innerHTML;
            document.getElementById("id-fruit-flc").innerHTML = `identifiant du fruit (flc): ${this?.id}`;
        });
        document.getElementById('confirmBtn').addEventListener('click', () => {
            document.getElementById("fruits").innerHTML += document.getElementById("fruit-fct").innerHTML ;
        });
    });
    ```
    Après avoir sélectionné un fruit, confirmez la commande et constatez l'accumulation d'appels.
    Que devriez vous faire, toujours en restant quelque part dans ce bloc, pour éviter cette accumulation ?

    ??? note "Réponse"
        Utiliser l'option {once: true} qui détruit le gestionnaire après son premier appel et lier le gestionnaire d'événement chaque fois qu'un fruit est cliqué:
        ```javascript
        item.addEventListener('click', (event) => {
            document.getElementById("fruit-flc").innerHTML = event.target.innerHTML;
            document.getElementById("id-fruit-flc").innerHTML = `identifiant du fruit (flc): ${this?.id}`;
            document.getElementById('confirmBtn').addEventListener('click', () => {
                document.getElementById("fruits").innerHTML += document.getElementById("fruit-fct").innerHTML + "<br<";
            }, {once: true});
        });
        ```