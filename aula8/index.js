const nome = 'Marcos Aurelio';
const sobrenome = 'Rodrigues';
const idade = 50;
const peso = 78;
const altura = 1.78;
let indiceMassaCorporal = peso/(altura * altura);
let anoAtual = 2022;
let anoNascimento = anoAtual - idade;

console.log( `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG, tem altura 
de ${altura} e o seu IMC é de ${indiceMassaCorporal} ${nome} nasceu em ${anoNascimento}`);