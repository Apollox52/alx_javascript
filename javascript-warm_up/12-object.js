const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("12")) {
    lines[i] = lines[i].replace("12", "89");
  }
}

console.log(lines.join('\n'));
