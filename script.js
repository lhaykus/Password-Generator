// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create array of possible characters that can be used in password
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?", "/", "|", "{", "}", "[", "]", "'", ".", ",", ";", ":", "~", "`"];
const password = "";
const total = [];



function generatePassword() {

    //Prompt asking how long user wants their password to be//
    const passwordLength = prompt("Pick a number inbetween 8-128 to determine your password lenght");
    //if there is no number entered
    if (!passwordLength) {
        alert("Must enter a number between 8-128 for password lenght");
        return;
        //If number is not between 8-128, alert user to put a correct number.
    } else if (passwordLength < 8 && passwordLength > 128) {
        alert("Password must be between 8-128 letters long.");
    }


    //ask user if they want to have lower case letters in password
    const lowerCase = confirm('Would you like to include Lower Case letters in your password?');

    //ask user to confirm if they want special characters in password 
    const specialCharacters = confirm('Would you like to include Special Characters in your password?');

    //ask user to confirm if they want numbers in their password
    const numbers = confirm('Would you like to include Numbers in your password?');

    //ask users to confirm if they want uppercase letters in password
    const upperCase = confirm('Would you like to include Upper Case letters in your password?');
}

//if statement for if no characters were picked, alert user to pick characters
if (!lowerCase && !specialCharacters && !numbers && !upperCase) {
    alert("Password needs at least one lower caser, uppercase, special character and/or number");

}
//if statement for if lowerCase letters were picked, then pick a random number and put it in the total array
if (lowerCase === true) {
    const characters = Math.floor(Math.random()*lowerCase.length);
    password = password + lowerCase[characters];
    total = total.concat(lowerCase);

}

//if statement for if numbers were picked, then pick a random number and add it to the total array
if (numbers === true) {
    const characters = Math.floor(Math.random()*numbers.length);
    password = password + numbers[characters];
    total = total.concat(numbers);
}

//if statement for if uppercase letters were picked, pick a random letter and add it to the total array
if (upperCase === true) {
    const characters = Math.floor(Math.random()*upperCase.length);
    password = password + upperCase[characters];
    total = total.concat(upperCase);
}

//if statement for if special characters were picked, pick a randmo character and add it to the array
if (specialCharacters === true) {
    const characters = Math.floor(Math.random()*specialCharacters.lenght);
    password = password + specialCharacters[characters];
    total = total.concat(specialCharacters);
}

//all characters from above combined and a for loop to randomly choose out of the total array
for (let i = 0; i < total.length; i++) {
    const character = password + Math.floor(Math.random() * [total.length]);
    password = total[(character)];
console.log(password);
}


//var characters = Math.floor(Math.random() * lowerCase.length);
//password = password + lowerCase[characters];


// if (lowerCase===true){
// password = password + Math.floor(Math.random()*lowerCase.length);
//  total= total.concat(lowerCase);
/// password = password + ////get random element from the lowerCase array
/// total = total.concat(lowerCase)

//  }
// if (...){
/// password = password + ////get random element from the ... array
/// total = total.concat(....)

//   }
// if (...){
/// password = password + ////get random element from the ... array
/// total = total.concat(...)

//  }
//  if (...){
/// password = password + ////get random element from the ... array
/// total = total.concat(...)

//}



// loop
//password = password + ////get random element from the total array
//end loop
//console.log(password)

//for (let i = 0; i < lowerCase.length; i++) {
//  const characters = Math.floor(Math.random()* lowerCase.length);
//  password = password + lowerCase[characters];

//  const element = arr];

//}
//var characters = Math.floor(Math.random() * lowerCase.length);
//password = password + lowerCase[characters];








generateBtn.addEventListener("click", writePassword);










//Write password to #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}


















// Write password to the #password input
//function writePassword() {
    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;









// Add event listener to generate button
//

