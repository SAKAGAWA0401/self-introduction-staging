import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirnameの代替として`fileURLToPath`を使用
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Viteの設定
export default defineConfig({
  plugins: [react()],
  base: '/self-introduction/', // リポジトリ名に合わせて設定
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // `src`を`@`で参照できるようにする
    }
  }
});
