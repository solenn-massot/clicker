class Characters {
    constructor(nom, id, desc, img, cost, bonus, compteur)
    {
        this.nom = nom;
        this.id = id;
        this.desc = desc;
        this.img = img;
        this.cost = cost;
        this.bonus = bonus;
        this.compteur = 0;
    }

    updateCost(){
        this.cost = this.cost + Math.round(this.cost/2);
    }

    updateBonus(){
        this.bonus = Math.round(this.bonus * 1.1);
    }
}

var meli = new Characters("Méli", "meli", "Le neveu de Nook toujours là pour donner un coup de main", "src/img/méli.png", 250, 3);
var melo = new Characters("Mélo", "melo", "Le neveu de Nook toujours là pour donner un coup de main", "src/img/mélo.png", 350, 4);
var thibou = new Characters("Thibou","thibou",  "Ce vieux hibou connait absolument tout sur tout, mais ne lui donnez pas d'insectes..", "src/img/thibou.png", 500, 5);
var pollux = new Characters("Pollux", "pollux", "Ce gentil castor est prêt à vous racheter tout votre poisson !", "src/img/pollux.png", 700, 6);
var djason = new Characters("Djason", "djason", "Ce caméléon est prêt à passer un pacte avec vous pour vos papillons..", "src/img/djason.png", 800, 7 );
var daisy = new Characters("Daisy Mae", "daisy", "Daisy Mae est là pour vous vendre des navets et vous donner l'opportunité de devenir riche", "src/img/daisy_mae.png", 900, 8);