
import { motion } from 'framer-motion';

export default function SponsorsSection() {
  const sponsors = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%2C%20clean%20minimalist%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20business%20logo%2C%20tech%20industry%20aesthetic%2C%20simple%20geometric%20design&width=200&height=100&seq=sponsor1&orientation=landscape',
      tier: 'Title Sponsor',
      description: 'Leading technology solutions provider'
    },
    {
      name: 'IEEE SDIT Chapter',
      logo: 'https://readdy.ai/api/search-image?query=IEEE%20student%20chapter%20logo%20design%2C%20engineering%20society%20branding%2C%20blue%20and%20gold%20colors%2C%20technical%20organization%20logo%2C%20circuit%20pattern%20elements%2C%20professional%20academic%20design&width=200&height=100&seq=sponsor2&orientation=landscape',
      tier: 'Academic Partner',
      description: 'Institute of Electrical and Electronics Engineers'
    }
  ];

  const themes = [
    {
      title: 'Open Theme',
      description: 'Unleash your creativity! Build any innovative solution that addresses real-world problems. No restrictions - let your imagination run wild and create something extraordinary.',
      icon: 'ri-lightbulb-line',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Internet of Things (IoT)',
      description: 'Connect the physical and digital worlds! Develop smart solutions using sensors, connectivity, and data analytics to create intelligent systems for homes, cities, or industries.',
      icon: 'ri-wifi-line',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Harness the power of AI! Build intelligent applications using machine learning, deep learning, computer vision, or natural language processing to solve complex challenges.',
      icon: 'ri-brain-line',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proud partners supporting innovation and technology advancement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-24 object-contain mb-6 rounded-lg bg-white/90 p-3"
                />
                <h3 className="text-2xl font-bold mb-3">{sponsor.name}</h3>
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {sponsor.tier}
                </div>
                <p className="text-gray-300">{sponsor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Themes Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Hackathon <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Themes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path and build something amazing within these exciting themes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gradient-to-br ${theme.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${theme.borderColor} hover:border-opacity-70 transition-all duration-300`}
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${theme.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${theme.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{theme.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">{theme.description}</p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-rocket-line"></i>
                  </div>
                  <span>Build your innovation here</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Ready to Innovate?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pick your theme and start building! Remember, the best solutions often combine multiple technologies 
              and creative thinking. We can't wait to see what you'll create at Nexathon 2025!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
