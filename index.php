<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='style.css'>
    <title>Accueil</title>
</head>

<body>
    <header>
        <span>
            <h1>Bienvenue sur Animal clicker</h1>
            Votre but ? Récolter le plus de clochettes possible pour devenir le.a plus riche de tous !
        </span>
    </header>
    <main>
        <section id="click">
            <div id="score">

            </div>
            <div id="clochette">
                <img id="bag" src="src/img/bag.png" />
            </div>
        </section>
        <section id="obtenu">

            <div id="meli">

            </div>
            <div class="item_obtenu" id="craft">
                <img src="src/img/craft.png" />
            </div>


            <div id="melo">

            </div>
            <div class="item_obtenu" id="item">
                <img src="src/img/objet.png" />
            </div>


            <div id="thibou">

            </div>
            <div class="item_obtenu" id="pelle">
                <img src="src/img/pelle_rudimentaire.png" />
            </div>


            <div id="pollux">

            </div>
            <div class="item_obtenu" id="canne">
                <img src="src/img/canne_rudimentaire.png" />
            </div>


            <div id="djason">

            </div>
            <div class="item_obtenu" id="filet">
                <img src="src/img/filet_rudimentaire.png" />
            </div>


            <div id="daisy">

            </div>
            <div class="item_obtenu" id="navet">
                <img src="src/img/navet.png" />
            </div>

        </section>
        <section id="store">
            <div id="outils">
                <img src="src/img/canne_rudimentaire.png" />
                <img src="src/img/canne_rudimentaire.png" />
                <img src="src/img/canne_rudimentaire.png" />
            </div>
            <div id="b_meli" class="hidden">
                <img id="b__meli" class="lock" src="src/img/méli.png" />
            </div>
            <div id="b_melo" class="hidden">
            <img id="b__melo" class="lock" src="src/img/mélo.png" />
            </div>
            <div id="b_thibou" class="hidden">
            <img id="b__thibou" class="lock" src="src/img/thibou.png" />
            </div>
            <div id="b_pollux" class="hidden">
            <img id="b__pollux" class="lock" src="src/img/pollux.png" />
            </div>
            <div id="b_djason" class="hidden">
            <img id="b__djason" class="lock" src="src/img/djason.png" />
            </div>
            <div id="b_daisy" class="hidden">
            <img id="b__daisy" class="lock" src="src/img/daisy_mae.png" />
            </div>
        </section>
    </main>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="class/character.js"></script>
    <script src="script.js"></script>
</body>

</html>