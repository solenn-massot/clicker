$(document).ready(function () {
    var score = 295;
    var bonus_passif = 1;
    var bonus_click = 2;

    $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</span>");

    function afficheScore() {
        $('#bells').remove();
        $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</br> Par seconde : " + bonus_passif + "</span>");
    }

    //fonction pour vérifier le score et changer l'apparence des personnages
    function checkScore() {
        allcharacters.forEach(element => {
            if (element.nb === 0) {
                if (score >= element.cost / 2) {
                    id = element.id;
                    img = element.img;
                    $('#b_' + id).removeClass("hidden");
                    element.afficheInfo();
                    element.nb = 1;
                }
            } else if (element.nb != 0) {
                id = element.id;
                if (score >= element.cost) {
                    $('#b__' + id).removeClass("lock").addClass("unlock");
                }
                if (score < element.cost) {
                    $('#b__' + id).removeClass("unlock").addClass("lock");
                }
            }
        });
    }
    //fonction quand on clique sur un personnage
    function click() {
        allcharacters.forEach(element => {
            $('#b__' + element.id).click(function () {
                if (score > element.cost) {
                    slug = element.id;
                    img = element.img;
                    element.removeInfo();
                    element.compteur = element.compteur + 1;
                    $('#' + slug).append("<img src=" + img + " >");
                    bonus_click = bonus_click + element.bonus;
                    score = score - element.cost;
                    afficheScore();
                    element.updateCost();
                    element.updateBonus();
                    element.afficheInfo();
                    console.log(element.bonus);
                    console.log(element.cost);
                    checkScore();


                }
            })
        });
    }
    //update le score
    function updateScore() {
        score = score + bonus_click;
        afficheScore();
        checkScore();

    }
    //ajoute des points de manière passive
    function scorepassif() {
        score = score + bonus_passif;
        afficheScore();
        checkScore();
    }
    $('#bag').click(function () {
        updateScore();
    })
    //score passif = valeur du clic toutes les seconde
    setInterval(scorepassif, 1000);

    click();

})