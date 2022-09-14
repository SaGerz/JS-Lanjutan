//Spread operator
//Menggabungkan array
// const mhs = ['pinokio','paquito','abel'];
// const dosen = ['ade', 'takur', 'irbit'];
// const gabung = [...mhs, ...dosen];
// console.log(gabung);

//Meng-copy array 
// const mhs = ['pinokio','paquito','abel'];
// // const mhs1 = mhs; >> jika dengan cara sepertti ini akan nilai mhs awal juga akan ikut dirubah
// const mhs1 = [...mhs];
// mhs1[0] = 'yesha';
// console.log(mhs1);


//Mengambil list dan merubah ke  array  bilek : 
// const liNama = document.querySelectorAll('.nama');
// Merubah nodelist menjadi array dengan cara manual bilek:
// const mhs = [];
// for (let index = 0; index < liNama.length; index++) {
//         mhs.push(liNama[index].textContent);    
// }

// Dengan cara keren bilek : 
// const mhs = [...liNama].map(m => m.textContent);

// console.log(mhs);

const nama = document.querySelector('.myName');
const spread = [...nama.textContent].map(s => `<span>${s}</span>`).join('');
nama.innerHTML = spread;