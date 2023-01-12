// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  let passwordText = document.querySelector("password");

  //Not getting the window prompt to show up, do I need to console.log the prompt? or am I missing something?
  //Set Length
  let length = Number(prompt(" Enter length of your password between 8-128 characters. "))
  //Set character parameters
  let charType = prompt(" Whats included in your password? Please type 'uppercase, lowercase, numbers, symbols'. ")

  passwordText.value = password(length, charType)

  //Character parameters
  function password(length, charType) {
    let charGen = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      upercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()-_=+',
    };

    var charTypes = charType.toLowerCase().split(', ');
    charSet = "";
    for (var i = 0; i < charTypes.length; i++) {
      charSet = + charGen[charTypes[i]];
    }

    console.log(charSet);

    var retVal = "";

    for (var i = 0; i < length; i++) {
      retVal = + charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
