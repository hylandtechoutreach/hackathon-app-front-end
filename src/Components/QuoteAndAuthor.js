import React from "react";
import quotes from "./QuoteDB";
import "../css/QuoteAndAuthor.css";


export default function QuoteAndAuthor(props) {
  const { quote, generateRandomQuote } = props;
  
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{quote.quote}</p>
        <p className="card-title"> {quote.author} </p>
        <button  
          onClick={() => {
            generateRandomQuote(quotes);
          }}
          type="submit"
        >
          <i class="fas fa-mouse"></i> Click
        </button>
      </div>
    </div>
  );
}
