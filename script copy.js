



//play area: 

passwordLength = [1,2,3,4,5]
function getRandom(){
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}


finalAnswer = String.fromCharCode(Math.floor(Math.random() * 26 + 65))



newAnswer = ''

// A for loop that could be set to create a random number for each letter
for (i=0; i < passwordLength.length; i++){
 newAnswer = newAnswer + String.fromCharCode(Math.floor(Math.random() * 26 + 65))
} 