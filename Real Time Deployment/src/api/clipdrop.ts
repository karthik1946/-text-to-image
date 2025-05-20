interface GenerateImageResponse {
  imageUrl: string;
}

export const generateImage = async (
  prompt: string, 
  style: string
): Promise<GenerateImageResponse> => {
  try {
    const apiKey = import.meta.env.VITE_CLIPDROP_API_KEY;
    
    if (!apiKey) {
      throw new Error('Clipdrop API key is not configured. Please add it to your .env file.');
    }

    // Prepare the text prompt with style
    const enhancedPrompt = `${prompt}, ${style} style`;
    
    // Create form data for the API request
    const formData = new FormData();
    formData.append('prompt', enhancedPrompt);

    // Make the API call to Clipdrop
    const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to generate image: ${response.statusText}`);
    }

    // Get the image blob from the response
    const imageBlob = await response.blob();
    
    // Create a URL for the blob
    const imageUrl = URL.createObjectURL(imageBlob);

    return {
      imageUrl
    };
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to generate image. Please try again.');
  }
};