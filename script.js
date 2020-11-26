// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to give random lower case Alphabet 
function getRandomLowerCase() {
  var keyListLow = "abcdefghijklmnopqrstuvwxyz";
  return keyListLow.charAt(Math.floor(Math.random() * keyListLow.length));
}

// Function to give random upper case Alphabet 
function getRandomUpperCase() {
  var keyListUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return keyListUp.charAt(Math.floor(Math.random() * keyListUp.length));
}

// Function to give random number for the password
function randomNumeric () {
  var keyListInt = "0123456789";
  return keyListInt.charAt(Math.floor(Math.random() * keyListInt.length));
}

// Function to give special characters for the password
function specialCharacs () {
  var keyListInt = "-,.?<>:+=!@#$%^&*()";
  return keyListInt.charAt(Math.floor(Math.random() * keyListInt.length));
}

//Function to prompt and create password
function generatePassword() {
  //ask how many characters user wants in password
  var passwordLength = prompt("Please enter length of password between 8-128");
  
  //forces user to choose between 8-128 character password
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Ask for password between 8-128 letters or numbers.");
    while (passwordLength > 128 || passwordLength < 8) {
      var passwordLength = prompt("Please enter length of password between 8-128");
    }
  }

  //number of characters for password
  var passwordCharacters = []; 

  //users choice in which characters they want for the password
  if (randomNumeric) {
    passwordCharacters = passwordCharacters.concat(randomNumeric);
  }
      
  if (getRandomLowerCase) {
    passwordCharacters = passwordCharacters.concat(getRandomLowerCase);
  }

  if (getRandomUpperCase) {
    passwordCharacters = passwordCharacters.concat(getRandomUpperCase);
  }

  if (specialCharacs) {
    passwordCharacters = passwordCharacters.concat(specialCharacs);
  }

  //show the password in console
  console.log(passwordCharacters);

  // variable for the random password
  var randomPassword = "";

  // creates a random number 
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log("Your random password is " + randomPassword);
      }
  return randomPassword; // Function returns random password
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

