const strArray = ["rock", "paper", "scissors"];

const args = process.argv[2]?.toLowerCase();

const computerMove = strArray[Math.floor(Math.random() * strArray.length)];

// 定义：key 赢 value
const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

if (!strArray.includes(args)) {
  console.log("Invalid input! Please choose rock, paper, or scissors.");
} else if (args === computerMove) {
  console.log(`Draw! Both chose ${args}`);
} else {
  const result = winsAgainst[args] === computerMove ? "You Win!" : "You Lose!";
  console.log(`${result} (You: ${args} vs CPU: ${computerMove})`);
}
