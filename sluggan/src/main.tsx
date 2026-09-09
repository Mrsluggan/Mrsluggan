import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.tsx'

// markup is already there from scripts/prerender.mjs
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
