import React, { useState } from 'react';
import { Wand2, Sparkles, Loader2 } from 'lucide-react';

interface PromptFormProps {
  onGenerate: (prompt: string, style: string) => void;
  onSurpriseMe: () => void;
  isLoading: boolean;
}

const STYLE_OPTIONS = [
  { value: 'realistic', label: 'Realistic' },
  { value: '3d', label: '3D Render' },
  { value: 'anime', label: 'Anime' },
  { value: 'digital-art', label: 'Digital Art' },
  { value: 'photography', label: 'Photography' },
  { value: 'painting', label: 'Painting' },
  { value: 'cinematic', label: 'Cinematic' },
  { value: 'pixel-art', label: 'Pixel Art' }
];

const PromptForm: React.FC<PromptFormProps> = ({ onGenerate, onSurpriseMe, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt.trim(), style);
    }
  };

  return (
    <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="prompt" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Describe the image you want
          </label>
          <div className="relative">
            <input
              id="prompt"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A futuristic city with flying cars and neon lights..."
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 transition-all duration-200"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={onSurpriseMe}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              title="Surprise me with a random prompt"
              disabled={isLoading}
            >
              <Sparkles className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label 
              htmlFor="style" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Style
            </label>
            <select
              id="style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 transition-all duration-200"
              disabled={isLoading}
            >
              {STYLE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading || !prompt.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  <span>Generate</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PromptForm;