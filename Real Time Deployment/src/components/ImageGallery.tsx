import React from 'react';
import ImageCard from './ImageCard';
import { ImageData } from '../types';

interface ImageGalleryProps {
  images: ImageData[];
  onRegenerate: (prompt: string, style: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onRegenerate }) => {
  if (images.length === 0) {
    return (
      <div className="mt-8 text-center p-8 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">
          Your generated images will appear here. Start by entering a prompt above.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Generated Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <ImageCard 
            key={image.id} 
            image={image} 
            onRegenerate={onRegenerate} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;