const choices = ["rock", "paper", "scissors"];

const userIdx = choices.indexOf(process.argv[2]?.toLowerCase());

const cpuIdx = Math.floor(Math.random() * 3);

if (userIdx === -1)
  return console.log("ERROR: Invalid input. Use: rock | paper | scissors");

console.log(`You chose: ${choices[userIdx]}`);

console.log(`CPU chose: ${choices[cpuIdx]}`);

if (userIdx === cpuIdx) {
  console.log("Result: Draw");
} else if ((userIdx - cpuIdx + 3) % 3 === 1) {
  // 索引差值为 1 或 -2 时玩家赢
  console.log("Result: Win");
} else {
  console.log("Result: Lose");
}
