//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//Chiedo la parola all'utente
const word = prompt("Inserisci una parola");


//Creò una funzione che : divida la parola in lettere, la inverta e la rimetta insieme
function control(word) {

 const wordPalindrome = word.split('').reverse('').join('');
 return word === wordPalindrome;
}
//controllo se funziona la funzione
//console.log(control("anna"));
//Aggiungo un output per far sapere se la parola è palindroma o no 
if (control(word)) {
    alert(`La parola è palindroma!`);
} else {
    alert(`La parola non è palindroma.`);
}


