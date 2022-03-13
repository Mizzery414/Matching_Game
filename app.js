document.addEventListener("DOMContentLoaded", () => {
  //Card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random()); //shortcut to shuffle array randomly

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];

  //Create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //Check for card matches
  function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry try again!");
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //Flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 300);
    }
  }

  createBoard();
});

/* #1  
    Photo by <a href="https://unsplash.com/@clementduguerre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clément Duguerre</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

    #2 
    Photo by <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Horner</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

    #3
    Photo by <a href="https://unsplash.com/@vincentledvina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincent Ledvina</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    #4
    Photo by <a href="https://unsplash.com/@rodlong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rod Long</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    #5
    Photo by <a href="https://unsplash.com/@dylancalluy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dylan Calluy</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    #6
    Photo by <a href="https://unsplash.com/@clementduguerre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clément Duguerre</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    #7 white marble
    Photo by <a href="https://unsplash.com/@hngstrm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Henry & Co.</a> on <a href="https://unsplash.com/s/photos/white-marble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    #8 black sand
    Photo by <a href="https://unsplash.com/@adrienolichon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adrien Olichon</a> on <a href="https://unsplash.com/s/photos/black-marble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

*/
