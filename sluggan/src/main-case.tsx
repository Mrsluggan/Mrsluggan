import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './assets/index.css'
import ProjectPage from './ProjectPage.tsx'
import { projects } from './generated/projects.ts'

// The built page carries its slug (scripts/prerender.mjs). In `npm run dev`
// there's only the template, so /projekt/_mall/?slug=noq picks one.
const root = document.getElementById('root')!
const slug = root.dataset.slug ?? new URLSearchParams(location.search).get('slug')
const project = projects.find((p) => p.slug === slug) ?? projects[0]

const app = (
  <StrictMode>
    <ProjectPage project={project} />
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  document.title = `${project.title} — Sluggan`
  createRoot(root).render(app)
}
