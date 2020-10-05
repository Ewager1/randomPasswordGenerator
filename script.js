// Assignment Code
var generateBtn = document.querySelector("#generate");
var masterPassword = [];
var passwordLength = 0;
var includesLowerCase = true;
var includesUpperCase = true;
var includesNumerical = true;
var includesSpecialChars = true;

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

//section: password Length
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

  //section: charactertypes
  //confirm uppercase
  uppercase = confirm("Would you like uppercase characters?");
  if (uppercase === false) {
    includesUpperCase = false;
  } else {
    includesUpperCase = true;
  }
  //confirm lowercase
  lowercase = confirm("Would you like lowercase characters?");
  if (lowercase === false) {
    includesLowerCase = false;
  } else includesLowerCase = true;
  //confirm numeric.
  numeric = confirm("Would you like numeric characters?");
  if (numeric === false) {
    includesNumerical = false;
  } else includesNumerical = true;
  //confirm special
  special = confirm("Would you like special characters?");
  if (special === false) {
    includesSpecialChars = false;
  } else {
    includesSpecialChars = true;
  }

  //error handling: at least one character type must be choseen
  if (
    includesLowerCase === false &&
    includesUpperCase === false &&
    includesNumerical === false &&
    includesSpecialChars === false
  )
    alert("Error. You must choose at least one character type.");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
