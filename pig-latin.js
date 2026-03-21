const args = process.argv.slice(2);

const txt = args.slice(0).join(" ").split(" ");

const suffix = "ay ";

let str = "";

for (let word of txt) {
  if (!word || !/[a-zA-Z]/.test(word)) {
    str += word + " ";
    continue;
  }

  word = word.toLowerCase();

  const quMatch = word.match(/^s?qu/);

  if (quMatch) {
    const prefix = quMatch[0];
    str += word.substring(prefix.length) + prefix + suffix;
  } else {
    const prefix = word.split(/[aeiou]+/, 1)[0];

    if (!prefix) {
      str += word + "w" + suffix;
    } else {
      // str += word.substring(prefix.length) + prefix + suffix;
      str += word.replace(prefix, "") + prefix + suffix;
    }
  }
}

str = str.trim();

if (!str) {
  console.log(`Usage: node pig-latin.js "<text>"`);
} else {
  console.log(str);
}
