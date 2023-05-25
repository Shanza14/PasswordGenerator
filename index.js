const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let suggestOne = document.getElementById("suggest-One")
let suggestTwo = document.getElementById("suggest-Two")


function showPassword(){
    let passOne = generateRandomPassword()
    suggestOne.textContent = (passOne)
    let passTwo = generateRandomPassword()
    suggestTwo.textContent = (passTwo)
}

function generateRandomPassword() {
    let randomPassword = ""
    for( let i=0 ; i < 15 ; i++)
    { 
      randomPassword += getRandomCharacter()  
    }
    return (randomPassword)
}
function getRandomCharacter() {
    let getChar = ( Math.floor( Math.random() * characters.length) )
    return characters[getChar]
}

