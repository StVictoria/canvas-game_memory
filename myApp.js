document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    { id: 1, name: "burger", src: "/images/burger.jpg" },
    { id: 2, name: "cake", src: "/images/cake.png" },
    { id: 3, name: "choco", src: "/images/choco.png" },
    { id: 4, name: "japan", src: "/images/japan.png" },
    { id: 5, name: "meat", src: "/images/meat.jpg" },
    { id: 6, name: "milk", src: "/images/milk.png" },
    { id: 7, name: "pancake", src: "/images/pancake.png" },
    { id: 8, name: "pizza", src: "/images/pizza.png" },
    { id: 9, name: "burger", src: "/images/burger.jpg" },
    { id: 10, name: "cake", src: "/images/cake.png" },
    { id: 11, name: "choco", src: "/images/choco.png" },
    { id: 12, name: "japan", src: "/images/japan.png" },
    { id: 13, name: "meat", src: "/images/meat.jpg" },
    { id: 14, name: "milk", src: "/images/milk.png" },
    { id: 15, name: "pancake", src: "/images/pancake.png" },
    { id: 16, name: "pizza", src: "/images/pizza.png" },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const gameBoard = document.querySelector(".gameBoard");
  const result = document.querySelector(".scoreResult");
  let openCards = [];
  let openCardsId = [];
  let matchedCards = [];

  //board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "/images/blank2.jpg");
      card.setAttribute("class", `cardItem ${i}`);
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gameBoard.appendChild(card);
    }
  }
  createBoard();

  // card flipping
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    openCards.push(cardArray[cardId].name);
    openCardsId.push(cardId);
    this.setAttribute("src", cardArray[cardId].src);

    if (openCards.length === 3) {
      checkForMatch();
    }
    console.log("openCards", openCards);
    console.log("openCardsId", openCardsId);
  }

  //check matching
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = openCardsId[0];
    const optionTwoId = openCardsId[1];

    if (openCards[0] === openCards[1] && openCardsId[0] !== openCardsId[1]) {
      console.log("You found a match");
      cards[optionOneId].classList.add("matched");
      cards[optionTwoId].classList.add("matched");
      matchedCards.push(openCards);
      console.log("matchedCards.length", matchedCards.length);
    } else {
      cards[optionOneId].setAttribute("src", "/images/blank2.jpg");
      cards[optionTwoId].setAttribute("src", "/images/blank2.jpg");
      console.log("Sorry, try again");
    }

    openCards.splice(0, 2);
    openCardsId.splice(0, 2);
    result.textContent = matchedCards.length;
    if (matchedCards.length === cardArray.length / 2) {
      result.textContent = "Congratulations";
    }

    console.log("check for match");
    console.log("cards[optionOneId]", cards[optionOneId]);
    console.log("cards[optionTwoId]", cards[optionTwoId]);
  }
});
