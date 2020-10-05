// Assignment Code
var generateBtn = document.querySelector("#generate");
var masterPassword = [];

var lowerCaseAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//uppercase assignment
var upperCaseAlphabet = lowerCaseAlphabet.map((lowerCaseAlphabet) =>
  lowerCaseAlphabet.toUpperCase()
);
//numeric assignment
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//special character assignment
var specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "()",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "/",
];
// Write password to the #password input
function writePassword() {
  let passwordLength = prompt(
    "Choose password length from 8 to 128 characters"
  );

  if (
    passwordLength < 8 ||
    passwordLength > 128
    //This also works for empty strings, but need an answer for inputs that are Not a Number like "chair" problem is all outputs are coming back as strings.
  ) {
    //error handling for answers outside paremeters
    alert("Error. Please enter number between 8 and 128");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
