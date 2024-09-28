import React from 'react';

const QuoteCard = ({ quote, author,key }) => {
  return (
    <div key={key} className="bg-[#1c2b44] text-white p-6 rounded-lg shadow-lg w-[70%] mx-auto my-4">
      <p className="text-2xl font-semibold mb-4">
        {quote}
      </p>
      <p className="text-right text-lg font-light">
        — {author}
      </p>
    </div>
  );
};

export default QuoteCard;
