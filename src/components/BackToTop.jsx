import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 700) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a
      className="back-to-top"
      onClick={scrollToTop}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0)'
      }}
    >
      <img src="./images/arrow-up.svg" alt="Back to Top" />
    </a>
  )
}

export default BackToTop