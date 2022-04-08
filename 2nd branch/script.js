// requesting number of cards to play
// it must be an even number between 4 and 14
let numberOfCards = 1
while (numberOfCards % 2 != 0 || numberOfCards < 4 || numberOfCards > 14) {
    alert("Por favor, escolha um NÚMERO PAR entre 4 e 14.")
    numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));
}



// bringing the list of images to work with
let listOfImages = [
    "bobrossparrot.gif","explodyparrot.gif",
    "fiestaparrot.gif","metalparrot.gif",
    "revertitparrot.gif","tripletsparrot.gif",
    "unicornparrot.gif"]
// creating the deck of images
function deckOfImages(n) {
    let deckOfImages = []
    for (let i = 0; i < n/2; i++) {
        deckOfImages.push(listOfImages[i]);
        deckOfImages.push(listOfImages[i]);
    }    
    return deckOfImages;
}
// function to shuffle he deck
function comparer() { 
    return Math.random() - 0.5; 
}
// shufflig the deck
let myDeckOfImages = deckOfImages(numberOfCards).sort(comparer);
// creating the display of the cards on the screen
const deck = document.querySelector(".deck");
for (let n = 0; n < numberOfCards; n++) {
    // bringing card html inside javaScript code
    let card =  `<div class="card" onclick="flipCard(this)">
                    <div class="back">
                        <img src="./img/back.png" alt="">
                    </div>
                    <div class="front flip">
                        <img src="./img/${myDeckOfImages[n]}" alt="" srcset="">
                    </div>
                </div>`

    deck.innerHTML += card;
}


let flips = 0;
let score = 0;
let card = "";
let backFace = "";
let frontFace = "";
let flippedCards = [];

// creating the function to flip the cards
function flipCard(clicked) {
    card = clicked;
    back = card.querySelector(".back");
    front = card.querySelector(".front");
    image = front.querySelector("img").src;

    back.classList.toggle("flip");
    front.classList.toggle("flip");

    let flippedCard = {card:"", back:"", front:"", image:""}; //a linha que fez a diferença
    flippedCard.card = card;
    flippedCard.back = back;
    flippedCard.front = front;
    flippedCard.image = image;

    flippedCards.push(flippedCard);

    if(flippedCards.length == 2) {
        isEqual();        
    }
    flips++
    isOver();
}

function unflipCards() {
    // get the back of the first card and turn it
    // get the front of the first card and turn it

    // get the back of the second card and turn it
    // get the front of the second card and turn it

    let backOne = flippedCards[0].back
    backOne.classList.toggle("flip");
    let frontOne = flippedCards[0].front
    frontOne.classList.toggle("flip");

    let backTwo = flippedCards[1].back
    backTwo.classList.toggle("flip");
    let frontTwo = flippedCards[1].front
    frontTwo.classList.toggle("flip");

    flippedCards = []; // coloquei aqui só para fazer rodar o setTimeout
}

function isEqual() {
    // get the first card image in flippedCards
    // get the second card image in flippedCards
    // compare them
    // return true if they are equal
    // return false if they are not
    let imageOne = flippedCards[0].image;
    let imageTwo = flippedCards[1].image;

    if (imageOne == imageTwo) {
        alert(true);
        flippedCards = [];
        score++
    } else {
        alert(false);
        setTimeout(unflipCards, 1 * 1000);        
    }
}

function isOver() {
    if (score == numberOfCards/2) {
        alert("end game");
        alert(`Total flips: ${flips}`);
    }
}
