//Membuat Object
//Object llteral
//Problem : tidak efektif untuk object yang banyak
// let karakter = {
//     nama: 'samuel',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }


//Function declarartion
// function Karakter(nama, energi) {
//     let karakter = {};
//     karakter.nama = nama;
//     karakter.energi = energi;

//     karakter.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     karakter.main = function (jam) {
//         this.energi -= jam
//         console.log(`Energi ${this.nama} berkurang karena telah bermain game selama ${jam} `);
//     }

//     return karakter;
// }

// let samuel = Karakter("Samuel", 10);
// let muel = Karakter('muel', 20);

//Constructor Function (keyword New)
// function Karakter(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Energi ${this.nama} berkurang karena telah bermain game selama ${jam} jam`);
//     }
// }

// let samuel = new Karakter("Samuel", 10);
// let muel = new Karakter('muel', 20);
