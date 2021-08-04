let nome = prompt("Tuo nome:");
let cognome = prompt("Tuo congnome:");
let colore = prompt("Il tuo colore preferito in assoluto:");

document.getElementById("new-pw").innerHTML = nome + cognome + colore + 21;

const prezzoMele = 2;
const prezzoPrugne = 4;
const prezzoPasta = 1.5;
const prezzoAragosta = 13;
const prezzoPesche = 3.75;

let mele = parseInt(prompt("Quante mele devi prendere?"));
let prugne = parseInt(prompt("Quante prugne devi prendere?"));
let pasta = parseInt(prompt("Quanta pasta devi prendere?"));
let aragosta = parseInt(prompt("Quante aragoste devi prendere?"));
let pesche = parseInt(prompt("Quante pesche devi prendere?"));
let pcsTot = mele + prugne + pasta + aragosta + pesche;
let euroTot = (mele * prezzoMele) + (prugne * prezzoPrugne) + (pasta * prezzoPasta) + (aragosta * prezzoAragosta) + (pesche + prezzoPesche);


document.getElementById("pezzi-mele").innerHTML = mele;
document.getElementById("pezzi-prugne").innerHTML = prugne;
document.getElementById("pezzi-pasta").innerHTML = pasta;
document.getElementById("pezzi-aragosta").innerHTML = aragosta;
document.getElementById("pezzi-pesche").innerHTML = pesche;
document.getElementById("euro-mele").innerHTML = prezzoMele * mele;
document.getElementById("euro-prugne").innerHTML = prezzoPrugne * prugne;
document.getElementById("euro-pasta").innerHTML = prezzoPasta * pasta;
document.getElementById("euro-aragosta").innerHTML = prezzoAragosta * aragosta;
document.getElementById("euro-pesche").innerHTML = prezzoPesche * pesche;
document.getElementById("pcs-tot").innerHTML = pcsTot;
document.getElementById("euro-tot").innerHTML = euroTot;