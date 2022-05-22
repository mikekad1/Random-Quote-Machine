const QUOTEBANK = [
  {
    quote: "Life sucks, but in a beautiful kind of way.",
    author: "W. Axl Rose"
  }, {
    quote: "We are made up of two contrasting ideals: Love And Fear. Pick One and Live.",
    author: "W. Axl Rose"
  }, {
    quote: "Fear is where there is no love. Love is where there is no fear.",
    author: "W. Axl Rose"
  }, {
    quote: "I like to be real private; you don't always want everyone around you - even when they like you.",
    author: "W. Axl Rose"
  }
];
window.onload = init;
      function init(){
        generateQuote()
      }
function generateQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];
  
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";
  
  //adding the quote
  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  
  twitterLink += quoteInApiFormat
  
  //adding author
  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  
  twitterLink += "_" + authorInApiFormat
  
  
  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
        document.getElementById("author").innerText = randomQuoteData.author;
}