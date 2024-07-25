let precoCombustivel = 5.79;
let kmPorLitro = 12;
let distanciaKm = 1580;

let valorViagem = precoCombustivel * (distanciaKm / kmPorLitro);

console.log('R$ ' + valorViagem.toFixed(2) + ' Reais');
