import { defineConfig } from 'astro/config';
import config from './config/config';

// https://astro.build/config
export default defineConfig({
    site: config.url ? config.url : 'http://127.0.0.1',
    base: config.base,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        routing: {
            redirectToDefaultLocale: true,
            prefixDefaultLocale: true
        }
    }
});