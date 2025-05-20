import React from 'react';
import ImageGenerator from './components/ImageGenerator';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Header />
          <main className="mt-6">
            <ImageGenerator />
          </main>
          <footer className="mt-12 pb-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Text-to-Image Generator. Powered by Clipdrop API.</p>
          </footer>
        </div>
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;