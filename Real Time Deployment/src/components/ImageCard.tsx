import React, { useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { ImageData } from '../types';

interface ImageCardProps {
  image: ImageData;
  onRegenerate: (prompt: string, style: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onRegenerate }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `ai-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={image.url}
          alt={image.prompt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-white text-sm line-clamp-2 mb-2">{image.prompt}</p>
          <div className="flex justify-between">
            <span className="text-xs text-gray-300 bg-black/30 px-2 py-1 rounded-md">
              {image.style}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => onRegenerate(image.prompt, image.style)}
          className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Regenerate</span>
        </button>
        
        <button
          onClick={handleDownload}
          className="flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;