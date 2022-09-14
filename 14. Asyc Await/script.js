// const coba = new Promise (resolve => {

//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000)

// })

// coba.then(() => console.log(coba))

// Coba async dan await
function cobaAsync() {
    
    return new Promise ((resolve, rejected) => {
        const waktu = 6000;
        if (waktu < 5000) {
               setTimeout(() => {
            resolve('selesai')
            }, waktu)
        } else {
            rejected('kelamaan boy')
        }
    
    })
}

// const coba = cobaAsync();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));

async function coba() {
    //Untuk melakukan then dan cath didalam fungsi seperti ini tidak akan jalan maka kita akan menggunakan try(untuk menangkap jika resolve) & catch(sebaliknya)
    try {
        const coba = await cobaAsync();
        console.log(coba);
    } catch (error) {
        console.log(error);
    } 
   
}

coba();