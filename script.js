// requesting number of cards to play
// it must be an even number between 4 and 14
let numberOfCards = 1
while (numberOfCards % 2 != 0 || numberOfCards < 4 || numberOfCards > 14) {
    alert("Por favor, escolha um NÚMERO PAR entre 4 e 14.")
    numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));
}



// bringing in the list of images to work with
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

// function to shuffle the deck
function comparer() { 
    return Math.random() - 0.5; 
}
// shufflig the deck
let myDeckOfImages = deckOfImages(numberOfCards).sort(comparer);


// creating the display of the cards on the screen
const deck = document.querySelector(".deck");
deck.setAttribute(`style`, `width: ${(numberOfCards/2 * 118) + ((numberOfCards/2) * 34)}px`)
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

// creating function to flip the cards
let flips = 0;
let totalFlips = 0;
function flipCard(card) {
    let backFace = card.querySelector(".back-face")
    let frontFace = card.querySelector(".front-face")
    
    backFace.setAttribute("style", "transform: rotateY(180deg)");
    frontFace.setAttribute("style", "transform: rotateY(0deg);");

    getImage(frontFace);

    flips++
    totalFlips++
    //alert(`Jogada atual: ${flips}º. Jogadas totais: ${totalFlips}.`)

    if (flips == 2) {
        flips = 0;
        setTimeout(flipBackCards, 1 * 1000)                        
    }    
}

// getting the name of the image on the card flipped
// and saving it on a list of flipped cards
let flippedCards = ["",""]
function getImage(cardFace){
    let image = cardFace.querySelector("img");

    if (flippedCards[0] === "") {
        flippedCards[0] = image;
    } else {
        flippedCards[1] = image;
    }
}

// comparing images and cleaning the list after comparison
// it returns "true" if they are equal
// it returns "false" if they are not
function compareImages(arr){
    let imageOne = arr[0];
    let imageTwo = arr[1];
    
    if (imageOne !== ""  && imageTwo !== ""){
        if (imageOne.src === imageTwo.src) {
            return true        
        } else {
            return false                  
        }
    }
}


// flipping cards back if they are different
function flipBackCards(){

    let imageOne = flippedCards[0];
    let imageTwo = flippedCards[1];

    if (imageOne !== ""  && imageTwo !== "") {
        if (imageOne.src !== imageTwo.src) {
            //sequencia de codigo para virar as cartas de volta
            // pegar o html de cada imagem pela posição na lista
            // usar esse html para chegar na carta
            // mudar os atributos da carta
            let cardOneFrontFace = flippedCards[0].parentNode;
            let cardOne = cardOneFrontFace.parentNode;

            let cardTwoFrontFace = flippedCards[1].parentNode;
            let cardTwo = cardTwoFrontFace.parentNode;

            let cardOneBackFace= cardOne.querySelector(".back-face");
            let cardTwoBackFace= cardTwo.querySelector(".back-face");

            cardOneBackFace.setAttribute("style", "transform: rotateY(0deg)");
            cardOneFrontFace.setAttribute("style", "transform: rotateY(180deg);");
            cardTwoBackFace.setAttribute("style", "transform: rotateY(0deg)");
            cardTwoFrontFace.setAttribute("style", "transform: rotateY(180deg);")
        }
    }
    flippedCards[0] = "";
    flippedCards[1] = "";
}





