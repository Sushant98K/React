https://tailwindcss.com/docs/installation/using-vite

step 1:-
Install Tailwind CSS
Install tailwindcss and @tailwindcss/vite via npm.

    Terminal
        
        npm install tailwindcss @tailwindcss/vite

step 2:-
Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.

    vite.config.js

        import { defineConfig } from 'vite'
        **import tailwindcss from '@tailwindcss/vite'**

        export default defineConfig({
            plugins: [
                **tailwindcss(),**
            ],
        })

step 3:- 
Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

    CSS

        @import "tailwindcss";