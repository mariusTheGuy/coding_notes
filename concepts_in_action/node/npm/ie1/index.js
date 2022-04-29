// https://www.npmjs.com/
// npm i give-me-a-joke

let joke = require("give-me-a-joke");
// console.log(joke);

joke.getRandomCNJoke((cnJoke) => console.log(cnJoke));
