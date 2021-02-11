'use strict';

let numberOfFilms; 

function start(){
    numberOfFilms = +window.prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +window.prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = window.prompt('Один из последних просмотренных фильмов?', ''),
              b = window.prompt('На сколько оцените его?','');
    
        if(a != null && b != null && a !== '' && b !== '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}


showMyDB(personalMovieDB.private);

function writeYouGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = window.prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYouGenres();