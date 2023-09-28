/**crie uma arrow function que recebe o horário atual, e devolva uma mensagem informando se está de manhã, de tarde, de noite ou de madrugada*/
const prompt = require('prompt-sync')();

let horas = Number(prompt("horas: "))
let horario = (horas) => horas

if (horario(horas) >= 6 && horario(horas) < 12) {
    console.log("bom dia")
} else if (horario(horas) >= 12 && horario(horas) < 18) {
    console.log("boa tarde")
} else if (horario(horas) >= 18 && horario(horas) < 24) {
    console.log("boa noite")
} else if (horario(horas) >= 0 && horario(horas) < 5) {
    console.log("boa madrugada")
} 