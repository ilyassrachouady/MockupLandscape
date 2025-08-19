import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Kenora, ON',
      rating: 5,
      text: 'Sunrise Earthworks did an amazing job installing our septic system! Their attention to detail and professionalism is unmatched. The system has been working perfectly for over a year now.',
      service: 'Septic System Installation'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Kenora, ON',
      rating: 5,
      text: 'Reliable, professional, and fair pricing. They\'ve been handling our landscaping and gravel delivery for over 2 years now. Always on time and the quality is consistently excellent.',
      service: 'Landscaping & Gravel Delivery'
    },
    {
      name: 'Jennifer Chen',
      location: 'Kenora, ON',
      rating: 5,
      text: 'Best earthworks company we\'ve worked with! They did our yard development and now handle all our landscaping needs. Professional crew and great communication throughout.',
      service: 'Yard Development & Landscaping'
    },
    {
      name: 'Robert Johnson',
      location: 'Kenora, ON',
      rating: 5,
      text: 'Had them prepare our construction site and deliver topsoil for our new lawn. The transformation was incredible. Highly recommend for anyone looking for quality work at fair prices.',
      service: 'Site Preparation & Soil Delivery'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our septic, landscaping, and earthworks services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-green-200" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">5.0 Stars</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-green-600">Local</div>
              </div>
              <div className="text-2xl font-bold text-gray-900">Expert Service</div>
              <div className="text-gray-600">In Kenora</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-green-600">9+</div>
              </div>
              <div className="text-2xl font-bold text-gray-900">Years</div>
              <div className="text-gray-600">In Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;