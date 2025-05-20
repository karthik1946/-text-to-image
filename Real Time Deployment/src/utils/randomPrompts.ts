const RANDOM_PROMPTS = [
  "A futuristic city with flying cars and neon lights",
  "A serene mountain landscape with a lake reflection at sunset",
  "A magical forest with glowing mushrooms and fairy lights",
  "An underwater city with mermaid inhabitants",
  "A steampunk-inspired airship flying through clouds",
  "A cyberpunk street scene with holographic advertisements",
  "A cozy cottage in a snowy forest at night",
  "A space station orbiting a vibrant purple planet",
  "A desert oasis with palm trees and a clear blue pool",
  "A grand library with floating books and magical elements",
  "A Japanese garden in cherry blossom season",
  "A medieval castle perched on a cliff over the ocean",
  "A bustling alien marketplace with strange creatures",
  "A peaceful zen garden with a small waterfall",
  "A floating island chain connected by rope bridges",
  "A post-apocalyptic city reclaimed by nature",
  "A fantasy tavern filled with diverse magical creatures",
  "An ancient temple hidden in a dense jungle",
  "A cityscape view from a rooftop garden at night",
  "A portal opening between two different worlds"
];

export const getRandomPrompt = (): string => {
  const randomIndex = Math.floor(Math.random() * RANDOM_PROMPTS.length);
  return RANDOM_PROMPTS[randomIndex];
};