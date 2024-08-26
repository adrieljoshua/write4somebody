import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Card = ({ title, content, color }) => {
    const colourClasses: Record<string, string> = {
        beige: '#BBA4A4',
        red: '#401010',
        blue: '#102040',
        purple: '#1A1040',
        pink: '#8872B6',
        indigo: '#103140',
        cyan: '#72B6AE',
        sandal: '#B69F72',
        green: '#88B672',
        black: '#000000',
    }

      const bgColorClass = colourClasses[color] || colourClasses.beige;
  return (
    <div className={`m-6 max-w-sm text-2xl w-96 text-primary-light h-96 rounded-lg overflow-hidden shadow-sm-light font-royal flex flex-col border border-primary-dark ${content=="thisisplusbutton" ? "bg-primary" : ""}`}>
      {/* Card Top part (Name area)*/}
      <div className="flex-grow-0 flex-shrink-0 h-1/5 border-b border-primary-dark bg-inherit p-6">
       {content=="thisisplusbutton" ?
        <h3 className="truncate text-secondary">Write a message for someone</h3>:<h3 className="truncate">To: {title}</h3>}
      </div>

        {content=="thisisplusbutton" ?
      (<button 
        className="bg-inherit text-secondary rounded hover:bg-secondary hover:text-primary flex items-center justify-center h-full "
        onClick={() => alert('Plus button clicked!')} // You can replace this with any function
      >
        <FiPlus className="text-center" size={24} />
      </button>):

      (
      <div className="flex-grow h-4/5 p-6 overflow-y-auto hide-scrollbar scroll-smooth">
        <p className="overflow-hidden text-ellipsis">
          {content}
        </p>
      </div>)}
    </div>
  );
};

export default Card;
