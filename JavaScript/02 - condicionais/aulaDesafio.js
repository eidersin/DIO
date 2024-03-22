let precoEtanol = 5.79;
let precoGasolina = 6.66;
let gastoMedio = 10;
let distanciaKm = 100;

let tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Etanol') {
    let valorViagem = (distanciaKm / gastoMedio) * precoEtanol
    console.log(valorViagem.toFixed(2));
}
else {
    let valorViagem = (distanciaKm / gastoMedio) * precoGasolina
    console.log(valorViagem.toFixed(2));
}