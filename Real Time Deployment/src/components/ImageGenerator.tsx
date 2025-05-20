import React, { useState } from 'react';
import PromptForm from './PromptForm';
import ImageGallery from './ImageGallery';
import { generateImage } from '../api/clipdrop';
import { getRandomPrompt } from '../utils/randomPrompts';
import { ImageData } from '../types';

const ImageGenerator = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (prompt: string, style: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const imageData = await generateImage(prompt, style);
      
      // Add new image to the beginning of the array
      setImages(prevImages => [
        {
          id: Date.now().toString(),
          url: imageData.imageUrl,
          prompt,
          style,
          timestamp: new Date().toISOString(),
        },
        ...prevImages
      ]);
    } catch (err) {
      setError(typeof err === 'string' ? err : 'Failed to generate image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateImage = (prompt: string, style: string) => {
    handleGenerate(prompt, style);
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt();
    const defaultStyle = 'realistic'; // You can randomize this too if needed
    handleGenerate(randomPrompt, defaultStyle);
  };

  return (
    <div>
      <PromptForm 
        onGenerate={handleGenerate} 
        onSurpriseMe={handleSurpriseMe} 
        isLoading={isLoading} 
      />
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300">
          {error}
        </div>
      )}
      
      <div className="mt-8">
        <ImageGallery 
          images={images} 
          onRegenerate={handleRegenerateImage} 
        />
      </div>
    </div>
  );
};

export default ImageGenerator;