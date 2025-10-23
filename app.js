const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-1");
let passwordTwo = document.getElementById("password-2");

let randomPassword;

function genRandom() {

    randomPassword = Math.floor(Math.random() * characters.length);
    return characters[randomPassword];
   
}


function passwordGenerator() {

    let one = "";
    let two = "";

    for (let i=0; i < 17; i++) {
        genRandom()
        one += characters[randomPassword];
    }

    passwordOne.textContent = one;

    for (let i=16; i < 34; i++) {
        genRandom()
        two += characters[randomPassword];
    }

    passwordTwo.textContent = two;
}
