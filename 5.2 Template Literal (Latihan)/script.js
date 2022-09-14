//Macam macam kondisi HTML fragment
//1. looping 
// const mhs = [
//     {
//         nama: 'Samuel',
//         umur: 20
//     },
//     {
//         nama: 'Dodo',
//         umur: 22
//     },
//     {
//         nama: 'Erik',
//         umur: 21
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.umur}</li>
//     </ul>`).join('')}
// </div>`;



//2. Conditionals
// ternary
// const lagu = {
//     judul: "You're my Y",
//     penyanyi: 'Taki',
//     feat: 'MSyess'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(ft})` : ''}</li>eat. ${lagu.fea
//     </ul>
// </div>`;


//3. nested
const mhs = {
    nama: 'Samuel',
    semester: '2',
    mataKuliah: [
        'Desain dan analisis Algoritma',
        'Pemrograman',
        'TOEIC',
        'Arsitektur dan organisasi Komputer'
    ]
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span>semester: ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

function cetakMataKuliah (mataKuliah) {
    return `<ol> 
            ${mataKuliah.map( mk => `<li>${mk}</li>`).join('') } 
            </ol>`;
} 
   


document.body.innerHTML = el;