// requesting number of card to play
// it must be an even number between 4 and 14
let numberOfCards = 1
while (numberOfCards % 2 != 0 || numberOfCards < 4 || numberOfCards > 14) {
    numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));
}

// bringing card html inside javaScript code
let card =  `<div class="card" onclick="flipCard(this)">
                <div class="face back-face">
                    <img src="/img/back.png" alt="">
                </div>
                <div class="face front-face">
                    <img src="/img/revertitparrot.gif" alt="" srcset="">
                </div>
            </div>`

// getting .deck <div>
// and writting cards inside of it accordingly to user's choice
// the idea is to use "for", laying down as many cards as choosen
const deck = document.querySelector(".deck");
for (let n = 0; n < numberOfCards; n++) {
    deck.innerHTML += card;
}


function flipCard(card) {
    let backFace = card.querySelector(".back-face")
    let frontFace = card.querySelector(".front-face")

    backFace.setAttribute("style", "transform: rotateY(180deg)");
    frontFace.setAttribute("style", "transform: rotate(0deg);")
}