console.log('JS OK');

// Esercizio 1 

const input = prompt("Digita una parola casuale:", 'ingegni');

function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}

if(isPalindrome(input)) {
    console.log("La parola inserita é palindroma.");
} else {
    console.log("La parola inserita non é palindroma.");
}


// Esercizio 2 

function getRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 5) + 1;

    return randomNumber;
}

function isEven(number) {
    return number % 2 === 0;
}

const userInput = prompt("Pari o dispari?");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

if(userNumber < 1 || userNumber > 5) {
    alert("Inserisci un numero coerente con la scelta effettuata.");
} else {
    let cpuNumber = getRandomNumber();
    console.log(cpuNumber);

    let sum = userNumber + cpuNumber;
    console.log(sum);

    let result = isEven(sum) ? "pari" : "dispari";

    if(result === userInput) {
        console.log("Hai vinto");
    } else {
        console.log("Hai perso");
    }
}


