import { useEffect } from 'react'

const useScrollHandler = () => {
  useEffect(() => {
    // Add any scroll-related logic here
    const handleScroll = () => {
      // Custom scroll handling if needed
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export default useScrollHandler