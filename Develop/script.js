// Password character count and selection is responsive 
const charRange = document.getElementById ('charRange')
const charNumber = document.getElementById ('charNumber')
const includeUppercaseElement = document.getElementById ('includeUppercase')
const includeNumbersElement = document.getElementById ('includeNumbers')
const includeSymbolsElement = document.getElementById ('includeSymbols')
const form = document.getElementById ('passwordGeneratorForm')

charNumber.addEventListener('input', syncCharacterAmount)
charRange.addEventListener('input', syncCharacterAmount)

// Stop page from refreshing and pass selection to btn
form.addEventListener ('submit', e =>{
  e.preventDefault()
  const characterAmount = charNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
}) 

// code to generate the password
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
  String.fromCharCode(65)
}


function syncCharacterAmount(e){
  const value = e.target.value
  charNumber.value = value
  charRange.value = value
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


