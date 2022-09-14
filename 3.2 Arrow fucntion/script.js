// Arrow function
// const Mahasiswa = function () {
//     this.nama = 'samuel'
//     this.umur = 20;

//     this.sayHello = () => {
//         console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`)
//     }
    
// } 
// const samuel = new Mahasiswa();


//Object litereal
// const mhs1 = {
//     nama: 'Samuel',
//     umur: 20,
//     sayhello: () => {
//         console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`);
//     }
// }


// const Mahasiswa = function () {
//     this.nama = 'samuel'
//     this.umur = 20;

//     this.sayHello = () => {
//         console.log(`Hello saya ${this.nama}, dan umur saya ${this.umur}`)
//     }

//     setInterval( () => {
//         console.log(this.umur++);  
//     }, 500)
    
// } 
// const samuel = new Mahasiswa();







// Test ke studi kasus 
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600)
})

















