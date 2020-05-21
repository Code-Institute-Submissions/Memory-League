/*----------------------------create list of memory-cards*/
const cards = document.querySelectorAll(
  ".memory-card,.memory-card2,.memory-card3"
);

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
/*----------------------------add flip class when card is clicked*/
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    /*----------------------------on first click*/
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  /*----------------------------on second click*/
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let Match = firstCard.dataset.frontface === secondCard.dataset.frontface;
  

  Match ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  /*----------------------------if it is not a match:*/
  lockBoard = true; // lock the board

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard(); //unlock board when cards have flipped
  }, 1500); //timeout to see the front face when not a match
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 24); //Math.random returns random number between 0 and 1 excluding 1, so * 12 to get 12 numbers
    card.style.order = randomPosition;
  });
})(); //IIFE so the cards get shuffled at the start of the game

cards.forEach((card) => card.addEventListener("click", flipCard));

