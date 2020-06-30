var score = 1;
var bonus_passif = 1;
var bonus_click = 2;
var meli = 0;
var b_meli = 0;
var meli_cost = 250;

function afficheScore(){
    $('#bells').remove();
    $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</span>");
}

//a chaque fois qu'on update le score on vérifie si ça débloque un item
function updateScore() {
    score = score + multiplicateur;
    afficheScore();
    if (score >= meli_cost / 2) {
        if (b_meli === 0) {
            $('#b_meli').append('<img class="lock" id="b__meli" src="src/img/méli.png" >');
            b_meli = 1;
        } else if (score >= meli_cost) {
            $('#b__meli').removeClass("lock").addClass("unlock");
        }
    }
}

function scorepassif() {
    score = score + bonus_passif;
}

$(document).ready(function () {
    $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</span>");
    //score passif = valeur du clic toutes les 5 secondes
    setInterval(scorepassif, 1000);

    $('#bag').click(function () {
        updateScore();
    })
    //fonction quand on clique sur méli
    $('#b_meli').click(function () {
        //on vérifie que l'item est achetable et que l'utilisateur a assez de point
        if (b_meli === 1 && score >= meli_cost) {
            //on ajoute le bonus: 
            multiplicateur = multiplicateur + 1;
            //pour savoir à combien d'image on est
            meli = meli + 1;
            //update du score pour enlever les clochettes nécessaires à l'achat
            score = score - meli_cost;
            //update du prix du personnage + math.round pour éviter les coûts à 0.5
            meli_cost = meli_cost + Math.round(meli_cost / 2);
            //on réaffiche le score
            afficheScore();
            //si la div n'est pas pleine on rajoute une image
            if (meli < 12) {
                $('#meli').append('<img src="src/img/méli.png" >');
            }
            //si le score est inférieur au prix de l'item on remet la class lock
            if (score < meli_cost) {
                $('#b__meli').removeClass("unlock").addClass("lock");
            }

        }
    })
})