import React from 'react'
import quotes from './QuoteDB'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div className="card" >

            <div className="card-body">
                <p className="card-text">{quote.quote}</p>
                <p className="card-title"> {quote.author} </p>
                <button
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate Jokes</button>
               {/* <button
                    className="ml-3"
                    onClick={() => {
                        generateRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                type="submit"><i class="fab fa-twitter"></i> Share Quote</button> */}
            </div>
        </div>
    )
}