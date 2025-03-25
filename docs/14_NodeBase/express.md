# Express

## 3.1 Express pour faciliter

Dans la partie précédente, nous avons créé un serveur Node.js **sans outil externe**, en utilisant uniquement les fonctionnalités de base fournies par Node.js.

C’est une très bonne façon de comprendre ce qui se passe **"sous le capot"**, mais tu as peut-être remarqué que cela demande pas mal d'efforts, même pour un petit projet :  
- Il faut gérer manuellement les chemins vers les fichiers ;
- Déterminer le type de contenu à envoyer (HTML, CSS, JSON…) ;
- Lire les fichiers à la main avec `fs.readFile` ;
- Et écrire beaucoup de code, même pour des actions simples.

Heureusement, la communauté JavaScript a développé des **outils qui simplifient tout ça**, et l’un des plus populaires s’appelle **Express**.


### Qu’est-ce qu’Express ?

**Express** est ce qu’on appelle un **framework** : c’est un ensemble d’outils et de fonctionnalités qui viennent se greffer à Node.js pour faciliter la création de serveurs web.

Concrètement, Express nous permet :

- de créer un serveur plus rapidement ;

- de définir des routes (pages, API…) de manière plus lisible ;

- d’envoyer facilement des fichiers, des données JSON ou du HTML ;

- et de ne pas réécrire toujours le même code pour des tâches courantes.


### Pourquoi utiliser Express dans ce cours ?

Dans un contexte professionnel, les développeurs utilisent très souvent Express pour gagner du temps et éviter les erreurs.  
Et dans notre cas, **avec le nombre limité de séances dont nous disposons**, Express va nous permettre :

- d’aller plus vite ;

- de nous concentrer sur **l’essentiel** : comprendre comment fonctionne un serveur ;

- et de construire **des projets concrets** sans trop de complexité technique.

Tu peux voir Express comme une **boîte à outils** qui rend la construction d’un serveur **plus simple, plus propre, et plus rapide**.


