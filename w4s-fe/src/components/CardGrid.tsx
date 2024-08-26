import React, { useEffect, useState } from 'react';
import Card from './Card'; 

const CardGrid = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/api/cards')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
           // Log the fetched data
          const cardData = data.map(({ letterId, createdAt, toName, message, fromName, color }) => ({
            letterId,
            createdAt,
            toName,
            message,
            fromName,
            color,
          }));
            // Set the fetched data to state
           setCards(cardData);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }, []);
  return (
    <div className="flex flex-wrap w-10/12 justify-center mt-20">
         {/* Hardcoded First Card */}
        <Card title="" content="thisisplusbutton" color="blue"/>
      {cards.map((card) => (
        <div key={card.letterId} className="">
          <Card title={card.toName} content={card.message} color={card.color}/>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;