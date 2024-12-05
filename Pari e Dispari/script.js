//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Faccio decidere al giocatoer se scegliere pari o dispari
const evenOrOdd = prompt('Scegli: "pari" o "dispari"');
//faccio decidere al giocatore un numero tra da 1 a 5
const player = Number(prompt('Inserisci un numero da 1 a 5'));
//genero un numero da 1 a 5 per la cpu 
const cpu = Math.floor(Math.random() * 5) + 1;
//controllo il risultato
console.log(cpu)
//Creò la funziona per sommare i numeri del player e della cpu
function sum(num1, num2) {
    return num1 + num2;
}
//Sommo i risultati con la funzione creata
const totalNumb = sum(player, cpu);
console.log(`Somma dei numeri: ${totalNumb}`);
















