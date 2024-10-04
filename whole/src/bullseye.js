import React, { useState } from 'react';

const texts = Array(22).fill().map((_, i) => 
  i === 21 ? "Congratulations! You've reached the end." : `This is slide ${i + 1} of 22`
);

const ButtonSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handleNumberClick = (index) => {
    setCurrentIndex(index);
  };

  const isLastSlide = currentIndex === texts.length - 1;

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-serif">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-2xl px-4 relative">
          <p 
            className={`text-2xl sm:text-3xl md:text-4xl mb-8 transition-all duration-500 ${isLastSlide ? 'text-yellow-300' : ''}`}
            style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            {texts[currentIndex]}
          </p>
          <button
            onClick={handleNext}
            className={`text-6xl sm:text-7xl md:text-8xl focus:outline-none transition-all duration-300 transform hover:scale-110 active:scale-95 ${isLastSlide ? 'animate-pulse' : ''}`}
            aria-label="Next"
            style={{
              fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              textShadow: isLastSlide 
                ? '0 0 10px rgba(255,255,0,0.7), 0 0 20px rgba(255,255,0,0.5)' 
                : '0 0 8px rgba(255,255,255,0.5), 0 0 16px rgba(255,255,255,0.3)',
              filter: isLastSlide
                ? 'drop-shadow(0 0 15px rgba(255,255,0,0.5))'
                : 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
            }}
          >
            ⦿
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto py-4 bg-black border-t border-gray-800">
        <div className="flex justify-between px-2 sm:px-4 min-w-max">
          {texts.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(index)}
              className={`mx-1 px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                currentIndex === index 
                  ? 'bg-gray-800 text-white font-bold'
                  : 'bg-transparent text-gray-500 hover:bg-gray-900 hover:text-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonSwiper;