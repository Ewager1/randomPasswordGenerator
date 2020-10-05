// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt(
    "Choose password length between 7 and 129 characters"
  );
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //prompts go here

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
