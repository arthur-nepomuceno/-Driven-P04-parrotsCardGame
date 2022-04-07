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
function flipCard(card) {
    let backFace = card.querySelector(".back-face")
    let frontFace = card.querySelector(".front-face")

    backFace.setAttribute("style", "transform: rotateY(180deg)");
    frontFace.setAttribute("style", "transform: rotateY(0deg);");

    getImage(frontFace);
    compareImages(flippedCards);
    
    
}

// getting the name of the image on the card flipped
// and saving it on a list of flipped cards
let flippedCards = ["",""]
function getImage(cardFace){
    let image = cardFace.querySelector("img").src;

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
        if (imageOne === imageTwo) {
            alert("equal");
            arr[0] = "";
            arr[1] = "";
        } else {
            alert("different");
            // if they are different, I need to flip back the cards
            // I can do it by changing their rotateY values.
            // but to get this value for each card, I need to use
            // each image name to get it's card properties an change it.
            arr[0] = "";
            arr[1] = "";        
        }
    }
}

/*
// flipping cards back if they are different
function flipBackCards(arr){
    let imageOne = arr[0];
    let imageTwo = arr[1];
    if (imageOne !== ""  && imageTwo !== ""){
        if (imageOne === imageTwo){
            arr[0] = "";
            arr[1] = ""
        } else {
            let cardOne = 
        }
    }

}
*/
