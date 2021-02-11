const numberOfFilms = +window.prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};

const a = window.rompt('Один из последних просмотренных филмов?',''),
      b = window.prompt('На сколько оцените его?', ''),
      c = window.prompt('Один из поледних просмотренных фильмов?', ''),
      d = window.prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);