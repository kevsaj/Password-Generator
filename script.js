// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomLowerCase() {
  var keyListLow = "abcdefghijklmnopqrstuvwxyz";
  return keyListLow.charAt(Math.floor(Math.random() * keyListLow.length));
}

function getRandomUpperCase() {
  var keyListUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return keyListUp.charAt(Math.floor(Math.random() * keyListUp.length));
}

function randomNumeric () {
  var keyListInt = "0123456789";
  return keyListInt.charAt(Math.floor(Math.random() * keyListInt.length));
}

function generatePassword() {
  var passwordLength = prompt("Please enter length of password between 8-32");
  
  if (passwordLength > 32 || passwordLength < 8) {
    alert("Ask for password between 8-32 letters or numbers.");
    while (passwordLength > 32 || passwordLength < 8) {
      var passwordLength = prompt("Please enter length of password between 8-32");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

