import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/spring-landscaping-ideas-yard.jpeg")'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="hero-content flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
          <h1 className="hero-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight text-center max-w-3xl mx-auto">
            Expert Septic & Earthworks<br />
            <span className="text-green-400">Solutions in Kenora, ON</span>
          </h1>
          
          <p className="hero-subheadline text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed text-center px-2">
            Landscaping, Yard Development, Gravel & Soil Delivery
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 w-full">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]"
            >
              Request a Quote
            </button>
            
            <a 
              href="tel:8074643467" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 bg-white bg-opacity-20 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 md:py-5 rounded-lg hover:bg-opacity-30 transition-all duration-300 min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-base sm:text-lg md:text-xl">807-464-3467</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-trust grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-3xl mx-auto w-full">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-400 mb-2 sm:mb-3 md:mb-4">9+</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-400 mb-2 sm:mb-3 md:mb-4">100%</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-400 mb-2 sm:mb-3 md:mb-4">Local</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl">Kenora Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;