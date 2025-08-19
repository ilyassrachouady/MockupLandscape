import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Locally Owned Since 2015
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sunrise Earthworks, established in January 2015, specializes in landscaping, 
            septic systems installation, and custom earthwork in the Kenora area of Ontario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Sunrise Earthworks?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Workmanship</h4>
                  <p className="text-gray-600">
                    We take pride in every project, using the best materials and techniques to ensure lasting results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h4>
                  <p className="text-gray-600">
                    Born and raised in Kenora, we understand the unique challenges of Northern Ontario landscaping and earthworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h4>
                  <p className="text-gray-600">
                    We show up on time, communicate clearly, and complete projects as promised.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fully Licensed & Insured</h4>
                  <p className="text-gray-600">
                    Your peace of mind is our priority. We're fully licensed and carry comprehensive insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://static.wixstatic.com/media/d5a954_edf2ccec003248919b42a083cf00ce4a~mv2.jpg/v1/fill/w_407,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d5a954_edf2ccec003248919b42a083cf00ce4a~mv2.jpg"
              alt="Professional earthworks and landscaping in Kenora"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-2xl font-bold">Professional Results</div>
              <div className="text-lg">Every Time, Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;