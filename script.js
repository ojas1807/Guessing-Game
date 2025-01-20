let randomNumber;
let attempts = 0;

document.getElementById("start-game").addEventListener("click", function () {
  const maxNumber = document.getElementById("max-number").value;
  if (isNaN(maxNumber) || maxNumber <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  attempts = 0;

  document.getElementById("game-area").classList.remove("hidden");
  document.getElementById("hint").textContent = "";
});

document.getElementById("submit-guess").addEventListener("click", function () {
  const guess = document.getElementById("guess-input").value;

  if (guess.toLowerCase() === "quit") {
    document.getElementById("hint").textContent = "Game Quit. Thanks for playing!";
    return;
  }

  if (isNaN(guess) || guess === "") {
    document.getElementById("hint").textContent = "Please enter a valid number.";
    return;
  }

  attempts++;
  const numericGuess = Number(guess);

  if (numericGuess === randomNumber) {
    document.getElementById(
      "hint"
    ).textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
  } else if (numericGuess < randomNumber) {
    document.getElementById("hint").textContent = "Hint: Too low, try again!";
  } else {
    document.getElementById("hint").textContent = "Hint: Too high, try again!";
  }
});

document.getElementById("quit-game").addEventListener("click", function () {
  document.getElementById("hint").textContent = "Game Quit. Thanks for playing!";
  document.getElementById("guess-input").value = "";
});
