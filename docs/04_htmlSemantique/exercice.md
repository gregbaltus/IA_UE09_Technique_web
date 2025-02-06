#Exercices

##Exercice 1 
Analysez ce visuel.  Quelles sont les balises sémantiques de structuration que vous allez utiliser ?
![Interface 1](docs/img/04_htmlSemantique/semantique-01.png) 

??? quote "Méthodes"
    - Créez un dossier dans lequel vous créez un fichier nommé `semantique-01.html` et un dossier nommé `img`
    - Téléchargez les images dans le dossier img ([Mico logo](../img/04_htmlSemantique/mico-logo.jpg) | [Mico doctors](../img/04_htmlSemantique/mico-doctors.jpg) )
    - Créez la  [structure de base](../02_htmlBase/structure.md#base) dans le fichier .html
    - Observez le visuel et trouvez les balises adéquates.  !!! Pensez SEMANTIQUE !!!
    >:warning: Si vous regardez votre page dans le navgateur, celle-ci ne sera pas "jolie".  En effet, les positionnements, les couleurs seront réalisées avec des CSS (en gros, plus tard)

??? quote "Solution"
    ![Interface 1 Soluce](docs/img/04_htmlSemantique/semantique-01-solution.png) 
    ```
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mico</title>
        </head>
        <body>
            <header>
                <img src="img/mico-logo.jpg" alt="Logo Mico" >
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Treatment</a></li>
                        <li><a href="#">Doctors</a></li>
                        <li><a href="#">Testimonial</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <img src="img/mico-doctors.jpg" alt="Doctors">
                    <h1>About Hospital</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus viverra congue. Nunc iaculis quam sit amet euismod maximus. Etiam sit amet ante fermentum, ultricies metus et, efficitur dui. Fusce elementum et felis vel sodales. Donec nec augue nec lacus ultricies volutpat. Ut quis scelerisque ipsum. Proin placerat sagittis mauris, et pulvinar ante placerat ut. Sed ornare vestibulum mi, nec luctus nisl maximus ut. Mauris luctus tincidunt erat eget aliquam.</p>
                </section>
            </main>
            <footer>
                © 2024 All Rights Reserved
            </footer>
         </body>
    </html>
    ```

##Exercice 2
Avec la même méthodologie que pour l'exercice 1, créez le fichier html pour cette interface :
![Interface 2](docs/img/04_htmlSemantique/marty-enonce-small.jpg) 
([Voir l'interface en grand](../img/04_htmlSemantique/marty-enonce-large.jpg))
Télécharger les images ([Mico logo](../img/04_htmlSemantique/marty.zip))
??? quote "Solution"
    ![Interface 2 Soluce](docs/img/04_htmlSemantique/marty-soluce-small.jpg) 
    [Interface 2 Soluce Large format](../img/04_htmlSemantique/marty-soluce.pdf) 
    ```
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mico</title>
        </head>
        <body>
            <header>
                <img src="img/marty-logo.jpg" alt="Logo Marty" >
                <nav>
                    <ul>
                        <li><a href="#">Le concept</a></li>
                        <li><a href="#">Les pièces du moment</a></li>
                        <li><a href="#">Les showrooms</a></li>
                        <li><a href="#">Portefolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h1>Projets à la une</h1>
                    <article>
                        <img src="img/marty-tshirt.jpg" alt="Tshirt">    
                        <h3>Projet 3 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-dress.jpg" alt="Dress">    
                        <h3>Projet 2 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-tshirt-white.jpg" alt="White Tshirt">    
                        <h3>Projet 1 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                 </section>
                 <section>
                    <h2>Tous nos projets</h2>
                    <article>
                        <img src="img/marty-tshirt-small.jpg" alt="Tshirt">    
                        <h3>Projet 3 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-dress-small.jpg" alt="Dress">    
                        <h3>Projet 2 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-tshirt-white-small.jpg" alt="White Tshirt">    
                        <h3>Projet 1 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-tshirt-small.jpg" alt="Tshirt">    
                        <h3>Projet 3 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-dress-small.jpg" alt="Dress">    
                        <h3>Projet 2 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-tshirt-small.jpg" alt="Tshirt">    
                        <h3>Projet 3 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-dress-small.jpg" alt="Dress">    
                        <h3>Projet 2 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-tshirt-white-small.jpg" alt="White Tshirt">    
                        <h3>Projet 1 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-tshirt-small.jpg" alt="Tshirt">    
                        <h3>Projet 3 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>
                    <article>
                        <img src="img/marty-dress-small.jpg" alt="Dress">    
                        <h3>Projet 2 </h3>
                        <a href="#">Lire plus &gt;&gt;</a>
                    </article>  
                 </section>
            </main>
            <footer>
                © 2024 All Rights Reserved
            </footer>
         </body>
    </html>
    ```
##Exercice 3
Avec la même méthodologie que pour l'exercice 1, créez le fichier html pour cette interface :
![Interface 3](docs/img/04_htmlSemantique/medXtore-small.jpg) 
([Voir l'interface en grand](../img/04_htmlSemantique/medxtore-enonce-large.pdf))
Télécharger les images ([Mico logo](../img/04_htmlSemantique/medxtore.zip))
>:warning: Lorsqu'une image est purement décorative, comme c'est le cas pour le stétoscope, la bonne pratique est de la positionner à l'aide du CSS.  Etant donné que nous n'avons pas encore vu les CSS, dans cet exercice, l'image sera placée dans le code html.

##Exercice 4
Copiez-collez le code HTML dans le [Validateur Html W3C](https://validator.w3.org/)

Tant qu'il reste des erreurs:

- Lisez les explications liées à la première erreur,
- Corrigez l'erreur,
- Copiez-collez la nouvelle version du code et validez-la à nouveau...

**Ne corrigez qu'une erreur à la fois ! Le but de l'exercice est de vous confronter aux différents messages d'erreur du validateur !**

```html
    
<DOCTYPE html4>
    <html>
    <head>
        <meta charset="utf8">
        <titre>Corrigez moi</titre>
    </head>
    <body>
        <header>
            <h1>Exercice de validation W3C<h1>
        </header>
        <main>
            <h2>Liste des fruits
            <article>
                <header>Pomme</header>
                <main>
                    <ul>
                        <span>Jonagold</span>
                        <li>Golden
                        <li>Pink lady
                        
                    </ul>
                </main>
                <footer>(source: Belgique)</p></footer>
            </article>
            <article>
                <header><h2>Poire</header>
                <section>
                    <ul>
                        <a href="https://fr.wikipedia.org/wiki/Conf%C3%A9rence_(poire)"><li>Conférence</a>
                    </ul>
                </section>
                <aside><img src="http://www.devosgroup.be/images/producten/conf.jpg"></aside>
            </article>
            <aside><p> Mangez au moins 5 fruits et légumes par jour</aside></p>
        </main>
    </body>
</html>    
```