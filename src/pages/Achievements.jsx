import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Achievements = () => {
  const { currentUser } = useAuth();

  // Sample achievements data
  const achievements = [
    {
      id: 1,
      title: "First Project",
      description: "Complete your first project",
      icon: "🏆",
      earned: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "7-Day Streak",
      description: "Learn for 7 consecutive days",
      icon: "🔥",
      earned: true,
      date: "2024-01-22"
    },
    {
      id: 3,
      title: "3 Projects Completed",
      description: "Complete 3 projects",
      icon: "🎓",
      earned: true,
      date: "2024-02-01"
    },
    {
      id: 4,
      title: "Quick Learner",
      description: "Complete a project in less than a week",
      icon: "⚡",
      earned: false,
      date: null
    },
    {
      id: 5,
      title: "Explorer",
      description: "Browse projects from 5 different domains",
      icon: "🌐",
      earned: false,
      date: null
    },
    {
      id: 6,
      title: "Perfectionist",
      description: "Achieve 100% completion on 3 projects",
      icon: "💯",
      earned: false,
      date: null
    }
  ];

  const earnedAchievements = achievements.filter(a => a.earned);
  const pendingAchievements = achievements.filter(a => !a.earned);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrate your progress and unlock new milestones as you explore projects across different domains.
          </p>
        </div>

        {currentUser && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-xl font-bold text-white mr-4">
                  {currentUser.name?.split(' ').map(n => n[0]).join('') || currentUser.email?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentUser.name || 'User'}</h2>
                  <p className="text-gray-600">{earnedAchievements.length} of {achievements.length} achievements earned</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-600">{earnedAchievements.length}</div>
                <div className="text-gray-600">Achievements</div>
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full" 
                style={{ width: `${(earnedAchievements.length / achievements.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Earned Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earned Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earnedAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600 mt-1">{achievement.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Earned on {achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pending Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-xl shadow-md p-6 opacity-70">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600 mt-1">{achievement.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Locked</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/explore" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Continue Exploring Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Achievements;