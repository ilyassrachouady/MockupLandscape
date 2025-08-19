import React from 'react';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <img 
                src="/Proof 1 - Sunrise Earthworks Logo new_1_.avif"
                alt="Sunrise Earthworks Logo"
                className="h-8 w-auto sm:h-10 mr-2 sm:mr-3"
              />
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-green-400">Sunrise</span>
                <span className="text-white"> Earthworks</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Your trusted partner for septic systems, landscaping, and earthworks in Kenora, Ontario since 2015. 
              We provide quality, professional services for residential and commercial properties throughout the region.
            </p>
            
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://facebook.com/sunriseearthworks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-2 sm:p-3 rounded-lg transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('testimonials');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <a 
                  href="tel:8074643467" 
                  className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors"
                >
                  807-464-3467
                </a>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <a 
                  href="mailto:sunriseearthworks123@gmail.com" 
                  className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors break-all"
                >
                  sunriseearthworks123@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-sm sm:text-base text-gray-300">
                  3132 HWY 596, Kenora, ON
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-3 md:mb-0">
              SUNRISE EARTHWORKS © {currentYear}
            </div>
            
            <div className="text-sm text-gray-400">
              Licensed & Insured | Serving Kenora, Ontario
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;