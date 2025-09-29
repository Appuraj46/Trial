
import { motion } from 'framer-motion';

export default function EventDetailsSection() {
  const rules = [
    'Teams must consist of 2-4 members',
    'All team members must be current students',
    'Original code and ideas only - no plagiarism',
    'Use of external APIs and libraries is allowed',
    'Teams must present their solution within time limit',
    'Judges\' decision will be final',
    'IEEE members get special discount on registration'
  ];

  return (
    <section id="event-details" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Event <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Details</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Nexathon 2025
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Prize Pool */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30"
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-4xl"></i>
              </div>
              Prize Pool
            </h3>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 rounded-xl p-8 backdrop-blur-sm mb-6"
              >
                <div className="text-6xl font-bold text-yellow-400 mb-4">₹50,000</div>
                <p className="text-xl text-gray-300">Total Prize Pool</p>
              </motion.div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-4 border border-cyan-500/30">
                <p className="text-cyan-400 font-semibold text-lg">Plus: Internship opportunities for winners!</p>
              </div>
            </div>
          </motion.div>

          {/* Rules & Regulations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-blue-400">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-list-line text-4xl"></i>
              </div>
              Rules & Regulations
            </h3>
            <div className="space-y-3">
              {rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-300">{rule}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What Makes Nexathon Special
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'ri-gift-line',
                title: 'Exciting Goodies',
                description: 'All participants receive exclusive Nexathon merchandise and tech goodies'
              },
              {
                icon: 'ri-award-line',
                title: 'Participation Certificates',
                description: 'Digital certificates for all participants to showcase their involvement'
              },
              {
                icon: 'ri-star-line',
                title: 'Theme-based Prizes',
                description: 'Special recognition for innovative solutions in different categories'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${highlight.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-cyan-400">{highlight.title}</h4>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
