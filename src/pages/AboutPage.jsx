import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const AboutPage = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ProjectExplore</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering students with hands-on learning through real-world projects
            </p>
          </motion.div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6">
                ProjectExplore is dedicated to helping students bridge the gap between theoretical knowledge and practical application. 
                We provide comprehensive project guides across multiple technology domains to help you build a strong portfolio.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Our platform offers step-by-step instructions, industry-standard practices, and real-world project examples to 
                accelerate your learning journey.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900">10+ Domains</h3>
                  <p className="text-gray-600">Technology areas</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900">100+ Projects</h3>
                  <p className="text-gray-600">Hands-on learning</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900">5000+ Students</h3>
                  <p className="text-gray-600">Empowered learners</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose ProjectExplore?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Structured Learning Path</h4>
                    <p className="text-gray-600">Progressive difficulty levels for each domain</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Real-World Projects</h4>
                    <p className="text-gray-600">Build portfolio-worthy projects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Step-by-Step Guidance</h4>
                    <p className="text-gray-600">Detailed instructions for each project</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Community Support</h4>
                    <p className="text-gray-600">Get feedback from peers and mentors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Industry-Relevant Skills</h4>
                    <p className="text-gray-600">Learn technologies used by top companies</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ProjectExplore Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to learning through hands-on projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Explore Domains",
                description: "Browse through various technology domains to find your interest",
                icon: "🔍"
              },
              {
                step: "2",
                title: "Learn Fundamentals",
                description: "Understand core concepts before diving into projects",
                icon: "📚"
              },
              {
                step: "3",
                title: "Build Projects",
                description: "Apply your knowledge by building real-world projects",
                icon: "🛠️"
              },
              {
                step: "4",
                title: "Showcase Skills",
                description: "Add completed projects to your portfolio",
                icon: "🏆"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.icon}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 -mt-10 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and developers dedicated to student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & Lead Instructor",
                bio: "10+ years in software development and education"
              },
              {
                name: "Sarah Williams",
                role: "Curriculum Director",
                bio: "Expert in project-based learning methodologies"
              },
              {
                name: "Michael Chen",
                role: "Technical Advisor",
                bio: "Former engineer at leading tech companies"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Join thousands of students who are enhancing their skills through hands-on project building
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/domains">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Domains
                </motion.button>
              </Link>
              {currentUser ? (
                <Link to="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Continue Learning
                  </motion.button>
                </Link>
              ) : (
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Sign Up Free
                  </motion.button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;