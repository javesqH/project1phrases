import React, {useState} from 'react';
import quotes from './quotes.json'


const QuoteBox = ({phrase}) => {
  
   
    return (
        <div>
          <h1> <span className='img1'><i className="fa-solid fa-quote-left"></i></span> {quotes[phrase].quote}</h1>
        </div>
    );
};

export default QuoteBox;