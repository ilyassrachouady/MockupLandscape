import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get Your Free Quote Today
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Ready to start your project? Contact us for a free, no-obligation quote. 
            We'll assess your needs and provide personalized recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                  <a 
                    href="tel:8074643467" 
                    className="text-green-600 hover:text-green-700 text-base sm:text-lg font-medium"
                  >
                    807-464-3467
                  </a>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Available for quotes and emergency services
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a 
                    href="mailto:sunriseearthworks123@gmail.com" 
                    className="text-green-600 hover:text-green-700 text-base sm:text-lg font-medium break-all"
                  >
                    sunriseearthworks123@gmail.com
                  </a>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-sm sm:text-base text-gray-700">3132 HWY 596, Kenora, ON P0X 1C0</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Serving Kenora and surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <div className="text-sm sm:text-base text-gray-700 space-y-1">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 5:00 PM</p>
                    <p>Sunday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <a 
                href="tel:8074643467"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Call Now for Immediate Service</span>
              </a>
              
              <a 
                href="mailto:sunriseearthworks123@gmail.com"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Send Us an Email</span>
              </a>
            </div>

            {/* Google Maps */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Find Us</h4>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.0642686565507!2d-94.7137858!3d49.8036594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52be1b07142ee127%3A0xf6ea0b1ed7472523!2sSunrise%20Earthworks!5e0!3m2!1sen!2sma!4v1755625975496!5m2!1sen!2sma" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunrise Earthworks Location"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Request Free Quote
            </h3>

            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Thank You!</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  We've received your request and will contact you within 24 hours with your free quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base min-h-[44px]"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base min-h-[44px]"
                      placeholder="(807) 464-3467"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base min-h-[44px]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base min-h-[44px]"
                  >
                    <option value="">Select a service</option>
                    <option value="septic-systems">Septic Systems</option>
                    <option value="landscaping">Landscaping Services</option>
                    <option value="yard-development">Yard Development / Earthmoving</option>
                    <option value="gravel-delivery">Gravel Delivery / Sales</option>
                    <option value="soil-delivery">Soil Delivery / Sales</option>
                    <option value="full-project">Full Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base min-h-[44px]"
                    placeholder="Tell us about your project, property size, specific needs, timeline, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base min-h-[44px]"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send My Free Quote Request</span>
                </button>

                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;