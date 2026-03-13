console.log("rock, paper or scissors?");

const args = process.argv.slice(2)[0].toLowerCase();

const strArray = ["rock", "paper", "scissors"];

const str = strArray[Math.floor(Math.random() * strArray.length)];

if (strArray.includes(args)) {
  if (args.toLowerCase() === str) {
    console.log("draw");
  } else {
    switch (args) {
      case "rock":
        console.log(
          "scissors" === str ? "win" : "paper" === str ? "lose" : "ERROR rock",
        );
        break;
      case "paper":
        console.log(
          "rock" === str ? "win" : "scissors" === str ? "lose" : "ERROR paper",
        );
        break;
      case "scissors":
        console.log(
          "paper" === str ? "win" : "rock" === str ? "lose" : "ERROR scissors",
        );
        break;
      default:
        console.log("ERROR switch");
    }
  }
} else {
  console.log("ERROR includes");
}
