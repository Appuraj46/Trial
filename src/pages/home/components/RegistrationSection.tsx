
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    member2: '',
    member3: '',
    member4: '',
    leaderCollege: '',
    member2College: '',
    member3College: '',
    member4College: '',
    leaderPhone: '',
    memberPhone: '',
    email: '',
    isIEEEMember: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value.toString());
      });
      
      // Add registration fee to form data
      formDataToSubmit.append('registrationFee', registrationFee.toString());

      const response = await fetch('https://readdy.ai/api/form/d3bo9pmenqf2o6v54a5g', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('Registration successful! Proceeding to payment...');
        
        // Simulate payment processing and redirect to a payment page
        setTimeout(() => {
          // Create a payment form and submit it
          const paymentForm = document.createElement('form');
          paymentForm.method = 'POST';
          paymentForm.action = 'https://secure.razorpay.com/v1/checkout/embedded';
          paymentForm.target = '_blank';
          
          // Add payment parameters
          const params = {
            key_id: 'rzp_test_1234567890', // Demo key
            amount: (registrationFee * 100).toString(), // Amount in paise
            currency: 'INR',
            name: 'Nexathon 2024',
            description: `Registration for team: ${formData.teamName}`,
            prefill_name: formData.leaderName,
            prefill_email: formData.email,
            prefill_contact: formData.leaderPhone,
            notes_team_name: formData.teamName,
            notes_event: 'Nexathon 2024 Registration'
          };
          
          Object.entries(params).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            paymentForm.appendChild(input);
          });
          
          document.body.appendChild(paymentForm);
          paymentForm.submit();
          document.body.removeChild(paymentForm);
          
          setSubmitStatus('Payment window opened! Complete your payment to confirm registration.');
          
          // Reset form after payment redirect
          setTimeout(() => {
            setFormData({
              teamName: '',
              leaderName: '',
              member2: '',
              member3: '',
              member4: '',
              leaderCollege: '',
              member2College: '',
              member3College: '',
              member4College: '',
              leaderPhone: '',
              memberPhone: '',
              email: '',
              isIEEEMember: false
            });
            setSubmitStatus('');
          }, 3000);
        }, 1500);
      } else {
        setSubmitStatus('Registration failed. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const registrationFee = formData.isIEEEMember ? 600 : 700;

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-orbitron">
            Register Your <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot in Nexathon 2024 and be part of this incredible innovation journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
          >
            <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
              {/* Team Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-team-line text-white"></i>
                  </div>
                  Team Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-7

70 mb-2">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your team name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Team Leader Name *
                    </label>
                    <input
                      type="text"
                      name="leaderName"
                      value={formData.leaderName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter team leader name"
                    />
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-user-add-line text-white"></i>
                  </div>
                  Team Members (2-4 members total)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Member 2 Name
                    </label>
                    <input
                      type="text"
                      name="member2"
                      value={formData.member2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus

:border-transparent transition-all duration-300"
                      placeholder="Enter member 2 name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Member 3 Name
                    </label>
                    <input
                      type="text"
                      name="member3"
                      value={formData.member3}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2

 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter member 3 name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Member 4 Name
                    </label>
                    <input
                      type="text"
                      name="member4"
                      value={formData.member4}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2

 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter member 4 name"
                    />
                  </div>
                </div>
              </div>

              {/* College Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-
center justify-center mr-3">
                    <i className="ri-school-line text-white"></i>
                  </div>
                  College Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium

 text-gray-700 mb-2">
                      Leader's College *
                    </label>
                    <input
                      type="text"
                      name="leaderCollege"
                      value={formData.leaderCollege}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2

 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter leader's college name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Member 2's College
                    </label>
                    <input
                      type="text"
                      name="member2College"
                      value={formData.member2College}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border

 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter member 2's college name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm

 font-medium text-gray-700 mb-2">
                      Member 3's College
                    </label>
                    <input
                      type="text"
                      name="member3College"
                      value={formData.member3College}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded

 -lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter member 3's college name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm

 font-medium text-gray-700 mb-2">
                      Member 4's College
                    </label>
                    <input
                      type="text"
                      name="member4College"
                      value={formData.member4College}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border

 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter member 4's college name"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl

 font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500

 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-white"></i>
                  </div>
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block

 text-sm font-medium text-gray-700 mb-2">
                      Leader's Phone *
                    </label>
                    <input
                      type="tel"
                      name="leaderPhone"
                      value={formData.leaderPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border

 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all

 duration-300"
                      placeholder="Enter leader's phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block

 text-sm font-medium text-gray-700 mb-2">
                      Alternate Phone
                    </label>
                    <input
                      type="tel"
                      name="memberPhone"
                      value={formData.memberPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border

 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-

 all duration-300"
                      placeholder="Enter alternate phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block

 text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full

 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500

 focus:border-transparent transition-all duration-300"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
              </div>

              {/* IEEE Membership */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="isIEEEMember"
                    checked={formData.isIEEEMember}
                    onChange={handleInputChange}
                    className="w-5

 h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <label className="text-lg font-medium text-gray-700">
                    IEEE Member (Get ₹100 discount!)
                  </label>
                </div>
                
                {formData.isIEEEMember && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4

 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <p className="text-blue-800 font-medium">
                      <div className="w-5 h-5 flex items-center

 justify-center inline-block mr-2">
                        <i className="ri-information-line"></i>
                      </div>
                      You should

 submit your IEEE member card while reporting to the event.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Registration Fee */}
              <div className="bg-gradient-to-r from-cyan-50

 to-purple-50 rounded-xl p-6 border border-cyan-200">
                <h3 className="text-2xl

 font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500

 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-money-rupee-circle-line text-white"></i>
                  </div>
                  Registration Fee
                </h3>
                
                <div className="text-center">
                  <div className="text-4xl

 font-bold text-gray-800 mb-2">
                    ₹{registrationFee}
                  </div>
                  <p className="text-gray-600">
                    {formData.isIEEEMember ? 'IEEE Member Price' : 'Regular Price'}
                  </p>
                  {!formData.isIEEEMember && (
                    <p className="text-sm

 text-gray-500 mt-2">
                      IEEE members

 save ₹100!
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap

={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600

 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl

 hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50

 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex

 items-center">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-loader-4-

 line animate-spin"></i>
                      </div>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <div className="w-5

 h-5 flex items-center justify-center mr-2">
                        <i className="ri-secure-payment-line"></i>
                      </div>
                      Register & Pay ₹{registrationFee}
                    </span>
                  )}
                </motion.button>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}

                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 rounded-lg ${
                    submitStatus.includes('successful') || submitStatus.includes('saved') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus}
                </motion

.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
