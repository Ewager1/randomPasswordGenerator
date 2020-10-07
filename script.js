//Important: The problem is i lost the userinput length when i combined functions. Only the list is outputting.

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
  passwordList = [];
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
  )
    alert("Error. You must choose at least one character type.");
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
  userAnswers = getUserInput();
  passwordList = [];
  if (userAnswers.lowercaseOption === true) {
    passwordList = passwordList.concat(lowerCaseAlphabetOptions);
  }

  if (userAnswers.uppercaseOption === true) {
    passwordList = passwordList.concat(upperCaseAlphabetOptions);
  }
  if (userAnswers.numericOption === true) {
    passwordList = passwordList.concat(numericOptions);
  }
  if (userAnswers.specialOption === true) {
    passwordList = passwordList.concat(specialOptions);
  }
  return passwordList;
}

function generatePassword() {
  //consists of arrays concated from user answers.
  var passwordList = createList();
  //empty string for password
  //the length option entered by the user
  var lengthOption = getUserInput().lengthOption;
  var password = "";
  //math randomizer given to class from teacher
  for (i = 0; i < lengthOption; i++) {
    //finds a randomindex
    var index = Math.floor(Math.random() * passwordList.length);
    var password = password.concat(passwordList[index]);
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
