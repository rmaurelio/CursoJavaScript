let varA = 'A';//B
let varB = 'B';//c
let varC = 'C';//A
let aux;

aux = varC;
varC = varA;
varA = varB;
varB = aux;

console.log(varA, varB, varC)
