// Funções
function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}
function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100))
}

// Entrada valores
let valorProduto = 100;
let formaPagamento = 3
//  1 - Débito | 2 - Pix | 3 - Parcelado
let quantidadeParcelamento = 11
A
if (formaPagamento === 1) {
    let pagarDebito = aplicarDesconto(valorProduto, 10);
    console.log('O Valor a ser pago é R$: ' + pagarDebito.toFixed(2) + ' Reais. Você ganhou 10% de desconto nessa compra.');
} else if (formaPagamento === 2) {
    let pagarPix = aplicarDesconto(valorProduto, 15);
    console.log('O Valor a ser pago é R$: ' + pagarPix.toFixed(2) + ' Reais. Você ganhou 15% de desconto nessa compra.');
} else if (formaPagamento === 3 && quantidadeParcelamento === 2) {
    let parcelamentoSemJuros = valorProduto / quantidadeParcelamento;
    console.log('O Valor a ser pago é ' + quantidadeParcelamento + 'x de R$: ' + parcelamentoSemJuros.toFixed(2) + '. Ficando total de R$ ' + valorProduto.toFixed(2));
} else if (formaPagamento === 3 && quantidadeParcelamento > 2) {
    let parcelamentoComJurosTotal = aplicarJuros(valorProduto, 10);
    let parcelamentoComJuros = parcelamentoComJurosTotal / quantidadeParcelamento;
    console.log('O Valor a ser pago é ' + quantidadeParcelamento + 'x de R$: ' + parcelamentoComJuros.toFixed(2) + '. Ficando total de R$ ' + parcelamentoComJurosTotal.toFixed(2));
}