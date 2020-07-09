$(document).ready(function () {
    var score = 1;
    var bonus_passif = 1;
    var bonus_click = 200;
    var item = JSON.stringify(allcharacters);
    console.log(item);
    var mychara = [];

    var oldscore = localStorage.getItem("score");
    var oldpassif = localStorage.getItem("passif");
    var oldclick = localStorage.getItem("click");
    console.log(oldscore)

    if(oldscore != undefined){
        score = parseInt(localStorage.getItem("score"));
    }
    if(oldpassif != undefined){
        bonus_passif = parseInt(localStorage.getItem("passif"));
    }
    if(oldclick != undefined){
        bonus_click = parseInt(localStorage.getItem("passif"));
    }
    
    $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</span>");

    function afficheScore() {
        $('#bells').remove();
        $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</br> Par clic : " + bonus_click + "</br> Par seconde : " + bonus_passif + "</br></span>");
    }

    function checkCharacter() {
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
                else if (score < element.cost) {
                    $('#b__' + id).removeClass("unlock").addClass("lock");
                }
            }
        });
    }

    function checkEquipement() {
        // console.log(allequipement)
        allequipement.forEach(equip => {
            $('#' + equip.slug).ready(function () {
                if (+score >= +equip.cost) {
                    $('#' + equip.slug).removeClass("lock").addClass("unlock");
                } else if (score < equip.cost) {
                    $('#' + equip.slug).removeClass("unlock").addClass("lock");
                }

            })

        })
    }

    function updateBonuspassif(bonus){
        bonus_passif = bonus_passif + bonus;
    }

    function updateBonusclick(bonus){
        bonus_click = bonus_click + bonus;
    }

    function pay(cost){
        score = score - cost;
    }

    function isavailable(){
        allequipement.forEach(equip => {
            if (slug === equip.characters && equip.nb === 0) {
                equip.afficheEquip();
                $('#' + equip.slug).ready(function () {
                    $('#' + equip.slug).click(function () {
                        if (score > equip.cost) {
                            pay(equip.cost);
                            updateBonuspassif(equip.bonus);
                            equip.buy();

                        }
                    })
                })
            } else if (slug === equip.characters && equip.nb != 0) {
                if (equip.slug === "pelle" || equip.slug === "canne" || equip.slug === "filet") {
                    equip.updateEquipement(equip.slug, equip.nb);
                    equip.afficheEquip();
                    $('#' + equip.slug).ready(function () {
                        $('#' + equip.slug).click(function () {
                            if (score > equip.cost) {
                                pay(equip.cost);
                                updateBonuspassif(equip.bonus);
                                equip.buy();
                            }
                        })
                    })
                }
            }
        })
    }



    function checkScore() {
        checkEquipement();
        checkCharacter();
    }

    function click() {
        allcharacters.forEach(element => {
            $('#b__' + element.id).click(function () {
                if (score > element.cost) {
                    slug = element.id;
                    img = element.img;
                    element.removeInfo();
                    element.compteur = element.compteur + 1;
                    $('#' + slug).append("<img src=" + img + " >");
                    updateBonusclick(element.bonus)
                    pay(element.cost);
                    afficheScore();
                    element.updateCost();
                    element.updateBonus();
                    element.afficheInfo();
                    checkScore();
                    mychara = + element;
                    console.log(mychara);
                    if ((element.compteur % 3) === 0) {
                        isavailable();
                    }


                }
            })
        });
    }

    function updateScore() {
        score = score + bonus_click;
        afficheScore();
        checkScore();
    }

    function scorepassif() {
        score = score + bonus_passif;
        afficheScore();
        checkScore();
        localStorage.setItem('score',score);
        localStorage.setItem('passif',bonus_passif);
        localStorage.setItem('click',bonus_click);
    }
    $('#bag').click(function () {
        updateScore();
    })

    setInterval(scorepassif, 1000);

    click();


})