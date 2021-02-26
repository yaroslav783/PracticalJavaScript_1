'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function(){
        do
        {
        personalMovieDB.count = +window.prompt('Сколько фильмов вы уже посмотрели?', '');

        }while(personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count));
    },

    rememberMyFilms: function(){
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
    },

   detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        }else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
    },

     showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        } else{
            personalMovieDB.private = true;
        }
    },

    writeYouGenres: function(){
        // for(let i = 1; i <= 3; i++){
        //     let genre = window.prompt(`Ваш любимый жанр под номер ${i}`);

        //     if(genre === '' || genre == null){
        //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i-1] = genre;
        //     }
        // }

       

        for(let i = 1; i < 2; i++){
            let genres = window.prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if(genres === '' || genres == null){
                console.log(`Вы ввели некорректные данные или не ввели их вовсе`);
                i--;
            } else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

         personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }

};
