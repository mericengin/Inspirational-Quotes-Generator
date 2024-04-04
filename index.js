const quote = document.getElementById("quote");
const generateQuoteBtn = document.getElementById("generate-quote");

let quotes = [

  {
    quote: "The reward of a thing well done is to have done it.",
    author: "Ralph Waldo Emerson"
  },

  {
    quote: "Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.",
    author: "Albert Einstein"
  },

  {
    quote: "Try to learn something about everything and everything about something.",
    author: "Thomas H. Huxley"
  },

  {
    quote: "Most powerful is he who has himself in his own power.",
    author: "Seneca"
  },

  {
    quote: "For the things we have to learn before we can do them, we learn by doing them.",
    author: "Aristotle"
  },

  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },

  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },

  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },

  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },

  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },

  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  }

];

function getRandomQuote() {
  
  let randomIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomIndex];

}

function displayQuote() {

  let randomQuote = getRandomQuote();

  let quoteHtml = `<div class="quote">${randomQuote.quote}</div>
  <div class="author">- ${randomQuote.author}</div>`;

  quote.innerHTML = quoteHtml;
  
}

generateQuoteBtn.addEventListener('click', displayQuote);

document.addEventListener('keydown', event =>{
  if(event.key === "Enter") {
    displayQuote();
  }
}); 