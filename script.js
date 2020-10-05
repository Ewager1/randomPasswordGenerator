// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt(
    "Choose password length between 7 and 129 characters"
  );
  console.log(passwordLength);

  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    typeof passwordLength !== "number"
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
