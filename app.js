let passwordLength = 8; // corrected variable name

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passRangeInputEl = document.getElementById("passRangeInput");
const passRangeValueEl = document.getElementById("passRangeValue");
const genBtnEl = document.getElementById("genBtn");

const generatePassword = (passLength) => {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = isNumbers ? "0123456789" : "";
  const symbols = isSymbols ? "!@#$%^&*()_+" : "";

  const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;

  let password = "";

  for(let i = 0; i < passLength; i++){
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
  }
  return password;
};

passRangeInputEl.addEventListener("input", (e) => {
  passwordLength = +e.target.value; // corrected variable name
  passRangeValueEl.innerText = passwordLength;
});

genBtnEl.addEventListener("click", () => {
  const upperCaseCheckEl = document.getElementById("uppercase");
  const numbersCheckEl = document.getElementById("numbers");
  const symbolsCheckEl = document.getElementById("symbols");

  isUpperCase = upperCaseCheckEl.checked;
  isNumbers = numbersCheckEl.checked;
  isSymbols = symbolsCheckEl.checked;

  const passwordEl = document.getElementById("password"); // define passwordEl

  const password = generatePassword(passwordLength); // corrected variable name
  passwordEl.innerHTML = password;
  console.log("Generated password:", password);
});

// Ensure passwordEl is defined in this scope
const passwordEl = document.getElementById("password");
passwordEl.addEventListener("click", (e) => {
  if (e.target.innerText.length > 0) {
    navigator.clipboard
      .writeText(passwordEl.innerText)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        alert("Could not copy");
      });
  }
});
