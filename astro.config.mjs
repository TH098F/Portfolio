import { defineConfig } from 'astro/config';
import config from './src/_data/config';

// https://astro.build/config
export default defineConfig({
    site: config.url ? config.url : 'http://127.0.0.1',
    base: config.base
});
