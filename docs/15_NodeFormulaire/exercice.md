# Exercices

## 4.1 Exercice – Ajouter un article avec validation

Dans cet exercice, vous allez **compléter le projet MiniBlog** que vous avez commencé lors de la séance précédente.  
Le but est de rendre **fonctionnel le formulaire** situé dans la page `ajout.html`.


### Objectif

Lorsque l’utilisateur remplit le formulaire et clique sur **"Publier"** :
- Le formulaire est **envoyé au serveur** en POST
- Le serveur vérifie que **tous les champs sont remplis**
- Si tout est correct :
  - l’utilisateur est redirigé vers la même page (`ajout.html?etat=ok`)
  - un **message vert de confirmation** s’affiche
- Si un champ est manquant :
  - l’utilisateur est redirigé vers `ajout.html?etat=erreur`
  - un **message rouge d’erreur** s’affiche


### Instructions

1. **Reprenez le projet MiniBlog** créé à la séance précédente (Express + HTML statiques).
2. Dans le fichier `ajout.html` :
   - Modifiez le formulaire pour qu’il envoie les données en POST vers `/ajouter`
   - Ajoutez une zone vide (`<p id="message">`) pour afficher un message dynamique
3. Créez ou modifiez le fichier `script.js` pour qu’il :
   - lise le paramètre `etat` dans l’URL
   - affiche un message si `etat=ok` (succès) ou `etat=erreur` (champ manquant)
4. Dans le fichier `server.js` :
   - Ajoutez le middleware `express.urlencoded(...)` pour lire les données POST
   - Ajoutez une route POST `/ajouter` qui vérifie si `titre` et `contenu` sont bien remplis
   - Redirigez avec `?etat=ok` ou `?etat=erreur` selon les cas


### Résultat attendu

- L’utilisateur peut envoyer un article via le formulaire
- Un message lui indique si son article a été bien envoyé ou non
- Les données ne sont pas encore sauvegardées : cela viendra dans un prochain exercice
