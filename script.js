// ===============================================================================
// ==================== 1.0 - Building the deck on the screen ====================
// ===============================================================================

let num = 1
while (num % 2 != 0 || num < 4 || num > 14) {
    alert("Por favor, escolha um NÚMERO PAR entre 4 e 14.")
    num = Number(prompt("Com quantas cartas quer jogar?"));
}

const arrImages = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif",
"metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"]

const deckOfImages = [];    
for (let i = 0; i < num/2; i++) {
    deckOfImages.push(arrImages[i]);
    deckOfImages.push(arrImages[i]);
}

function comparer() { 
    return Math.random() - 0.5; 
}
const deckShuffled = deckOfImages.sort(comparer);

const deck = document.querySelector(".deck");
deck.setAttribute(`style`, `width: ${(num/2 * 118) + ((num/2) * 34)}px`)

for (let n = 0; n < num; n++) {
    let card =  `<div class="card" onclick="flipCard(this)">
                    <div class="back">
                        <img src="./img/back.png" alt="">
                    </div>
                    <div class="front flip">
                        <img src="./img/${deckShuffled[n]}" alt="" srcset="">
                    </div>
                </div>`
    deck.innerHTML += card;
}

// ===============================================================================
// ====================== 2.0 - Building the flip function =======================
// ===============================================================================

let flips = 0;
let score = 0;
let card = "";
let back = "";
let front = "";
let cardsFlipped = {one:"", two:""};
function flipCard(clicked) {

    if (cardsFlipped.one == "" && cardsFlipped.two == "") {
        flips++
        let flippedCard = {card:"", back:"", front:"", image:""};        

        flippedCard.card = clicked;
        flippedCard.back = clicked.querySelector(".back");
        flippedCard.front = clicked.querySelector(".front");
        flippedCard.image = clicked.querySelector(".front").querySelector("img").src;

        cardsFlipped.one = flippedCard;

        flippedCard.card.setAttribute("onclick", "");
        flippedCard.back.classList.toggle("flip");
        flippedCard.front.classList.toggle("flip");

    } else if (cardsFlipped.one != "" && cardsFlipped.two == "") {
        flips++
        let flippedCard = {card:"", back:"", front:"", image:""};        

        flippedCard.card = clicked;
        flippedCard.back = clicked.querySelector(".back");
        flippedCard.front = clicked.querySelector(".front");
        flippedCard.image = clicked.querySelector(".front").querySelector("img").src;

        cardsFlipped.two = flippedCard;
        
        flippedCard.card.setAttribute("onclick", "");
        flippedCard.back.classList.toggle("flip");
        flippedCard.front.classList.toggle("flip");     
        
        isEqual();
        isOver();        
    }    
}

// ===============================================================================
// ===================== 3.0 - Building the unflip function ======================
// ===============================================================================

function unflipCards() {
    let cardOne = cardsFlipped.one.card
    let backOne = cardsFlipped.one.back
    let frontOne = cardsFlipped.one.front
    backOne.classList.toggle("flip");
    frontOne.classList.toggle("flip");
    cardOne.setAttribute("onclick", "flipCard(this)");

    let cardTwo = cardsFlipped.two.card
    let backTwo = cardsFlipped.two.back
    let frontTwo = cardsFlipped.two.front
    backTwo.classList.toggle("flip");
    frontTwo.classList.toggle("flip");
    cardTwo.setAttribute("onclick", "flipCard(this)");

    cardsFlipped = {one:"", two:""};
}

// ===============================================================================
// ===================== 4.0 - Building auxiliary functions ======================
// ===============================================================================
// = 4.1 - function for comparison
// = 4.2 - function for reloading page
// = 4.3 - function for end message
// = 4.4 - function for counting time
// = 4.5 - function for ending game
// ===============================================================================
// ===============================================================================
// = 4.1 - function for comparison
// ===============================================================================
function isEqual() {
    if(cardsFlipped.one != "" && cardsFlipped.two != "") {
        
        let imageOne = cardsFlipped.one.image;
        let imageTwo = cardsFlipped.two.image;

        if (imageOne == imageTwo) {
            cardsFlipped = {one:"", two:""};
            score++
        } else {
            setTimeout(unflipCards, 1 * 1500);        
        }
    }    
}

// ================================================================================
// = 4.2 - function for reloading page
// ================================================================================
function reset() {
    document.location.reload();
}

// ================================================================================
// = 4.3 - function for end message
// ================================================================================
function endMessage() {
    alert(`FIM DE JOGO!
    Você ganhou em ${flips} jogadas!
    Tempo de jogo: ${chronometer.innerHTML}`);

    let answer = "";
    while (answer != "sim" && answer != "não") {
        answer = prompt('Quer jogar de novo? Digite "sim" ou "não"');
        if (answer == "sim") {
            reset();
        } else if (answer == "não") {
            alert("Valeu por jogar!");
        }
    }    
}

// ================================================================================
// = 4.4 - function for counting time
// ================================================================================
let chronometer = document.querySelector(".chronometer p")
let centiSeconds = 0;
let deciSeconds = 0
let seconds = 0;
let decaSeconds = 0;
let minuts = 0;
function timeCount() {
    centiSeconds++

    if (centiSeconds == 10) {
        deciSeconds++
        centiSeconds = 0;
    }
    if (deciSeconds == 10) {
        seconds ++
        deciSeconds = 0;
    }
    if (seconds == 10) {
        decaSeconds++
        seconds = 0;
    }
    if (decaSeconds == 6) {
        minuts ++
        decaSeconds = 0;
    }    
    chronometer.innerHTML = `0${minuts}:${decaSeconds}${seconds}:${deciSeconds}${centiSeconds}`;
}
let count = setInterval(timeCount, 1 * 10);

// ================================================================================
// = 4.5 - function for ending game
// ================================================================================
function isOver() {
    if (score == num/2) {
        setTimeout(endMessage, 0.5 * 1000);
        clearInterval(count);
    }
}