import React from 'react';

export const FourWayRealityDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 bg-yellow-50/50 rounded-xl border border-yellow-200 shadow-sm">
      <h3 className="text-center font-serif text-lg font-bold text-blue-900 mb-4">Four Way Reality</h3>
      <div className="relative aspect-square">
        {/* Circle Background */}
        <div className="absolute inset-0 rounded-full border-2 border-yellow-600/30 flex flex-wrap overflow-hidden">
          {/* Quadrant IV - Spiritual (Top Left) */}
          <div className="w-1/2 h-1/2 bg-yellow-100/50 border-r border-b border-yellow-600/20 p-2 flex flex-col items-center justify-center text-center text-xs">
            <span className="font-bold text-indigo-900">IV SPIRITUAL</span>
            <span className="text-[10px] leading-tight mt-1 text-gray-700">What is realised<br/>Metaphysical<br/>Spirit<br/>Dhyana Yoga<br/>Responsibility<br/>Bliss</span>
          </div>
          {/* Quadrant III - Intellectual (Top Right) */}
          <div className="w-1/2 h-1/2 bg-yellow-50/50 border-b border-yellow-600/20 p-2 flex flex-col items-center justify-center text-center text-xs">
            <span className="font-bold text-indigo-900">III INTELLECTUAL</span>
            <span className="text-[10px] leading-tight mt-1 text-gray-700">What is thought<br/>Logical<br/>Intellect<br/>Gnaana Yoga<br/>Truth<br/>Joy</span>
          </div>
          {/* Quadrant I - Physical (Bottom Left) */}
          <div className="w-1/2 h-1/2 bg-orange-100/50 border-r border-yellow-600/20 p-2 flex flex-col items-center justify-center text-center text-xs">
            <span className="font-bold text-indigo-900">I PHYSICAL</span>
            <span className="text-[10px] leading-tight mt-1 text-gray-700">What appears<br/>Optical<br/>Body<br/>Karma Yoga<br/>Time<br/>Happiness</span>
          </div>
          {/* Quadrant II - Emotional (Bottom Right) */}
          <div className="w-1/2 h-1/2 bg-orange-200/50 p-2 flex flex-col items-center justify-center text-center text-xs">
            <span className="font-bold text-indigo-900">II EMOTIONAL</span>
            <span className="text-[10px] leading-tight mt-1 text-gray-700">What is felt<br/>Psychological<br/>Mind<br/>Bhakti Yoga<br/>Love<br/>Delight</span>
          </div>
        </div>
        
        {/* Center Self */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border border-yellow-400 shadow-md flex items-center justify-center z-10">
          <span className="font-bold text-gray-800">Self</span>
        </div>

        {/* Outer Arrows (Simulated with text/position) */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Intellect</div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Instinct</div>
        <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 -rotate-90 text-xs text-gray-600">Inspiration</div>
        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 rotate-90 text-xs text-gray-600">Intuition</div>
      </div>
    </div>
  );
};

export const PentagonDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-center font-serif text-lg font-bold text-gray-800 mb-6">Pentagon of Effectiveness</h3>
      <div className="relative aspect-square flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
          {/* Pentagon points */}
          <polygon points="100,10 190,75 155,180 45,180 10,75" fill="#f0fdf4" stroke="#166534" strokeWidth="2" />
          
          {/* Internal lines connecting to center */}
          <line x1="100" y1="10" x2="100" y2="100" stroke="#166534" strokeWidth="1" />
          <line x1="190" y1="75" x2="100" y2="100" stroke="#166534" strokeWidth="1" />
          <line x1="155" y1="180" x2="100" y2="100" stroke="#166534" strokeWidth="1" />
          <line x1="45" y1="180" x2="100" y2="100" stroke="#166534" strokeWidth="1" />
          <line x1="10" y1="75" x2="100" y2="100" stroke="#166534" strokeWidth="1" />

          {/* Labels */}
          <text x="100" y="35" textAnchor="middle" fontSize="8" fill="#166534" fontWeight="bold">Noble Relations</text>
          <text x="155" y="90" textAnchor="middle" fontSize="8" fill="#166534" fontWeight="bold">Noble Determination</text>
          <text x="135" y="160" textAnchor="middle" fontSize="8" fill="#166534" fontWeight="bold">Noble Peace</text>
          <text x="65" y="160" textAnchor="middle" fontSize="8" fill="#166534" fontWeight="bold">Noble Thoughts</text>
          <text x="45" y="90" textAnchor="middle" fontSize="8" fill="#166534" fontWeight="bold">Noble Actions</text>

          {/* Center */}
          <circle cx="100" cy="100" r="15" fill="white" stroke="#166534" />
          <text x="100" y="103" textAnchor="middle" fontSize="8" fontWeight="bold">Self</text>
        </svg>
      </div>
      <div className="mt-4 text-xs text-gray-600 grid grid-cols-2 gap-2">
        <p><strong>I. Noble Thoughts:</strong> Think of needs & resources</p>
        <p><strong>II. Noble Actions:</strong> Remove difficulties</p>
        <p><strong>III. Noble Relations:</strong> Acceptance & Empathy</p>
        <p><strong>IV. Noble Determination:</strong> Equality & Truth</p>
        <p className="col-span-2 text-center"><strong>V. Noble Peace:</strong> Stability & Tranquility</p>
      </div>
    </div>
  );
};