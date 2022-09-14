// const tampikanNama = nama => {
//     return ` haloo ${nama} `;
// }

// console.log(tampikanNama('samuel'));

const halo = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
}

console.log(halo('samuel', 'Pagi'));

//implisit return => tidak perlu menuliskan return dan juga kurung kurawal
const tampikanNama = nama => `haloo ${nama} `;
console.log(tampikanNama('samuel'));

//Menghitung banyak huruf didalam sebuah nama di array dengan menngunakan function
let pemain = ['sam', 'oji', 'joni'];
// let jumlahHuruf = pemain.map( function (nama) {
//     return nama.length;
// } )
// console.log(jumlahHuruf);

//sedangkan ini menggunakan fucntion implisit => meringkas kode
// let jumlahHuruf = pemain.map ( nama => nama.length );
// console.log(jumlahHuruf);

//Jika ingin dalam bentuk object, bukan array : 
let jumlahHuruf = pemain.map ( nama => ({ nama: nama, jmlHuruf: nama.length}) );
console.table(jumlahHuruf);




