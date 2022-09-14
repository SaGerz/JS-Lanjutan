// // Ajax dengan Fecth 
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
    
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=4adbc784&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movie = response.Search;
//             let cards = '';
//             movie.forEach(m => {
//                 cards += showCards(m);
//             });
//             const movieContainer = document.querySelector('.movie-container');;
//             movieContainer.innerHTML = cards;
        
//             // Ketika tombol details di klik
//             const movieDetailButton = document.querySelectorAll('.modal-detail-button');
//             movieDetailButton.forEach( btn => {
//                 btn.addEventListener('click', function () {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=4adbc784&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(response => {
//                             const modalbody = document.querySelector('.modal-body');
//                             modalbody.innerHTML = showMovieDetail(response);
//                         });
//                 })
//             })
//         })
// });

// Refactoring dari fetch
//Ketika melakukan pencarian
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
   
    const movies = await getDataMovie(inputKeyword.value);
    updateUI(movies);
})


// namun untuk melakukan ketika tombol details dipencet kita tidak bisa langsung membuat sebuah variabel dan mengambil begitu saja, karena itu akan dieksekusi pertama kali sehingga ketika nanti kita klik details button akan error, maka kita akan membuat event binding terlebih dahulu Seperti dibawah ini
//Event Blinding bilek :
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const detailMovie = await getDetailMovie(imdbid);
        updateUIDetail(detailMovie);
    }
})



//fungsi yang bergerak untuk details button
function getDetailMovie(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=4adbc784&i=' + imdbid)
        .then(response => response.json())
        .then(response => response)
}

function updateUIDetail(response) {
    const modalbody = document.querySelector('.modal-body');
    modalbody.innerHTML = showMovieDetail(response);
}
// Akhir fungsi untuk detail button

//ungsi yang bergerak untuk search button
function getDataMovie(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=4adbc784&s=' + keyword)
     .then(response => response.json())
     .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(movies => {
        cards += showCards(movies);
    });
    const movieContainer = document.querySelector('.movie-container');;
    movieContainer.innerHTML = cards;
}
//Akhir fungsi search button





function showCards(m) {
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button"  data-toggle="modal" data-target="#detailMovie" data-imdbid="${m.imdbID}">Show details</a>
        </div>
      </div>
    </div>`;
}

function showMovieDetail(result) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                    <img src="${result.Poster}" class="img-fluid"></img>
                </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${result.Title} ${result.Year}</h4></li>
                    <li class="list-group-item"><strong>Director: </strong> ${result.Director} </li>
                    <li class="list-group-item"><strong>Actors: </strong> ${result.Actors} </li>
                    <li class="list-group-item"><strong>Genre: </strong> ${result.Genre} </li>
                    <li class="list-group-item"><strong>Plot: </strong> <br> ${result.Plot} </li>
                </ul>
            </div>
            </div>
        </div>`;
}