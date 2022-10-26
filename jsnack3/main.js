"use strict"
let somma = 0;

for (let i = 0; i < 10; i++) {
    const numeri = parseInt(prompt('inserisci un numero: '));
    somma += numeri;
}

console.log("La somma dei numeri è: ", somma);