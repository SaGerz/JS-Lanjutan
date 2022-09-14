// Versi pewarisan prototype
// function Karakter(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Karakter.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama} selamat makan`;
// }

// Karakter.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama} kamu bermain dan energi berkurang`;
// }

// Karakter.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama} selamat tidur`;
// }

// let muel = new Karakter('muel', 10);


//Versi dengan class
class Karakter{
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} selamat makan`;
    }
    
    main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama} kamu bermain dan energi berkurang`;
    }

    tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama} selamat tidur`;
    }
}

let muel = new Karakter('muel', 10);

