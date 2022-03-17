const FRONT = "card_front", BACK = "card_back", CARD = "card", ICON = "icon";

startGame();

function startGame() {
    
    initializeCards(game.createCardFromCarmaker());

}

function initializeCards(cards) {
    let gameBoard = document.getElementById("boardGame");

    game.cards.forEach((card) => {
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

function flipCard() {
    this.classList.add("flip");
};