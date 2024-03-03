const numberOfFilms = prompt("How many films have you seen?", "");

const personalMovieDB= {
    count:numberOfFilms,
    movies: {},
    actors:{},
    genres:{},
    private: false
};

const a = prompt("Last film u have seen?", ""),
      b = prompt("Rate the film", ""),
      c =prompt("Last film you have seen", ""),
      d = prompt("Rate the film", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);