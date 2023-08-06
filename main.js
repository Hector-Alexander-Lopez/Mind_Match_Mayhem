// An array containing image URLs for the images
const emojis = [
  "images/astronaut.jpg",
  "images/astronaut.jpg",
  "images/baby.jpg",
  "images/baby.jpg",
  "images/cat-coder.jpg",
  "images/cat-coder.jpg",
  "images/cat.jpg",
  "images/cat.jpg",
  "images/gorilla.jpg",
  "images/gorilla.jpg",
  "images/monkey.jpg",
  "images/monkey.jpg",
  "images/panda.jpg",
  "images/panda.jpg",
  "images/rabbit.jpg",
  "images/rabbit.jpg",
];

// Function to shuffle the array randomly
function shuffleEmojis(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let shuffledEmojis = shuffleEmojis(emojis);

// Adds images to the cards
for (let i = 0; i < shuffledEmojis.length; i++) {
  let box = document.createElement("div");
  box.className = "card";
  // Uses the image URL as the background image
  box.style.backgroundImage = `url(${shuffledEmojis[i]})`;

  // Add click event listener to each box
  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].style.backgroundImage ===
          document.querySelectorAll(".boxOpen")[1].style.backgroundImage
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (document.querySelectorAll(".boxMatch").length === emojis.length) {
            alert("You Win!");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  document.querySelector(".game").appendChild(box);
}

function resetBoard() {
  // Clears the game container
  document.querySelector(".game").innerHTML = "";

  // Reshuffles the cards
  shuffledEmojis = shuffleEmojis(emojis);

  // Add pictures to the cards
  for (let i = 0; i < shuffledEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.style.backgroundImage = `url(${shuffledEmojis[i]})`;

    // Add click event listener to each box
    box.onclick = function () {
      this.classList.add("boxOpen");
      setTimeout(function () {
        if (document.querySelectorAll(".boxOpen").length > 1) {
          if (
            document.querySelectorAll(".boxOpen")[0].style.backgroundImage ===
            document.querySelectorAll(".boxOpen")[1].style.backgroundImage
          ) {
            document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
            document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

            document
              .querySelectorAll(".boxOpen")[1]
              .classList.remove("boxOpen");
            document
              .querySelectorAll(".boxOpen")[0]
              .classList.remove("boxOpen");

            if (
              document.querySelectorAll(".boxMatch").length === emojis.length
            ) {
              alert("You Win!");
            }
          } else {
            document
              .querySelectorAll(".boxOpen")[1]
              .classList.remove("boxOpen");
            document
              .querySelectorAll(".boxOpen")[0]
              .classList.remove("boxOpen");
          }
        }
      }, 500);
    };

    document.querySelector(".game").appendChild(box);
  }
}
