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
  let chosenCards = [];
  let chosenCardsId = [];
  let wonCards = [];

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
    chosenCards.push(cardArray[cardId].name);
    chosenCardsId.push(cardId);
    this.setAttribute("src", cardArray[cardId].src);

    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500);
    }

    console.log("flipped");
    console.log("chosenCards", chosenCards);
    console.log("chosenCardsId", chosenCardsId);
    console.log("this", this);
  }

  //check matching
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = chosenCardsId[0];
    const optionTwoId = chosenCardsId[1];

    if (chosenCards[0] === chosenCards[1]) {
      console.log("You found a match");
      cards[optionOneId].setAttribute("src", "/images/white-square.jpg");
      cards[optionTwoId].setAttribute("src", "/images/white-square.jpg");
      wonCards.push(chosenCards);
      console.log("wonCards.length", wonCards.length);
    } else {
      cards[optionOneId].setAttribute("src", "/images/blank2.jpg");
      cards[optionTwoId].setAttribute("src", "/images/blank2.jpg");
      console.log("Sorry, try again");
    }

    chosenCards = [];
    chosenCardsId = [];
    result.textContent = wonCards.length;
    if (wonCards.length === cardArray.length / 2) {
      result.textContent = "Congratulations";
    }

    console.log("check for match");
    console.log("cards[optionOneId]", cards[optionOneId]);
    console.log("cards[optionTwoId]", cards[optionTwoId]);
  }
});
