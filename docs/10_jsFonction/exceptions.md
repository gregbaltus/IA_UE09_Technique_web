# Les exceptions

## Lancer et attraper des exceptions
En JavaScript, une exception est une erreur qui se produit pendant l'exécution d'un programme, empêchant son exécution normale. Lorsqu'une erreur se produit, JavaScript interrompt immédiatement l'exécution du script et affiche un message d'erreur dans la console. Pour éviter que l'exécution d'un programme ne s'arrête brutalement en cas d'erreur, on peut lancer et attraper des exceptions.

Lancer une exception signifie interrompre volontairement l'exécution normale du programme en générant une erreur à l'aide de l'instruction `throw`. Cette exception peut être un objet Error ou tout autre type de valeur (une chaîne de caractères, un nombre, un objet personnalisé, etc.). Par exemple :

```javascript
throw new Error("Une erreur est survenue !");
```

Une fois une exception lancée, elle peut être attrapée grâce au bloc `try...catch`. Le bloc `try` contient le code qui peut potentiellement générer une exception, et le bloc `catch` capture cette exception pour éviter que le programme ne plante.

```javascript
try {
    let age = -5;
    if (age < 0) {
        throw new Error("L'âge ne peut pas être négatif !");
    }
    console.log("L'âge est valide.");
} catch (error) {
    console.log("Erreur détectée : " + error.message);
}
```

Dans cet exemple, si l'âge est négatif, une exception est levée avec `throw`. Le bloc `catch` capture cette erreur et affiche un message dans la console, empêchant le programme de crasher.

## Le block finally
On peut également utiliser le bloc finally, qui s’exécute toujours, que l'exception ait été levée ou non. Il est utile pour effectuer du nettoyage (fermer des fichiers, libérer des ressources, etc.) :

```javascript
try {
    console.log("Début du programme.");
    throw new Error("Problème détecté !");
} catch (error) {
    console.log("Erreur capturée :", error.message);
} finally {
    console.log("Ce message s'affichera toujours.");
}
```

L'utilisation des exceptions permet donc d'améliorer la robustesse du code en gérant proprement les erreurs et en évitant des plantages brutaux.

## Créer ces propres exceptions
Notez qu'il est également possible de créer ces propres exceptions. Néanmoins, nous ne verrons pas ceci pour le moment. En effet, il nous faut introduire la notion de classe avant de pouvoir générer ces propres exceptions.

