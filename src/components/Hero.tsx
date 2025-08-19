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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://www.houselogic.com/wp-content/uploads/2019/05/spring-landscaping-ideas-yard.jpg?crop&resize=2048%2C1365&quality=80")'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Expert Septic & Earthworks<br />
          <span className="text-green-400">Solutions in Kenora, ON</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Landscaping, Yard Development, Gravel & Soil Delivery
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToContact}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request a Quote
          </button>
          
          <div className="flex items-center space-x-4 text-lg">
            <a 
              href="tel:8074643467" 
              className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-30 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>807-464-3467</span>
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">9+</div>
            <div className="text-lg">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-lg">Licensed & Insured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">Local</div>
            <div className="text-lg">Kenora Experts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;