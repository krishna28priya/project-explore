import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in when app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setCurrentUser(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const signup = (userData) => {
    // In a real app, this would be an API call
    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    
    // Store in localStorage (in a real app, this would be handled by the backend)
    localStorage.setItem('users', JSON.stringify([...getStoredUsers(), newUser]));
    localStorage.setItem('user', JSON.stringify(newUser));
    
    setCurrentUser(newUser);
    return Promise.resolve(newUser);
  };

  const login = (email, password) => {
    // In a real app, this would be an API call
    const users = getStoredUsers();
    const user = users.find(u => u.email === email);
    
    if (user) {
      // In a real app, we would verify the password
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      return Promise.resolve(user);
    }
    
    return Promise.reject(new Error('Invalid email or password'));
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const getStoredUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};