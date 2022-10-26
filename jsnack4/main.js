const invitati = ["Lazzaro", "Peppino Detto il Ladro", "YokoPokoMaYoko", "Capobranco Paguri"];
const utente = prompt('Insirisci il tuo nome');
let check= false;

for (let i = 0; i < invitati.length; i++) {
    if(utente === invitati[i]){
        check = true;
        break;
    }
}

if(check === true){
    console.log('Benvenuto alla festa del grande Gatsby');
}
else{
    console.log('Non sei invitato alla festa');
}