const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// //fillter with for looping (Target >= 3)
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3){
//       newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


// Fillter dengan funngsi fillter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

//map
//Kalikan semua dengan angak 2 
// const newAngka = angka.map( a => a * 2 );
// console.log(newAngka);

//Reduce
// Menambahkan semua elemen
// const newAngka = angka.reduce( (accumulate, curentValue) => accumulate + curentValue);
// console.log(newAngka);


//Method chaining(Melakukan semua yang diatas dalam satu tahap saja)
// cari angka > 5
// Dikalikan 3
// Jumlahkan
const hasil = angka.filter( a => a > 5 )
            .map( a => a * 3 )
            .reduce( (acc, currVal) => acc + currVal );
console.log(hasil);

