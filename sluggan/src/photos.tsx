import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './assets/index.css'
import './assets/App.css'
import './assets/Gallery.css'
import PhotosPage from './PhotosPage.tsx'

// markup is already there from scripts/prerender.mjs
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <PhotosPage />
  </StrictMode>,
)
