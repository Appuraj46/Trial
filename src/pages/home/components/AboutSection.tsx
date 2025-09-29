
import { motion } from 'framer-motion';

export default function AboutSection() {
  const features = [
    {
      icon: 'ri-time-line',
      title: '24-Hour Challenge',
      description: 'Non-stop coding marathon to test your limits and creativity'
    },
    {
      icon: 'ri-team-line',
      title: 'Team Collaboration',
      description: 'Work with brilliant minds and build lasting connections'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation Focus',
      description: 'Solve real-world problems with cutting-edge technology'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Exciting Rewards',
      description: 'Win prizes, internships, and recognition for your skills'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-orbitron">
            About <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Nexathon</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nexathon is where the rich cultural heritage of Mangaluru meets cutting-edge technology. 
            This premier hackathon brings together innovative minds to solve real-world challenges 
            through collaborative coding and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20hackathon%20event%20with%20diverse%20students%20coding%20together%2C%20laptops%20and%20technology%20setup%2C%20collaborative%20workspace%20with%20traditional%20Indian%20architectural%20elements%20in%20background%2C%20vibrant%20atmosphere%20with%20young%20innovators%20working%20on%20projects%2C%20professional%20event%20photography%2C%20warm%20lighting&width=600&height=400&seq=about-img&orientation=landscape"
              alt="Nexathon Event"
              className="rounded-2xl shadow-2xl object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-2xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Innovation Meets Tradition
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience the perfect blend of Mangaluru's coastal charm and technological innovation. 
              Our hackathon celebrates both our cultural roots and our vision for the future, 
              creating an environment where creativity flourishes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700">24-hour intensive coding experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700">Mentorship from industry experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700">Networking with like-minded innovators</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
