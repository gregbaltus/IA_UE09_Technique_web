# Introduction

## Synchrone et asynchrone
En programmation, un code synchrone s'exécute de manière séquentielle, ligne par ligne. Chaque instruction doit être terminée avant que la suivante ne commence. Cela signifie que si une opération prend du temps (comme lire un fichier ou attendre une réponse d'un serveur), tout le programme est bloqué en attendant le résultat.

À l'inverse, un code asynchrone permet d'exécuter plusieurs tâches en parallèle, sans bloquer l'exécution du reste du programme. Pour pouvoir effectuer ces tâches en parallèle, il faut normalement utiliser plusieurs **threads** différents, un pour chaque actions en parallèle.

Un thread (ou fil d'exécution) est l'unité de base permettant à un programme d'exécuter des instructions. Dans un programme multithread, plusieurs threads peuvent s’exécuter en parallèle, chacun effectuant une tâche spécifique. Par exemple, un thread peut gérer l'affichage d'une interface utilisateur pendant qu'un autre récupère des données depuis un serveur, évitant ainsi que l’application ne se fige en attendant une réponse.

## Javascript modèle monothread

En théorie, pour exécuter du code asynchrone, il faudrait plusieurs threads capables de fonctionner simultanément. Cependant, JavaScript fonctionne sur un modèle monothread, c'est-à-dire qu’il n’exécute qu’un seul thread principal. Pour gérer l’asynchronisme sans bloquer l'exécution, il repose sur un mécanisme appelé event loop et une file d’attente de tâches. Lorsqu’une opération longue (comme un appel réseau) est lancée, elle est déléguée à des APIs externes du navigateur ou du moteur JavaScript, qui la traitent séparément. Une fois terminée, le résultat est ajouté à la file d’attente et exécuté dès que le thread principal est disponible. C’est ce qui permet d’avoir une exécution non bloquante, même sans véritable multithreading.

Pour des cas plus complexes nécessitant réellement plusieurs threads en JavaScript (comme des calculs intensifs), il est possible d’utiliser des Web Workers, qui permettent d’exécuter du code en arrière-plan, indépendamment du thread principal. Mais, nous n'irons pas jusque là dans ce cours.

En JavaScript, certaines opérations prennent du temps avant de donner un résultat, comme :

- Récupérer des données d’une API

- Lire un fichier

- Attendre une réponse d’un serveur

Si on exécute ces tâches de manière synchronisée, JavaScript va bloquer l’exécution du reste du programme en attendant la fin de l’opération.
Solution : JavaScript permet d’exécuter ces tâches de façon asynchrone, sans bloquer le reste du code.

## setTimeout

Javascript possède plusieurs fonctions asynchrone, la plus connue d'entre-elles est la fonction `setTimeout(fct, ms)`. Celle-ci va exécuter une fonction après un certains délai exprimé en millisecondes.

Essayez [ce code](https://codepen.io/Gregory-Baltus/pen/ZYEeNPV). 

```javascript
function afficherMessage() {
    document.getElementById("message").textContent = "Attendez 3 secondes...";
    setTimeout(() => {
        document.getElementById("message").textContent = "Temps écoulé !";
    }, 3000);
}
```
Ce code définit une fonction `afficherMessage()`, quand elle est appellée, elle fait apparaître un premier texte et puis lancer un `setTimeout`. Ce dernier appelle une autre fonction qui va changer le texte du message, mais cette fonction ne va s'excécuter que 3 secondes (3000 millisecondes) après l'appui sur le bouton.

Essayez ensuite [cette version](https://codepen.io/Gregory-Baltus/pen/VYwpoZQ).

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

## Gestion des erreurs

Pour gérer les erreurs, il est courant d'utiliser des fonctions nommées callbacks. Un callback est une fonction passée en argument à une autre fonction pour être exécutée plus tard, souvent en réponse à un événement ou après une opération asynchrone. Les callbacks sont couramment utilisés dans les fonctions comme setTimeout. Ils permettent d'exécuter du code une fois qu'une tâche est terminée, mais peuvent rendre le code difficile à lire lorsqu'ils sont imbriqués (c'est ce qu'on appelle le callback hell). Aujourd’hui, les promesses et async/await sont préférés pour simplifier la gestion du code asynchrone. C'est pourquoi, nous n'allons pas rentrer dans les détails de ces callbacks ici. 
