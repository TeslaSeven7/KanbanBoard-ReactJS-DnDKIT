import eslintPlugin from '@nabla/vite-plugin-eslint'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteSvgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), eslintPlugin(), viteSvgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
