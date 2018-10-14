jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(2)').addClass('active');

    var animatedModal = jQuery("#animatedModal");

    var descriptions = {
        'conf-ploum': '<h1>Le bonheur sans travail</h1><p><ol><li>1. Le travail est appelé à disparaitre car, par nature, il y aura un robot pour le faire à notre place</li><li>2. Il est nécessaire de trouver une motivation, un sens à sa vie autre que le travail</li><li>3. L’argent, symbole du travail, ne s’y prête pas. Je propose donc une nouvelle méthode de mesure de l’épanouissement à travers des unités de temps.</li></ol></p>',
        'conf-rosoor': '<h1>Comment ça va ? Bien ! Evidemment.</h1><p>Dirigeants, indépendants, freelance, auto-entrepreneurs sont maîtres de leur destin. En position de            leadership, c\'est assez rare qu\'ils avouent "aller mal". Et d\'ailleurs, la société ne le comprendrait pas.</p>            <p>Quand on parle de bien être au travail et donc de risques psycho-sociologiques on s\'adresse donc            essentiellement aux salariés, aux personnes qui ont un lien hiérarchique avec un manager, un patron.</p>            <p>Or nous sommes dans un monde où l\'organisation du travail évolue avec de plus en plus, avec une            augmentation de l\'indépendance au détriment du salariat...le burn-out, lui ne fait pas la différence entre            les statuts.</p>            <p>Pointer le problème, c\'est déjà y répondre en partie.</p>            <p><b>Benjamin Rosoor,</b></p>    <p>Multi-Entrepreneur du web depuis 1999. Il est engagé depuis plusieurs années au sein du Centre des Jeunes    Dirigeants (CJD) où il a participé à des travaux sur le bien être du dirigeant.</p>',
        'conf-gaillot': '<h1>Mob mob mob programming</h1><p>Vous connaissez peut-être déjà la pratique de "mob programming" (littéralement : programmer en meute), qui consiste à programmer en groupe sur un seul ordinateur - une manière comme une autre de prolonger la blague sur le nombre de guitaristes qu\'il faut pour changer une ampoule. Mais avez-vous déjà essayé le "mob programming" (littéralement : la programmation de mobs, c\'est-à-dire des animaux/robots/monstres/personnages-non-joueurs dans un jeu vidéo) ?<p><p>Le temps d\'une session hautement pédagogique à valeur fortement ajoutée, nous montrerons comment allier poésie, curiosité scientifique et grand n\'importe quoi dans un monde virtuel (en l\'occurrence : Minecraft). Nous programmerons des mobs, des meutes de mobs, avec une meute de programmeurs. Accessoirement, nous en profiterons pour réviser les fondamentaux de la programmation JavaScript et de la physique Minecraftienne. Et pour réfléchir à comment intéresser les enfants (et les adultes) à la programmation. Une écoute de Marilyn Manson n\'est pas à exclure.</p>',
		'conf-patou': '<h1>No Scrum, no win</h1><p>Chasser les anti-patterns fréquents chez les équipes qui commencent l\'agilité</p><p>Entre la découverte de Scrum (simple à comprendre) et la mise en pratique sur le terrain, la réalité vous rattrape et certains raccourcis ne sont pas les meilleurs. La simplicité et le bon sens sont souvent les meilleurs alliés, mais comment faire pour rester lucide quand on est sous le feu de l\'action, que des évènements extérieurs viennent compromettre vos plans?</p><p>Etre agile, c\'est quoi en vrai sur le terrain?</p>',
		'conf-aimetti': '<h1>Happy Hour</h1><p>Venez à la découverte de trucs et astuces pour être heureux au travail !</p>',
		'conf-morvant': '<h1>Découverte de l\'agilité de manière ludique : mindstorm4scrum</h1><p>Nous proposons ici de relever un challenge simple en construisant un robot qui est capable de mouvement. Les fonctionnels définiront les US, les développeurs/testeurs programmeront le robot et le construirons. Bien sûr le tout, sans plan et en appliquant une méthode agile</p>',
		'conf-carvalho': '<h1>Feedback Loops</h1><p>Agile. "Agile" ne représente pas un nom que nous pouvons quantifier mais une qualité, une propriété de quelque chose. Pourquoi donc dans ce cas, certaines personnes veulent nous vendre de l\'agile ou prétendent faire de l\'agile ?<p/><p>Pour éviter ce genre d\'écarts, il est peut-être important aujourd\'hui de revenir sur les valeurs fondamentales de notre métier et sur l\'agilité. Parmi ces valeurs importantes, les boucles de feedback sont une charnière centrale. Je vous propose de revenir sur ces valeurs afin de mieux les comprendre et voir ainsi comment réellement produire de meilleurs produits.</p>',
		'conf-avoustin': '<h1>Le courage de vivre consciemment</h1><p>Faire un métier rêvé, dans une ambiance géniale, de l\'autonomie, du temps pour apprendre, de l\'innovation (donc des essais, et des échecs), le tout à 40 mètres de la mer (allez... 45...), ça vous fait rêver ? Et bien c\'est ce que je vis en ce moment :p, et sans exagérer...</p><p>Pour autant, en arriver là n\'a pas été si simple. Et il a fallu sortir de sa zone confort pour vivre [sa vie pro] consciemment.</p><p>Malgré quelques rêves, et quelques bonnes intentions, je n\'étais jamais franchement sorti de ma zone de confort. Et c\'est à la lumière d\'un article de Steve Pavlina, dont cette session porte le nom, et traduit ici en français, que j\'ai franchi le pas. Et pour ainsi dire, je ne m\'attendais pas une seconde à ce qui m\'est arrivé.</p><p>J\'aimerais ici vous faire partager mon expérience, en toute humilité, et vous donner quelques clés pour, pourquoi pas, vous permettre d\'en faire de même !</p>',
		'conf-stetienne': '<h1>La recette pour développer son logiciel dans le bonheur</h1><p>Je vais vous présenter un outil révolutionnaire. </p><p>Meilleur que tout framework ou toute librairie ayant pu exister ou qui pourrait voir le jour. </p><p>Une implacable solution pour produire un logiciel de qualité. </p><p>Elle conçoit, code, teste, déploie, vérifie , elle s\'assure que les besoins du client sont entièrement couverts.</p><p>Elle génère même la documentation et la met à jour !!!</p><p>100% satisfait ou remboursé !</p><p>Profitez de notre offre exceptionnelle, il n\'y en aura pas pour tout le monde !</p>',
		'conf-urvoas': '<h1>Du post-it à l\'écran tactile : l\'évolution de notre management visuel</h1><p>Après une description rapide des concepts de management visuel, cette présentation décrit le parcours des équipes Lectra dans leurs mises en œuvre au cours de ces 6 dernières années.</p><p>Itération 0.0 : 2 Scrum Boards sont perdus quelque part dans la R&D</p><p>Itération 1.0 : Un papier craft apparaît pour synchroniser 4 équipes Scrum</p><p>Itération 2.0 : Et pourquoi ne ferait on pas apparaître l\'avancement de la définition de nos projets vu que nous comptons maintenant 14 équipes Scrum ?</p><p>Itération 3.0 : 230 personnes sont maintenant concernées. La solution : "une Obeya de 60 m2 pour tous !"</p><p>A chaque étape, un éclairage sera mis sur le détail des constats qui ont été faits et des améliorations apportées. L\'accent sera également mis sur le rôle que le management visuel aura joué dans l\'adoption des méthodes Agiles et la conduite du changement au sein de nos équipes.</p>',
		'conf-mansuy': '<h1>Des timbrés agiles à Libourne</h1><p>Il y a quelques milliers de jours, au Service National de l’Adresse (Groupe La Poste), parce que les projets et les services sont cloisonnés, quelques postiers se lèvent et se mettent à l’Agilité. Face aux difficultés rencontrées, ils se défendent et s’adaptent. Leur conscience se développe. Ils inventent, ils s’organisent, ils élargissent l’horizon en expérimentant de nouvelles méthodes de travail impliquant les utilisateurs locaux.</p><p>Aujourd’hui, une nouvelle collaboration se met en place avec les pouvoirs publics (ETALAB/SGMAP), l’IGN et l’association OSM pour co-construire une Base Adresse Nationale. Et de cette base ils créent de nouveaux services autour de l’adresse.</p><p>C’est toute l’histoire de cette transformation, avec ses hauts et ses bas, que Jérôme et Arnaud vont vous conter, depuis les premiers projets Agile jusqu’à la mise en place de ce modèle collaboratif.</p>',
		'conf-azeau': '<h1>Ça prendra combien de temps ?</h1><p>"Ça prendra combien de temps ?" Ceux qui n\'ont jamais entendu cette question n\'ont jamais participé à un projet informatique.</p><p>Est-elle légitime ? Peut-être. Il parait que le temps c\'est de l\'argent.</p><p>Est-elle, pour autant, une bonne raison pour contraindre les développeurs à jouer les madames Irma et les rendre responsables de la moindre panne de boule de cristal ?</p><p>Après quelques brefs rappels théoriques sur les variables aléatoires, nous envisagerons de quitter le monde des estimations au doigt mouillé et entrer dans celui de la mesure et des probabilités.</p><p>Nous verrons aussi comment une équipe agile a pu abandonner ses story points et ses tailles de T-shirt tout en améliorant sa prévision sur les dates de livraisons.</p><p>Nous essaierons d\'apporter des éléments permettant à une équipe de construire sa propre méthode d\'estimation basée sur une approche probabiliste.</p><p>Le #NoEstimates, ça commence tout de suite. Il suffit de s\'en donner les moyens.<p>',
		'conf-faure': '<h1>DoDelinant de la tête</h1><p>C\'est bien beau d\'avoir une "Définition de terminé" dans une équipe mais cette définition est-elle adoptée par l\'équipe? Aide-t-elle l\'équipe à terminer ses user stories?</p><p>Pour éviter les "ça compile donc ça marche", "mais c\'est pas du tout ce que j\'avais demandé" ou autres "je comprends pas, ça marchait sur ma machine", je reviendrai sur les fondamentaux de la pratique, je donnerai des pistes pour aider à la coconstruction de la DoD et des conseils pour faciliter son utilisation au quotidien, expérimentés dans mes propres équipes.</p>',
		'conf-duffau': '<h1>Mettons en mouvement la solution !</h1><p>La session débutera par un parcours de quelques outils d\'animation de rétrospective que j\'utilise sur les projets Scrum , Kanban ou Kaizen. Ensuite, nous pratiquerons ensemble un atelier "orienté solution". Enfin, nous partagerons ensemble les atouts de cette approche positive.</p>',
		'conf-bornerie': '<h1>L\'agilité en IUT ou comment des étudiants nous donnent des leçons (... d\'agilité)</h1><p>Comment apprendre l\'agilité à des étudiants en IUT MMI, Bordeaux ?</p><p>- En pratiquant un maximum. Leur défi : un projet auto-organisé à 50 étudiants sur 2 jours pour réaliser des présentations sur l\'agilité.</p><p>- Avec 0 cours, des jeux. Le bilan : des résultats époustouflants.</p><p>Venez découvrir avec nous ce retour d\'expérience où croyant enseigner l\'agilité, nous avons appris et pris des leçons...</p>',
		'conf-leguillou': '<h1>Poser les bonnes questions au bon moment pour transformer nos problèmes en challenges</h1><p>Quand avons-nous l\'opportunité d’être authentique les uns avec les autres ?</p><p>Imaginez rencontrer de nouvelles personnes dans un environnement de travail où l\'on se sent totalement à l’aise. C\'est ce que nous allons créer. C\'est rafraîchissant, et ça change des évènements de "networking" ou des conversations de la machine à café !</p><p>Je vous propose 3 jeux d\'authenticité pour vous exprimer, ressentir et oser poser des questions que l’on garde trop souvent tout bas, alors que l\'on meurt d’envie de les exprimer tout haut.</p><p>Chaque participant sera invité à poser une problématique auquel il fait face en ce moment.</p><p>En groupe, nous co-créerons en portant l\'attention sur la personne pour lui poser des questions percutantes lui permettant d\'avancer.</p>',
		'conf-monville': '<h1>La recherche du bonheur</h1><p>Alexis nous proposera une conférence sur le bonheur, thématique qu\'il anime depuis longtemps et que l’on retrouve régulièrement sur son blog ou lors de ses interventions en France et à l\'international.</p>',
		'conf-dusseaut': '<h1>L\'ordre des développeurs</h1><p>Jean-Baptiste nous parlera de l’ordre des développeurs, institution naissante pour fédérer les développeurs autour de valeurs communes.</p>',
		'conf-gallay': '<h1>Moi, coach agile : "psychomotricien d\'équipe" !</h1><p>Et si le coaching agile était une forme de "psychomotricité d’équipe" ?</p><p>En effet, si l’on considère qu’une équipe (en tant que système complexe) est un être humain, on réalise alors que de nombreuses caractéristiques de la psychomotricité trouvent un parallèle dans la pratique du coaching agile...</p><p>Pour exemples, voici ce que nous dit Wikipédia sur cette discipline paramédicale :</p><p>- "La psychomotricité à plusieurs champs d\'action (l\'éducation, la thérapie, la rééducation) et s\'adresse à un large public allant du bébé et ses parents, aux jeunes enfants, adolescents, adultes, jusqu\'aux personnes âgées."</p><p>- "Le psychomotricien intervient dans le dépistage, la prévention et le traitement des troubles psychomoteurs (trouble déficitaire de l\'attention, trouble de la communication non-verbale, trouble du tonus musculaire, etc.)"</p><p>- "C\'est une discipline autant qu\'un courant de pensée qui met en avant la liaison du corps et de la pensée, contrairement à la dichotomie souvent mise en avant."</p><p>Si vous n’identifiez toujours pas de points communs avec le coaching agile, venez nous voir rejouer vos scènes quotidiennes rencontrées en équipe, et posez-nous vos questions à chaque entracte !</p><p>Prise de conscience et humour assurés ;)</p>',
		'conf-cranford': '<h1>Le procès : la métamorphose vers l\'avenir exploration des conflits kafkaïens du monde agile</h1><p>Un regard sur les conflits existentiels dans le monde de l\'informatique, de l\'individuel aux processus</p>',
		'conf-keromen': '<h1>Processus de décision (décider plus efficacement)</h1><p>Un des objectifs de l\'évolution vers plus d\'agilité se traduit par une livraison plus rapide et plus régulière de valeur à ses clients.</p><p>En parallèle de l’impact sur le flux de production des équipes, livrer plus fréquemment signifie également raccourcir les cycles de décision. Il faut décider plus vite, plus fréquemment.</p><p>L\'agilité encourage l\'auto-organisation, l\'intelligence collective, nous verrons comment décider ENSEMBLE et faire suivre cette décision d\'une exécution efficace.</p><p>Grâce à l\'agilité et à l\'intelligence collective, aider les entreprises à s\'adapter aux turbulences d\'aujourd\'hui et à se ré-organiser pour les enjeux de demain.</p>',
		'conf-lacoste': '<h1>Spaceteam : un jeu coopératif</h1><p>Cet atelier s\'appuie sur un jeu Android/iOS coopératif du nom de Spaceteam. Outre l\'utilisation d\'un language pseudo-scientifique digne des pires séries Z, c\'est un véritable voyage à travers la communication et les interactions humaines qui vous est proposé. Rassurez-vous, le jeu ne nécessite pas une grande dextérité, hormis le fait d\'appuyer sur des boutons et d\'activer des interrupteurs. De plus, le briefing sera là pour vous expliquer les bases. Ah, j\'oubliais : il faudra faire des groupes (8 personnes maximum) et coopérer pour réussir.</p><p>Attendez-vous à être surpris... et à faire le parallèle sur des situations de la vie (professionnelle, voire personnelle). La fin de séance sera une occasion pour échanger vos expériences.</p><p>Munissez-vous de votre smartphone/tablette, et en avant!</p>',
		'conf-langlois': '<h1>La pairmutation du travail</h1><p>#enseignement #crowdfounding #bonheur #mobilité #digitallabor #SCOP #compétition #méditation #phagocytose #collaboration #ouverture #nomadisme #esclavage #capital #holacratie #lean #startup #subordination #35h quels choix pour notre travail demain ?</p>',
   		'code-clinic': '<h1>Code Clinic</h1><p>Quand on écrit des applications, on se retrouve souvent avec des petites questions qui trottent dans la tête comme :</p><p>"Est-ce que je n’aurais pas pu écrire ce code autrement ?"</p><p>"Je suis fatigué de tout ce code qui a mal vieilli, mais comment puis-je m\'en sortir ?"</p><p>"Je sens qu’il y a un truc dans ce design qui cloche mais je vois pas quoi ?"</p><p>"J’écris un driver réseau avec un protocole mal spécifié, je ne vois pas comment tester sans lancer le client ?”</p><p>“Comment j’explique à mes collègues que ça serait cool d’écrire des tests ?"</p><p>"C’est vraiment mon taf d’aller voir les utilisateurs ?”</p><p>et pleins d’autres sur les divers aspects de notre quotidien de développeurs.</p><p>Le Code Clinic, c’est l’occasion d’essayer de trouver des réponses à ces questions ou à minima obtenir un éclairage différent de la situation.</p><p>Au cours de sessions de 20min, vous aurez la possibilité de discuter de votre problématique en tête à tête avec un autre développeur expérimenté.</p><p>Les mots d\'ordre de l\'équipe "d\'aides-soignants" : humilité, empathie, confidentialité et partage.</p>',
   		'coding-gouter': '<h1>Coding Gouter</h1><p>Le coding goûter a pour vocation de faire découvrir aux enfants l’art de la programmation. Chaque enfant est accompagné d’un parent pour passer l’après-midi à créer son propre jeu ou sa bd animée en ligne entre deux viennoiseries et un verre de jus d’orange.</p><p>Chaque enfant entre 7 et 15 ans devra amener avec lui ou elle les choses suivantes :</p><p>un ordinateur portable,</p><p>un parent (ou accompagnateur majeur),</p><p>à boire et/ou à manger à partager,</p><p>de la curiosité et une bonne dose de patience.</p>',
        'conf-martraire': '<h1>Domain Driven Design (pour de vrai)</h1><p>DDD est un sujet important mais fréquemment maltraité, de l’obsession malsaine du pattern Repository jusqu’aux auto-proclamés ”frameworks DDD”, sans parler des articles de blogs trompeurs. Pourtant l’essentiel est ailleurs, et l’objet de ce talk de faire le point sur ce qu’est vraiment DDD. Nous illustrerons par des exemples et des petites histoires, et même un peu de code, à quoi ressemble la pratique de DDD : c’est l’occasion idéale pour démarrer DDD sur de bonnes bases !</p><p><b>Cyrille (@cyriux on Twitter),</b></p><p>est CTO co-fondateur de la société Arolla, qui rassemble 60 développeurs passionnés de code bien écrit et bien testé. Il a fondé la communauté Paris Software Craftsmanship et intervient fréquemment comme orateur dans des conférences en Europe et parfois au-délà.<br>Cyrille est avant tout un développeur avec 15 ans d\'expérience en startups, chez des éditeurs et des banques, et avec une passion intacte pour le design dans toutes ses formes (TDD, BDD, DDD).</p>',
		'atelier-dusseaut': '<h1>L\'ordre des développeurs : Atelier constituant</h1>Description à venir',
		'open-space': '<h1>Open Space</h1><p>L\'Open Space (ou Forum Ouvert) crée un espace dans lequel des personnes peuvent s\'organiser elles-mêmes et résoudre leurs problèmes en groupe. Il n\'y a pas de thème imposé. Chacun peut faire avancer ce qui lui tient à cœur. La méthode permet une large participation et une compréhension mutuelle.</p><p>Il repose sur le respect d\'une loi, étayée par quatre principes.</p><p>Les quatre principes :<br />les personnes qui se présentent sont les bonnes ;<br />ce qui arrive, est la seule chose qui pouvait arriver ;<br />ça commence quand ça commence ;<br />quand c’est fini, c’est fini.<br />La loi des deux pieds : si vous n’êtes ni en train d’apprendre, ni de contribuer, passez à autre chose !</p>'
	};

    jQuery('.modalLink').each(function(index, element) {
        jQuery(element).on('click', function(event) {
            alert('click close custom');
            var id = jQuery(event.currentTarget).attr('id');
            animatedModal.find('.modal-content').html(descriptions[id]);
        });
        alert('animateModal ', element.attr('id'));
        jQuery(element).animatedModal({
            animatedIn:'fadeIn',
            animatedOut:'fadeOut',
            animationDuration:'.3s',
            beforeOpen: function() {
                animatedModal.addClass('visible');
            },
            afterClose: function() {
                animatedModal.removeClass('visible');
            },
            color: '#2C495A'
        });
    });
});
