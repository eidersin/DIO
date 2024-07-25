
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

// Resposta 01:

/*let nota_1 = 5;
let nota_2 = 4;
let nota_3 = 5;
let mediaNota = (nota_1 + nota_2 + nota_3) / 3;

if (mediaNota < 5) {
    console.log('Sua média foi: '+ mediaNota.toFixed(2))
    console.log('O Aluno foi Reprovado')
} else if (mediaNota < 7) {
    console.log('Sua média foi: '+ mediaNota.toFixed(2))
    console.log('O Aluno ficou de Recuperação')
} else {
    console.log('Sua média foi: '+ mediaNota.toFixed(2))
    console.log('O Aluno foi Aprovado')
}*/




/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
/*
// Resposta 02:

let peso = 80;
let altura = 1.75;
let imc = peso / Math.pow(altura, 2);
if (imc < 18.5) {
    console.log('IMC = ' + imc.toFixed(2));
    console.log('Abaixo do peso');
} else if (imc < 25) {
    console.log('IMC = ' + imc.toFixed(2));
    console.log('Peso normal');
} else if (imc < 30) {
    console.log('IMC = ' + imc.toFixed(2));
    console.log('Acima do peso');
} else if (imc < 40) {
    console.log('IMC = ' + imc.toFixed(2));
    console.log('Obeso');
} else {
    console.log('IMC = ' + imc.toFixed(2));
    console.log('Obesidade Grave');
}
*/
/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
/*
// Resposta 03:

let valorProduto = 100;
let formaPagamento = 3
//  1 - Débito | 2 - Pix | 3 - Parcelado

let quantidadeParcelamento = 3


if (formaPagamento === 1) {
    let pagarDebito = valorProduto - (valorProduto * 0.1);
    console.log('O Valor a ser pago é R$: ' + pagarDebito.toFixed(2) + ' Reais. Você ganhou 10% de desconto nessa compra.');
} else if (formaPagamento === 2) {
    let pagarPix = valorProduto - (valorProduto * 0.15);
    console.log('O Valor a ser pago é R$: ' + pagarPix.toFixed(2) + ' Reais. Você ganhou 15% de desconto nessa compra.');
} else if (formaPagamento === 3 && quantidadeParcelamento === 2) {
    let parcelamentoSemJuros = valorProduto / quantidadeParcelamento;
    let parcelamentoSemJurosTotal = valorProduto;
    console.log('O Valor a ser pago é ' + quantidadeParcelamento + 'x de R$: ' + parcelamentoSemJuros.toFixed(2) + '. Ficando total de R$ ' + parcelamentoSemJurosTotal.toFixed(2));
} else if (formaPagamento === 3 && quantidadeParcelamento > 2) {
    let parcelamentoComJurosTotal = valorProduto + (valorProduto * 0.1);
    let parcelamentoComJuros = parcelamentoComJurosTotal / quantidadeParcelamento;
    console.log('O Valor a ser pago é ' + quantidadeParcelamento + 'x de R$: ' + parcelamentoComJuros.toFixed(2) + '. Ficando total de R$ ' + parcelamentoComJurosTotal.toFixed(2));
}

*/