# ![Lecture à domicile](../assets/img/lectureDomicile.png) Evolution
## HTML

Le langage HTML a évolué régulièrement depuis sa première standardisation en 1992. Après Mosaïc, la société Netscape crée un navigateur et autorise des nouvelles balises pour répondre aux besoins des développeurs web. Une partie de celles-ci seront intégrées dans la seconde version du langage HTML. En 1994, Tim Berners-Lee fonde le World Wide Web Consortium (ou W3C), avec le soutien de la défense américaine DARPA, rassemblant de nombreuses organisations et sociétés informatiques, pour standardiser et diffuser les technologies à la base du Web. Les différentes versions du langage HTML vont résulter des innovations populaires des navigateurs et des besoins exprimés par les membres du consortium. De même, les navigateurs évoluent à leur tour en fonction des standards publiés et de l'évolution des technologies réseaux.

D'une version à une autre du langage HTML, de nouvelles balises sont ajoutées et d'autres sont considérées obsolètes.

En 2009, Tim Berners-Lee fondera la WWW Foundation pour étendre le Web aux pays en voie de développement et garantir un Web ouvert.


## XHTML

Suite à la disparité des versions non standards d'HTML proposées par les différents navigateurs avant les années 2000, les développeurs web étaient en demande d'une norme plus restrictive qui pourrait permettre de garantir une interprétation correcte des sites webs sur tous les navigateurs.

C'est ainsi qu'en 2000, la première version du standard XHTML est publiée. <b>L'XHTML est la "fusion" de l'HTML et du langage de balises XML</b>.

Au même moment est publié HTML 4.0 qui incite à la séparation du contenu (information) et de la forme (rendu visuel).
Exemple : quelques balises devenues obsolètes : ´&lt;center&gt;´ (centrer), ´&lt;u&gt;´ (souligner), ou attributs obsolètes : ´&lt;body background=""&gt;´ … car la mise en forme doit être spécifiée en CSS (CSS = feuille de styles que vous découvrirez très bientôt!)

## XML
Découvrez via ce quizz les particularités du langage XML.


<div class="quiz-container">
    <p>Le XML (e<span>X</span>tensible <span>M</span>arkup <span>L</span>anguage) est un langage de balisage mis au point par le XML Working Group sous l’égide du W3C en 1996</p>
    
    <!-- Question 1 -->
    <div class="question" id="question-q1">Quel est l'objectif principal de XML ?</div>
    <div class="options" id="options-q1">
        <label><input type="radio" name="q1" value="b" onclick="showFeedback('q1', true)"> Décrire le contenu des données</label>
        <label><input type="radio" name="q1" value="a" onclick="showFeedback('q1', false)"> Décrire la présentation des données</label>
        <label><input type="radio" name="q1" value="c" onclick="showFeedback('q1', false)"> Décrire le format des images</label>
    </div>
    <div class="explanation" id="explanation-q1"></div>
	
    <!-- Question 2 -->
    <div class="question" id="question-q2" style="display: none;">
		Que signifie l'accronyme XML ?    </div>
    <div class="options" id="options-q2" style="display: none;">
        <label><input type="radio" name="q2" value="a" onclick="showFeedback('q2', true)"> Extensible Markup Language</label>
        <label><input type="radio" name="q2" value="b" onclick="showFeedback('q2', false)"> Exclude Markup Language</label>
        <label><input type="radio" name="q2" value="c" onclick="showFeedback('q2', false)"> Xenobot Markup Language</label>
    </div>
	<div class="explanation" id="explanation-q2"></div>
	
    <!-- Question 3 -->
    <div class="question" id="question-q3" style="display: none;">
        Afin de pouvoir garantir une syntaxe correcte tout en autorisant des balises personnalisées, on peut les associer à une "grammaire" qui définit les règles de structure et les balises autorisées. Ces grammaires se présentent généralement sous deux formats : DTD (Document Type Definition) et XSD (XML Schema Definition).<br>
        Quel est le format de grammaire le plus puissant actuellement utilisé avec XML ?
    </div>
    <div class="options" id="options-q3" style="display: none;">
        <label><input type="radio" name="q3" value="a" onclick="showFeedback('q3', false)"> DTD</label>
        <label><input type="radio" name="q3" value="b" onclick="showFeedback('q3', true)"> XSD</label>
        <label><input type="radio" name="q3" value="c" onclick="showFeedback('q3', false)"> JSON</label>
    </div>
    <div class="explanation" id="explanation-q3"></div>
	
 <!-- Question 4 -->
    <div class="question" id="question-q4" style="display: none;">
        <p>La version actuelle est l'XML 1.1 (2006). De très nombreux langages sont basés sur l'XML : XHTML, MathML (représentation de formules mathématiques), SVG (images vectorielles), RSS (syndication de contenus web).</p>
		<p>Un document XML peut être converti en un autre format. Quel langage est recommandé pour effectuer cette transformation ? </p>
		
    </div>
    <div class="options" id="options-q4" style="display: none;">
        <label><input type="radio" name="q4" value="a" onclick="showFeedback('q4', false)"> HTML </label>
		<label><input type="radio" name="q4" value="a" onclick="showFeedback('q4', false)"> JSON </label>
		 <label><input type="radio" name="q4" value="b" onclick="showFeedback('q4', true)"> XSLT  </label>
		<label><input type="radio" name="q4" value="a" onclick="showFeedback('q4', false)"> CSS </label>
    </div>
    <div class="explanation" id="explanation-q4"></div>

	 <!-- Question 5 -->
    <div class="question" id="question-q5" style="display: none;">
        <p> Un document XML est facilement compréhensible et lisible, par contre, il nécessite beaucoup de caractères supplémentaires en plus des données. D'autres formats existent pour partager une structure de données avec un payload moins important. (i.e.: JSON)</p>
	   <p>Les règles principales de validation d'un document XML sont les suivantes:</p>
	   <ul>
			<li>Sensible à la casse</li>
			<li>Toute balise est fermée</li>
			<li>Valeur des attributs entre guillemets doubles</li>
			<li>Non interprétation : &lt;![CDATA[ contenu non interprété ]]&gt;</li>
	   </ul>
		
    </div>
    <div class="options" id="options-q5" style="display: none;">
        
    </div>
    
	
