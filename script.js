
// Assignment Code
var masterPassword = [];
var generateBtn = document.querySelector("#generate");

var lowerCaseAlphabetOptions = [
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
var upperCaseAlphabetOptions = lowerCaseAlphabetOptions.map(
  (lowerCaseAlphabetOptions) => lowerCaseAlphabetOptions.toUpperCase()
);
//numeric assignment

var numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//special character assignment
var specialOptions = [
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

//section: collects user input then outputs characterlists based on user choices
function getUserInput() {
  //password Length
  var lengthOption = parseInt(
    prompt("Choose password length from 8 to 128 characters")
  );

  if (
    lengthOption < 8 ||
    lengthOption > 128
    //This spot needs error handling for inputs that are not a number
  ) {
    alert("Error. Please enter number between 8 and 128");
  }
  //uppercase
  var uppercaseOption = confirm("Would you like uppercase characters?");
  //lowercase
  var lowercaseOption = confirm("Would you like lowercase characters?");
  //numeric.
  var numericOption = confirm("Would you like numeric characters?");
  //special
  var specialOption = confirm("Would you like special characters?");

  //error handling: at least one character type must be choseen
  if (
    lowercaseOption === false &&
    uppercaseOption === false &&
    numericOption === false &&
    specialOption === false
  ) {
    alert("Error. You must choose at least one character type.");
  }
  //holds all user answers for generate password. Note to self: If true, the associated index becomes its value.
  var userAnswers = {
    uppercaseOption,
    lowercaseOption,
    numericOption,
    specialOption,
    lengthOption,
  };

  return userAnswers;
}
function createList() {
  var userAnswers = getUserInput();
  var passwordObject = {
    passwordList:[],
    lengthOption:userAnswers.lengthOption,
  } ;
  if (userAnswers.lowercaseOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(lowerCaseAlphabetOptions);
  }
  if (userAnswers.uppercaseOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(upperCaseAlphabetOptions);
  }
  if (userAnswers.numericOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(numericOptions);
  }
  if (userAnswers.specialOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(specialOptions);
  }
  return passwordObject;
}

function generatePassword() {
  //consists of arrays concated from user answers.
  var passwordObject = createList();
  //empty string for password
  var password = "";
  //math randomizer given to class from teacher
  for (i = 0; i < passwordObject.lengthOption; i++) {
    //finds a randomindex
    var index = Math.floor(Math.random() * passwordObject.passwordList.length);
    var password = password.concat(passwordObject.passwordList[index]);
  }
  return password;
  // var passwordPossible = passwordList(index)
  // console.log(passwordPossible)
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //create logic that combines character lists into master list depending on user answers
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
