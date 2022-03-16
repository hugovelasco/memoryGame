const FRONT = "card_front", BACK = "card_back", CARD = "card", ICON = "icon";

let carmaker = ["audi",
    "bmw",
    "chevrolet",
    "ford",
    "hyundai",
    "jeep",
    "kia",
    "renault",
    "toyota",
    "volkswagen"
];

let cards = null;

startGame();

function startGame() {
    cards = createCardFromCarmaker(carmaker);
    shuffleCards(cards);
    initializeCards(cards);
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("boardGame");

    cards.forEach((card) => {
        let cardElement = document.createElement('div');
            cardElement.id = card.id;
            cardElement.classList.add(CARD);
            cardElement.dataset.icon = card.icon;

            createCardContent(card,cardElement);

            cardElement.addEventListener('click',flipCard);
            gameBoard.appendChild(cardElement);
    });
}

function createCardContent(card,cardElement) {

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
    
}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement("div");
    let iconElement = document.createElement("img");
        cardElementFace.classList.add(face);

        if (face === FRONT) {
           iconElement.src = "assets/img/"+card.icon+".svg";
           iconElement.classList.add(ICON);
        } else {
            iconElement.src = "assets/img/waze.svg";
        }

        cardElementFace.appendChild(iconElement);
        element.appendChild(cardElementFace);
    
}

function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0 ) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
    }
}

function createCardFromCarmaker(carmaker) {
    let cards = [];

    carmaker.forEach((carmaker) => {
        cards.push(createPairFromCarmaker(carmaker));
    });
    return cards.flatMap((pair) => pair);
}

function createPairFromCarmaker(brand) {
    return [{
        id: createId(brand),
        icon:brand,
        flipped: false,
    }, {id: createId(brand),
        icon:brand,
        flipped: false,
    }];
}

function createId(id){
    return id + "_" + parseInt(Math.random() * 1000);
};

function flipCard() {
    this.classList.add("flip");
};