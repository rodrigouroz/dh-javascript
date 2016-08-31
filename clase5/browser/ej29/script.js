function randomColor() {
  var R, G, B;
  R = Math.floor(Math.random() * 255);
  G = Math.floor(Math.random() * 255);
  B = Math.floor(Math.random() * 255);

  var color = R.toString(16) + G.toString(16) + B.toString(16);

  return '#'+color;
}


window.onload = function () {

  var body = document.querySelector('body');

  body.style.backgroundColor = randomColor();

}
