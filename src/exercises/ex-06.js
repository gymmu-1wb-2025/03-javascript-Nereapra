
const number = Number(process.argv[2]);
if (isNaN(number)) {
  console.log("Bitte gib eine gültige Zahl ein.");
} else {
  const remainder = number % 3;
  if (remainder === 0) {
    console.log(number + " ist durch 3 teilbar.");
  } else {
    console.log(number + " ist nicht durch 3 teilbar.");
  }
}
