# Manipuler le DOM

## La sélection

La sélection d'un élément selon son identifiant (attribut id):

```javascript
document.getElementById("id")
```

La sélection des éléments en fonction de leur nom (attribut name):
```javascript
document.getElementsByTagName("nom") //retourne un itérable HTMLCollection
```

La sélection des éléments en fonction de leur classe CSS:
```javascript
document.getElementsByClassName("nom") //retourne un itérable HTMLCollection
```

La lecture d'un attribut d'un nœud:
```javascript
unNoeud.getAttribute("nom")
```

La modification d'un attribut d'un nœud:
```javascript
unNoeud.setAttribute("nom", valeur)
```

La sélection du premier élément respectant un sélecteur CSS (#id, .classe, >, ~, +, ...): 
```javascript
document.querySelector("sélecteur CSS")
```

La sélection de tous les éléments respectant un sélecteur CSS: 
```javascript
document.querySelectorAll("sélecteur CSS") //retourne un itérable NodeList
```

!!! Tip "Rappel CSS : Entrainements ludiques sur sélecteurs et propriétés CSS"
    [https://flukeout.github.io/](https://flukeout.github.io/)

**HTMLCollection**

Collection [HTMLCollection](https://developer.mozilla.org/fr/docs/Web/API/HTMLCollection) qui doit être convertie en un tableau ("Array.from()") pour pouvoir être parcourue avec "forEach".

**NodeList**

Collection [NodeList](https://developer.mozilla.org/fr/docs/Web/API/NodeList) qui peut être parcourue avec "forEach".

## Création

Création d'un nœud de texte:
```javascript
document.createTextNode("texte")
```

Création d'un élément HTML:
```javascript
document.createElement("tag", contenu)
```

## Insertion

Ajout d'un nœud à la fin des nœuds enfants d'un nœud parent spécifié: 
```javascript
unNoeudParent.appendChild(autreNoeud)
```

Ajout d'un nœud avant un autre nœud en tant qu'enfant d'un nœud parent: 
```javascript
unNoeud.insertBefore(autreNoeud, noeudParent)
```

Insertion d'un extrait de code HTML:
```javascript
unNoeud.insertAdjacentHTML(position, "code HTML")
```

L'argument "position" indique où insérer le contenu HTML:

- `beforebegin`: avant le nœud,
    
- `afterbegin`: avant le premier enfant du nœud,
    
- `beforeend`: après le dernier enfant du nœud,
    
- `afterend`: après le nœud.

## Suppression

Remplacement d'un nœud enfant d'un nœud parent par un autre: 
```javascript
unNoeudParent.replaceChild(noeudEnfant, nouveauNoeud) 
```

Suppression d'un nœud enfant d'un nœud parent: 
```javascript
unNoeudParent.removeChild(noeudEnfant)
```

Suppression d'un nœud: 
```javascript
unNoeud.remove()
```

## Contenu HTML 
Accès et modification possible du contenu HTML d'un nœud: 

```javascript
unNoeud.innerHTML = `<p>Bonjour <mark>${nom}</mark>, bienvenue dans ce tutoriel</p>`
```

!!! Tip "Modification du DOM"
    Observez la création et la suppression de noeuds dans la liste des tâches ci-dessous:
    [https://js.do/marvi/js-dom-append-create](https://js.do/marvi/js-dom-append-create)

    Que pourriez-vous ajouter pour pouvoir vider complètement la liste des tâches ?

    ??? note "Réponse"
        Ajout d'un nouveau bouton et d'un gestionnaire d'événements comme suit:
        ```html
        <form action="#">
            <input type="hidden" name="nbrTask" value="1"/>
            <ul id="list">
                <li><input type="text" name="task1" value="Go to car-wash"/></li>
            </ul>
            <button type="button" id="add">Add</button>
            <button type="button" id="rem">Remove</button>
            <button type="button" id="clear">Clear</button>
        </form>
            
        <script>(function setScript(){
            let nbrTasks = parseInt(document.getElementsByName("nbrTask")[0].value, 10);
            document.getElementById("add").addEventListener("click",addItem);
            document.getElementById("rem").addEventListener("click",removeItem);
            document.getElementById("clear").addEventListener("click",function(){
                document.getElementById("list").innerHTML = '';
            });
            
            function removeItem(){
            let ul = document.getElementById("list");
            ul.removeChild(ul.childNodes[ul.childNodes.length-1]);
            };
            
            function addItem(){
            let ul = document.getElementById("list");
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "new task...";
            input.name = "task" + (++nbrTasks);
            let newLi = document.createElement("li");
            newLi.appendChild(input);
            ul.appendChild(newLi);
            };
        }());</script>
        ```
## Manipuler la CSS

Modification de l'attribut style :

```javascript
unElement.style.display = "none"; //masquer l'élément
```

Manipuler les classes CSS associées à un élément, utilisez la propriété classList ([classList sur MDN Web Doc](https://developer.mozilla.org/fr/docs/Web/API/Element/classList))

```javascript
unElement.classList.add("nomClasse");
```
La réalisation d'animations est possible en combinant les méthodes setTimeout() ou setInterval() à la modification de la CSS:

!!! Tip "Animation en JS"
    Observez l'utilisation de la fonction setTimout() et de la propriété "style" pour réaliser une animation CSS:
    [https://js.do/marvi/js-dom-css-anim](https://js.do/marvi/js-dom-css-anim)

