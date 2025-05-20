# AI Image Creator

A modern Text-to-Image Generator Web Application built with React, TypeScript, and Tailwind CSS. This application integrates with the Clipdrop Text-to-Image API to transform text prompts into stunning AI-generated images.

## Features

- **Text-to-Image Generation**: Enter a text prompt and generate an AI image
- **Style Selection**: Choose from different artistic styles for your generated images
- **Random Prompts**: Get inspired with the "Surprise Me" feature for random creative prompts
- **Image Gallery**: View all your generated images in a responsive grid
- **Download Images**: Easily download any generated image
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works on all devices from mobile to desktop

## Setup Instructions

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file based on `.env.example`
4. Add your Clipdrop API key to the `.env` file
5. Start the development server with `npm run dev`

## Environment Variables

Create a `.env` file with the following:

```
VITE_CLIPDROP_API_KEY=your_clipdrop_api_key_here
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Clipdrop API