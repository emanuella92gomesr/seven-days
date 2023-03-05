var nome = prompt("Qual é o seu nome?");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");

console.log("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

var resposta = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM e 2 para NÃO");

if(resposta === 1){
    console.log("1 > Muito bom! Continue estudando e você terá muito sucesso.")
} 
if(resposta === 2) {
    console.log("2 > Ahh que pena... Já tentou aprender outras linguagens?")
};