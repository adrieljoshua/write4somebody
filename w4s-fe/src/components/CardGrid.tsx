import React from 'react';
import Card from './Card'; 

const CardGrid = () => {
  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the first card.' },
    { id: 2, title: 'Card 2', content: 'This is the second card.' },
    { id: 3, title: 'Card 3', content: 'This is the third card.' },
    { id: 4, title: 'Card 4', content: 'This is the fourth card.' },
    { id: 5, title: 'Card 5', content: 'This is the fifth card.' },
    { id: 6, title: 'Card 6', content: 'This is the sixth card.' },
    { id: 7, title: 'Card 7', content: 'This is the seventh card.' },
    { id: 8, title: 'Card 8', content: 'This is the eighth card.' },
    
];

  return (
    <div className="flex flex-wrap w-10/12 justify-center mt-20">
      {cards.map((card) => (
        <div key={card.id} className="">
          <Card title={card.title} content={card.content} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;