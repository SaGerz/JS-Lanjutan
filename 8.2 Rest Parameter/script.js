//Rest Parameter => mengambil sisa 
// function myFunction(a, ...myArgs) {
//     return `nilai a itu adalah ${a}, dan sisa nya masuk di ...myArgs yaitu nilainya : ${myArgs}`

//     //Sedikit note cara merubah object ke array bisa menggunakan sintaks = Array.from(object yang ingin dirubah)
// }

// console.log(myFunction (1,2,3,4,5));


// function jumlahkan(...angka) {
//     //dengan cara for .of bilek : 
//     let total = 0; 
//     for( const a of angka ) {
//         total += a;
//     }
//     return total;

    // dengan cara high order function bilek : 
    // return angka.reduce((a, i) => a + i );

// }

// console.log(jumlahkan (1,2,3,4,5));

//Penggunaan rest parameter ketika melakukan array distructuring bilek : 
// const klmpk1 = ['paquito','kang tempe','ucok','dicky','doni'];
// const [ketua, wakil, ...anggota] = klmpk1;
// console.log(ketua);

//Penggunaan rest parameter ketika melakukan object distructuring bilek : 
// const team = {
//     pm: 'Samuel',
//     frontEnd1: 'oyong',
//     frontEnd2: 'koci',
//     backEnd: 'abdul' 
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);


//Filtering
// function fillterBy(number, ...values) {
//     return values.filter( v => typeof v === 'boolean' );
// }
// console.log(fillterBy('boolean', 1,2,'samuel',false, 10, true, 'dody'))





