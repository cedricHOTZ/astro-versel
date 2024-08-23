import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel';
import vercel from '@astrojs/vercel/serverless';
import db from "@astrojs/db";
import dotenv from 'dotenv';

  dotenv.config();


// https://astro.build/config
export default defineConfig({
//SSR
output: 'server',
 adapter: vercel(),
   integrations: [db()]
});