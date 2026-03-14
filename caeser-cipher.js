const args = process.argv.slice(2);

const key = parseInt(args[0]);
const type = args[1].trim();
const txt = args[2].trim();

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let newTxt = "";

function getShiftedIndex(key, type, index) {
  const shift = ((key % 26) + 26) % 26;
  if (type === "encrypt") {
    return (index + shift) % 26;
  } else if (type === "decrypt") {
    return (((index - shift) % 26) + 26) % 26;
  } else {
    console.log("false type");
    return;
  }
}

if (isNaN(key) || type === "" || txt === "") {
  console.log("false input");
  return;
} else {
  const txtArray = txt.split("");
  for (const char of txtArray) {
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) {
      newTxt += char;
    } else {
      const isUpper = char !== char.toLowerCase();
      newTxt += isUpper
        ? alphabet[getShiftedIndex(key, type, index)].toUpperCase()
        : alphabet[getShiftedIndex(key, type, index)];
    }
  }
}

console.log(newTxt);
