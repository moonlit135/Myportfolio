import { useEffect } from 'react'
import Header from './components/Header'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import useScrollHandler from './hooks/useScrollHandler'
import Footer from './components/Footer'
import Technology from './components/Technology'
import './styles/index.css'

function App() {
  useScrollHandler()

  useEffect(() => {
    // Handle keyboard navigation accessibility
    const handleFirstTab = (e) => {
      if(e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')
        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
      }
    }

    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing')
      window.removeEventListener('mousedown', handleMouseDownOnce)
      window.addEventListener('keydown', handleFirstTab)
    }

    window.addEventListener('keydown', handleFirstTab)

    return () => {
      window.removeEventListener('keydown', handleFirstTab)
      window.removeEventListener('mousedown', handleMouseDownOnce)
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <main role="main">
        <About />
        <Technology />
        <Work />
      </main>
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App