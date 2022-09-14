// 1. For ... of
// A. Array : 
// const mhs = ['samuel', 'genaro', 'pinokio'];

//Jika kita ingin menampilkannya dengan cara for
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// Jika menggunakan for each
// mhs.forEach(m => console.log(m));

// Jika menggunakan for..of
// for( m of mhs ){
//     console.log(m);
// }


// B. String : 
// const nama = 'samuel';
// for(const n of nama){
//     console.log(n);
// }

// const mhs = ['samuel', 'genaro', 'pinokio'];
// mhs.forEach( (nama, i) => {
//     console.log(`${nama} adalah mahasiswa ke-${i + 1}`);
// });

// for( const [i, m] of mhs.entries() ){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }


// C. Nodelist : 
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach( n => console.log(n.textContent) );
// for(n of liNama) {
//     console.log(n.textContent)
// }


// D. Argument
// function penjumlahan() {
//     //ingat ketika didalam sebuah fungsi tidak ada argument / parameter maka nilai penangkapnya disimpan pada sebuah argument
//     let jumlah = 0
//     for( a of arguments ){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(penjumlahan(1,2,3,4,5));

// 2. For .. in
const mhs = {
    nama: 'samuel',
    umur: 20,
    email: 'takkk@gmail.com'
}

// for( m in mhs ) { console.log(m) } => ini jika ingin mengambil value nya saja tanpa nilai
for ( m in mhs ) { console.log(mhs[m]) } //=> ini jika ingin menampilkan isi dari value nya m sebagai indeks dari mhs