const wordone = prompt("inserisci una parola");
const wordtwo = prompt("inserisci un'altra parola");

if(wordone.length > wordtwo.length){
    console.log(wordone , wordtwo);
}
else if(wordone.length < wordtwo.length){
    console.log(wordtwo, wordone);
}
else{
    console.log("Le parole hanno la stessa lunghezza");
}