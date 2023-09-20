// Using the TMDB API to get the movie data

const API_KEY = '2a484bae29615b049d11c8864b9d76ea';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
    
    fetch(url).then(res => res.json()).then(data=> {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMG_URL + poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getcolor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h1>Overview</h1>
                ${overview}
            </div>
        `
        main.appendChild(movieElement);
    })
}

function getcolor(vote) {
    if(vote >= 8) {
        return 'rgb(3, 179, 3)';
    } else if(vote >= 5) {
        return 'rgb(255, 217, 0)';
    } else {
        return 'rgb(201, 4, 4)';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    console.log(searchTerm);

    if(searchTerm) {
        getMovies(searchURL + '&query=' + searchTerm);
    } else {
        getMovies(API_URL);
    }
    
})