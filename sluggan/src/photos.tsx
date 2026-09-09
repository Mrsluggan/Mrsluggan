import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import './assets/App.css'
import './assets/Gallery.css'
import PhotosPage from './PhotosPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhotosPage />
  </StrictMode>,
)
