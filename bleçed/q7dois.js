/**produza um jokenpô enter o usuário e a máquina, utilizando função anônima. No final, retorne "jogador" caso o jogador ganhe, ou "computador" caso a máquina ganhe, 
 *ou "empate". */
const prompt = require('prompt-sync')()
function jokenpo() {
    let jogador = prompt("Qual sua jogada? ");
    let computador = ["pedra", "papel", "tesoura"];
    let jogadorEscolhido = jogador.toLowerCase();
    let computadorEscolhido = computador[Math.floor(Math.random() * computador.length)];
    if (jogadorEscolhido == "pedra" && computadorEscolhido == "papel") { 
        return `jogador jogou ${jogadorEscolhido} e computador jogou ${computadorEscolhido}\ncomputador ganhou` 
    } else if (jogadorEscolhido == "pedra" && computadorEscolhido == "tesoura") { 
        return `jogador jogou ${jogadorEscolhido} e computador jogou ${computadorEscolhido}\njogador ganhou`
    } else if (jogadorEscolhido == "papel" && computadorEscolhido == "pedra") { 
        return `jogador jogou ${jogadorEscolhido} e computador jogou ${computadorEscolhido}\njogador ganhou`
            } else if (jogadorEscolhido == "papel" && computadorEscolhido == "tesoura") {
                return `jogador jogou ${jogadorEscolhido} e computador jogou ${computadorEscolhido}\ncomputador ganhou`
            } else if (jogadorEscolhido == "tesoura" && computadorEscolhido == "pedra") {
                return `jogador jogou ${jogadorEscolhido} e computador jogou ${computadorEscolhido}\njogador ganhou`
            } else if (jogadorEscolhido == "tesoura" && computadorEscolhido == "papel") {
                return `jogador jogou ${jogadorEscolhido} e computador jogou ${computadorEscolhido}\njogador ganhou`
            } else if (jogadorEscolhido == computadorEscolhido) {
                return `jogador jogou ${jogadorEscolhido} e computador jogou ${computadorEscolhido}\nDeu empate`
            }
    // return `${jogadorEscolhido} e ${computadorEscolhido}`
}
console.log(jokenpo())
//justifique sua resposta