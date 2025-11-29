import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData.json';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  // Mock data for student progress - in a real app, this would come from authentication context
  const [studentData] = useState({
    name: currentUser ? (currentUser.name || "User") : "Guest User",
    email: currentUser ? currentUser.email : "guest@example.com",
    enrolledCourses: 5,
    completedProjects: 3,
    currentStreak: 12,
    joinDate: "Jan 15, 2024"
  });

  // State for user's enrolled projects
  const [enrolledProjects, setEnrolledProjects] = useState([
    {
      id: 101,
      name: "Image Classification Model",
      domain: "AI/ML",
      progress: 75,
      status: "In Progress",
      enrolledDate: "2024-01-20"
    },
    {
      id: 203,
      name: "E-commerce Website",
      domain: "Web Development",
      progress: 100,
      status: "Completed",
      enrolledDate: "2023-12-10"
    },
    {
      id: 301,
      name: "To-Do List App",
      domain: "App Development",
      progress: 30,
      status: "In Progress",
      enrolledDate: "2024-02-01"
    },
    {
      id: 402,
      name: "Temperature Monitoring System",
      domain: "IoT",
      progress: 15,
      status: "In Progress",
      enrolledDate: "2024-02-10"
    }
  ]);

  // State for recommended projects based on user interests
  const [recommendedProjects, setRecommendedProjects] = useState([]);

  // State for domains
  const [domains, setDomains] = useState([]);

  // Initialize domains and recommended projects
  useEffect(() => {
    // Get domains data
    const domainData = projectsData.domains.slice(0, 5).map(domain => ({
      name: domain.name,
      icon: domain.icon,
      projects: domain.projects.length,
      id: domain.id
    }));
    setDomains(domainData);

    // Get recommended projects (projects from domains the user hasn't enrolled in yet)
    const enrolledDomainIds = [1, 2, 3, 4]; // Based on enrolled projects
    const recommended = [];
    
    projectsData.domains.forEach(domain => {
      if (!enrolledDomainIds.includes(domain.id)) {
        // Get first 2 projects from domains user hasn't explored
        const projectsToAdd = domain.projects.slice(0, 2).map(project => ({
          id: project.id,
          name: project.name,
          domain: domain.name,
          level: project.level,
          whyUseful: project.whyUseful
        }));
        recommended.push(...projectsToAdd);
      }
    });
    
    setRecommendedProjects(recommended.slice(0, 4)); // Limit to 4 recommendations
  }, []);

  // Calculate overall progress
  const calculateOverallProgress = () => {
    if (enrolledProjects.length === 0) return 0;
    const totalProgress = enrolledProjects.reduce((sum, project) => sum + project.progress, 0);
    return Math.round(totalProgress / enrolledProjects.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <div className="text-right hidden md:block">
                  <div className="font-medium">{studentData.name}</div>
                  <div className="text-sm opacity-80">{studentData.email}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold">
                  {studentData.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="text-right hidden md:block">
                  <div className="font-medium">Guest User</div>
                  <div className="text-sm opacity-80">Not logged in</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold">
                  GU
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Welcome Message for Non-Logged-In Users */}
      {!currentUser && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to ProjectExplore!</h2>
                <p className="text-gray-700">
                  This is a preview of what your personalized dashboard would look like. 
                  Sign up to track your progress, save projects, and unlock your full learning potential.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/signup" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity text-center"
                >
                  Create Free Account
                </Link>
                <Link 
                  to="/login" 
                  className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg border border-purple-300 hover:bg-gray-50 transition-colors text-center"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-purple-600">{studentData.enrolledCourses}</div>
            <div className="text-gray-600">Courses Enrolled</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-500">{studentData.completedProjects}</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-green-500">{studentData.currentStreak}</div>
            <div className="text-gray-600">Day Streak</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-yellow-500">{calculateOverallProgress()}%</div>
            <div className="text-gray-600">Overall Progress</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Projects or Featured Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentUser ? "My Projects" : "Featured Projects"}
                </h2>
                <Link to="/explore" className="text-purple-600 hover:text-purple-800">
                  Browse Projects
                </Link>
              </div>
              <div className="space-y-4">
                {enrolledProjects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-gray-900">{project.name}</h3>
                        <p className="text-gray-600 text-sm">{project.domain}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Enrolled: {project.enrolledDate}</span>
                      <Link 
                        to={`/project/${project.id}`} 
                        className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                      >
                        {currentUser ? "Continue Learning" : "View Project"}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Projects */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
                <Link to="/explore" className="text-purple-600 hover:text-purple-800">
                  See All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedProjects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-gray-900 text-sm">{project.name}</h3>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        {project.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs mt-1">{project.domain}</p>
                    <p className="text-gray-500 text-xs mt-2 line-clamp-2">{project.whyUseful}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <Link 
                        to={`/project/${project.id}`} 
                        className="text-xs text-purple-600 hover:text-purple-800 font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Profile Card or Guest Card */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
              {currentUser ? (
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg mr-3">
                    {studentData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{studentData.name}</div>
                    <div className="text-sm text-gray-600">{studentData.email}</div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    GU
                  </div>
                  <p className="text-gray-700 mb-4">
                    Create an account to personalize your dashboard and track your progress!
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/signup" 
                      className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity text-center"
                    >
                      Sign Up
                    </Link>
                    <Link 
                      to="/login" 
                      className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 text-center"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
              )}
              <div className="text-sm text-gray-600">
                <div className="flex justify-between py-1">
                  <span>Member since:</span>
                  <span className="font-medium">{studentData.joinDate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Projects:</span>
                  <span className="font-medium">{enrolledProjects.length} active</span>
                </div>
              </div>
              {currentUser && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link to="/profile" className="w-full text-center block py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Edit Profile
                  </Link>
                </div>
              )}
            </div>

            {/* Domains */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Domains</h2>
              <div className="space-y-4">
                {domains.map((domain) => (
                  <div key={domain.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{domain.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">{domain.name}</div>
                        <div className="text-sm text-gray-600">{domain.projects} projects</div>
                      </div>
                    </div>
                    <Link to={`/domains/${domain.id}`} className="text-purple-600 hover:text-purple-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm font-medium">First Project</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🔥</div>
                  <div className="text-sm font-medium">7-Day Streak</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🎓</div>
                  <div className="text-sm font-medium">3 Completed</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link to="/achievements" className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                  View All Achievements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
