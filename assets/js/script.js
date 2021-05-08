// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create array of possible characters that can be used in password
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?", "/", "|", "{", "}", "[", "]", "'", ".", ",", ";", ":", "~", "`"];

//Declaring variables
var userSelect = "";
var finalPassword = [];
var lowerCaseConfirm;
var specialCharactersConfirm;
var upperCaseConfirm;
var numbersConfirm;
var passwordLength;
var randomCharacters;



function generatePassword() {

    //Prompt asking how long user wants their password to be//

    passwordLength = prompt("Pick a number in between 8-128 to determine the length of your password.");

    //if there is no number entered

    if (!passwordLength) {
        alert("Must enter a number between 8-128 for password length");
        return;

        //If number is not between 8-128, alert user to put a correct number.
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8-128 letters long.");
        
    
    } else if (passwordLength > 8 && passwordLength < 128) {
        alert("next");
       console.log(passwordLength);
    }


    //ask user if they want to have lower case letters in password
    lowerCaseConfirm = confirm('Would you like to include Lower Case letters in your password?');

    //ask user to confirm if they want special characters in password 
    specialCharactersConfirm = confirm('Would you like to include Special Characters in your password?');

    //ask user to confirm if they want numbers in their password
    numbersConfirm = confirm('Would you like to include Numbers in your password?');

    //ask users to confirm if they want uppercase letters in password
    upperCaseConfirm = confirm('Would you like to include Upper Case letters in your password?');


    //if statement for if no characters were picked, alert user to pick characters
    if (lowerCaseConfirm === false && specialCharactersConfirm === false && numbersConfirm === false && upperCaseConfirm === false) {
        alert("Password needs at least one lower case letter, uppercase letter, special character and/or number");
    }

    //if statement for if user wants lower case letters, use the concat method to merge userSelect array with lowerCase array to create the userSelect array
    if (lowerCaseConfirm === true) {
      //  userSelect = userSelect + Math.floor(Math.random() * lowerCase.length);
       // finalPassword = finalPassword.concat(lowerCase);
       userSelect = userSelect.concat(lowerCase);
       console.log(userSelect);
    }
    
    //if statement for if numbers were picked, use concat method to merge UserSelect array with numbers array

    if (numbersConfirm === true) {
      //  userSelect = userSelect + Math.floor(Math.random() * numbers.length);
       // finalPassword = finalPassword.concat(numbers);
        userSelect = userSelect.concat(numbers);
        console.log(userSelect);
    }

    //if statement for if uppercase letters were picked, use concat to merge UsersSelect with upperCase array
    if (upperCaseConfirm === true) {
       userSelect = userSelect.concat(upperCase);
       console.log(userSelect);
       // userSelect = userSelect + Math.floor(Math.random() * upperCase.length);
        //finalPassword = finalPassword.concat(upperCase);
    }
    //if statement for if special characters were picked, use concat to merge UserSelect with specialCharacters array
    if (specialCharactersConfirm === true) {
      userSelect = userSelect.concat(specialCharacters);
       console.log(userSelect);
      //  userSelect = userSelect + Math.floor(Math.random() * specialCharacters.length);
      //  finalPassword = finalPassword.concat(specialCharacters);
    }

    console.log(userSelect);




    //all characters from above combined and a for loop to randomly choose out of the finalPassword array

    for (let i = 0; i < passwordLength; i++) {
       // finalPassword += userSelect.charAt(Math.floor(Math.random() * userSelect.length));
      var index = Math.floor(Math.random()*userSelect.length);
      finalPassword.push(userSelect[index]);
       console.log(finalPassword);


    //randomPass = Math.floor(Math.random() * userSelect.length);
     ///finalPassword.push([randomPass]);

        return finalPassword;
    }
    
    console.log(finalPassword);


}


generateBtn.addEventListener("click", writePassword);

//Write password to #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

















