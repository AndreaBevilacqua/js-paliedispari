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


// 