</div>

<script>
    // Explanations for each question
    const explanations = {
        q1: {
            explain: 'XML est "eXtensible" car on peut définir de nouvelles balises et attributs en fonction de ses besoins. Les balises XML décrivent le contenu (à contrario des balises HTML qui décrivent la présentation)'
        },
        q2: {
            explain: '(e<span>X</span>tensible <span>M</span>arkup <span>L</span>anguage), comme écrit précédemment ;)'
        },
		q3: {
            explain: 'JSON (JavaScript Object Notation) est un format de données utilisé pour représenter des données structurées. Il ne permet pas de définir la structure et les balises des données d\'un document XML.<br>DTD est le format traditionnel pour définir la structure des documents XML. Elle précise quelles balises sont autorisées et comment elles peuvent être imbriquées, mais elle est limitée en termes de flexibilité et de précision. <br>XSD est un format plus moderne et puissant qui tend à remplacer la DTD. Il permet une définition plus précise des types de données, des contraintes sur le contenu et des structures complexes. XSD offre également des fonctionnalités supplémentaires comme les types de données complexes et les espaces de noms, facilitant ainsi la validation des documents XML plus élaborés.'
        },
        q4: {
            explain: 'XSLT (Extensible Stylesheet Language Transformations) est recommandé pour transformer un document XML dans un autre format.  Ainsi un même document XML peut être visualisé en page web HTML ou fichier PDF.<br><br>HTML (HyperText Markup Language) est utilisé principalement pour structurer des pages web .<br>JSON (JavaScript Object Notation) est un format de données.<br>CSS (Cascading Style Sheets) est utilisé pour le style des pages web.'
        },
        q5: {
            explain: '/'
        },
    };

    let currentQuestion = 1;

    function showFeedback(questionId, isCorrect) {
        const explanationElement = document.getElementById(`explanation-${questionId}`);
        const optionsElement = document.getElementById(`options-${questionId}`);
        
        const feedbackColor = isCorrect ? 'green' : 'red';
        const feedbackText = isCorrect ? 'Vrai !' : 'Faux !';
        
        explanationElement.innerHTML = `<span style="color: ${feedbackColor};">${feedbackText} ${explanations[questionId].explain}</span>`;
        explanationElement.style.display = 'block';
        
        disableOptions(questionId);
        showNextQuestion();
    }

    function disableOptions(questionId) {
        const optionsElement = document.getElementById(`options-${questionId}`);
        if (optionsElement) {
            const inputs = optionsElement.querySelectorAll('input[type="radio"]');
            inputs.forEach(input => input.disabled = true);
        } else {
            console.error('Élément options non trouvé');
        }
    }

    function showNextQuestion() {
        const nextQuestionElement = document.getElementById(`question-q${currentQuestion + 1}`);
        const nextOptionsElement = document.getElementById(`options-q${currentQuestion + 1}`);
        
        if (nextQuestionElement && nextOptionsElement) {
            nextQuestionElement.style.display = 'block';
            nextOptionsElement.style.display = 'block';
            currentQuestion++;
        }
    }
</script>

## Comparaison


| HTML          | XHTML                          |
| -----------   | ------------------------------------ |
| Interprétation des erreurs         | Erreurs de syntaxe fatales  |
| Insensible à la casse : &lt;tag&gt; = &lt;TAG&gt; = &lt;Tag&gt;         | Sensible à la casse |
| Version minimaliste des attributs (i.e: selected)      | Les attributs doivent avoir une valeur |
| La fermeture de certains tags est optionnelle (i.e.: &lt;li&gt;)     | La fermeture des tags est obligatoire |
| Les tags vides peuvent être écrits &lt;tag&gt; ou &lt;tag/&gt;     | Les tags vides peuvent être écrits &lt;tag&gt;&lt;/tag&gt; ou &lt;tag/&gt; |
| DOCTYPE obligatoire &lt;!DOCTYPE html&gt;     | DOCTYPE avec DTD recommandé et espace de noms obligatoire <br>
            &lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
                            "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;<br> 
            &lt;html xmlns="http://www.w3.org/1999/xhtml"&gt; |
