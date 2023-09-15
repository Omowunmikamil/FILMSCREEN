// Using the TMDB API to get the movie data

const API_KEY = 'c6e4f8f45ddef6fbd022a88ecb99fc80';
const URL_BASE = 'https://api.themoviedb.org/3';
const API_URL = URL_BASE + '/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY;

getMovieDB(API_URL);

function getMovieDB(url) {
    fetch(url).then(res => res.json()).then(data=> {
        console.log(data);
    })
}