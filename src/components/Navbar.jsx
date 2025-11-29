import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Pulsing animation for motivational elements
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Rising animation for growth elements
  const riseAnimation = {
    y: [0, -15, 0],
    opacity: [0.2, 0.4, 0.2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeOut"
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg relative overflow-hidden">
      {/* Motivational Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing circles representing energy and motivation */}
        <motion.div 
          animate={pulseAnimation}
          className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-yellow-400 opacity-30"
        ></motion.div>
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-white opacity-30"
        ></motion.div>
        
        {/* Rising arrows representing growth and progress */}
        <motion.div 
          animate={riseAnimation}
          className="absolute top-2/3 left-1/3 text-white text-xl opacity-40"
        >
          ↗️
        </motion.div>
        <motion.div 
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1
            }
          }}
          className="absolute top-1/4 right-1/4 text-yellow-300 text-2xl opacity-40"
        >
          ⬆️
        </motion.div>
        
        {/* Sparkles representing achievement and excellence */}
        <motion.div 
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }
          }}
          className="absolute top-1/5 left-1/2 text-yellow-300 text-lg"
        >
          ✨
        </motion.div>
        <motion.div 
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
            transition: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }
          }}
          className="absolute bottom-1/3 right-1/5 text-white text-base"
        >
          ✨
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/src/assets/logo.svg" alt="ProjectExplore Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Project<span className="text-yellow-300">Explore</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                About
              </Link>
              <Link to="/domains" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Domains
              </Link>
              {/* Dashboard is now accessible to all users */}
              <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Dashboard
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Contact
              </Link>
              
              {currentUser ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center font-bold text-xs">
                      {currentUser.name?.split(' ').map(n => n[0]).join('') || currentUser.email?.charAt(0).toUpperCase()}
                    </div>
                    <span>{currentUser.name || currentUser.email}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                    Login
                  </Link>
                  <Link to="/signup" className="px-3 py-2 rounded-md text-sm font-medium bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-colors">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
              About
            </Link>
            <Link to="/domains" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
              Domains
            </Link>
            {/* Dashboard is now accessible to all users */}
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
              Dashboard
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
              Contact
            </Link>
            
            {currentUser ? (
              <>
                <div className="px-3 py-2 rounded-md text-base font-medium bg-purple-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center font-bold text-xs">
                      {currentUser.name?.split(' ').map(n => n[0]).join('') || currentUser.email?.charAt(0).toUpperCase()}
                    </div>
                    <span>{currentUser.name || currentUser.email}</span>
                  </div>
                </div>
                <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
                  Profile
                </Link>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
                  Login
                </Link>
                <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-400 text-purple-900 hover:bg-yellow-300">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;