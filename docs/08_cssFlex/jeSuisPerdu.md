#Help ! Je suis perdu

Flexbox n'est pas compliqué !  

Dès que vous souhaitez positionner des éléments côte à côte, posez-vous ces différentes questions :

- **Qui est le parent direct des éléments qui doivent être positionnés côte à côte ?** 

    - Analysez le code HTML et identifiez le parent direct. Celui-ci deviendra le conteneur flex.
    - Pour le rendre flex, appliquez la propriété `display: flex;` au parent.

- **Les éléments positionnés côte à côte doivent-ils autoriser le retour à la ligne ?**

    - En général, oui, cela permet aux éléments de s'organiser sur plusieurs lignes si l'espace est insuffisant. Cela rend le layout plus flexible et adapté aux différentes tailles d'écran (utile pour le responsive design).
    - Pour autoriser ce retour à la ligne, utilisez flex-wrap: wrap; sur le conteneur. 

- **Les enfants du conteneur doivent-il posséder une largeur définie ?**
    - Si vous souhaitez qu'un élément occupe un espace fixe ou proportionnel, vous pouvez lui attribuer une largeur.
    - Utilisez la propriété `flex-basis`.  Attention, il s'agit d'une propriété à attribuer aux enfants et non au conteneur flex.

- **Comment les enfants du conteneur occupent-ils l'espace ?**
    - La propriété justify-content permet de contrôler l'espacement des éléments enfants le long de l'axe principal (par défaut l'axe horizontal dans un conteneur flex). Elle définit comment l'espace est distribué entre les éléments et autour d'eux.  