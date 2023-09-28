/**sintetize uma função de flecha que recebe a idade do usuário, e exiba uma mensagem convertendo a idade em dias:
 * a idade [anos] equivale a [dias] dias
 * obs: desconsidere anos bissextos
 */
const prompt = require('prompt-sync')()
let anos = Number(prompt("Anos: "))
let idade = (anos) => anos * 365

console.log(`${anos} anos equivalem a ${idade(anos)} dias`)