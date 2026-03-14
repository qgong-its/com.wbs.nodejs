const args = process.argv.slice(2);

const key = parseInt(args[0]);
const type = args[1].trim();
const txt = args[2].trim();

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let newTxt = "";

if (isNaN(key) || type === "" || txt === "") {
  console.log("false input");
  return;
} else {
  const shift = ((key % 26) + 26) % 26;
  const txtArray = txt.split("");
  if (type === "encrypt") {
    for (const char of txtArray) {
      const index = alphabet.indexOf(char.toLowerCase());
      if (index === -1) {
        newTxt += char;
      } else {
        const isUpper = char !== char.toLowerCase();
        newTxt += isUpper
          ? alphabet[(index + shift) % 26].toUpperCase()
          : alphabet[(index + shift) % 26];
      }
    }
  } else if (type === "decrypt") {
    for (const char of txtArray) {
      const index = alphabet.indexOf(char.toLowerCase());
      if (index === -1) {
        newTxt += char;
      } else {
        const isUpper = char !== char.toLowerCase();
        newTxt += isUpper
          ? alphabet[(((index - shift) % 26) + 26) % 26].toUpperCase()
          : alphabet[(((index - shift) % 26) + 26) % 26];
      }
    }
  } else {
    console.log("false type");
  }
}

console.log(newTxt);
