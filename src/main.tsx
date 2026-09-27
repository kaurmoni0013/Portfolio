import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/pt-mono/latin-400.css'
import App from './App'
import './index.css'

// public/404.html parks the requested URL here and sends the visitor to the
// site root, because GitHub Pages cannot rewrite unknown paths to index.html.
// Restoring the address before React mounts is what makes /Portfolio/about
// survive a refresh instead of silently becoming the home page.
const stored = sessionStorage.getItem('mk:redirect')
if (stored) {
 sessionStorage.removeItem('mk:redirect')
 const target = new URL(stored)
 if (target.origin === window.location.origin) {
 window.history.replaceState(null, '', target.pathname + target.search + target.hash)
 }
}

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

createRoot(root).render(
 <StrictMode>
 <BrowserRouter basename="/Portfolio">
 <App />
 </BrowserRouter>
 </StrictMode>,
)
