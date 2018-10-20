jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(1)').addClass('active');

    var animatedModal = jQuery("#animatedModal");
    var toTopButton = jQuery(".to-top");

    var descriptions = {
        'conf-hoogendoorn':        '<h1>It\'s a small world after all</h1><p>Our world changes fast and at increasing speed. Things that weren\'t possible 5 years ago come into reach.</p><p>Incumbents need to adept to match start-ups that use newer technologies. We are evolving towards smaller, faster, shorter. Smaller teams or even micro-teams, flat organizations, no management, even shorter cycles, smaller components.</p><p>During this inspiring talk Sander discusses Cynefin, how software development goes wrong, how to go beyond Scrum, why self-organization is hard, why continuous delivery allows you to stop estimating or do projects and why microservices are hard, but essential.</p>',
        'conf-lefevre':            '<h1>Agile (d\'accord !), mais Green (d\'abord !)</h1><p>Laurent Lefevre travaille depuis 10 ans sur comment améliorer l\'efficacité énergétique des grands systèmes numériques (datacentres, clouds et réseaux).</p><p>Pendant cet exposé, il présentera le rôle que joue le logiciel afin de maitriser les leviers énergétiques présents sur les nouveaux équipements et son impact sur les étapes du cycle de vie de l\'informatique. Une petite incursion dans le monde de l\'éco-conception logicielle sera aussi abordée.</p>',
        'conf-lesieur':            '<h1>Le mystérieux cadrage d\'or des cités agiles</h1>',
        'conf-deniaud':            '<h1>Et si notre communication était biaisée ?</h1><p>La communication est au cœur de l\'Agilité, au cœur de vos équipes, au cœur de votre activité quotidienne. Pourtant, nous en apprenons si peu sur cet outil essentiel, sur son exploitation et sur ses limites.</p><p>Je ne vous propose pas un kit prêt à l\'emploi, mais une exploration de quelques clefs permettant de mieux comprendre pourquoi nous n\'en tirons pas souvent le meilleur parti. Reprenons ensemble l\'une des idées fondatrices du manifeste agile : replacer l\'humain au centre de tout. Et sous ce « nouvel » éclairage, décryptons un peu les effets de sa présence au sein de la relation et ce qu\'il nous apporte.</p><p>Vous repartirez avec quelques clefs à emporter dans vos équipes, dans vos contextes respectifs, vous permettant de mieux appréhender ce qui se passe dans vos propres modes de communication et ceux que vous observerez.</p>',
        'atelier-manoukian':       '<h1>-</h1>',
        'atelier-example-mapping': '<h1>Découvrir l\'example mapping par la pratique</h1><p>Le BDD est trop souvent réduit à de l\'outillage, alors que c\'est surtout un super moyen de rapprocher le métier et les professionnels du software afin de livrer des applications alignées avec les besoins business.</p><p>L\'Example Mapping n\'est pas beaucoup utilisé, car pas bien connu. Nous ferons une petite introduction à l\'Example Mapping suivie d\'un atelier afin de l\'illustrer par la pratique, puis nous échangerons sur cette pratique.</p>',
        'conf-desliens':           '<h1>Design Sprint, méthode d\'émergence rapide et efficace des projets, inspiré du Design Thinking et de l\'Agile</h1><p>Le "Design Sprint" est une méthodologie mise au point par GV à partir des principes et outils du Design Thinking.</p><p>Elle vise, en 3 à 5 journées, à résoudre en équipe tout type de problématique complexe (organisation, stratégie, nouveau produit, etc.), de la compréhension au prototypage et test de la solution.</p>',
        'conf-fakih':              '<h1>Les compétences pour être un bon développeur</h1>',
        'conf-luzeau':             '<h1>Astuces de Scrum master pour varier les rétros</h1><p>Sur une équipe pratiquant des sprints de 2 semaines, il y a 26 rétros à animer chaque année, et à chaque rétro, vous vous devez d\'innover, pour éviter la monotonie...</p><p>Voici quelques astuces simples pour varier vos rétros et éviter l\'ennui ! Scrum Master et coach agile depuis 3 ans, j\'aime créer et concevoir, dessiner et animer !</p><p>Scrum masters : voici quelques astuces simples pour varier vos rétros et éviter l\'ennui !</p>',
        'conf-allaire':            '<h1>Itérez plus vite avec des designers</h1><p>La rapidité d\'itération est au centre des méthodes agiles. Plus une entreprise est capable de générer des nouvelles versions rapidement plus elle a de chances de développer un avantage sur sa compétition.</p><p>Scrum pose les sprints comme unité d\'itération. Ces cycles d\'une à plusieurs semaines se terminent avec une version fonctionnelle du produit. Ces itérations sont relativement lentes et couteuses.</p><p>Je vous propose une manière d\'itérer plus rapidement et moins cher en incluant designers, développeurs et product manager.</p>',
        'conf-crabe':              '<h1>A la découverte du deep work</h1><p>Dans un monde ou les distractions sont nombreuses (réseaux sociaux, messagerie instantanée, SMS, mails …), la concentration est une denrée précieuse mais qui tend à se raréfier. Pourtant c\'est celle-ci qui peut amener plus de valeur à notre travail.</p><p>L\'agilité prône la protection de l\'équipe de développement des éléments extérieurs qui peuvent perturber son travail. Et si le "Deep work" permettait de protéger l\'équipe de l\'intérieur ?</p><p>Je vous propose au travers de ce lighting talk de vous présenter sommairement ce qu\'est le "Deep work" ainsi que mon expérience de l\'apprentissage difficile mais bénéfique de ce nouveau super pouvoir !</p>',
        'conf-osherove':           '<h1>Growing great teams and adopting new processes through Elastic Leadership</h1><p>As managers, architects, and other types of technical team leaders, you usually study methodologies, practices, and techniques for delivering software.</p><p>Often your learning leaves you a great desire to "change" how things work, but you soon discover that you\'re "stuck". Stuck convincing your team to adopt particular practices. Stuck with too little time to learn how to implement these practices ("we don\'t have time for unit testing"). Stuck with all the people-related aspects of leading a team.In this talk we will cover some of the essential skills and techniques for leading software teams, based on elastic and adaptive leadership principles.</p><p>You will gain insight into the skills that make real change happen in your team, and how to transform the team you have into the team you want.</p><p>Learn about the three basic team modes: Survival mode, Learning mode, and Self Organization mode. Learn how to understand which mode your team is in right now.Learn essential skills for the three modes of leadership you will need for the three phases of the team: Command and control leadership, Coaching and facilitative leadership.Learn how to start changing anything by understanding why people behave the way they do and grasp the six influence forces that affect our behaviour.</p>',
        'conf-leguedois':          '<h1>Cessons les estimations</h1><p>Alors que les estimations sont à la base des méthodes classiques et que dans le domaine Agile, SCRUM notamment lui accorde une grande importance, nous allons l’espace d’une conférence remettre en cause celles-ci.</p><p>Après un bref rappel de différentes méthodes permettant de réaliser des estimations et croyances qui y sont attachées, nous prendrons le temps de réfléchir sur les effets néfastes de ces dernières.</p><p>Enfin, nous verrons comment dans la réalité des projets, il est possible de s’en extraire.</p><p>Conférence iconoclaste, sous la forme d’un one man show, afin de réfléchir (et de rire ?) sur un aspect essentiel de l’agilité.</p><p>Ouvert à tout public ayant une première approche des projets de développement logiciel.</p>',
        'conf-humphreys':          '<h1>Si à 40 ans on est pas manager c\'est qu\'on a raté sa vie</h1><p>Venez rencontrer un manager qui va vous expliquer comment il a réussi sa vie malgré ses burnout, licenciements et divorces.</p>',
        'conf-carnelos':           '<h1>Crafters en 2018 : Revisitez vos fondamentaux</h1><p>En relisant le manifeste du software craftsmanship, comment ses principes peuvent se comprendre aujourd\'hui en 2018 ?</p><p>Je vous propose d\'établir une liste de compétences clés qui feront de nous de meilleurs crafters.</p><p>Parmi ces sujets :<ul><li>&nbsp;&nbsp;&nbsp;&nbsp;- Quelles sont les enjeux sociaux et notre place dans le leading tech</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- Survivre au flot technique permanent</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- Comprendre son combat dans le TDD et le design émergent</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- Pratiquer une revue de code efficace</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- L\'éthique et la responsabilité du développeur</li></ul></p><p>Alors venez challenger vos a priori !</p>',
        'atelier-osherove':        '<h1>Atelier Elastic leadership</h1>',
        'atelier-agiloparc':       '<h1>Agiloparc, un jeu pour comprendre le rôle de PO</h1><p>Après un petit rappel sur le rôle et les attributions du Product Owner, nous vous présenterons un jeu que nous avons créer pour illustrer les questionnements auxquels se trouve confronter le Product Owner au travers d\'un atelier immersif de priorisation du backlog et de réalisation sous la forme de dessin d\'un parc d\'attractions.</p><p>Soyez le Product Owner d\'un parc d\'attraction : priorisez vos réalisations pour maximiser vos gains mais gare aux aléas.</p>',
        'conf-chapelier':          '<h1>Alice et le Chapelier in Agile-Land</h1><p>Alice et le Chapelier fou re-visitent l\'agilité à Agile-Land à travers son histoire.</p><p>"Voudriez-vous me dire, s\'il vous plaît, quel chemin je dois prendre pour [faire de l\'agilité] ?<br>– Cela dépend beaucoup de l\'endroit où tu veux aller, répondit le chat.<br>– Peu m\'importe l\'endroit...dit Alice.<br>– En ce cas, peu importe la route que tu prendras, répliqua-t-il."</p><p>Rencontre théâtralisée avec Alice et le Chapelier fou qui vivent au Pays des Merveilles ou les valeurs humaines et le respect des individus passent avant les képis-aïe !</p><p>Ou les managers, comme le chat du cheschire s\'éclipsent pour faire place aux principaux protagonistes qui "font" l\'histoire. Nous passeront ensuite "de l\'autre côté du miroir" pour voir ce qu\'il en est vraiment de Pays de l\'Agilité, dans le monde de l\'entreprise.</p><p>Nous vous proposons un parallèle entre l\'aventure d\'Alice racontée par Lewis Caroll et notre aventure au Pays de l\'Agilité. Cette présentation théâtrale permet de revisiter les fondamentaux de l\'agilité en s\'amusant. A l\'issue de cette présentation, les participants seront amenés à s\'interroger sur la voie qu\'ils ont chois pour aller vers leur chemin de l\'agilité.</p><p>Nous trouvons le livre de Lewis Caroll très philosophique et nous aimerions faire des parallèles avec notre histoire et l\'apprentissage que nous avons de l\'agilité.</p>',
        'conf-schneider':          '<h1>Soignons-nous de la réunionnite aiguë</h1><p>"Favorisons les Humains et leurs interactions" qu\'ils disaient !</p><p>Oui, mais... Réunionnite aigüe aussi !</p><p>Bienvenue à vous pour cette session où nous nous interrogerons sur les solutions dont on dispose pour améliorer durablement notre culture des réunions.</p>',
        'conf-mazardo':            '<h1>DevoOoups</h1><p>Les containeurs, les orchestrateurs, les provisionners, le continous delivery, beaucoup d\'outils sont disponibles pour faire du devops. <br>- A qui sont-ils destinés ? <br>- Mais qu\'est-ce vraiment le mouvement devops tant à la mode ?</p><p>De temps en temps développeur, parfois scrummaster, administrateur système en apprentissage, passionné par l\'open source, j\'espère par cette intervention clarifier le mot devops. Mots clés : docker, k8s, ansible, continuous delivery, devops.</p>',
        'conf-pierrain':           '<h1>Et si on parlait un peu Éthique ?</h1><p>j\'ai jamais pu saquer Kant, mais là il faut qu\'on parle...</p><p>Coder, c\'est de plus en plus façonner le monde. Redéfinir ses contours et certaines interactions que nous pouvons avoir (ou pas) entre nous.</p><p>Si certains métiers se sont déjà interrogés par le passé sur leur rôle et leur impact sur la société, il me semble que ces questions d\'éthique ne nous traversent pas encore suffisamment dans la sphère des faiseuses et faiseurs de logiciels.</p><p>Et si on se posait quelques minutes pour faire le tour de certaines d\'entre elles ?</p>',
        'conf-lemaire':            '<h1>Et si on redémarrait l\'agile ?</h1>',
        'conf-urvoas':             '<h1>Le théâtre forum, (dé)jouons ensemble les scènes clichés du merveilleux univers de l’entreprise</h1><p>Notre quotidien professionnel peut ressembler à une véritable pièce de théâtre, tragique ou de boulevard.</p><p>On y retrouve beaucoup d\'acteurs, des situations qui s\'enchaînent, des interactions complexes et parfois des coups de théâtre. Face à tout cela, nos émotions sont mises à rude épreuve et peuvent s\'exprimer de façons variées : rire, colère, tristesse, retrait, ...</p><p>D\'ailleurs vous avez peut-être vous-même rencontré un pair programming qui dérape car la patience n\'est pas de rigueur, un manager un peu trop explosif qui débarque au milieu de l\'équipe, un PO trop absent(*), ...</p><p>Venez plonger dans un atelier ludique et participatif mêlant jeu d\'acteurs (non professionnels), observation et échanges ...</p><p>(*)Les acteurs s\'arrogent le droit à tout moment de changer le scénario en fonction des désidératas de l\'auditoire.</p>',
        'conf-coach-psy':          '<h1>Cultivez votre Agilité dans dans votre ADN avec l\'union d\'une psy et d\'un coach</h1><p>Nous proposons à tous ceux qui cherchent les méthodes agiles, un atelier au cœur des pratiques du langage verbal indirect (stratégie de langage, paradoxe, discernement) et du langage corporel direct (confrontation, ancrage, adaptation), animé par une psy diplômée des sciences humaines et ancien cadre en recrutement et un coach "martial", lui-même chef d\'entreprise.</p><p>Nous allons mettre en scène l\'agilité dans les organisations à travers les justes valeurs de nos questionnements.</p>',
        'atelier-event-storming':  '<h1>Découvrir Event Storming et le quotidien des développeurs</h1>',
        'atelier-coding':          '<h1>Coding dojo</h1><p>Le coding dojo est une rencontre entre plusieurs personnes qui souhaitent travailler sur un défi de programmation de façon collective.</p>',
        'open-space':              '<h1>Open space</h1><p>L\'Open Space (ou Forum Ouvert) est une méthode pour structurer des conversations et des conférences.</p><p>Grâce à cette méthode, des groupes de 5 à 2 000 participants peuvent s\'assembler et travailler ensemble.</p><p>La caractéristique de la méthode est l\'ouverture mise à la fois sur le contenu mais aussi sur la forme.</p><p>Les participants sont invités à travailler ensemble sur une thématique importante et complexe. L\'ordre du jour est réalisé par les participants au démarrage de l\'Open Space.</p><p>Les utilisateurs donnent ainsi leurs propres sujets en plénière et forment des groupes de travail pour chaque thème abordé.</p>',
        'coding-gouter':           '<h1>Coding goûter</h1><p>Venez apprendre à coder avec votre enfant. Une occasion unique de partager des gâteaux, des rires et du code !</p>'
	};

    hideModal();
    
    jQuery('.modalLink').each(function(index, element) {
        handleClickEvent(element);
    });

    jQuery('#btn-close-modal').on('click', function(event) {
        hideModal();
    });

    function handleClickEvent(element) {
        jQuery(element).on('click', function(event) {
            var id = jQuery(event.currentTarget).attr('id');
            changeDescription(id);
            showModal();
        });
    }
    
    function showModal() {
        animatedModal.addClass('visible');
        animatedModal.removeClass('vhidden');
        jQuery('body').attr('style', 'overflow: hidden');
        toTopButton.addClass('vhidden');
    }

    function hideModal() {
        animatedModal.addClass('vhidden');
        animatedModal.removeClass('visible');
        jQuery('body').attr('style', 'overflow: auto');
        toTopButton.removeClass('vhidden');
    }

    function changeDescription(id) {
        animatedModal.find('.modal-content').html(descriptions[id]);
    }
});
