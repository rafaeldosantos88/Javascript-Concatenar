//Nesse codigo o nome não vai mudar,então usaremos constante

const nome= 'Rafa';
const sobrenome = 'Dos Santos';
const idade = 26;
const peso =86;
const alturaEmCm =1.74;
//vamos fazer o calculo do imc,Calculo de indice de massa corporal
let imc; // peso /(altura * altura)
let anoNascimento;

imc = peso /(alturaEmCm * alturaEmCm);
anoNascimento = 2020 - idade;

console.log(nome,sobrenome,'tem',idade,'anos',peso,'KG');
console.log('tem',alturaEmCm,'de altura e seu IMC é de',imc);
console.log(nome,'nasceu',anoNascimento);
console.log('-------------------------------------------------');
console.log('________usando sinal de + para concatenar________');//No caso de uso de virgula separa os valores,No sinal de mais concatenar fica mais eficaz
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos ' + peso + ' KG ');//unindos os valores em uma string só
console.log(' tem ' + alturaEmCm + ' de altura e seu IMC é de ' + imc);
console.log(nome + ' nasceu ' + anoNascimento);
console.log('_________________________________________________');
console.log('______Maneira mais legivel_______')
console.log(`${nome}   ${sobrenome}   tem   ${idade}   anos   ${peso}   KG`);//unindos os valores em uma string só
console.log(` tem   ${alturaEmCm}   de altura e seu IMC é de   ${imc}`);
console.log(`${nome}   nasceu   ${anoNascimento}`);
