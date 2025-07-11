import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'finserv.arffy.com',
      'omfinserv.com',
      'www.omfinserv.com',
      'finserv-1-s11k.onrender.com' 
    ]
  }
})
