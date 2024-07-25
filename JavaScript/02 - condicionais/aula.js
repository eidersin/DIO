let numero = -2
const ehNumeroPar = (numero % 2) === 0;

if (numero <= 0){
    console.log('Número Invalido')
} else if (ehNumeroPar){
    console.log('O número é PAR')
} else {
    console.log('O Número não é PAR')
}
