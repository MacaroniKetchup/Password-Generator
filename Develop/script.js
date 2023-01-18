// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  
  //Length
  let length = Number(prompt("Enter the length of your password between 8-128 characters."))
  //character types
  let charType = prompt("What should we include in your password? Type 'uppercase, lowercase, numbers, symbols' to include. ")
  
  passwordText.value = password(length, charType);

  function password(length, charType) {
    let charGen = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWRXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()-_=+',
    };
    
    var charTypes = charType.toLowerCase().split(', ');
    charSet = "";
    for(var i=0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i]];
    }
    
    console.log(charSet);

    var retVal = "";
    
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Basic password generator code for example

// function generatePassword(length) {
//   let password = "";
//   let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

//   for (let i = 0; i < length; i++) {
//     password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
//   }

//   return password;
// }

// console.log(generatePassword(8));
