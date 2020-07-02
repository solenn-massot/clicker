$(document).ready(function () {
    var score = 295;
    var bonus_passif = 1;
    var bonus_click = 2;

    $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</span>");

    function afficheScore() {
        $('#bells').remove();
        $('#score').append("<span id='bells'> Votre nombre de clochettes :<span id='nbrScore'>" + score + "</span></span>");
    }
    //fonction pour vérifier le score et changer l'apparence des personnages
    function checkScore() {
        allcharacters.forEach(element => {
            if (element.compteur === 0) {
                if (score >= element.cost / 2) {
                    id = element.id;
                    img = element.img;
                    $('#b_' + id).removeClass("hidden");
                    element.compteur = 1;
                }
            } else if (element.compteur != 0) {
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
                    $('#' + slug).append("<img src=" + img + " >");
                    bonus_click = bonus_click + element.bonus;
                    score = score - element.cost;
                    afficheScore();
                    updateCost();
                    updateBonus();
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

    }
    //ajoute des points de manière passive
    function scorepassif() {
        score = score + bonus_passif;
        afficheScore();
    }
    $('#bag').click(function () {
        updateScore();
        console.log(bonus_click);
    })
    //score passif = valeur du clic toutes les 5 secondes
    setInterval(scorepassif, 1000);
    setInterval(checkScore, 1000);

    click();

})