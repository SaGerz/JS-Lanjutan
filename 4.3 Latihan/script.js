// Ambil semua elemen yang ada di video
//Array.from adalah fungsi mengubah sesuatu menjadi array, COntoh seperti dibawah ini dari nodelist menjadi array
const elVid = Array.from(document.querySelectorAll('[data-duration]'));

// Yang kita pilih hanya playlist js lanjutan
let jsLanjut = elVid.filter( video => video.textContent.includes('JAVASCRIPT Lanjutan') )

//Ambil durasi masing-masing video 
//kita chaining dari program filter diatas
.map( item => item.dataset.duration )

//ubah durasi menjadi float, ubah menit jadi detik 
.map( waktu => {
    //Misal waktu =  10:30 => ['10', '30']
    const parts = waktu.split(':').map( part => parseFloat(part) );
    return (parts[0] * 60) +  parts[1];
} )

//Jumlahkan semua detiknya
.reduce( (total, detik) => total + detik);


//Ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;


// Simpan dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = ` ${jam} jam, ${menit} menit, ${detik} detik `;

//Jumlah video
const jmlVideo = elVid.filter( video => video.textContent.includes('JAVASCRIPT Lanjutan') ).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video`;


