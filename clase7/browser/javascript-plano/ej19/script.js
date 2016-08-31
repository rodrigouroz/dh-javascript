function showError(error) {
  var errorContainer = document.querySelector('.error')
  errorContainer.textContent = error;
  errorContainer.style.display = 'block';
}

function loadMovies() {

  function putMoviesInSelect(movies) {
    var select = document.getElementById('peliculas');
    movies.forEach(function (movie) {
      var option = document.createElement('option');
      option.text = movie;
      select.appendChild(option);
    });
    document.querySelector('.exito').style.display = 'none';
  }

  var request = new XMLHttpRequest();
  var url = 'http://movie-recommendations.herokuapp.com/movies';

  request.open('GET', url);

  request.onreadystatechange = function () {
    var termino = 4;
    var statusOk = 200;

    if (request.status === statusOk) {
        if (request.readyState === termino) {
          putMoviesInSelect(JSON.parse(request.responseText));
        }
    } else {
      console.log('Error: ' + request.status);
      showError('Error: ' + request.status);
    }
  }

  request.send();
}

function getRecommendation(movie, threshold) {

  function showRecommendations(recommendations) {
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '';
    var list = document.createElement('ol');
    resultados.appendChild(list);
    recommendations.forEach(function (recommendation) {
      var element = document.createElement('li');
      element.appendChild(document.createTextNode(recommendation.movie + ' (score: '+recommendation.score+')'));
      list.appendChild(element);
    });
  }

  var request = new XMLHttpRequest();
  var url = 'http://movie-recommendations.herokuapp.com/recommendation?movie='+movie+'&threshold='+threshold;

  request.open('GET', url);

  request.onreadystatechange = function () {
    var termino = 4;
    var statusOk = 200;

    if (request.status === statusOk) {
        if (request.readyState === termino) {
          showRecommendations(JSON.parse(request.responseText));
        }
    } else {
      console.log('Error: ' + request.status);
      showError('Error: ' + request.status);
    }
  }

  request.send();
}

window.onload = function() {
    loadMovies();

    document.getElementById('recomendar').addEventListener('click', function() {
      var peliculas = document.getElementById('peliculas');
      var movie = peliculas.options[peliculas.selectedIndex].value;
      var threshold = document.getElementById('threshold').value;

      getRecommendation(movie, threshold);

    });
}
