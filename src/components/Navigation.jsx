const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav" role="navigation">
      <ul className="nav__items">
        <li className="nav__item">
          <button 
            onClick={() => scrollToSection('about')} 
            className="nav__link"
          >
            About
          </button>
        </li>
        
        <li className="nav__item">
          <button 
            onClick={() => scrollToSection('work')} 
            className="nav__link"
          >
            Work
          </button>
        </li>
        <li className="nav__item">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="nav__link"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation