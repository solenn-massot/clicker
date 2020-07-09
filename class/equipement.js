class Equipements {
    constructor(slug, img, cost, bonus, characters, nb = 0) {
        this.slug = slug;
        this.img = img;
        this.cost = cost;
        this.bonus = bonus;
        this.nb = nb;
        this.characters = characters;
    }


    afficheEquip() {
        $('#outils').append("<img class='lock' id=" + this.slug + " src=" + this.img + ">");
    }

    updateEquipement(slug, nb) {
        if (slug === "pelle" && nb === 1) {
            this.img = "src/img/shovel_normal.png";
            this.bonus = this.bonus * 2;
            this.cost = this.cost * 3;
        } else if (slug === "pelle" && nb === 2) {
            this.img = "src/img/pelle_dore.png";
            this.bonus = this.bonus * 3;
            this.cost = this.cost * 5;
        } else if (slug === "canne" && nb === 1) {
            this.img = "src/img/canne_normal.png";
            this.bonus = this.bonus * 2;
            this.cost = this.cost * 5;
        } else if (slug === "canne" && nb === 2) {
            this.img = "src/img/canne_dore.png";
            this.bonus = this.bonus * 3;
            this.cost = this.cost * 7;
        } else if (slug === "filet" && nb === 1) {
            this.img = "src/img/filet_normal.png";
            this.bonus = this.bonus * 2;
            this.cost = this.cost * 4;
        } else if (slug === "filet" && nb === 2) {
            this.img = "src/img/filet_dore.png";
            this.bonus = this.bonus * 3;
            this.cost = this.cost * 8;
        }
    }

    buy() {
        this.nb = this.nb + 1;
        $('#o_' + this.slug).empty();
        $('#o_' + this.slug).append("<img src=" + this.img + ">");
        $('#' + this.slug).remove();
    }

}


var craft = new Equipements("craft", "src/img/craft.png", 400, 5, "meli");
var object = new Equipements("objet", "src/img/objet.png", 700, 6, "melo");
var shovel = new Equipements("pelle", "src/img/pelle_rudimentaire.png", 1200, 8, "thibou");
var fish = new Equipements("canne", "src/img/canne_rudimentaire.png", 2000, 10, "pollux");
var filet = new Equipements("filet", "src/img/filet_rudimentaire.png", 2500, 15, "djason");
var navet = new Equipements("navet", "src/img/navet.png", 5000, 20, "daisy");

var allequipement = [craft, object, shovel, fish, filet, navet];