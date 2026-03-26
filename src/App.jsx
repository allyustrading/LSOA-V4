import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ApproachPage from './pages/ApproachPage'
import PathwaysPage from './pages/PathwaysPage'
import ResearchPage from './pages/ResearchPage'
import CommunityPage from './pages/CommunityPage'
import ProjectsPage from './pages/ProjectsPage'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'

function useHashRoute() {
  const getRoute = () => window.location.hash.replace('#/', '') || 'home'
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    if (!window.location.hash) window.location.hash = '#/home'
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export default function App() {
  const route = useHashRoute()

  const CurrentPage = useMemo(() => {
    const pages = {
      home: HomePage,
      about: AboutPage,
      approach: ApproachPage,
      pathways: PathwaysPage,
      research: ResearchPage,
      community: CommunityPage,
      projects: ProjectsPage,
      support: SupportPage,
      contact: ContactPage,
    }
    return pages[route] || HomePage
  }, [route])

  return (
    <div className="site-shell">
      <SiteHeader currentRoute={route} />
      <AnimatePresence mode="wait">
        <motion.main
          key={route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <CurrentPage />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </div>
  )
}
