// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: 'Nico Moji',
    cssVariable: "--font-nico",
    options: {
      variants: [
        {
          weight: 400,
          style: 'normal',
          src: ["./src/assets/fonts/NicoMoji-Regular.ttf"]
        }
      ]
    }
  },
  {
    provider: fontProviders.google(),
    name: "Nunito",
    cssVariable: "--font-nunito",
    weights: [400, 700],
    styles: ['normal']
  }
]
});