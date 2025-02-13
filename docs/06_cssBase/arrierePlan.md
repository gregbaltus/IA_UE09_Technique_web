Cette partie est consacrée aux propriétés d'arrière-plan.
Les styles vus ne sont pas exhaustifs.  Plus vous les utilisez, mieux vous les connaitrez.

##background-color

??? quote "background-color: La couleur de l'arrière-plan"
    
    Permet de déterminer la couleur de fond d'un élément

    ```css title="Exemple css"   
    body { 
	    background-color: #CCC;
    }
    ```
    Valeurs possibles :

    - Un nom prédéfini de couleur : red, blue,…
    - Une combinaison RGB : #ff0000 ou rgb(255,0,0)
    - Une combinaison RGBa : rgba(255,0,0,0.5)
     
##background-image 

??? quote "background-image : Appliquer une image en arrière-plan"
    
    Permet d'appliquer une image en tant que fond d'un élément

    ```css title="Exemple css"   
    body { 
	    background-image: url("paysage.png");
     }
    ```

    Valeurs possibles :

    - l'URL d'une image (absolue ou relative)
    - None (défaut)
        
##background-repeat 

??? quote "background-repeat : Répétition de l'image"
    
    Permet d'appliquer une image en tant que fond d'un élément

    ```css title="Exemple css"   
    body { 
	    background-image: url("paysage.png");
        background-repeat: repeat-y;
     }
    ```

    Valeurs possibles :

    - repeat: l'image sera répétée horizontalement et verticalement
    - repeat-x: l'image sera répétée horizontalement
    - repeat-y: l'image sera répétée verticalement
    - no-repeat: l'image ne sera pas répétée
            


 