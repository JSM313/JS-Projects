const quoteContainer = document.querySelector('#quote-container');

const quoteText = document.querySelector('#quote');

const authorText = document.querySelector('#author');

const twitterBtn = document.querySelector('#twitter');

const newQuote = document.querySelector('#new-quote')

const loader = document.querySelector('#loader');

// show loading

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading

const complete = () => {
  if (!loader.hidden) {

    quoteContainer.hidden = false;

    loader.hidden = true;

  }
}

// Get Quote from API
const log = (arg) => console.log(arg); // console loggin shortuct 

const error = (arg) => console.error(arg);

async function getQuote() {

  loading();

  // ! IF FACING ERROR OVER API ISSUES THEN UNCOMMENT THIS AND ADD THE 'PROXY URL VARIABE' TO THE FETCHING RESPONSE BLOCK => await fetch(proxyUrl + apiURL);

  // const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/';

  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {

    // fetching response
    const response = await fetch(apiUrl);

    // fetching data from that response
    const data = await response.json();

    // If author is not known then it is anonymous
    if (data.quoteAuthor === '') {

      authorText.innerText = 'Anonymous';

    } else {

      authorText.innerText = data.quoteAuthor;
    }

    // Reducing font size for long quotes.

    if (data.quoteText.length > 120) {

      quoteText.classList.add('long-quote');

    } else {

      quoteText.classList.remove('long-quote');

    }
    quoteText.innerText = data.quoteText;

    // Stop Loader and show the quote
    complete();

  } catch (error) {

    getQuote();

  }
}

// Tweet the quote.
const tweetQuote = () => {

  const quote = quoteText.innerText;

  const author = authorText.innerText;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

  window.open(twitterUrl, '_blank');

}

// Event listener for twitter function

// * When click the "new quote" button we will get a new quote

newQuote.addEventListener('click', getQuote);

// * When clicked on the twitter button it will take to the twitter page along with the quote that has been displayed on the screen.

twitterBtn.addEventListener('click', tweetQuote);

//Onload
getQuote();