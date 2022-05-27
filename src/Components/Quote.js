import React, { useState, useEffect} from "react";
import '../App.css';
import axios from 'axios';

const Quote = () => {

    
    const [quotes, setQuotes] = useState([{}]);
    const [currentQuote, setCurrentQuote] = useState('')
    const [currentAuthor, setCurrentAuthor] = useState('')

    const getQuotes = () => {
        axios.get("https://type.fit/api/quotes")
        .then((response) => {
            setQuotes(response.data)
            const index = Math.floor(Math.random()*response.data.length)
            setCurrentQuote(response.data[index].text)
            setCurrentAuthor(response.data[index].author)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const getRandomQuote = () => {
        const index = Math.floor(Math.random()*1000)
        setCurrentQuote(quotes[index].text)
        setCurrentAuthor(quotes[index].author)
    }

      useEffect(() => {
        getQuotes();
      }, [])

    return (
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
              <i className="fa fa-quote-left"> </i><span id="text">{currentQuote}</span>
            </div>
            <div className="quote-author"> <span id="author">{currentAuthor}</span></div>
            <hr />
                <div className="buttons">
                    <div className="col">
                        <div className="row-xs-3">
                            <a
                                className="button"
                                id="tweet-quote"
                                title="Tweet this quote!"
                                href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                        <div className="row-xs-3">
                            <a
                                className="button"
                                id="tumblr-quote"
                                title="Post this quote on tumblr!"
                                href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="
                                target="_blank"
                                rel="noreferrer"
                            >
                            <i className="fa fa-tumblr"></i>
                            </a>
                        </div>
                        <div className="row-xs-3">
                            <button className="btn btn-primary " id="new-quote" onClick={getRandomQuote}>New quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;