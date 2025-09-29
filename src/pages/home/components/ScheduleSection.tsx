
import { motion } from 'framer-motion';

export default function ScheduleSection() {
  const scheduleItems = [
    { time: '9:00 - 10:30', event: 'Check-in / Reporting', date: 'Oct 28', icon: 'ri-login-box-line', color: 'from-green-500 to-emerald-600' },
    { time: '10:00 - 11:00', event: 'Orientation Program', date: 'Oct 28', icon: 'ri-presentation-line', color: 'from-blue-500 to-cyan-600' },
    { time: '11:00 - 11:30', event: 'Event Start', date: 'Oct 28', icon: 'ri-rocket-line', color: 'from-purple-500 to-pink-600' },
    { time: '1:00 - 2:00', event: 'Lunch Break', date: 'Oct 28', icon: 'ri-restaurant-line', color: 'from-orange-500 to-red-600' },
    { time: '5:30 - 6:00', event: 'Evening Snacks', date: 'Oct 28', icon: 'ri-cake-line', color: 'from-yellow-500 to-orange-600' },
    { time: '8:00 PM', event: 'First Evaluation', date: 'Oct 28', icon: 'ri-file-search-line', color: 'from-indigo-500 to-purple-600' },
    { time: '8:30 - 9:30', event: 'Dinner', date: 'Oct 28', icon: 'ri-restaurant-2-line', color: 'from-red-500 to-pink-600' },
    { time: 'Late Night', event: 'Midnight Snacks', date: 'Oct 28', icon: 'ri-moon-line', color: 'from-gray-500 to-blue-600' },
    { time: '8:00 - 9:00', event: 'Breakfast', date: 'Oct 29', icon: 'ri-sun-line', color: 'from-yellow-500 to-orange-500' },
    { time: '11:00 AM', event: 'Final Evaluation', date: 'Oct 29', icon: 'ri-trophy-line', color: 'from-green-500 to-teal-600' },
    { time: '12:30 PM', event: 'Prize Distribution', date: 'Oct 29', icon: 'ri-award-line', color: 'from-purple-500 to-indigo-600' },
    { time: '2:00 PM', event: 'End of Event', date: 'Oct 29', icon: 'ri-flag-line', color: 'from-red-500 to-orange-600' }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-orbitron">
            Event <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey through 24 hours of innovation and excitement
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 h-full rounded-full"></div>

          <div className="space-y-12">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-3`}>
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-3`}>
                        <i className={`${item.icon} text-white text-xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{item.event}</h3>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.time}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg z-10`}
                  ></motion.div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Important Notes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-gray-800">Punctuality</h4>
              <p className="text-gray-600 text-sm">Please arrive on time for all scheduled events</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto">
                <i className="ri-team-line text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-gray-800">Team Coordination</h4>
              <p className="text-gray-600 text-sm">Stay with your team throughout the event</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-gray-800">Enjoy</h4>
              <p className="text-gray-600 text-sm">Have fun and make the most of this experience!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
