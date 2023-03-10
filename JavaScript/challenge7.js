//Funções que realizam as operações definidas no enunciado do desafio
function soma(n1, n2){
    return n1 + n2;
};

function subtracao(n1, n2){
    return n1 - n2;
};

function multiplicacao(n1, n2){
    return n1 * n2;
};

function divisao(n1, n2){
    return n1 / n2;
};

//Execução do script no navegador
let opcao = prompt(`Escolha uma operação a ser realizada\n
    1 - Adição\n
    2 - Subtração\n
    3 - Multiplicação\n
    4 - Divisão\n
`);

while (opcao == '1' || opcao == '2' || opcao == '3' || opcao == '4'){
    let num1 = prompt("Digite o primeiro valor: ");
    let num2 = prompt("Digite o segundo valor: ");

    //Para obter melhores resultados com números negativos => Conversão para inteiro
    let num1Int = parseInt(num1);
    let num2Int = parseInt(num2);

    let resultadoFinal;

    switch(opcao){
        case '1':
            resultadoFinal = soma(num1Int, num2Int);
            break;
        case '2':
            resultadoFinal = subtracao(num1Int, num2Int);
            break;
        case '3':
            resultadoFinal = multiplicacao(num1Int, num2Int);
            break;
        case '4':
            resultadoFinal = divisao(num1Int, num2Int);
            break;
    };

    alert(`Resultado da operação: ${resultadoFinal}`);

    opcao = prompt(`Vamos realizar mais uma operação!\n
        Escolha uma operação a ser realizada\n
        1 - Adição\n
        2 - Subtração\n
        3 - Multiplicação\n
        4 - Divisão\n
        Qualquer valor - Sair do programa\n
    `);

    if(!(opcao == '1' || opcao == '2' || opcao == '3' || opcao == '4')){
        alert(`Até a próxima!`);
    };
};



