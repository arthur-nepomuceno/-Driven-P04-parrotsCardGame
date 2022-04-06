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
    // shufflig the deck
    return deckOfImages;
}

// function to shuffle he deck
function comparer() { 
    return Math.random() - 0.5; 
}

let myDeckOfImages = deckOfImages(numberOfCards).sort(comparer);


// creating the display of the cards on the screen
const deck = document.querySelector(".deck");
for (let n = 0; n < numberOfCards; n++) {
    // bringing card html inside javaScript code
    let card =  `<div class="card" onclick="flipCard(this)">
                    <div class="face back-face">
                        <img src="/img/back.png" alt="">
                    </div>
                    <div class="face front-face">
                        <img src="/img/${myDeckOfImages[n]}" alt="" srcset="">
                    </div>
                </div>`

    deck.innerHTML += card;
}

function flipCard(card) {
    let backFace = card.querySelector(".back-face")
    let frontFace = card.querySelector(".front-face")

    backFace.setAttribute("style", "transform: rotateY(180deg)");
    frontFace.setAttribute("style", "transform: rotate(0deg);")
}
