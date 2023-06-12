const a: string = 'Ciao a tutti';
console.log(a);

let annoCorrente: number = 2023;
let annoNascita: number = 1995;

let eta: number = annoCorrente - annoNascita;
let centoAnni: number = 100 - eta;

let risposta: string = (`L'eta è: ${eta}, a 100 anni mancano: ${centoAnni} anni`);

console.log(risposta);

document.getElementById('app').innerHTML = a + ', ' + risposta;