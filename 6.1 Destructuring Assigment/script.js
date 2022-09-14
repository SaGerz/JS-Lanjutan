// Destructuring variable / assigment

// A. Destructuring array => Mengambil isi dari nilai array dan merubahnya ke dalam sebuah variabel
const salam = ['Halo','nama','saya','samuel'];
// const [satu, dua, tiga, empat] = salam;
// console.log(dua)

//skip item 
// const [satu, , , empat] = salam;
// console.log(empat);

//Swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada functon
// function coba() {
//     return [1, 2];
// }
// const [a,b] = coba();
// console.log(b);

//Rest parameter
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(...values);





// B. Destructuring Object
// const mhs = {
//     nama: 'Samuel',
//     umur: 20
// }
// const {nama,umur} = mhs;
// console.log(nama);


// Assigment tanpa definisi object
// ({nama,umur} = {nama: 'Samuel', umur: 20});
// console.log(nama);


// Assign ke variabel baru 
// const mhs = {
//     nama: 'Samuel',
//     umur: 20
// }
// const {nama: n,umur: u} = mhs;
// console.log(n);


//Default di dalam fungsi
// const mhs = {
//     nama: 'Samuel',
//     umur: 20,
//     email: 'kubo@gmail.com'
// }
// const {nama: n,umur: u, email = 'email@default.com'} = mhs;
// console.log(email);


// Kita juga bisa menambahkan kedalam variabel baru
// const mhs = {
//     nama: 'Samuel',
//     umur: 20,
//     email: 'kubo@gmail.com'
// }
// const {nama: n,umur: u, email:e = 'email@default.com'} = mhs;
// console.log(e);

//Rest Parameter
// const mhs = {
//     nama: 'Samuel',
//     umur: 20,
//     email: 'kubo@gmail.com'
// }
// const {nama: n, ...values} = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim lewat parameter untuk function
const mhs = {
    id: 123,
    nama: 'Samuel',
    umur: 20,
    email: 'kubo@gmail.com'
}

function getIdbyMh({ id }){
    return id;
}

console.log(getIdbyMh(mhs));