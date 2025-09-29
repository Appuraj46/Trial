import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function TeamPage() {
  const organizers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Event Director',
      department: 'Computer Science & Engineering',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20professor%20in%20formal%20attire%2C%20computer%20science%20department%20head%2C%20academic%20leader%20portrait%2C%20confident%20expression%2C%20university%20setting%20background%2C%20professional%20headshot%20photography&width=300&height=300&seq=team1&orientation=squarish',
      bio: 'Leading the vision and strategic direction of Nexathon 2025'
    },
    {
      name: 'Prof. Priya Sharma',
      role: 'Technical Coordinator',
      department: 'Information Technology',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20professor%20in%20formal%20attire%2C%20information%20technology%20department%2C%20academic%20coordinator%20portrait%2C%20friendly%20expression%2C%20modern%20office%20background%2C%20professional%20headshot%20photography&width=300&height=300&seq=team2&orientation=squarish',
      bio: 'Overseeing technical aspects and infrastructure for the hackathon'
    },
    {
      name: 'Arjun Patel',
      role: 'Student Coordinator',
      department: 'Final Year CSE',
      image: 'https://readdy.ai/api/search-image?query=Young%20Indian%20male%20student%20leader%20in%20casual%20formal%20attire%2C%20computer%20science%20student%2C%20confident%20student%20coordinator%20portrait%2C%20campus%20background%2C%20natural%20lighting%20photography&width=300&height=300&seq=team3&orientation=squarish',
      bio: 'Managing student activities and participant coordination'
    },
    {
      name: 'Sneha Rao',
      role: 'Marketing Lead',
      department: 'Third Year IT',
      image: 'https://readdy.ai/api/search-image?query=Young%20Indian%20female%20student%20in%20modern%20casual%20attire%2C%20marketing%20team%20leader%2C%20creative%20student%20portrait%2C%20vibrant%20campus%20setting%2C%20professional%20student%20photography&width=300&height=300&seq=team4&orientation=squarish',
      bio: 'Leading promotional activities and sponsor relations'
    },
    {
      name: 'Karthik Nair',
      role: 'Logistics Manager',
      department: 'Final Year ECE',
      image: 'https://readdy.ai/api/search-image?query=Young%20Indian%20male%20student%20in%20smart%20casual%20attire%2C%20logistics%20coordinator%2C%20organized%20student%20leader%20portrait%2C%20college%20environment%20background%2C%20professional%20student%20headshot&width=300&height=300&seq=team5&orientation=squarish',
      bio: 'Ensuring smooth operations and event logistics'
    },
    {
      name: 'Ananya Shetty',
      role: 'Design Head',
      department: 'Second Year CSE',
      image: 'https://readdy.ai/api/search-image?query=Young%20Indian%20female%20student%20with%20creative%20style%2C%20design%20team%20leader%2C%20artistic%20student%20portrait%2C%20modern%20college%20setting%2C%20creative%20professional%20photography&width=300&height=300&seq=team6&orientation=squarish',
      bio: 'Creating visual identity and promotional materials'
    }
  ];

  const volunteers = [
    { name: 'Rahul Menon', role: 'Registration Team' },
    { name: 'Divya Kamath', role: 'Hospitality Team' },
    { name: 'Aditya Bhat', role: 'Technical Support' },
    { name: 'Pooja Hegde', role: 'Media Team' },
    { name: 'Vikram Shenoy', role: 'Security Team' },
    { name: 'Nisha Pai', role: 'Food Coordination' },
    { name: 'Suresh Kumar', role: 'Transport Team' },
    { name: 'Meera Rao', role: 'Documentation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The dedicated individuals working tirelessly to make Nexathon 2025 an unforgettable experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Organizers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Core Organizing Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-cyan-500 to-purple-600"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{member.department}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
              Volunteer Team
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Our amazing volunteers who make everything possible behind the scenes
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {volunteers.map((volunteer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-user-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{volunteer.name}</h4>
                  <p className="text-gray-600 text-xs">{volunteer.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Thanks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Special Thanks</h3>
              <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
                We extend our heartfelt gratitude to the faculty, staff, and administration of 
                Shree Devi Institute of Technology for their unwavering support in making Nexathon 2025 possible. 
                Together, we're building a platform for innovation and excellence that will inspire the next 
                generation of technologists and innovators.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}