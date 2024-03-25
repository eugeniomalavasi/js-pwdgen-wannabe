// alert ("Ciao sono la tua prima riga di js!")

// dichiarazione variabili prompt username 
const userName = prompt("Inserisci il tuo nome"); // string
console.log(userName, typeof userName);

// dichiarazione variabili prompt cognome
const surName = prompt("Inserisci il tuo cognome"); // string
console.log(surName, typeof surName);

// dichiarazione colore preferito
const prefClr = prompt("Inserisci il tuo colore preferito"); // string
console.log(prefClr, typeof prefClr)

// numero casuale da 1 a 100
const casualNumber = Math.floor((Math.random() * 100) + 1)

// unione variabili 
const psw = `${userName}${surName}${prefClr}${casualNumber}`;
console.log(psw); // string


document.getElementById("generatedpsw").innerHTML = psw;