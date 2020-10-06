// Assignment Code
var masterPassword = [];
var generateBtn = document.querySelector("#generate");


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

//section: helper function that collects user input about password data
function getUserInput(){
  //password Length
  var length = prompt(
    "Choose password length from 8 to 128 characters"
  );
  if (
    length < 8 ||
    length > 128
    //This spot needs error handling for inputs that are not a number
  ) {
    alert("Error. Please enter number between 8 and 128");
  }
  //uppercase
  var uppercase = confirm("Would you like uppercase characters?");
  //lowercase
  var lowercase = confirm("Would you like lowercase characters?");
  //numeric.
  var numeric = confirm("Would you like numeric characters?");
  //special
  var special = confirm("Would you like special characters?");

  //error handling: at least one character type must be choseen
  if (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    special === false
  )
    alert("Error. You must choose at least one character type.")
    //holds all user answers for generate password
    var userAnswers = {length}

     if(uppercase === true){} 
      if(lowercase === true) {}
      if(numeric === true) {}
      if(special === true) {}
     
    
    console.log(userAnswers)
   return userAnswers;


function generatePassword(){
  //Chains functions by creating 
  var userAnswers = getUserInput();
  console.log(userAnswers)
   
}




// Write password to the #password input

 function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  //create logic that combines character lists into master list depending on user answers

} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

