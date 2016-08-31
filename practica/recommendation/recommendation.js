// This returns a new array with the elements that exist in both arrays (intersection)
function intersect(array1, array2) {
  // TODO
  return [];
}

// https://en.wikipedia.org/wiki/Jaccard_index
function jaccardIndex(array1, array2) {
  // calculate |array1 ^ array2| / (|array1| + |array2| - |array1 ^ array2|)
  var intersection = intersect(array1, array2);
  return intersection.length / (array1.length + array2.length - intersection.length);

}

// calculates the jaccard index for each pair of movies
function calculateJaccardIndex(data) {

  for (var key in data) {
    // initialize the array empty
    data[key].similarities = [];
    for (var key2 in data) {
      // we calculate the similarities for each pair of movies, we skip when it's the same movie
      if (key != key2) {
        data[key].similarities.push({
          name: key2,
          score: jaccardIndex(data[key].users, data[key2].users)
        });
      }
    }
  }
}

// we parse the list of movies and create a new object
function prepareDatabase(data) {

  var db = {};

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].peliculas.length; j++) {
      var key = createKeyForMovie(data[i].peliculas[j]);
      // if the movie does not exist yet we creat it in our new db
      if (!db[key]) {
        db[key] = {
          name: data[i].peliculas[j].charAt(0).toUpperCase() + data[i].peliculas[j].slice(1),
          users: []
        }
      }
      db[key].users.push(data[i].nombre.toLowerCase());
    }
  }

  calculateJaccardIndex(db);

  return db;
}

// why does this function exist? (explain)
function createKeyForMovie(movie) {
  return movie
    .trim()
    .toLowerCase()
    .replace('á', 'a')
    .replace('é', 'e')
    .replace('í', 'i')
    .replace('ó', 'o')
    .replace('ú', 'u')
    .replace(/[^a-zA-Z0-9\-]/g, '-'); // a leap of faith
}

// this looks for recommendations that are over the desired threshold
// TODO make threshold optional
function getRecommendation(movie, threshold) {

  var movieKey = createKeyForMovie(movie);

  var similarities = [];

  if (db[movieKey]) {
    similarities = db[movieKey].similarities;
  }

  // TODO filter the results that have a score lower than threshold

  // TODO sort the results to have the highest scores on top

  // TODO for each result return an object with the attributes 'movie' and 'score'

  // TODO return the recommendation
  return [];
}

function getMovies() {

  // TODO return the list of movies, ordered by name

  return [];

}

var data = require('./data/db.json');
// prepare database of movies
var db = prepareDatabase(data);

module.exports = {
  getRecommendation: getRecommendation,
  getMovies: getMovies
};
