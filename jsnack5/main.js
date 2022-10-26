const array = []

for (let i = 0; i < 6; i++) {
    const numero = Number(prompt('Inserisci un numero'));
    console.log("Numeri Inseriti: ", numero);
    if(numero % 2 == 1){
        array.push(numero);
    }
}

console.log("Numeri dispari: ", array);