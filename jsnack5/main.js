"use strict";

const array = ["1", "2", "3", "4", "5", "6"];
const somma = 0;

for (let i = 0; i < array.length; i++) {
    if(i % 2 == 1){
        somma = array[i]
    }
}

console.log(somma);
