class classificaEloHeroi{
    constructor(xpHeroi){
        this.xpHeroi = xpHeroi;
    }

    classificaElo(){
        if (this.xpHeroi < 1000) {
            return 'Ferro';
        } else if (this.xpHeroi < 2000) {
            return 'Bronze';
        } else if (this.xpHeroi < 5000) {
            return 'Prata';
        } else if (this.xpHeroi < 7000) {
            return 'Ouro';
        } else if (this.xpHeroi < 8000) {
            return 'Platina';
        } else if (this.xpHeroi < 9000) {
            return 'Ascendente';
        } else if (this.xpHeroi < 10000) {
            return 'Imortal';
        } else {
            return 'Radiante';
        }
    }
}

const nomeHeroi = 'Derson';
const xpHeroi = 5600;

const classifica = new classificaEloHeroi(xpHeroi);
const eloHeroi = classifica.classificaElo();

console.log(`O herói ${nomeHeroi} está no elo ${eloHeroi}.`);