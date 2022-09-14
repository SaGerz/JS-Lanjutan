// Ajax dengan Jquery
// $(document).ready(function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=4adbc784&s=Avengers',
//         succes: movies => {
//             console.log(movies);
//         }
//     })
// });


// Dengan fetch 
// fetch('http://www.omdbapi.com/?apikey=4adbc784&s=Avengers')
// .then(response => response.json())
// .then(response => console.log(response));


// Promise : 
// Contoh 1 : 
// let ditepati = false;
// const janji1 = new Promise((resolve, rejected) => {
//     if ( ditepati ) {
//         resolve('Janji ditepati')
//     } else {
//         rejected('Janji ga nangis?')
//     }
// })

// janji1
//     .then(response => console.log(`Okee : ${response}`))
//     .catch(response => console.log(`DEK : ${response}`));


//Contoh 2 : 
// let ditepati = true;
// const janj2 = new Promise ((resolve, rejected) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Janji berhasil diterapkkan')   
//         }, 2000) 
//     } else {
//         setTimeout(() => {
//             rejected('Janji gak nangis')
//         }, 2000)
//     }
// })

// janj2
//     .finally(() => console.log('tunnggu 2 detik dulu yagesya'))
//     .then(response => console.log(response))
//     .catch(response => console.log(response))


// Promise all

const film = new Promise (resolve => {
    setTimeout(() => {
        resolve ([{
            Judul: 'Kang Bubur Naik jabatan',
            Direct: 'kang bubur',
            pemeran: 'dody, jery'
        }]);
    },1000)
})

const cuaca = new Promise (resolve => {
    setTimeout(() => {
        resolve ([{
            Kota: 'Bandung',
            Temp: 33
        }]);
    }, 500)
})

// Jika ingin menjalan kan satu satu kita bisa menggunakan cara seperti dibawah ini :
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Namun jika kondisinya kita ingin menampilkan banyak api kita bisa menggunakan promise all seperti dibawah ini :
Promise.all([film, cuaca])
    // .then(response => console.log(response)) namun untuk syntaks disamping ini mengembalikan aray didalm array 
    // Maka kita akan pisah aray nya satu satu dengan spread operator menggunakan cara dibawah ini :
    .then( response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    } )