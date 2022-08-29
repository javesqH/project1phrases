import React from 'react';
import quotes from './quotes.json'

const Author = ({author}) => {
    return (
        <div>
            <h2>{quotes[author].author}</h2>
        </div>
    );
};

export default Author;