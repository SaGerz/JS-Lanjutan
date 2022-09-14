// Callback
// A. Synchronous callback
// function halo (nama){
//     alert( `Halo, ${nama}`);
// }

// function mintaNama(Callback) {
//     const nama = prompt(`Masukan nama`);
//    Callback(nama);
// }

// mintaNama(halo);

// B. Asynchronous callback : 
// function getDataMahasiswa (url, succes, error){
//     //Ajax dengan vanila javascript
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 succes(xhr.response);
//             } else if (xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('data/mahasiswa.json', succes => {
//     // console.log(JSON.parse(succes));
//     const mhs = JSON.parse(succes);
//     mhs.forEach(e => console.log(`${e.nama} jurusan ${e.jurusan}`));
// }, () => {
    
// });

// Dengan Jquery
$(document).ready(function () {
   $.ajax({
    url: "data/mahasiswa.json",
    type: "GET",
    succes: (results) => {
        results.foreach(m =>  {
            console.log(m.nama);
        })
    },
    error: (e) => {
        console.log(e.responseText);
    }   
   })


});
 
