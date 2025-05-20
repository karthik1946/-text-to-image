import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          AI Image Creator
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-center md:text-right">
        Transform your ideas into stunning visuals with AI
      </p>
    </header>
  );
};

export default Header;