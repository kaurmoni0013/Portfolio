import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Backdrop } from './components/layout/Backdrop'
import { Footer } from './components/layout/Footer'
import { SiteHeader } from './components/layout/SiteHeader'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import NotFound from './pages/NotFound'

/**
 * A route change does not reset scroll the way a document load does, so
 * without this you land halfway down the new page — or at the bottom of the
 * previous one. Any in-page hash still wins, and an already-current location is
 * left alone so a re-render cannot yank the reader back to the top.
 */
function ScrollToTop() {
 const { pathname, hash } = useLocation()

 useEffect(() => {
 if (hash) {
 const el = document.getElementById(hash.slice(1))
 if (el) {
 el.scrollIntoView()
 return
 }
 }
 window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
 }, [pathname, hash])

 return null
}

export default function App() {
 return (
 <>
 <a
 href="#main"
 className="sr-only rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-void focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
 >
 Skip to content
 </a>

 <Backdrop />
 <SiteHeader />

 <main id="main">
 <ScrollToTop />
 <Routes>
 <Route path="/" element={<Home />} />
<Route path="/projects" element={<ProjectsPage />} />
  <Route path="/projects/:id" element={<ProjectDetail />} />
  <Route path="/about" element={<AboutPage />} />
 <Route path="/contact" element={<ContactPage />} />
 <Route path="*" element={<NotFound />} />
 </Routes>
 </main>

 <Footer />
 </>
 )
}
