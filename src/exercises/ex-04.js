
const gewicht = Number(process.argv[2]);
const groesseCm = Number(process.argv[3]);

const groesseM = groesseCm / 100;

const bmi = gewicht / (groesseM);

console.log("BMI:", bmi.toFixed(2));
