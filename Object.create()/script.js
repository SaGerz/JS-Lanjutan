const methodKarakter = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan`);
    },

    main: function (jam) {
        this.energi -= jam
        console.log(`Energi ${this.nama} berkurang karena telah bermain game selama ${jam} jam `);
    }
};


//Function deklaration tapi cara yang benarnya : 
function Karakter(nama, energi) {
    let karakter = Object.create(methodKarakter);
    karakter.nama = nama;
    karakter.energi = energi;

    return karakter;
}

let samuel = Karakter("Samuel", 10);
let muel = Karakter('muel', 20);
