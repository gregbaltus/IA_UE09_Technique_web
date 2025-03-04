# Introduction

## Synchrone et asynchrone
En programmation, un code synchrone s'exécute de manière séquentielle, ligne par ligne. Chaque instruction doit être terminée avant que la suivante ne commence. Cela signifie que si une opération prend du temps (comme lire un fichier ou attendre une réponse d'un serveur), tout le programme est bloqué en attendant le résultat.

À l'inverse, un code asynchrone permet d'exécuter plusieurs tâches en parallèle, sans bloquer l'exécution du reste du programme. Pour pouvoir effectuer ces tâches en parallèle, il faut normalement utiliser plusieurs **threads** différents, un pour chaque actions en parallèle.

Un thread (ou fil d'exécution) est l'unité de base permettant à un programme d'exécuter des instructions. Dans un programme multithread, plusieurs threads peuvent s’exécuter en parallèle, chacun effectuant une tâche spécifique. Par exemple, un thread peut gérer l'affichage d'une interface utilisateur pendant qu'un autre récupère des données depuis un serveur, évitant ainsi que l’application ne se fige en attendant une réponse.

## Javascript modèle monothread

En théorie, pour exécuter du code asynchrone, il faudrait plusieurs threads capables de fonctionner simultanément. Cependant, JavaScript fonctionne sur un modèle monothread, c'est-à-dire qu’il n’exécute qu’un seul thread principal. Pour gérer l’asynchronisme sans bloquer l'exécution, il repose sur un mécanisme appelé event loop et une file d’attente de tâches. Lorsqu’une opération longue (comme un appel réseau) est lancée, elle est déléguée à des APIs externes du navigateur ou du moteur JavaScript, qui la traitent séparément. Une fois terminée, le résultat est ajouté à la file d’attente et exécuté dès que le thread principal est disponible. C’est ce qui permet d’avoir une exécution non bloquante, même sans véritable multithreading.

Pour des cas plus complexes nécessitant réellement plusieurs threads en JavaScript (comme des calculs intensifs), il est possible d’utiliser des Web Workers, qui permettent d’exécuter du code en arrière-plan, indépendamment du thread principal. Mais, nous n'irons pas jusque là dans ce cours.


<!-- ## Historique de l'asynchrone en JS
La fonction `setTimeout` en JavaScript permet d’exécuter une tâche après un certain délai, sans bloquer l’exécution du reste du programme. Il s'agit ici d'une méthode asynchrone (notez que même cette asynchrone utilise la technique de loop et file d'attente). Cela est utile pour programmer des actions différées, comme afficher un message après quelques secondes ou attendre avant d’effectuer une requête.

Cependant, lorsque plusieurs actions asynchrones doivent être enchaînées, l’utilisation répétée de setTimeout avec des fonctions imbriquées crée un code difficile à lire et à maintenir. C’est ce qu’on appelle l’enfer des callbacks : le code devient enchevêtré, complexe et difficile à déboguer, car chaque fonction dépend du bon fonctionnement de la précédente.

Pour résoudre ce problème, JavaScript introduit les `promesses`, qui permettent de gérer plus proprement l’exécution asynchrone. Une promesse représente une opération qui peut être en attente, réussie ou échouée. Au lieu de s’imbriquer, les actions s’enchaînent de manière plus fluide, rendant le code plus lisible et structuré. 

!!! Tip "Ce qu'il faut retenir"
    Une promesse en JavaScript représente une opération asynchrone qui peut aboutir à un résultat (`resolve`) ou échouer (`reject`), permettant de gérer l'exécution différée de manière structurée.

 Plus tard, la syntaxe `async`/`await` a été ajoutée pour simplifier encore davantage l’écriture et la gestion du code asynchrone. Bien qu'il est toujours possible de faire du code JS asynchrone des `promesses`, nous allons nous concentrer sur utilisation des `async`/`await`, sans rentrer trop dans les détails des `promesses`. -->

## setTimeout

Javascript possède plusieurs fonctions asynchrone, la plus connue d'entre-elles est la fonction `setTimeout(fct, ms)`. Celle-ci va exécuter une fonction après un certains délai exprimé en millisecondes.

Essayer [ce code](https://codepen.io/Gregory-Baltus/pen/ZYEeNPV). 

```javascript
function afficherMessage() {
    document.getElementById("message").textContent = "Attendez 3 secondes...";
    setTimeout(() => {
        document.getElementById("message").textContent = "Temps écoulé !";
    }, 3000);
}
```
Ce code définit une fonction `afficherMessage()`, quand elle est appellée, elle fait apparaître un premier texte et puis lancer un `setTimeout`. Ce dernier appelle une autre fonction qui va changer le texte du message, mais cette fonction ne va s'excécuter que 3 secondes (3000 millisecondes) après l'appui sur le bouton.

Essayer ensuite [cette version](https://codepen.io/Gregory-Baltus/pen/VYwpoZQ).

```javascript
function afficherMessage(){
  afficherMessage1();
  afficherMessage2();
}

function afficherMessage1() {
            document.getElementById("message").textContent = "Attendez 3 secondes...";
            setTimeout(() => {
                document.getElementById("message").textContent = "Temps écoulé !";
            }, 3000);
        }

function afficherMessage2(){
  document.getElementById("message2").textContent="Hellow World !"
}
```

Dans cette exemple, malgré que la fonction `afficherMessage` appelle en premier lieux la fonction `afficherMessage1`, le code n'attends pas qu'elle soit terminée (que "Temps écoulé !" soit affiché) pour lancer la seconde fonction `afficherMessage2`.