import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './assets/index.css'
import PrivacyPage from './PrivacyPage.tsx'

// markup is already there from scripts/prerender.mjs
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
)
