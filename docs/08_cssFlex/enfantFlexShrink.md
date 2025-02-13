#Propriétés sur enfant Flex<br>shrink : 

- **Définition** : flex-shrink contrôle la capacité d'un élément flex (élément dans un conteneur flex) à rétrécir si l'espace disponible devient trop petit.

- **Fonctionnement** : Plus la valeur de flex-shrink est élevée, plus l'élément est susceptible de se réduire pour s'adapter à l’espace disponible. Si flex-shrink vaut 0, l'élément ne rétrécit pas.

- **Valeur par défaut** : flex-shrink: 1 (l’élément peut rétrécir proportionnellement si nécessaire).

##Exemple 1 : flex-shrink avec des valeurs différentes
**Scénario :**

- On a un conteneur flex avec trois éléments.

- Tous les éléments ont la même largeur initiale de 200px.

- La largeur du conteneur est inférieure à 600px, donc les éléments doivent rétrécir pour s’adapter.

Rem : Testez en réduisant la fenêtre pour vérifier les comportements des éléments en fonction des valeurs flex-shrink.

```css
.container {
    display: flex;
    width: 500px; /* Plus petit que 3 x 200px */
}

.item1 {
    flex-shrink: 1; /* Peut rétrécir normalement */
}

.item2 {
    flex-shrink: 2; /* Rétrécit deux fois plus que item1 */
}

.item3 {
    flex-shrink: 0; /* Ne rétrécit pas */
}

```

**Explication** :

- item1 et item2 vont se réduire, mais item2 rétrécira deux fois plus vite que item1.

- item3 ne rétrécira pas du tout.

- **Résultat visuel** : L'élément 3 conserve sa taille initiale, tandis que les deux autres rétrécissent de manière inégale.

##Exemple 2 : Utilisation en pratique - Interface de tableau de bord

**Scénario :**

- On veut afficher une barre latérale (sidebar), une section principale (main) et une section de notifications (notifications).

- La sidebar et la section de notifications doivent rester lisibles, mais la main peut se réduire un peu si l’espace devient restreint.

```css
.container {
    display: flex;
    width: 100%;
}

.sidebar {
    width: 150px;
    flex-shrink: 0; /* Ne rétrécit pas */
}

.main {
    flex-shrink: 1; /* Peut rétrécir pour donner de l’espace */
}

.notifications {
    width: 100px;
    flex-shrink: 0; /* Ne rétrécit pas */
}
```

**Explication** :

- La sidebar et la section notifications ne rétréciront pas (toujours lisibles).
- La section main se réduit si la largeur de l’écran devient insuffisante, ce qui permet de garder le contenu visible sans déformer la structure.

