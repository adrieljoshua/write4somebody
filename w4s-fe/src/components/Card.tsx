import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="m-6 max-w-sm text-2xl w-96 text-primary-light h-96 rounded-lg overflow-hidden shadow-sm-light bg-inherit font-royal flex flex-col border border-primary-dark">
      {/* Card Top part (Name area)*/}
      <div className="flex-grow-0 flex-shrink-0 h-1/5 border-b border-primary-dark bg-inherit p-6">  
        <h3 className="truncate">{title}</h3>
      </div>

        {/* Card Bottom part (Message area) */}
      <div className="flex-grow h-4/5 p-6 overflow-y-auto hide-scrollbar scroll-smooth">
        <p className="overflow-hidden text-ellipsis">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
