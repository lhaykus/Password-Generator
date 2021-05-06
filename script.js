// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create array of possible characters that can be used in password
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?",]
const password ="";
const total =[];
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
    //if there is no number entered
    if (!passwordLength) {
        alert("Must enter a number between 8-128 for password lenght");
        //If number is not between 8-128, alert user to put a correct number.
    } else if (passwordLength < 8 && passwordLength > 128) {
        alert("Password must be between 8-128 letters long.");
    }
    //if the number is greater than/equal to 8 and less than/equal to 128,
    //ask the user to confirm other characters they want in their password
    //} else if (passwordLength >= 8 && passwordLength <= 128) {

    //}

    //ask user if they want to have lower case letters in password
    const lowerCase = confirm('Would you like to include lower case letters in your password?');
  
    //ask user to confirm if they want special characters in password 
    const specialCharacters = confirm('Would you like to include special characters in your password?');
  
    //ask user to confirm if they want numbers in their password
    const numbers = confirm('Would you like to include numbers in your password?');
  
    //ask users to confirm if they want uppercase letters in password
    const upperCase = confirm('Would you like to include Upper Case letters in your password?');
}
//if statement for if no characters were picked, alert user to pick characters
if (!lowerCase && !specialCharacters && !numbers && !upperCase) {
    alert("Password needs at least one lower caser, uppercase, special character and/or number")
} 
//if statement for if lowerCase letters were picked, then pick a random number and put it in the total array
 if (lowerCase===true) { 
    password = password + Math.floor(Math.random()*lowerCase.length);
    total= total.concat(lowerCase);

} 
//if statement for if numbers were picked, then pick a random number and add it to the total array
if (numbers===true) {
    password= password + Math.florr(Math.random()*numbers.length);
    total=total.concat(numbers);
}
//if statement for if uppercase letters were picked, pick a random letter and add it to the total array
 if (upperCase===true) {
     password = password + Math.floor(Math.random()*upperCase.length);
     total=total.concat(upperCase);
 }
 //if statement for if special characters were picked, pick a randmo character and add it to the array
 if (specialCharacters===true) {
     password = password + Math.floor(Math.random()*specialCharacters.length);
     total=total.concat(specialCharacters);
 }
 //all characters from above combined and a for loop to randomly choose out of the total array

 for (let i = 0; i < total.length; i++) {
     password= password + Math.floor(Math.random()*total.length);  
 }
 console.log(password)





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

