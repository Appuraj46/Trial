
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-phone-line text-cyan-400"></i>
                </div>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-mail-line text-cyan-400"></i>
                </div>
                <span>nexathon@sdit.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-map-pin-line text-cyan-400"></i>
                </div>
                <span>Shree Devi Institute of Technology<br />Kenjar, Mangaluru</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About Event', 'Schedule', 'Rules & Regulations', 'Problem Statements', 'Team'].map((link) => (
                <div key={link} className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: 'ri-instagram-line', href: '#' },
                { icon: 'ri-twitter-line', href: '#' },
                { icon: 'ri-linkedin-line', href: '#' },
                { icon: 'ri-facebook-line', href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
                >
                  <i className={`${social.icon} text-white`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Nexathon. All rights reserved. | 
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 ml-1"
            >
              Powered by Readdy
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
