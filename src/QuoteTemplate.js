import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuoteTemplate = () => {
    const [quote, setQuote] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [citate, setCitate] = useState();
    const [color, setColor] = useState("rgb(" + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + ")");

    const random = () => {
        setCitate(quote[Math.floor(Math.random() * quote.length - 1)]);
        setColor("rgb(" + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 200) + ")")
    }

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Bohdan-sys/Data-test/posts")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setQuote(data)
                    setCitate(data[Math.floor(Math.random() * data.length - 1)])
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className='App' style={{ backgroundColor: color, transition: '.5s' }}>
            <div className='quote quote-sm ' id="quote-box">
                <div className='quote__text' id="text">
                    <h1 className='caption caption--size_3 caption--bold caption--align_center' style={{ color: color }}>
                        <FontAwesomeIcon icon={['fas', 'quote-left']} className="icon icon-quote" style={{ color: color }} />
                        {error ? 'Error'
                            : !isLoaded ? 'Loaded...'
                                : citate ? citate.quote : 'Error'}
                    </h1>
                </div>
                <div className='quote__author' id="author">
                    <h1 className='caption caption--size_5 caption--align_end' style={{ color: color }}> -{citate ? citate.author : '----'}</h1>
                </div>
                <div className='quote__buttons'>
                    <div className='links'>
                        <a href='https://twitter.com/intent/tweet' target='_blank' rel="noreferrer" id="tweet-quote">
                            <FontAwesomeIcon icon={['fab', 'twitter-square']} className="icon icon-twitter" style={{ color: color }} />
                        </a>
                        <a href='https://www.tumblr.com/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={['fab', 'tumblr-square']} className="icon icon-tumblr" style={{ color: color }} />
                        </a>
                    </div>
                    <button className='button' id="new-quote"
                        onClick={() => { random() }}
                        style={{ backgroundColor: color, transition: '.5s' }}>
                        <span className='caption caption--color_white caption--size_6'>New quote</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuoteTemplate

