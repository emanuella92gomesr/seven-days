//Arrays de categorias de produtos
const frutas = [];
const verduras = [];
const legumes = [];
const higiene = [];
const limpeza = [];
const frigorifico = [];
const friosELaticinios = [];
const mercearia = [];
const outros = [];

let inserirProduto = prompt('Deseja inserir um produto na sua lista de compras?\n Digite 1 para \'Sim\' e 2 para \'Não\'.');

while (inserirProduto == 1 || inserirProduto == 3) {
    if(inserirProduto == 1) {
        let item = prompt('Que produto você gostaria de inserir no carrinho?');
        let categoria = parseInt(prompt(`O produto pertence a qual categoria? Digite o valor correspondente:
            1 - Frutas\n
            2 - Verduras\n
            3 - Legumes\n
            4 - Higiene Pessoal\n
            5 - Limpeza\n
            6 - Frigorífico\n
            7 - Frios e Laticínios\n
            8 - Mercearia\n
            9 - Outros\n`));

        let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        while(!(numeros.includes(categoria))) {
            categoria = (`Por favor, digite um número de 1 a 9:\n
                1 - Frutas\n
                2 - Verduras\n
                3 - Legumes\n
                4 - Higiene Pessoal\n
                5 - Limpeza\n
                6 - Frigorífico\n
                7 - Frios e Laticínios\n
                8 - Mercearia\n
                9 - Outros\n`);
        };


        switch(categoria) {
            case 1:
                frutas.push(item);
                break;
            case 2:
                verduras.push(item);
                break;
            case 3:
                legumes.push(item);
                break;
            case 4:
                higiene.push(item);
                break
            case 5:
                limpeza.push(item);
                break;
            case 6:
                frigorifico.push(item);
                break;
            case 7:
                friosELaticinios.push(item);
                break;
            case 8:
                mercearia.push(item);
                break;
            case 9:
                outros.push(item);
                break;
        };
    } 
    else {
        let remover = prompt(`Sua lista de compras atual:\n
            Frutas: ${frutas}\n
            Verduras: ${verduras}\n
            Legumes: ${legumes}\n
            Higiene pessoal: ${higiene}\n
            Limpeza: ${limpeza}\n
            Frigorífico: ${frigorifico}\n
            Frios e Laticínios: ${friosELaticinios}\n
            Mercearia: ${mercearia}\n
            Outros: ${outros}\n 
            Qual produto você gostaria de remover?`
        );

        let lista = [frutas, verduras, legumes, higiene, limpeza, frigorifico, friosELaticinios, mercearia, outros];

        let itensLista = [...frutas, ...verduras, ...legumes, ...higiene, ...limpeza, ...frigorifico, ...friosELaticinios, ...mercearia, ...outros];

        if(itensLista.includes(remover)) {
            lista.forEach(arr => {
                if (arr.indexOf(remover) != -1){
                    arr.splice(arr.indexOf(remover), 1);
                } else {
                    return;
                };
            });

            alert(`${remover} removido com sucesso!`);
        } else {
            alert(`${remover} não foi incluído na sua lista de compras.\nProduto inexistente.`);
        };
    };

    inserirProduto = prompt(`Deseja inserir mais um produto na sua lista de compras?\n 
        1 - Inserir mais um item\n
        2 - Não inserir mais itens. Ver lista de compras.\n
        3 - Remover um item\n 
    `);

    while(!(inserirProduto == 2 || inserirProduto == 1 || inserirProduto == 3)){
        inserirProduto = prompt(`Opção inválida! Digite:\n
            1 - Inserir produto\n
            2 - Não inserir mais itens. Ver lista de compras.\n
            3 - Remover um item\n 
        `);
    };
}; 

alert(`Sua Lista de compras:\n 
    Frutas: ${frutas}\n
    Verduras: ${verduras}\n
    Legumes: ${legumes}\n
    Higiene pessoal: ${higiene}\n
    Limpeza: ${limpeza}\n
    Frigorífico: ${frigorifico}\n
    Frios e Laticínios: ${friosELaticinios}\n
    Mercearia: ${mercearia}\n
    Outros: ${outros}\n 
`);

