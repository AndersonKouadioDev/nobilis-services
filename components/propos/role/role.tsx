import React from 'react';

export default function Role() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
        <div className="md:w-3/5 p-8 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
            <h2 className="text-purple-600 font-semibold tracking-wide">NOTRE MISSION</h2>
          </div>
          <p className="text-gray-800">
            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that's what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We've raised
          </p>
        </div>
        <div className="md:w-2/5">
          <img 
            src="/assets/images/illustrations/propos/mission.png" 
            alt="Construction worker with surveying equipment" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row-reverse rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
        <div className="md:w-3/5 p-8 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
            <h2 className="text-purple-600 font-semibold tracking-wide">NOTRE VISION</h2>
          </div>
          <p className="text-gray-800">
            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that's what they are eir IT from falling apart. We've raised
          </p>
        </div>
        <div className="md:w-2/5">
          <img 
            src="/assets/images/illustrations/propos/vision.png" 
            alt="Professional woman in business attire" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}