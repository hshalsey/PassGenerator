// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '%', '&', '*', '(', ')', '=', '+', '?', ',', '.', ]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  var password = '';
  var  charPool = lowercaseLetters;

  if(passwordLength < 8 ){
    alert("Your password must be equal to or more than 8 characters.");
    sys.exit();
  } else if(passwordLength > 128 ){
    alert("Your password must be equal to or less than 128 characters.");
    sys.exit();
  } 
  


  var includeSpecialChar = confirm("Would you like special characters in your password?");
  if(includeSpecialChar){
    charPool = charPool.concat(specialChar);
  }
  var includeNumbers = confirm( "Would you like numbers in your password?");
  if(includeNumbers){
    charPool = charPool.concat(numbers);
  }
  var includeUpper = confirm("Would you like uppercase letters in your password?");
  if(includeUpper){
    charPool = charPool.concat(uppercaseLetters);
  }

  for(var i = 0; i < passwordLength; i++){
    var randomPassword = Math.floor(Math.random() * charPool.length);
    password = password + charPool[randomPassword];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
