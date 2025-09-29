
import { motion } from 'framer-motion';
import CountdownTimer from '../../../components/base/CountdownTimer';

export default function HeroSection() {
  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20technology%20hackathon%20event%20with%20coding%20elements%2C%20circuit%20patterns%2C%20and%20digital%20innovation%20themes%2C%20dark%20blue%20and%20cyan%20color%20scheme%2C%20modern%20tech%20aesthetic%20with%20glowing%20elements%2C%20professional%20event%20photography%20style%2C%20high-tech%20atmosphere%20with%20laptops%20and%20coding%20screens%2C%20vibrant%20neon%20accents&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-orbitron"
          >
            NEXATHON
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto"
          >
            Where Innovation Meets Tradition • 24-Hour Hackathon Challenge
          </motion.p>

          {/* Prize Pool Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-2xl md:text-3xl font-bold shadow-2xl">
              ₹50,000 Prize Pool + Internships
            </div>
          </motion.div>

          {/* Date and Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-cyan-200 space-y-2"
          >
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-calendar-line"></i>
              </div>
              <span>October 28-29, 2025</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-map-pin-line"></i>
              </div>
              <span>Shree Devi Institute of Technology, Mangaluru</span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="py-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Event Starts In</h2>
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToRegister}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Register Your Team
            </motion.button>
            <motion.button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-cyan-200"
          >
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-gift-line"></i>
              </div>
              <span>Exciting Goodies</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-award-line"></i>
              </div>
              <span>Participation Certificates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-trophy-line"></i>
              </div>
              <span>Theme-based Prizes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
