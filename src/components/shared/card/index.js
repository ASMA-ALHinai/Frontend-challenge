
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-xs rounded  shadow-lg bg-white m-4">
      <div className="px-6 py-4">
      
        <p className="text-gray-700 text-base mb-2">
     
          <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={description} alt="" />
        </p>
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>


  );
};

export default Card;
