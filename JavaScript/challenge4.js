function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const numeroSorteado = gerarNumero(0, 10);

let resposta = prompt('Advinhe o número a ser sorteado. Você possui 3 chances!\n' +
    'Digite um número entre 0 e 10');

for (i = 1; i < 3; i++) {
    if (resposta == numeroSorteado) {
        alert(`Parabéns! Você acertou! O número sorteado foi: ${numeroSorteado}.`);
        break;
    } else {
        resposta = prompt('Tente outra vez!');
    }
};

if (resposta == numeroSorteado) {
    alert(`Parabéns! Você acertou! O número sorteado foi: ${numeroSorteado}.`);
} else {
    alert(`Que pena que você errou. O número sorteado foi: ${numeroSorteado}.`);
};