import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData.json';
import { useAuth } from '../contexts/AuthContext';

const DomainsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { currentUser } = useAuth();

  // Get unique categories from domains
  const categories = ['all', ...projectsData.domains.map(domain => domain.name)];

  const filteredDomains = projectsData.domains.filter(domain => {
    const matchesSearch = domain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || domain.name === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology Domains</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our comprehensive collection of projects across various technology domains
            </p>
          </motion.div>
        </div>
      </header>

      {/* Search and Filter Bar - Navbar Style */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="flex-grow max-w-xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Search domains..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Categories Dropdown */}
            <div className="flex-shrink-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                className="block w-full md:w-48 pl-3 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {projectsData.domains.map(domain => (
                  <option key={domain.id} value={domain.name}>{domain.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDomains.map((domain) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{domain.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{domain.name}</h3>
                      <p className="text-gray-600">{domain.projects.length} projects</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{domain.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <Link 
                        to={`/projects/${domain.id}`}
                        className="text-purple-600 hover:text-purple-800 font-medium"
                      >
                        Explore Projects
                      </Link>
                      <Link 
                        to={`/learn/${domain.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Learn
                      </Link>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action for Non-Logged-In Users */}
          {!currentUser && (
            <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl shadow-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are mastering technology through hands-on projects.
                Sign up today to track your progress and build your portfolio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/signup" 
                  className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  Create Free Account
                </Link>
                <Link 
                  to="/login" 
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DomainsPage;