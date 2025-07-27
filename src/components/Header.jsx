import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="header" role="banner" id="top">
      <div className="row">
        <Navigation />
      </div>
      <div className="header__text-box row">
        <div className="header__text">
          <h1 className="heading-primary">
            <span>Pallabi Das</span>
          </h1>
          <p>Full Stack Developer building scalable, user-focused web applications with modern technologies.</p>
          <a href="#contact" className="btn btn--pink">Get in touch</a>
        </div>
      </div>
    </header>
  )
}

export default Header