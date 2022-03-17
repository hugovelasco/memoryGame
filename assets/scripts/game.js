let game = {

    carmaker: [
        "audi",
        "bmw",
        "chevrolet",
        "ford",
        "hyundai",
        "jeep",
        "kia",
        "renault",
        "toyota",
        "volkswagen"],

    cards: null,

    createCardFromCarmaker: function() {
        this.cards = [];

        this.carmaker.forEach((carmaker) => {
            this.cards.push(this.createPairFromCarmaker(carmaker));
        });
        this.cards = this.cards.flatMap((pair) => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairFromCarmaker: function(brand) {
        return [{
            id: this.createId(brand),
            icon: brand,
            flipped: false,
        }, {
            id: this.createId(brand),
            icon: brand,
            flipped: false,
        }];
    },

    createId: function(id) {
        return id + "_" + parseInt(Math.random() * 1000);
    },

    shuffleCards: function(cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    },

};

