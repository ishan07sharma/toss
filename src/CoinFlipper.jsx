import React, { useState } from 'react';

const CoinFlipper = ({ headsImageUrl, tailsImageUrl }) => {
  const [isHeads, setIsHeads] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleFlip = () => {
    setClicked(true);
    setIsFlipping(true);
    setTimeout(() => {
      setIsHeads(Math.round(Math.random()));
      setIsFlipping(false);
    }, 3000); 
  };

  return (
    <div className="flex flex-col items-center gap-5">
    
      <div className={`relative w-60 h-60 ${isFlipping ? 'animate-multiflip' : ''}`}>
        <div className={`absolute w-full h-full ${isHeads ? '' : 'hidden'}`}>
          <img src={headsImageUrl} alt="Heads" className="w-full h-full object-cover" />
        </div>
        <div className={`absolute w-full h-full ${isHeads ? 'hidden' : ''}`}>
          <img src={tailsImageUrl} alt="Tails" className="w-full h-full object-cover" />
        </div>
      </div>
      <button 
        onClick={handleFlip} 
        className="text-4xl mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Toss
      </button>
      {clicked?(isHeads?<h1 className="text-4xl font-bold">Heads</h1>:<h1 className="text-4xl font-bold">Tails</h1>):null}
    </div>
  );
};

export default CoinFlipper;