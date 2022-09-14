//Destructuring
// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

//Destructuring jika tidak memperhatikan urutan bisa dilakukan dengan object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,
//     }
// }

// const {kurang, kali, bagi, tambah} = kalkulasi(2, 3);
// console.log(kurang);


//cara biasa : 
// const mhs1 = {
//     nama: 'samuel',
//     umur: 20
// }
 
// function cetakMhs(mhs) {
// return `Halo nama saya ${mhs.nama}, umur saya ${mhs.umur}`;
// }

// console.log(cetakMhs (mhs1));

// Jika dengan destrukturing
// const mhs1 = {
//     nama: 'samuel',
//     umur: 20
// }
 
// function cetakMhs({ nama, umur }) {
// return `Halo nama saya ${nama}, umur saya ${umur}`;
// }

// console.log(cetakMhs (mhs1));


//Jika terdapat object bersarang 
const mhs1 = {
    nama: 'samuel',
    umur: 20,
    nilai: {
        uts: 80,
        tugas: 90,
        uas: 85 
    }
}
 
function cetakMhs({ nama, umur, nilai: {uts,uas,tugas} }) {
return `Halo nama saya ${nama}, umur saya ${umur} dan nilai uas saya adalah ${tugas}`;
}

console.log(cetakMhs (mhs1));
