const args = process.argv.slice(2);

const key = parseInt(args[0]);
const type = args[1].trim();
const txt = args.slice(2).join(" ");

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let newTxt = "";

function getShiftedIndex(index, shift) {
  return (((index + shift) % 26) + 26) % 26;
}

if (isNaN(key) || !type || !txt) {
  console.log(`Usage: node caesarCipher.js <key> <encrypt|decrypt> "<text>"`);
} else {
  const normalizedKey = ((key % 26) + 26) % 26;
  const finalShift = type === "encrypt" ? normalizedKey : -normalizedKey;
  for (const char of txt) {
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
