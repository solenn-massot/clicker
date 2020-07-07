class Equipements {
    constructor(slug, img, cost, bonus, compteur, characters, nb = 0) {
        this.slug = slug;
        this.img = img;
        this.cost = cost;
        this.bonus = bonus;
        this.nb = nb;
        this.compteur = compteur;
        this.characters = characters;
    }


    afficheEquip() {
        $('#outils').append("<img class='lock' id=" + this.slug + " src=" + this.img + ">");
    }

    updateEquipement(slug, nb) {
        if (slug === "pelle" && nb === 1) {
            this.img = "src/img/shovel_normal.png";
            this.bonus = this.bonus + 2;
            this.cost = this.cost * 3;
        } else if (slug === "pelle" && nb === 2) {
            this.img = "src/img/pelle_dore.png";
            this.bonus = this.bonus + 2;
            this.cost = this.cost * 5;
        }
        else if(slug === "canne" && nb === 1){
            this.img = "src/img/canne_normal.png";
            this.bonus = this.bonus + 3;
            this.cost = this.cost * 5;
        }
        else if(slug === "canne" && nb === 2){
            this.img = "src/img/canne_dore.png";
            this.bonus = this.bonus + 5;
            this.cost = this.cost * 7;
        }
        else if(slug === "filet" && nb === 1){
            this.img = "src/img/filet_normal.png";
            this.bonus = this.bonus + 5;
            this.cost = this.cost * 4;
        }
        else if(slug === "filet" && nb === 2){
            this.img = "src/img/filet_dore.png";
            this.bonus = this.bonus + 8;
            this.cost = this.cost * 8;
        }
    }

}


var craft = new Equipements("craft", "src/img/craft.png", 100, 3, 3, "meli");
var object = new Equipements("objet", "src/img/objet.png", 100, 3, 3, "melo");
var shovel = new Equipements("pelle", "src/img/pelle_rudimentaire.png", 100, 3, 3, "thibou");
var fish = new Equipements("canne", "src/img/canne_rudimentaire.png", 100, 3, 3, "pollux");
var filet = new Equipements("filet", "src/img/filet_rudimentaire.png", 100, 3, 3, "djason");
var navet = new Equipements("navet", "src/img/navet.png", 100, 3, 3, "daisy");

var allequipement = [craft, object, shovel, fish, filet, navet];