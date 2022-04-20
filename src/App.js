import "./App.css";
import React from "react";
import { quotes } from "./data";
function App() {
  let [quote, setQuote] = React.useState({
    text: "A good plan today is better than a perfect plan tomorrow.",
    author: null,
  });

  const tweetQuote = () => {
    const url = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
    window.open(url, "_blank");
  };

  const fetchQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((response) => {
        setQuote(response[Math.floor(Math.random() * response.length)]);
      })
      .catch((err) => {
        console.log(err);
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      });
  };
  // console.log(quote.text);
  return (
    <main>
      <h1 className={quote.text.length > 70 ? "long-quote" : ""}>
        <i className="fa-solid fa-quote-left"></i>
        {quote.text}
      </h1>
      <h2>- {quote.author ? quote.author : "Unknown"}</h2>
      <div id="btns">
        <button id="tweet" title="Tweet This!" onClick={tweetQuote}>
          <i className="fa-brands fa-twitter"></i>
        </button>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </main>
  );
}

export default App;
