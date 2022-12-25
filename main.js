import './style.scss'
import './bg/stars.scss'
import Parallax from 'parallax-js'
import { generateStars } from './bg/stars'

var scene = document.querySelector("#app")
var para = new Parallax(scene)

new Typewriter("#typewriter", {
  strings: ["PROGRAMMER", "ARTIST", "PHOTOGRAPHER"],
  autoStart: true,
  loop: true
});

var starsPosition = generateStars();

const maxStarsPosition = 700;
const minStarsPosition = 0;

export const generateCometaFromStar = function(starsLocation) {
  let position = Math.floor(
    Math.random() * (maxStarsPosition - minStarsPosition) + minStarsPosition
  );
  let coord = starsLocation[position];
  let element = document.getElementsByClassName("star-type1 " + position)[0];
  if (element.classList.contains("animated")) {
    element.classList.remove("animated");
  }

  //add start light
  setTimeout(() => {
    element.classList.add("animated-cometa");
  }, position * 1000);
};

for (let count = 0; count < 4; count++) {
  generateCometaFromStar(starsPosition);
}
