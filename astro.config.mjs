// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Nico Moji",
            cssVariable: "--font-nico",
            options: {
                variants: [
                    {
                        weight: 400,
                        style: "normal",
                        src: ["./src/assets/fonts/NicoMoji-Regular.ttf"],
                    },
                ],
            },
        },
        {
            provider: fontProviders.google(),
            name: "Nunito",
            cssVariable: "--font-nunito",
            weights: [400, 700],
            styles: ["normal"],
        },
        {
            provider: fontProviders.google(),
            name: "Hanken Grotesk",
            cssVariable: "--font-hanken-grotesk",
            weights: [400, 500, 600, 700],
            styles: ["normal"],
        },
        {
            provider: fontProviders.google(),
            name: "Inter",
            cssVariable: "--font-inter",
            weights: [400, 500, 600],
            styles: ["normal"],
        },
        {
            provider: fontProviders.google(),
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            weights: [500],
            styles: ["normal"],
        },
    ],
});
