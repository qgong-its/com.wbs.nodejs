const args = process.argv[2]?.trim().toLowerCase();

const suffix = "ay";

let str = "";

const quMatch = args.match(/^s?qu/);
if (quMatch) {
  const prefix = quMatch[0];
  str = args.substring(prefix.length) + "-" + prefix + suffix;
} else {
  const prefix = args.split(/[aeiou]+/, 1)[0];
  if (!prefix) {
    str = args + "-w" + suffix;
  } else {
    str = args.replace(prefix, "") + "-w" + prefix + suffix;
  }
}

console.log(str);
