// $(document).ready(function() {

//     $('.search-button').on('click', function () {
        
//         function getDataMovie (url, succes, error){
//             //Ajax dengan vanila javascript
//             let xhr = new XMLHttpRequest();
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState === 4) {
//                     if (xhr.status === 200) {
//                         succes(xhr.response);
//                     } else if (xhr.status === 404){
//                         error();
//                     }
//                 }
//             }
        
//             xhr.open('get', url);
//             xhr.send();
//         }
        
//         getDataMovie('http://www.omdbapi.com/?apikey=4adbc784&s=' + $('.input-keyword').val(), succes => {
//             // console.log(JSON.parse(succes));
//             const movies = JSON.parse(succes).Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             })
//             $('.movie-container').html(cards);
        
//             //Ketika tombol details di klik
//             $('.modal-detail-button').on('click', function () {
//                 // console.log($(this).data('imdbid'));
//                 let imdbid = $(this).data('imdbid');
//                 console.log(imdbid);
    
//                 function getDataDetail (url, succes, error){
//                     //Ajax dengan vanila javascript
//                     let xhr1 = new XMLHttpRequest();
//                     xhr1.onreadystatechange = function () {
//                         if (xhr1.readyState === 4) {
//                             if (xhr1.status === 200) {
//                                 succes(JSON.parse(xhr1.response));
//                             } else if (xhr1.status === 404){
//                                 error();
//                             }
//                         }
//                     }
                
//                     xhr1.open('get', url);
//                     xhr1.send();
//                 }
                
//                 getDataDetail('http://www.omdbapi.com/?apikey=4adbc784&i=' + $(this).data('imdbid'), result => {
//                 // console.log($(this).data('imdbid'));
//                 // const url = 'http://www.omdbapi.com/?apikey=4adbc784&i=' + $(this).data('imdbid')
//                 // console.log(url);
//                     // console.log(result);
//                     const movieDetail = showMovieDetail(result);
//                     $('.modal-body').html(movieDetail);
//                     // document.querySelector('.modal-body').innerHTML = movieDetail;
                         
//                 }, (e) => {
//                     console.log(e.responseText);
//                 });
                    
            
//             });
        
//         }, (e) => {
//             console.log(e.responseText);
//         });
        
//     });
//     })


// Ajax dengan Fecth 
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=4adbc784&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movie = response.Search;
            let cards = '';
            movie.forEach(m => {
                cards += showCards(m);
            });
            const movieContainer = document.querySelector('.movie-container');;
            movieContainer.innerHTML = cards;
        
            // Ketika tombol details di klik
            const movieDetailButton = document.querySelectorAll('.modal-detail-button');
            movieDetailButton.forEach( btn => {
                btn.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=4adbc784&i=' + imdbid)
                        .then(response => response.json())
                        .then(response => {
                            const modalbody = document.querySelector('.modal-body');
                            modalbody.innerHTML = showMovieDetail(response);
                        });
                })
            })
        })
});






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