
import { motion } from 'framer-motion';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Event <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Location</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us at the beautiful campus of Shree Devi Institute of Technology in the coastal city of Mangaluru
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-building-line text-4xl"></i>
                </div>
                Shree Devi Institute of Technology
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Address</h4>
                    <p className="text-gray-300">
                      Shree Devi Institute of Technology<br />
                      Kenjar, Mangaluru - 574142<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="ri-car-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">How to Reach</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 15 km from Mangaluru International Airport</li>
                      <li>• 20 km from Mangaluru Central Railway Station</li>
                      <li>• Well connected by bus routes</li>
                      <li>• Ample parking available on campus</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="ri-information-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Campus Facilities</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Modern computer labs with high-speed internet</li>
                      <li>• Comfortable auditorium for presentations</li>
                      <li>• Cafeteria and dining facilities</li>
                      <li>• 24/7 security and medical support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-cyan-500/30">
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Need Directions?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-phone-line text-cyan-400"></i>
                  </div>
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-mail-line text-cyan-400"></i>
                  </div>
                  <span>nexathon@sdit.ac.in</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267!2d74.8560!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827a3b4c5c5c5c5c!2sShree%20Devi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="SDIT Location Map"
              ></iframe>
            </div>
            
            {/* Overlay with campus image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6"
            >
              <img
                src="https://readdy.ai/api/search-image?query=Beautiful%20Indian%20engineering%20college%20campus%20with%20modern%20buildings%2C%20lush%20green%20landscaping%2C%20students%20walking%20on%20pathways%2C%20coastal%20Karnataka%20architecture%2C%20educational%20institution%20exterior%2C%20professional%20campus%20photography&width=600&height=300&seq=campus-img&orientation=landscape"
                alt="SDIT Campus"
                className="rounded-2xl shadow-2xl object-cover w-full h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: 'ri-wifi-line',
              title: 'High-Speed Internet',
              description: 'Dedicated fiber connection for seamless development'
            },
            {
              icon: 'ri-shield-check-line',
              title: '24/7 Security',
              description: 'Round-the-clock security for participant safety'
            },
            {
              icon: 'ri-restaurant-line',
              title: 'Food & Beverages',
              description: 'Multiple meal options and refreshments available'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold mb-3 text-cyan-400">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
