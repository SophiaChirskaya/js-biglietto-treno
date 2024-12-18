// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


//chiedere all'utente quanti km vuole percorrere
//chiedere l'età
//moltiplico i km per 0.21
//se l'utente è minorenne applico lo sconto del 20%
//se l'utente è over 65 applico lo sconto del 40%
//se non è compreso in nessuno dei due casi precedenti ritorno il prezzo base

let km = 60;
let eta = 80;

let prezzoBase = km * 0.21;

if(eta>=0 && eta<= 18) {
    let prezzo = prezzoBase - (prezzoBase * 0.2);
    console.log(prezzo);
} else if(eta>64) {
    let prezzo = prezzoBase - (prezzoBase * 0.4);
    console.log(prezzo);
} else {
    console.log(prezzoBase);
}

