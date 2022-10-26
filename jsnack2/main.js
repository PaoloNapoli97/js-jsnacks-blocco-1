const wordone = prompt("inserisci una parola");
const wordtwo = prompt("inserisci un'altra parola");

if(wordone.length > wordtwo.length){
    console.log(wordone , wordtwo);
}
else{
    console.log(wordtwo, wordone);
}