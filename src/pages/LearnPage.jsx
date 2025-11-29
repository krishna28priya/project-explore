import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData.json';

const LearnPage = () => {
  const { domainId } = useParams();
  const [selectedConcept, setSelectedConcept] = useState(null);
  
  // Find the domain based on the ID
  const domain = projectsData.domains.find(d => d.id === parseInt(domainId));
  
  // Define detailed explanations for each concept with step-by-step guides
  const conceptDetails = {
    "Core Principles": {
      title: "Core Principles",
      description: "Core principles are the fundamental concepts and philosophies that guide the development and implementation of technologies in this domain. Understanding these principles is essential for building a strong foundation.",
      steps: [
        {
          title: "Understand the Foundation",
          content: "Start by learning the basic theories and concepts that form the foundation of this domain. This includes understanding what the technology is, its purpose, and how it works at a high level."
        },
        {
          title: "Study Design Patterns",
          content: "Learn the common design patterns and architectural principles used in this domain. These patterns provide proven solutions to recurring problems and help you write better code."
        },
        {
          title: "Master Best Practices",
          content: "Familiarize yourself with industry best practices and coding standards. This includes writing clean, maintainable code and following established conventions."
        },
        {
          title: "Learn Industry Standards",
          content: "Understand the standards and guidelines that govern this domain. This includes compliance requirements, security standards, and quality benchmarks."
        },
        {
          title: "Practice Ethical Development",
          content: "Develop an understanding of ethical considerations in technology development, including privacy, accessibility, and responsible AI usage where applicable."
        }
      ],
      examples: [
        "Object-oriented programming principles in software development",
        "RESTful API design principles in web services",
        "Data normalization in database design",
        "Component-based architecture in frontend frameworks"
      ]
    },
    "Essential Tools": {
      title: "Essential Tools",
      description: "Every technology domain has a set of tools that professionals use daily. Mastering these tools is crucial for productivity and efficiency in real-world projects.",
      steps: [
        {
          title: "Choose Your Development Environment",
          content: "Select and set up an appropriate Integrated Development Environment (IDE) or text editor. Configure it with plugins and extensions that enhance productivity for this domain."
        },
        {
          title: "Master Version Control",
          content: "Learn to use Git for version control. Understand branching strategies, merging techniques, and collaboration workflows. Practice with platforms like GitHub or GitLab."
        },
        {
          title: "Utilize Package Managers",
          content: "Become proficient with package managers relevant to your domain (npm, pip, Maven, etc.). Learn to manage dependencies, resolve conflicts, and publish packages."
        },
        {
          title: "Implement Debugging Techniques",
          content: "Learn to use debugging tools and profilers to identify and fix issues in your code. Understand how to set breakpoints, inspect variables, and trace execution flow."
        },
        {
          title: "Deploy and Host Solutions",
          content: "Familiarize yourself with deployment platforms and hosting services. Learn continuous integration/continuous deployment (CI/CD) pipelines and containerization tools like Docker."
        }
      ],
      examples: [
        "Visual Studio Code with extensions for web development",
        "Git and GitHub for version control",
        "npm/yarn for JavaScript package management",
        "Chrome DevTools for frontend debugging",
        "Docker for containerization and deployment"
      ]
    },
    "Development Process": {
      title: "Development Process",
      description: "Understanding the software development lifecycle and project workflow is key to delivering quality products on time and within budget.",
      steps: [
        {
          title: "Gather Requirements",
          content: "Learn how to collect and analyze project requirements from stakeholders. Practice creating user stories, defining acceptance criteria, and prioritizing features."
        },
        {
          title: "Design System Architecture",
          content: "Develop skills in system design and architecture planning. Learn to create diagrams, choose appropriate technologies, and plan for scalability and maintainability."
        },
        {
          title: "Implement with Best Practices",
          content: "Apply coding best practices during implementation. This includes writing modular code, following naming conventions, and implementing error handling."
        },
        {
          title: "Test Thoroughly",
          content: "Implement various testing strategies including unit tests, integration tests, and end-to-end tests. Learn to use testing frameworks and practice test-driven development."
        },
        {
          title: "Deploy and Maintain",
          content: "Master deployment processes and post-deployment maintenance. Learn monitoring techniques, rollback strategies, and how to handle production issues."
        }
      ],
      examples: [
        "Agile methodology with sprint planning and retrospectives",
        "UML diagrams for system design documentation",
        "Clean code principles and SOLID design principles",
        "Jest for unit testing and Selenium for end-to-end testing",
        "Kubernetes for orchestration and monitoring with Prometheus"
      ]
    },
    "Security Considerations": {
      title: "Security Considerations",
      description: "Security is a critical aspect of modern software development. Learning how to build secure applications protects both user data and business interests.",
      steps: [
        {
          title: "Identify Vulnerabilities",
          content: "Learn to recognize common security vulnerabilities such as injection attacks, broken authentication, and cross-site scripting. Understand the OWASP Top 10 list."
        },
        {
          title: "Implement Authentication",
          content: "Master authentication mechanisms including password policies, multi-factor authentication, and session management. Learn about OAuth and JWT for secure token handling."
        },
        {
          title: "Protect Data",
          content: "Implement data encryption for sensitive information both in transit and at rest. Learn about hashing algorithms, key management, and privacy protection techniques."
        },
        {
          title: "Practice Secure Coding",
          content: "Adopt secure coding practices such as input validation, output encoding, and proper error handling. Learn to avoid common pitfalls that lead to security breaches."
        },
        {
          title: "Ensure Compliance",
          content: "Understand regulatory compliance requirements such as GDPR, HIPAA, or PCI-DSS. Learn to implement audit trails and data protection measures."
        }
      ],
      examples: [
        "SQL injection prevention with parameterized queries",
        "OAuth 2.0 implementation for third-party authentication",
        "AES encryption for sensitive data storage",
        "Content Security Policy (CSP) headers for XSS prevention",
        "GDPR compliance with data anonymization techniques"
      ]
    },
    "Performance Optimization": {
      title: "Performance Optimization",
      description: "Optimizing performance ensures applications run efficiently, providing a better user experience and reducing operational costs.",
      steps: [
        {
          title: "Profile and Measure",
          content: "Learn to use profiling tools to identify performance bottlenecks. Understand how to measure response times, memory usage, and CPU consumption."
        },
        {
          title: "Optimize Database Queries",
          content: "Master database optimization techniques including indexing strategies, query optimization, and connection pooling. Learn to analyze execution plans."
        },
        {
          title: "Implement Caching Strategies",
          content: "Apply caching at multiple levels including browser caching, CDN caching, and server-side caching. Learn cache invalidation strategies and choose appropriate caching solutions."
        },
        {
          title: "Scale Effectively",
          content: "Understand horizontal and vertical scaling approaches. Learn load balancing techniques, microservices architecture, and cloud scaling strategies."
        },
        {
          title: "Manage Resources Efficiently",
          content: "Optimize memory management, reduce network requests, and minimize asset sizes. Learn lazy loading, code splitting, and resource compression techniques."
        }
      ],
      examples: [
        "Using Chrome Performance tab to identify rendering bottlenecks",
        "Database indexing and query optimization with EXPLAIN plans",
        "Redis for in-memory caching and CDN for static assets",
        "Auto-scaling groups in AWS and Kubernetes horizontal pod autoscaling",
        "Webpack code splitting and image compression techniques"
      ]
    },
    "Future Trends": {
      title: "Future Trends",
      description: "Staying informed about emerging technologies and industry trends helps professionals adapt and remain competitive in the job market.",
      steps: [
        {
          title: "Track Emerging Technologies",
          content: "Stay updated on new technologies and frameworks in your domain. Follow industry leaders, read research papers, and participate in developer communities."
        },
        {
          title: "Analyze Market Adoption",
          content: "Observe which technologies are gaining traction in the industry. Look at job postings, conference talks, and GitHub activity to gauge adoption rates."
        },
        {
          title: "Experiment with Innovations",
          content: "Set up sandbox environments to experiment with new tools and frameworks. Build proof-of-concepts to understand their strengths and limitations."
        },
        {
          title: "Adapt to Methodology Changes",
          content: "Learn about evolving development methodologies such as DevOps, GitOps, and Infrastructure as Code. Understand how these approaches improve development workflows."
        },
        {
          title: "Plan for Skill Evolution",
          content: "Continuously assess your skill set against market demands. Identify gaps and create learning plans to stay relevant in the ever-changing technology landscape."
        }
      ],
      examples: [
        "Serverless computing with AWS Lambda and Azure Functions",
        "Progressive Web Apps (PWAs) adoption in mobile development",
        "Low-code/no-code platforms for rapid application development",
        "GitOps workflow with ArgoCD and FluxCD",
        "AI-assisted development tools like GitHub Copilot"
      ]
    }
  };
  
  if (!domain) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Domain Not Found</h2>
          <p className="text-gray-600 mb-6">The domain you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/domains" 
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to Domains
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/domains" className="mr-4">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <div>
              <h1 className="text-4xl font-bold mb-2">Learn {domain.name}</h1>
              <p className="text-xl max-w-3xl">
                Master the fundamentals before building projects
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Learning Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Domain Overview</h2>
                <p className="text-gray-700 text-lg mb-6">
                  {domain.description}
                </p>
                
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Learn {domain.name}?</h3>
                  <p className="text-gray-700 mb-4">
                    {domain.name} is a rapidly growing field with high demand in the job market. Mastering this domain can open up numerous career opportunities and allow you to work on cutting-edge technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">High demand in the job market with competitive salaries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">Opportunity to work on innovative and impactful projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">Continuous learning and skill development</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Fundamental concepts and principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Key technologies and tools used in {domain.name}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Real-world applications and use cases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Best practices and industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Common challenges and how to overcome them</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Project development lifecycle from ideation to deployment</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Concepts</h3>
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Side - Concept List */}
                    <div className="lg:w-1/3">
                      <div className="space-y-3">
                        {["Core Principles", "Essential Tools", "Development Process", "Security Considerations", "Performance Optimization", "Future Trends"].map((concept, index) => (
                          <div 
                            key={concept} 
                            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                              selectedConcept === concept 
                                ? 'bg-purple-600 text-white shadow-md' 
                                : 'bg-white hover:bg-gray-50 shadow'
                            }`}
                            onClick={() => {
                              console.log('Concept clicked:', concept);
                              setSelectedConcept(concept);
                            }}
                          >
                            <h4 className="font-bold">{concept}</h4>
                            <p className="text-sm mt-1 opacity-80">
                              {conceptDetails[concept].description.substring(0, 60)}...
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Side - Detailed Explanation */}
                    <div className="lg:w-2/3">
                      <div className="bg-white rounded-lg shadow p-6 min-h-[400px]">
                        {selectedConcept ? (
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{conceptDetails[selectedConcept].title}</h4>
                            <p className="text-gray-700 mb-6">{conceptDetails[selectedConcept].description}</p>
                            
                            <h5 className="font-bold text-gray-900 mb-3 text-lg">Step-by-Step Guide:</h5>
                            <ol className="space-y-4 mb-6">
                              {conceptDetails[selectedConcept].steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex">
                                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-0.5">
                                    <span className="text-sm font-bold text-purple-800">{stepIndex + 1}</span>
                                  </div>
                                  <div>
                                    <h6 className="font-bold text-gray-900">{step.title}</h6>
                                    <p className="text-gray-600">{step.content}</p>
                                  </div>
                                </li>
                              ))}
                            </ol>
                            
                            <h5 className="font-bold text-gray-900 mb-3 text-lg">Examples:</h5>
                            <ul className="space-y-2">
                              {conceptDetails[selectedConcept].examples.map((example, exIndex) => (
                                <li key={exIndex} className="flex items-start">
                                  <span className="text-purple-500 mr-2 mt-1">•</span>
                                  <span className="text-gray-600">{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-500">
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                              </svg>
                              <p className="text-xl">Select a concept from the left to view details</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Path</h3>
                <div className="space-y-6">
                  {[{
                    step: "1",
                    title: "Introduction to " + domain.name,
                    description: "Understanding the basics and core concepts"
                  }, {
                    step: "2",
                    title: "Essential Tools & Technologies",
                    description: "Getting familiar with the tools used in this domain"
                  }, {
                    step: "3",
                    title: "Hands-on Practice",
                    description: "Building simple examples to reinforce learning"
                  }, {
                    step: "4",
                    title: "Advanced Concepts",
                    description: "Exploring more complex topics and techniques"
                  }, {
                    step: "5",
                    title: "Real-world Applications",
                    description: "Understanding how these concepts are applied in industry"
                  }, {
                    step: "6",
                    title: "Project Development",
                    description: "Building complete projects from scratch"
                  }].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
                          {item.step}
                        </div>
                        {index !== 5 && (
                          <div className="h-full w-0.5 bg-gray-200 mt-1"></div>
                        )}
                      </div>
                      <div className="pb-6">
                        <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                  <p className="text-gray-700 mb-4">
                    Mastering {domain.name} opens up various career paths with excellent growth potential:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-bold text-gray-900 mb-2">Entry Level</h4>
                      <p className="text-gray-600 text-sm">Junior Developer, Intern</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-bold text-gray-900 mb-2">Mid Level</h4>
                      <p className="text-gray-600 text-sm">Developer, Engineer</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-bold text-gray-900 mb-2">Senior Level</h4>
                      <p className="text-gray-600 text-sm">Senior Engineer, Architect</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 sticky top-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Domain Information</h3>
                
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{domain.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{domain.name}</h4>
                    <p className="text-gray-600">{domain.projects.length} projects available</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Difficulty Level</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full" 
                      style={{ width: domain.name === "AI/ML" ? "90%" : domain.name === "Web Development" ? "70%" : domain.name === "App Development" ? "75%" : "60%" }}
                    ></div>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    {domain.name === "AI/ML" ? "Advanced" : domain.name === "Web Development" ? "Intermediate" : domain.name === "App Development" ? "Intermediate" : "Beginner"}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Prerequisites</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-600">Basic programming knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-600">Understanding of algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-600">Problem-solving skills</span>
                    </li>
                  </ul>
                </div>
                
                <Link to={`/projects/${domainId}`}>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-bold">
                    View Projects
                  </button>
                </Link>
                
                <div className="mt-4 text-center">
                  <Link to="/domains" className="text-purple-600 hover:text-purple-800">
                    ← Back to all domains
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mt-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-purple-600 hover:text-purple-800 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Official Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:text-purple-800 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                      </svg>
                      Online Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:text-purple-800 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      Video Tutorials
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnPage;