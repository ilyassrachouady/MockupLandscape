import React from 'react';
import { Calendar, Thermometer, Wrench, CheckCircle } from 'lucide-react';

const SeasonalHighlight: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-green-300 mr-2 sm:mr-3" />
              <span className="text-green-300 font-semibold text-sm sm:text-lg">SUMMER 2025 SPECIAL</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Enjoy the Summer<br />
              <span className="text-green-300">2025!</span>
            </h2>
            
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed text-green-100">
              Summer is the perfect time for landscaping projects and septic system maintenance. 
              Get your property ready for outdoor enjoyment with our professional services.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">Professional landscaping and yard development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">Septic system inspection and maintenance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">Gravel and soil delivery for summer projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">Site preparation and earthmoving services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-white text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px]"
              >
                Book Your Summer Project
              </button>
              <a 
                href="tel:8074643467"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 text-center min-h-[44px]"
              >
                Call Now: 807-464-3467
              </a>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <img 
              src="https://static.wixstatic.com/media/d5a954_09a38e3a5c32495db96259836b101500~mv2.jpg/v1/fill/w_316,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5a954_09a38e3a5c32495db96259836b101500~mv2.jpg"
              alt="Spring landscaping and earthworks projects"
              className="rounded-xl shadow-2xl w-full h-64 sm:h-80 object-cover"
            />
            
            {/* Overlay info cards */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white text-gray-900 p-4 sm:p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center mb-2">
                <Thermometer className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                <span className="font-semibold text-sm sm:text-base">Perfect Timing</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Summer projects ensure optimal results for outdoor enjoyment
              </p>
            </div>

            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-green-100 text-green-800 p-3 sm:p-4 rounded-lg shadow-xl">
              <div className="flex items-center">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold text-xs sm:text-sm">Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlight;