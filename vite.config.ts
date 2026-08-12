import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const appMode = 'ntc6001';
    const appTitle = 'Plataforma de Diagnóstico de Calidad NTC 6001';
    return {
      define: {
        'import.meta.env.VITE_APP_MODE': JSON.stringify(appMode),
        'import.meta.env.VITE_APP_TITLE': JSON.stringify(appTitle),
        'import.meta.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL || ''),
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
