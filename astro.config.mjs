import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import db from "@astrojs/db";
import dotenv from 'dotenv';

dotenv.config();


// https://astro.build/config
export default defineConfig({
//SSR
output: 'server',
  adapter: node({
    mode: 'standalone', // Spécifiez le mode ici
  }),
  integrations: [db()]
});