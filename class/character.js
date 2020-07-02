class Characters {
    constructor(nom, id, desc, img, cost, bonus, nb = 0, compteur = 0, ) {
        this.nom = nom;
        this.id = id;
        this.desc = desc;
        this.img = img;
        this.cost = cost;
        this.bonus = bonus;
        this.nb = nb;
        this.compteur = compteur;
    }

    updateCost() {
        this.cost = Math.ceil(this.cost * 1.2);
    }

    updateBonus() {
        this.bonus = Math.floor(this.bonus * 1.02);
    }

    afficheInfo() {
        if(this.nb === 0)
        {
            $('#name_' + this.id).append(this.nom);
        }
        $('#cost_' + this.id).append(this.cost);
        $('#bonus_' + this.id).append("+" + this.bonus);
        $('#compteur_' + this.id).append(this.compteur);
    }

    removeInfo() {
        var cost = $('#cost_' + this.id);
        cost.empty();
        // console.log(cost);
        var bonus = $('#bonus_' + this.id);
        bonus.empty();
        // console.log(bonus)
        var compteur = $('#compteur_' + this.id);
        compteur.empty();
        // console.log(compteur)
    }
}

var meli = new Characters("Méli", "meli", "Le neveu de Nook toujours là pour donner un coup de main", "src/img/méli.png", 250, 2);
var melo = new Characters("Mélo", "melo", "Le neveu de Nook toujours là pour donner un coup de main", "src/img/mélo.png", 700, 3);
var thibou = new Characters("Thibou", "thibou", "Ce vieux hibou connait absolument tout sur tout, mais ne lui donnez pas d'insectes..", "src/img/thibou.png", 1000, 4);
var pollux = new Characters("Pollux", "pollux", "Ce gentil castor est prêt à vous racheter tout votre poisson !", "src/img/pollux.png", 3000, 5);
var djason = new Characters("Djason", "djason", "Ce caméléon est prêt à passer un pacte avec vous pour vos papillons..", "src/img/djason.png", 8000, 7);
var daisy = new Characters("Daisy Mae", "daisy", "Daisy Mae est là pour vous vendre des navets et vous donner l'opportunité de devenir riche", "src/img/daisy_mae.png", 10000, 10);
var allcharacters = [meli, melo, thibou, pollux, djason, daisy];