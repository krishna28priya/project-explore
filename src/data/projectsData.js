const projectsData = {
  domains: [
    {
      id: 1,
      name: "AI/ML",
      description: "Artificial Intelligence and Machine Learning",
      icon: "🤖",
      projects: [
        {
          id: 101,
          name: "Image Classification Model",
          description: "A model that can classify images into different categories",
          whyUseful: "Helps automate image sorting and recognition tasks",
          features: ["High accuracy", "Fast processing", "Multiple category support"],
          technologies: ["Python", "TensorFlow", "Keras"],
          steps: [
            "Collect and preprocess image dataset",
            "Design neural network architecture",
            "Train the model with labeled data",
            "Evaluate model performance",
            "Deploy model for inference"
          ],
          domainBasics: "Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed.",
          requiredSkills: ["Python programming", "Basic mathematics", "Statistics"],
          techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
          demoImages: []
        },
        {
          id: 102,
          name: "Chatbot Assistant",
          description: "An AI-powered chatbot that can answer user queries",
          whyUseful: "Provides 24/7 customer support and automation",
          features: ["Natural language processing", "Context awareness", "Multi-platform support"],
          technologies: ["Python", "NLTK", "Dialogflow"],
          steps: [
            "Define chatbot scope and intents",
            "Create training dataset",
            "Implement NLP algorithms",
            "Train the model",
            "Integrate with messaging platforms"
          ],
          domainBasics: "Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret and generate human language.",
          requiredSkills: ["Python programming", "Basic linguistics", "Problem-solving"],
          techStack: ["Python", "NLTK", "Flask", "Dialogflow"],
          demoImages: []
        }
      ]
    },
    {
      id: 2,
      name: "Web Development",
      description: "Building websites and web applications",
      icon: "🌐",
      projects: [
        {
          id: 201,
          name: "E-commerce Website",
          description: "A full-featured online shopping platform",
          whyUseful: "Enables businesses to sell products online",
          features: ["Product catalog", "Shopping cart", "Payment integration", "User accounts"],
          technologies: ["React", "Node.js", "MongoDB"],
          steps: [
            "Design database schema",
            "Set up backend API",
            "Create frontend components",
            "Implement authentication",
            "Add payment processing",
            "Test and deploy"
          ],
          domainBasics: "Web development involves building websites and web applications that run on the internet or an intranet.",
          requiredSkills: ["HTML/CSS", "JavaScript", "Backend programming", "Database management"],
          techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
          demoImages: []
        }
      ]
    },
    {
      id: 3,
      name: "App Development",
      description: "Creating mobile applications for iOS and Android",
      icon: "📱",
      projects: [
        {
          id: 301,
          name: "Task Manager App",
          description: "A mobile app to organize daily tasks and reminders",
          whyUseful: "Helps users stay organized and productive",
          features: ["Task creation", "Due dates", "Reminders", "Categories"],
          technologies: ["React Native", "Firebase"],
          steps: [
            "Design app wireframes",
            "Set up development environment",
            "Implement UI components",
            "Integrate database",
            "Add notification system",
            "Test on devices"
          ],
          domainBasics: "Mobile app development is the process of creating software applications that run on mobile devices.",
          requiredSkills: ["Programming fundamentals", "UI/UX design", "Mobile frameworks"],
          techStack: ["React Native", "Firebase", "Redux", "Push Notifications"],
          demoImages: []
        }
      ]
    },
    {
      id: 4,
      name: "IoT",
      description: "Internet of Things projects",
      icon: "📡",
      projects: [
        {
          id: 401,
          name: "Smart Home System",
          description: "Control home appliances remotely",
          whyUseful: "Increases convenience and energy efficiency",
          features: ["Remote control", "Automation schedules", "Energy monitoring"],
          technologies: ["Arduino", "Raspberry Pi", "MQTT"],
          steps: [
            "Select hardware components",
            "Set up communication protocols",
            "Develop control software",
            "Create mobile interface",
            "Implement security measures",
            "Test system integration"
          ],
          domainBasics: "IoT refers to the network of physical objects embedded with sensors, software, and connectivity to exchange data with other devices.",
          requiredSkills: ["Electronics", "Programming", "Network protocols"],
          techStack: ["Arduino", "Raspberry Pi", "MQTT", "Node-RED"],
          demoImages: []
        }
      ]
    },
    {
      id: 5,
      name: "Cyber Security",
      description: "Protecting digital information and systems",
      icon: "🔒",
      projects: [
        {
          id: 501,
          name: "Password Manager",
          description: "Securely store and manage passwords",
          whyUseful: "Enhances online security by using unique passwords",
          features: ["Encryption", "Password generation", "Auto-fill", "Secure sharing"],
          technologies: ["Python", "Cryptography"],
          steps: [
            "Design database structure",
            "Implement encryption algorithms",
            "Create user interface",
            "Add password generation",
            "Implement secure storage",
            "Test security measures"
          ],
          domainBasics: "Cybersecurity involves protecting internet-connected systems and sensitive data from cyber threats.",
          requiredSkills: ["Programming", "Cryptography", "Security principles"],
          techStack: ["Python", "Cryptography", "SQLite", "Tkinter"],
          demoImages: []
        }
      ]
    },
    {
      id: 6,
      name: "Cloud Computing",
      description: "Using remote servers for storage and computing",
      icon: "☁️",
      projects: [
        {
          id: 601,
          name: "File Storage Service",
          description: "Cloud-based file storage and sharing platform",
          whyUseful: "Enables access to files from anywhere",
          features: ["File upload/download", "Sharing", "Version control", "Access control"],
          technologies: ["AWS", "Node.js", "React"],
          steps: [
            "Set up cloud infrastructure",
            "Implement file storage system",
            "Create user authentication",
            "Build web interface",
            "Add sharing functionality",
            "Ensure data security"
          ],
          domainBasics: "Cloud computing delivers computing services over the internet, including servers, storage, databases, networking, and software.",
          requiredSkills: ["Networking", "Cloud platforms", "Security"],
          techStack: ["AWS S3", "Node.js", "React", "Express"],
          demoImages: []
        }
      ]
    },
    {
      id: 7,
      name: "Blockchain",
      description: "Decentralized and distributed ledger technology",
      icon: "🔗",
      projects: [
        {
          id: 701,
          name: "Digital Voting System",
          description: "Secure and transparent voting platform",
          whyUseful: "Ensures vote integrity and prevents fraud",
          features: ["Immutable records", "Transparency", "Anonymity", "Audit trail"],
          technologies: ["Solidity", "Ethereum", "Web3.js"],
          steps: [
            "Design smart contract",
            "Set up blockchain network",
            "Create voting interface",
            "Implement security measures",
            "Test consensus mechanism",
            "Deploy to network"
          ],
          domainBasics: "Blockchain is a decentralized digital ledger that records transactions across multiple computers in a secure and transparent manner.",
          requiredSkills: ["Cryptography", "Smart contracts", "Distributed systems"],
          techStack: ["Solidity", "Ethereum", "Web3.js", "Truffle"],
          demoImages: []
        }
      ]
    },
    {
      id: 8,
      name: "Data Science",
      description: "Extracting insights from structured and unstructured data",
      icon: "📊",
      projects: [
        {
          id: 801,
          name: "Stock Market Analyzer",
          description: "Analyze stock market trends and predict prices",
          whyUseful: "Helps investors make informed decisions",
          features: ["Data visualization", "Trend analysis", "Price prediction", "Risk assessment"],
          technologies: ["Python", "Pandas", "Scikit-learn"],
          steps: [
            "Collect financial data",
            "Clean and preprocess data",
            "Perform exploratory analysis",
            "Build predictive models",
            "Visualize results",
            "Create dashboard"
          ],
          domainBasics: "Data science combines statistics, mathematics, and programming to extract insights and knowledge from structured and unstructured data.",
          requiredSkills: ["Statistics", "Programming", "Mathematics", "Data visualization"],
          techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
          demoImages: []
        }
      ]
    },
    {
      id: 9,
      name: "AR/VR",
      description: "Augmented and Virtual Reality experiences",
      icon: "👓",
      projects: [
        {
          id: 901,
          name: "Virtual Museum Tour",
          description: "Immersive 3D museum experience",
          whyUseful: "Makes art and history accessible to everyone",
          features: ["3D environments", "Interactive exhibits", "Audio guides", "Multiplayer support"],
          technologies: ["Unity", "C#", "ARKit/ARCore"],
          steps: [
            "Design virtual environment",
            "Create 3D models",
            "Implement interaction system",
            "Add audio narration",
            "Optimize for devices",
            "Test user experience"
          ],
          domainBasics: "Augmented Reality (AR) overlays digital information on the real world, while Virtual Reality (VR) creates a completely immersive digital environment.",
          requiredSkills: ["3D modeling", "Game development", "Spatial design"],
          techStack: ["Unity", "C#", "Blender", "Oculus SDK"],
          demoImages: []
        }
      ]
    },
    {
      id: 10,
      name: "Game Development",
      description: "Creating interactive entertainment software",
      icon: "🎮",
      projects: [
        {
          id: 1001,
          name: "2D Platformer Game",
          description: "Side-scrolling adventure game with multiple levels",
          whyUseful: "Entertains players with engaging gameplay",
          features: ["Character movement", "Enemy AI", "Level progression", "Score system"],
          technologies: ["Unity", "C#"],
          steps: [
            "Design game mechanics",
            "Create sprites and assets",
            "Implement player controls",
            "Develop level design",
            "Add sound effects",
            "Test and polish"
          ],
          domainBasics: "Game development involves designing, creating, and programming interactive games for various platforms.",
          requiredSkills: ["Programming", "Creative design", "Problem-solving", "Storytelling"],
          techStack: ["Unity", "C#", "Photoshop", "Audacity"],
          demoImages: []
        }
      ]
    }
  ]
};

export default projectsData;