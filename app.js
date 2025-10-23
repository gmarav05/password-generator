const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-1");
let passwordTwo = document.getElementById("password-2");

let copyOne = ""
let copyTwo = ""

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
    copyOne = one;

    for (let i=16; i < 32; i++) {
        genRandom()
        two += characters[randomPassword];
    }

    passwordTwo.textContent = two;
    copyTwo = two;
}

function copyPasswordOne() {
    navigator.clipboard.writeText(copyOne);
    showCopy();
}

function copyPasswordTwo() {
    navigator.clipboard.writeText(copyTwo);
    showCopy();
}

function showCopy() {
    let alertCopy = document.getElementById("showCopy-text");
    let currentOpacity = window.getComputedStyle.opacity;

    alertCopy.style.opacity = 1;

    setTimeout(() => {
         alertCopy.style.opacity = 0;
    },600);
    
}