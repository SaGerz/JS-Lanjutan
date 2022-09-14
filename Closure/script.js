// function init() {
//     // let nama ='shandika';
//     function tampilkanNama(nama) {
//         console.log(nama);
//     }
//     return tampilkanNama;
// }
// let callName = init();
// callName('tupacc');


// function ucapkanSelamat (waktu){
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu} semoga hari mu menyenangkan`);
//     }
// }

// let pagi = ucapkanSelamat('pagi');
// let siang = ucapkanSelamat('siang');
// let malam = ucapkanSelamat('malam');

// pagi('samuel');

// let add = (function (){
//     let counter = 0;
//     return function () {
//        return ++counter;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());



let add = function (){
    let counter = 0;
    return function () {
       return ++counter;
    }
};

let a = add()

console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());


