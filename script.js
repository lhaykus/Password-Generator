// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create array of possible characters that can be used in password
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialCharacters= ["!", "@", "#", "$", "%", "^","&", "*", "(", ")", "-", "_", "=", "+","?",  ]
//"',-./:;<>?@[\]_`{|}~

//state variables
//create arrays for possible characters to be used
//ask user what characters they want to use using confirm
//ask user how long they want their password to be between 8-128
//check to make sure numbers are between 8-128, create if statements for if its not met
//check to make sure at least one of the characters is chosen, if not create alert to make them choose something
//create if statements for what was chosen ex:
        //if they said yes to everything create if statement to create a password with every character
        //if they said yes to uppercase, numbers, lowercase but no to specail characters then create a password with those 3 and so forth using if true statements


function generatePassword() {

//Prompt asking how long user wants their password to be//
const passwordLength = prompt("Pick bewteen numbers 8-128 to determine password lenght");
//If number is not between 8-128, alert user to put a correct number.
if (passwordLength<8 && passwordLength>128) {
    alert("Password must be between 8-128 letters long.")
    //if there is no number entered
} else if (!passwordLength) {
    alert("Must enter a number between 8-128 for password lenght")
}
//if the number is greater than/equal to 8 and less than/equal to 128
else if ([passwordLength>==8 && passwordLength<==128]) {
return;
}

//Ask user with a confirm if they want to include upper case letters in their password

const upperCase = confirm('Would you like to include Upper Case letters in your password?');
//true is clicked ok, false=cancel
if (upperCase ===true) {

}

const lowerCase = confirm('Would you like to include lower case numbers in your password?');
const userspecialCharacters = confirm('Would you like to include special characters in your password?');
const numbers =confirm('Would you like to include numbers in your password?');


}


























// Write password to the #password input
//function writePassword() {
    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

