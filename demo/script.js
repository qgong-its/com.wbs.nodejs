// You can work here or download the template

const choiceBtns = document.querySelectorAll("#selection > button");

let selectedChoice = null;

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    choiceBtns.forEach((btn) => {
      btn.classList.remove(
        "ring-3",
        "ring-orange-500",
        "scale-110",
        "duration-75",
        "animate-pulse",
      );
      btn.classList.add("opacity-60");
    });

    selectedChoice = btn.id;

    btn.classList.add(
      "ring-3",
      "ring-orange-500",
      "scale-110",
      "duration-75",
      "animate-pulse",
    );
    btn.classList.remove("opacity-60");
  });
});

let playResult = [];
let usrScore = 0;
let cpuScore = 0;

const palyBtn = document.getElementById("play-button");
palyBtn.addEventListener("click", () => {
  if (!selectedChoice) {
    alert("Please select Rock, Paper, or Scissors first!");
    return;
  }

  playResult = playRound(selectedChoice);

  const resultDisplay = document.getElementById("result");
  resultDisplay.style.whiteSpace = "pre-line";
  resultDisplay.textContent = `Result: ${playResult[0]}\n
    You Choice: ${playResult[1]}\n
    CPU choice: ${playResult[2]}`;

  if (playResult[0] === "Win") {
    usrScore += 1;
    document.getElementById("user-score").textContent = usrScore;
  } else if (playResult[0] === "Lose") {
    cpuScore += 1;
    document.getElementById("computer-score").textContent = cpuScore;
  }
});

// rockPaperScissors.js
function playRound(selectedChoice) {
  const result = [];

  const choices = ["rock", "paper", "scissors"];

  const userIdx = choices.indexOf(selectedChoice.toLowerCase());

  const cpuIdx = Math.floor(Math.random() * 3);

  if (userIdx === -1) return console.log("ERROR: Invalid input");

  if (userIdx === cpuIdx) {
    result.push("Draw", selectedChoice, choices[cpuIdx]);
  } else if ((userIdx - cpuIdx + 3) % 3 === 1) {
    result.push("Win", selectedChoice, choices[cpuIdx]);
  } else {
    result.push("Lose", selectedChoice, choices[cpuIdx]);
  }

  return result;
}
