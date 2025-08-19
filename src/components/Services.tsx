import React from 'react';
import { Wrench, TreePine, Mountain, Truck, Leaf, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Septic Systems',
      subtitle: 'Installation & Certification',
      description: 'Professional septic system installation and maintenance with full Ontario certification. Trust our experts for reliable, compliant septic solutions.',
      features: ['Professional installation', 'System maintenance', 'Repairs & upgrades', 'Ontario certified'],
      image: 'https://static.wixstatic.com/media/d5a954_09a38e3a5c32495db96259836b101500~mv2.jpg/v1/fill/w_316,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5a954_09a38e3a5c32495db96259836b101500~mv2.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TreePine,
      title: 'Landscaping',
      subtitle: 'Design & Beautification',
      description: 'Transform your outdoor space with our professional landscaping services. From design to completion, we create beautiful, functional landscapes.',
      features: ['Landscape design', 'Planting & grading', 'Site beautification', 'Maintenance services'],
      image: 'https://static.wixstatic.com/media/d5a954_edf2ccec003248919b42a083cf00ce4a~mv2.jpg/v1/fill/w_407,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d5a954_edf2ccec003248919b42a083cf00ce4a~mv2.jpg',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mountain,
      title: 'Yard Development',
      subtitle: 'Site Prep & Earthmoving',
      description: 'Comprehensive site preparation and earthmoving services. We handle everything from excavation to final grading for your construction projects.',
      features: ['Site preparation', 'Excavation services', 'Lawn grading', 'Construction support'],
      image: 'https://static.wixstatic.com/media/d5a954_5aed18a73ff74d949b4f4418cd1c4867~mv2.jpg/v1/fill/w_673,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d5a954_5aed18a73ff74d949b4f4418cd1c4867~mv2.jpg',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Truck,
      title: 'Gravel Delivery',
      subtitle: 'Sales & Delivery',
      description: 'Premium gravel supply and delivery for driveways, walkways, and construction projects. Multiple types available with competitive pricing.',
      features: ['Bulk gravel supply', 'Multiple gravel types', 'Delivery services', 'Competitive pricing'],
      image: 'https://static.wixstatic.com/media/d5a954_554623a0fa7544018ccfa24ab1c63636~mv2.jpg/v1/fill/w_379,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d5a954_554623a0fa7544018ccfa24ab1c63636~mv2.jpg',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Leaf,
      title: 'Soil Delivery',
      subtitle: 'Sales & Delivery',
      description: 'Quality topsoil and garden soil for all your landscaping needs. Premium soil delivered to your project site with bulk pricing available.',
      features: ['Premium topsoil', 'Garden soil', 'Bulk pricing', 'Delivery available'],
      image: 'https://static.wixstatic.com/media/d5a954_ea238a816c6e4d71a0c89407f0ef2dfb~mv2.jpg/v1/fill/w_673,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d5a954_ea238a816c6e4d71a0c89407f0ef2dfb~mv2.jpg',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Professional Services
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            From septic system installation to comprehensive earthworks and landscaping, 
            we provide professional solutions for all your property development needs in Kenora.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-10 lg:gap-12 items-center`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:pr-4 lg:pr-8' : 'lg:pl-4 lg:pl-8'} order-2 lg:order-1`}>
                  <div className="mb-4 sm:mb-6">
                    <div className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4`}>
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {service.subtitle}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base min-h-[44px]"
                  >
                    Get Quote
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Image */}
                <div className="flex-1 order-1 lg:order-2 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl sm:rounded-2xl transform rotate-2 sm:rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                    <img 
                      src={service.image}
                      alt={`${service.title} - ${service.subtitle}`}
                      className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transform -rotate-2 sm:-rotate-3 group-hover:rotate-0 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                Get a personalized quote for your septic, landscaping, or earthworks project. 
                Our team will assess your needs and provide transparent, competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-white text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px]"
                >
                  Request a Quote
                </button>
                <a 
                  href="tel:8074643467"
                  className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px]"
                >
                  Call Now: 807-464-3467
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;