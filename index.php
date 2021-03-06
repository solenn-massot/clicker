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
            <div class="item_obtenu" id="o_craft">
               
            </div>


            <div id="melo">

            </div>
            <div class="item_obtenu" id="o_objet">
                
            </div>


            <div id="thibou">

            </div>
            <div class="item_obtenu" id="o_pelle">
                
            </div>


            <div id="pollux">

            </div>
            <div class="item_obtenu" id="o_canne">
                
            </div>


            <div id="djason">

            </div>
            <div class="item_obtenu" id="o_filet">
                
            </div>


            <div id="daisy">

            </div>
            <div class="item_obtenu" id="o_navet">
                
            </div>

        </section>
        <section id="store">
            <div id="outils">
            </div>
            <div id="b_meli" class="hidden info">
                <img id="b__meli" class="lock" src="src/img/méli.png" />

                <p id="name_meli"></p>
                <p id="cost_meli"></p>
                <p id="bonus_meli"></p>
                <p id="compteur_meli"></p>

            </div>
            <div id="b_melo" class="hidden info">
                <img id="b__melo" class="lock" src="src/img/mélo.png" />
                <p id="name_melo"></p>
                <p id="cost_melo"></p>
                <p id="bonus_melo"></p>
                <p id="compteur_melo"></p>
            </div>
            <div id="b_thibou" class="hidden info">
                <img id="b__thibou" class="lock" src="src/img/thibou.png" />
                <p id="name_thibou"></p>
                <p id="cost_thibou"></p>
                <p id="bonus_thibou"></p>
                <p id="compteur_thibou"></p>
            </div>
            <div id="b_pollux" class="hidden info">
                <img id="b__pollux" class="lock" src="src/img/pollux.png" />
                <p id="name_pollux"></p>
                <p id="cost_pollux"></p>
                <p id="bonus_pollux"></p>
                <p id="compteur_pollux"></p>
            </div>
            <div id="b_djason" class="hidden info">
                <img id="b__djason" class="lock" src="src/img/djason.png" />
                <p id="name_djason"></p>
                <p id="cost_djason"></p>
                <p id="bonus_djason"></p>
                <p id="compteur_djason"></p>
            </div>
            <div id="b_daisy" class="hidden info">
                <img id="b__daisy" class="lock" src="src/img/daisy_mae.png" />
                <p id="name_daisy"></p>
                <p id="cost_daisy"></p>
                <p id="bonus_daisy"></p>
                <p id="compteur_daisy"></p>
            </div>
        </section>
    </main>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="class/equipement.js"></script>
    <script src="class/character.js"></script>
    <script src="script.js"></script>
</body>

</html>