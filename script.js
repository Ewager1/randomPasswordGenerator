// Assignment Code
const generateBtn = document.querySelector("#generate");
//lowercase assignment
const lowerCaseAlphabetOptions = [
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
const upperCaseAlphabetOptions = lowerCaseAlphabetOptions.map(
  (lowerCaseAlphabetOptions) => lowerCaseAlphabetOptions.toUpperCase()
);
//numeric assignment

const numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//special character assignment
const specialOptions = [
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

// collects user choices on uppercase, lowercase, numeric, special, and character length and stores in an object
function getUserInput() {
  const lengthOption = prompt(
    "Choose password length from 8 to 128 characters"
  );
  // error handling to make sure user inputs a number between 8 and 128.
  if (
    lengthOption < 8 ||
    lengthOption > 128 ||
    //Modified from https://stackoverflow.com/questions/36552735/javascript-prompt-while-input-is-not-a-number
    //isNan checks if its a number, and + or unery operator tries to convert string into number.
    isNaN(+lengthOption)
  ) {
    alert("Error. Please enter number between 8 and 128");
  } else {
    //uppercase prompt and answer storage
    const uppercaseOption = confirm("Would you like uppercase characters?");
    //lowercase prompt and answer storage
    const lowercaseOption = confirm("Would you like lowercase characters?");
    //numeric prompt and answer storage
    const numericOption = confirm("Would you like numeric characters?");
    //special prompt and answer storage
    const specialOption = confirm("Would you like special characters?");

    //error handling: at least one character type must be chosen
    if (
      lowercaseOption === false &&
      uppercaseOption === false &&
      numericOption === false &&
      specialOption === false
    ) {
      alert("Error. You must choose at least one character type.");
    } else {
      //object that holds all user answers to be returned
      const userAnswers = {
        uppercaseOption,
        lowercaseOption,
        numericOption,
        specialOption,
        lengthOption,
      };

      return userAnswers;
    } // else statement that continues function if at least one chacter type was chosed by user
  } // else statement that continues function if a valid number was chosen by user
}
//takes the user inputs and outputs an object with a master array of characters and password length
function createList() {
  const userAnswers = getUserInput();
  const passwordObject = {
    passwordList: [],
    lengthOption: userAnswers.lengthOption,
  };
  //adds lowercase if true
  if (userAnswers.lowercaseOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(
      lowerCaseAlphabetOptions
    );
  }
  //adds uppercase if true
  if (userAnswers.uppercaseOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(
      upperCaseAlphabetOptions
    );
  }
  //adds numeric if true
  if (userAnswers.numericOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(
      numericOptions
    );
  }
  //adds special characters if true
  if (userAnswers.specialOption === true) {
    passwordObject.passwordList = passwordObject.passwordList.concat(
      specialOptions
    );
  }
  return passwordObject;
}

//Takes the array from createlist, randomizes it, sets it's length, and outputs their answer
function generatePassword() {
  //assigning constiable that holds password arrays and password length
  const passwordObject = createList();
  //empty string for password
  let password = "";
  //math randomizer that itterates the length chosen by user
  for (i = 0; i < passwordObject.lengthOption; i++) {
    //finds a randomindex
    const index = Math.floor(
      Math.random() * passwordObject.passwordList.length
    );
    password = password.concat(passwordObject.passwordList[index]);
  }
  return password;
}

// Takes password generated from generatepassword, and writes it into the HTML.
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
