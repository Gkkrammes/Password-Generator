document.querySelector("#generate").addEventListener("click", writePassword);

// Character Possibility Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to have?"));

   
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters!");
      var confirmLength = (prompt("How many characters would you like your password to have?"));
      } 

     
      alert(`Your password will have ${confirmLength} characters.`);

    // Specifics of password 
    var confirmSpecialCharacter = confirm("Would you like to include special characters?");
    var confirmNumericCharacter = confirm("Would you like to include numeric characters?");    
    var confirmLowerCase = confirm("Would you like to include lowercase characters?");
    var confirmUpperCase = confirm("Would you like to include uppercase characters?");
      
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Would you like to include special characters?");
        var confirmNumericCharacter = confirm("Would you like to include numeric characters?");    
        var confirmLowerCase = confirm("Would you like to include lowercase characters?");
        var confirmUpperCase = confirm("Would you like to include uppercase characters?");   
    } 


      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // For loop to determine password string
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to window
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}