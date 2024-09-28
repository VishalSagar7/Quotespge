import React, { useEffect, useState } from 'react';
import QuoteCard from './QuoteCard';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  // Fetch quotes from API
  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => {
          return response.json();
      }).then((data) => {
          const newArray = data.quotes
          const theNewArray = newArray.slice(0,10)
          console.log(theNewArray);
          setQuotes(theNewArray)
          
      })
      .catch(error => {
        console.error("Error fetching the quotes!", error);
      });
  }, []);

  return (
    <div className="bg-[#f8fafc] py-12">
      <h1 className="text-center text-4xl font-bold mb-8">Quotes</h1>
      {quotes.map((quote) => (
        <QuoteCard
          key={quote._id}
          quote={quote.quote}
          author={quote.author}
        />
      ))}
    </div>
  );
};

export default Quotes;
