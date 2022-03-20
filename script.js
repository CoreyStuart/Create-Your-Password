let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let special = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ":", ';', '<', '=', '>', '?', '@', '[', ']']
let results = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  let selection = prompt("How long would you like the password to be between 12 to 128 characters?")
  if (!selection) {
    return;
  }
  if (selection < 12 || selection > 128){
    alert("Invalid. You know what you did.")
    return;
  }
let num = confirm("Would you like to use numbers?")
let low = confirm("Would you like to use lower casing?")
let up = confirm("Would you like to use upper casing?")
let spec = confirm("Would you like to use special characters?")
if (!num && !low && !up && !spec) {
  alert("Invalid. Need to choose one")
  generatePassword();
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

