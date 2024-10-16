var express = require('express');
var router = express.Router();

const jokes = [
  "Q. Why do Java developers wear glasses? Because they don’t C sharp.",
  "Q. A SQL query walks into a bar, walks up to two tables and asks Can I join you?",
  "Q. Why do programmers prefer dark mode? Because the light attracts bugs.",
  "Q. How did the programmer die in the shower?\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
  "Q. How many programmers does it take to change a light bulb?\nA. None – It’s a hardware problem!",
  "Q. Why do programmers always mix up Halloween and Christmas?\nA. Because Oct 31 equals Dec 25.",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams."
];

const message = process.env.MESSAGE;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: message, joke: jokes[Math.floor(Math.random()*jokes.length)] });
});

module.exports = router;
