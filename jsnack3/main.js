"use strict"
let somma = 0;

for (let i = 0; i < 10; i++) {
    const numeri = Number(prompt('inserisci un numero: '));
    console.log(i);
    somma += numeri;
}

console.log("La somma dei numeri è: ", somma);