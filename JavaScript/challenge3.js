let opt = prompt("Você quer seguir para a área de Front-End ou de Back-End?\n" + 
          "Digite 1 para Front e 2 para Back.");

while(!(opt === '1' || opt === '2')) {
  opt = prompt("Por favor, digite uma opção válida.\n" + 
  "Digite 1 para Front e 2 para Back.");
};

if (opt === '1') {
  var front = prompt("Você deseja aprender React ou Vue?");
  var xEnd = "Front-End";
} 
if(opt === '2') {
  var back = prompt("Você deseja aprender C# ou Java?");
  var xEnd = "Back-End";
}

let prosseguir = prompt("Excelente! Você pretende se especilizar na área escolhida ou seguir se desenvolvendo para se tornar FullStack?\n" + 
  `Digite 1 para seguir como ${xEnd} ou 2 para se tornar FullStack.`);

while(!(prosseguir === '1' || prosseguir === '2')) {
  prosseguir = prompt("Por favor, digite uma opção válida.\n" + 
    `Digite 1 para seguir como ${xEnd} e 2 para se tornar FullStack.`);
};

const techs = [];

if(prosseguir === '1'){
  let res1 = prompt(`Show! Qual tecnologia de ${xEnd} você gostaria de aprender?`);

  techs.push(res1);

  let res2 = prompt(`${res1}? Isso é muito interessante!` + 
    "Tem mais alguma tecnologia para ser acrescentada na lista? Se sim, digite 'OK'.");

  while (res2.toLocaleLowerCase() === 'ok'){
    let res3 = prompt('Qual é a próxima tecnologia da lista?');
    techs.push(res3);
    res2 = prompt(`${res2}? Isso é muito interessante!` + 
      "Tem mais alguma tecnologia para ser acrescentada na lista? Se sim, digite 'OK'.");
  }

  alert(`Hmmm... Você quer aprender ${techs}... Siga em frente! Bons estudos!`);
} else if (prosseguir === '2'){
  let res1 = prompt(`Show! Você quer seguir a trilha de Fullstack. Qual tecnologia de ${xEnd} você gostaria de aprender?`);

  techs.push(res1);

  let res2 = prompt(`${res1}? Isso é muito interessante!` + 
    "Tem mais alguma tecnologia para ser acrescentada na lista? Se sim, digite 'OK'.");

  while (res2.toLocaleLowerCase() === 'ok'){
    let res3 = prompt('Qual é a próxima tecnologia da lista?');
    techs.push(res3);
    res2 = prompt(`${res2}? Isso é muito interessante!` + 
      "Tem mais alguma tecnologia para ser acrescentada na lista? Se sim, digite 'OK'.");
  }

  alert(`Hmmm... Você quer aprender ${techs} e se tornar um dev FullStack... Siga em frente! Bons estudos!`);
};