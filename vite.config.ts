import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Force a single instance of these packages to prevent the
    // "Cannot read properties of undefined (reading 'S')" R3F crash
    // caused by R3F shipping its own nested scheduler@0.21 while
    // React 18 needs scheduler@0.23.
    dedupe: ['react', 'react-dom', 'scheduler', 'react-reconciler'],
  },
  optimizeDeps: {
    // Pre-bundle R3F so it shares the same React/scheduler instance
    include: ['@react-three/fiber', '@react-three/drei', 'three'],
  },
})