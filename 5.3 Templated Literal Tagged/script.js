// const nama = 'samuel';
// const umur = 20;

// function coba(string, ...values) {
//     // let result = '';
//     // string.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // })    
//     // return result;

//     //dengan cara reduce : 
//     return string.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');

// }

// const str = coba`Halo nama saya ${nama}, umur saya ${umur} tahun`;

// console.log(str);



// Test highlight
const nama = 'samuel';
const umur = 20;

function highlight(string, ...values) {
    return string.reduce((result, str, i) => `${result}${str} <span class="hl"> ${values[i] || ''} </span>`, '');

}

const str = highlight`Halo nama saya ${nama}, umur saya ${umur} tahun`;

document.body.innerHTML = str;