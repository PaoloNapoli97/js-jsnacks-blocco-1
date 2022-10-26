const array = [];

for (let i = 0; i < 6; i++) {
    const numero = Number(prompt('Inserisci un numero'));
    console.log("Numeri Inseriti: ", numero);
    if(numero % 2 == 1){
        array.push(numero);
    }
}

if (array.length > 0){
    console.log("Numeri dispari: ", array);
}
else{
    console.log("Non sono stati inseriti numeri dispari");
}