const args = process.argv.slice(2);

const key = parseInt(args[0]);
const type = args[1].trim();
const txt = args[2].trim();

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let newTxt = "";

function getShiftedIndex(index, shift) {
  return (((index + shift) % 26) + 26) % 26;
}

if (isNaN(key) || !type || !txt) {
  console.log(`Usage: node script.js ${key} ${type} ${txt}S`);
} else {
  const normalizedKey = ((key % 26) + 26) % 26;
  const finalShift = type === "encrypt" ? normalizedKey : -normalizedKey;
  const txtArray = txt.split("");
  for (const char of txtArray) {
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) {
      newTxt += char;
    } else {
      const isUpper = char !== char.toLowerCase();
      newTxt += isUpper
        ? alphabet[getShiftedIndex(index, finalShift)].toUpperCase()
        : alphabet[getShiftedIndex(index, finalShift)];
    }
  }
}

console.log(newTxt);
