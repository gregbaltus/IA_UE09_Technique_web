#Propriétés sur enfant Flex<br>grow : 

**Définition** : flex-grow contrôle la capacité d’un élément flex à grandir pour occuper l'espace supplémentaire dans un conteneur flex.

**Fonctionnement** : Plus la valeur de flex-grow est élevée, plus l'élément occupe proportionnellement l'espace disponible par rapport aux autres éléments du même conteneur.

**Valeur par défaut** : flex-grow: 0, ce qui signifie qu'un élément ne s'agrandit pas automatiquement.

REM : Tester des valeurs de flex-grow dans une fenêtre redimensionnable aide à s'assurer que le comportement est bien celui attendu en responsive design.


##Exemple 1 : flex-grow avec des valeurs différentes

**Scénario** :

- Imaginons un conteneur flex avec trois éléments de largeur initiale de 100px chacun.
- Le conteneur a une largeur plus grande que la somme des éléments, donc de l’espace est disponible.
 
```css

 .container {
    display: flex;
    width: 500px; /* Plus grand que 3 x 100px */
}

.item1 {
    flex-grow: 1; /* Grandit normalement */
}

.item2 {
    flex-grow: 2; /* Grandit deux fois plus que item1 */
}

.item3 {
    flex-grow: 0; /* Ne grandit pas */
}
```

**Explication** :

- item1 et item2 vont s'agrandir pour occuper l’espace disponible, mais item2 grandit deux fois plus que item1.

- item3 garde sa taille initiale de 100px et n’occupe pas l’espace supplémentaire.
- **Résultat visuel** : item1 s'agrandit un peu, item2 prend une part importante de l'espace, et item3 garde sa taille fixe.

## Exemple 2 : Utilisation en pratique - Interface d'une page web

**Scénario** :

- On veut une barre de navigation (navbar), une section de contenu (content), et une barre de widgets (widgets).
- La content doit prendre le plus de place possible, tandis que navbar et widgets ont une taille fixe.

```css

.container {
    display: flex;
    width: 100%;
}

.navbar {
    width: 150px;
    flex-grow: 0; /* Ne grandit pas */
}

.content {
    flex-grow: 1; /* Prend tout l’espace restant */
}

.widgets {
    width: 100px;
    flex-grow: 0; /* Ne grandit pas */
}

```

**Explication** :

- La navbar et la widgets conservent une taille fixe.
- La section content occupe tout l’espace restant, s’adaptant dynamiquement en fonction de la largeur de l’écran.
- **Résultat visuel** : Un layout fluide où le contenu principal s’ajuste à l’espace, tandis que la navigation et les widgets restent constants.
