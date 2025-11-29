import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import Footer from '../components/Footer';

const LandingPage = () => {
  const { currentUser } = useAuth();

  // Domain data
  const domains = [
    { name: "AI/ML", icon: "🤖", color: "from-purple-500 to-indigo-500" },
    { name: "Web Dev", icon: "🌐", color: "from-blue-500 to-cyan-500" },
    { name: "App Dev", icon: "📱", color: "from-green-500 to-teal-500" },
    { name: "IoT", icon: "📡", color: "from-yellow-500 to-orange-500" },
    { name: "Cyber Security", icon: "🔒", color: "from-red-500 to-pink-500" },
    { name: "Cloud", icon: "☁️", color: "from-cyan-500 to-blue-500" },
    { name: "Blockchain", icon: "🔗", color: "from-indigo-500 to-purple-500" },
    { name: "Data Science", icon: "📊", color: "from-pink-500 to-rose-500" },
    { name: "AR/VR", icon: "👓", color: "from-teal-500 to-green-500" },
    { name: "Game Dev", icon: "🎮", color: "from-orange-500 to-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating geometric shapes */}
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 border-4 border-purple-300 rounded-lg opacity-20"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            rotate: -360,
            borderRadius: ["10%", "30%", "50%", "30%", "10%"]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
        ></motion.div>
        
        {/* Pulsing dots */}
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-yellow-400"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
          className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-green-400"
        ></motion.div>
      </div>

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="flex-grow flex items-center py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 0.95, 1],
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20"
                  ></motion.div>
                  <motion.img 
                    src="/src/assets/logo.svg" 
                    alt="ProjectExplore Logo" 
                    className="relative h-28 w-28 mx-auto rounded-2xl border-4 border-white shadow-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: 0.2
                    }}
                  />
                </div>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
              >
                Master Technology Through 
                <motion.span 
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 py-2"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Hands-On Projects
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Discover, learn, and build real-world projects across 10+ technology domains. 
                Progress from fundamentals to advanced concepts with our structured learning path designed by industry experts.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
                {currentUser ? (
                  <Link to="/dashboard">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-block cursor-pointer"
                    >
                      Continue Learning
                    </motion.div>
                  </Link>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/signup">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[220px] inline-block cursor-pointer text-center"
                      >
                        Get Started - It's Free
                      </motion.div>
                    </Link>
                    <Link to="/domains">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "#f0f0f0"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border-2 border-purple-600 text-purple-600 font-bold py-4 px-10 rounded-xl text-xl hover:bg-purple-50 transition-all duration-300 min-w-[220px] inline-block cursor-pointer text-center"
                      >
                        Explore Projects
                      </motion.div>
                    </Link>
                  </div>
                )}
              </motion.div>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20"
            >
              {[
                { number: "10+", label: "Technology Domains" },
                { number: "100+", label: "Hands-on Projects" },
                { number: "5K+", label: "Active Learners" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Learning Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Learning Journey
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Follow our proven 4-step process to master technology domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Explore",
                  description: "Browse 10+ technology domains to find your interest",
                  icon: "🔍",
                  color: "from-purple-100 to-blue-100"
                },
                {
                  step: "2",
                  title: "Learn",
                  description: "Master fundamentals before diving into projects",
                  icon: "📚",
                  color: "from-blue-100 to-cyan-100"
                },
                {
                  step: "3",
                  title: "Build",
                  description: "Create real-world projects with step-by-step guidance",
                  icon: "🛠️",
                  color: "from-green-100 to-teal-100"
                },
                {
                  step: "4",
                  title: "Showcase",
                  description: "Add completed projects to your professional portfolio",
                  icon: "🏆",
                  color: "from-yellow-100 to-orange-100"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -15,
                    rotateX: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6`}>
                    {item.icon}
                  </div>
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 -mt-12 relative z-10 shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 10
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-700 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Domains Preview with Longer Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore Technology Domains
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover projects across various cutting-edge technology domains
              </p>
            </motion.div>

            {/* Horizontal Rolling Animation Container with Longer Cards */}
            <div className="overflow-hidden py-8">
              <div className="relative">
                {/* Rolling Animation Track */}
                <motion.div 
                  className="flex whitespace-nowrap"
                  animate={{ 
                    x: ['-100%', '100%'] 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {/* First set of domains with longer cards */}
                  {domains.map((domain, index) => (
                    <motion.div
                      key={`first-${index}`}
                      className="inline-flex flex-col items-center mx-10"
                      whileHover={{ 
                        y: -15,
                        scale: 1.1
                      }}
                    >
                      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-r ${domain.color} flex items-center justify-center text-4xl mb-5`}>
                        {domain.icon}
                      </div>
                      <span className="font-bold text-gray-900 text-2xl">{domain.name}</span>
                    </motion.div>
                  ))}
                  
                  {/* Duplicate set for seamless looping */}
                  {domains.map((domain, index) => (
                    <motion.div
                      key={`second-${index}`}
                      className="inline-flex flex-col items-center mx-10"
                      whileHover={{ 
                        y: -15,
                        scale: 1.1
                      }}
                    >
                      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-r ${domain.color} flex items-center justify-center text-4xl mb-5`}>
                        {domain.icon}
                      </div>
                      <span className="font-bold text-gray-900 text-2xl">{domain.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-16"
            >
              <Link to="/domains">
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-block cursor-pointer"
                >
                  View All Domains
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Learners Say
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Join thousands of satisfied learners who transformed their careers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "ProjectExplore helped me land my first developer job. The hands-on projects gave me the confidence to showcase real skills during interviews.",
                  author: "Sarah Johnson",
                  role: "Frontend Developer",
                  avatar: "SJ"
                },
                {
                  quote: "The structured learning path made complex topics easy to understand. I went from beginner to building machine learning models in just 6 months.",
                  author: "Michael Chen",
                  role: "Data Scientist",
                  avatar: "MC"
                },
                {
                  quote: "As a career changer, I appreciated how ProjectExplore bridges the gap between theory and practice. My portfolio now speaks volumes!",
                  author: "David Rodriguez",
                  role: "Full Stack Developer",
                  avatar: "DR"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                Join thousands of learners who are building real projects and advancing their careers with ProjectExplore
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                {currentUser ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link to="/dashboard">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-block cursor-pointer"
                      >
                        Continue Learning
                      </motion.div>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                  >
                    <Link to="/signup">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[220px] inline-block cursor-pointer text-center"
                      >
                        Get Started - It's Free
                      </motion.div>
                    </Link>
                    <Link to="/contact">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "#f0f0f0"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border-2 border-purple-600 text-purple-600 font-bold py-4 px-10 rounded-xl text-xl hover:bg-purple-50 transition-all duration-300 min-w-[220px] inline-block cursor-pointer text-center"
                      >
                        Contact Us
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;