const Footer = () => {
  const socialLinks = [
    
    {
      href: "https://github.com/moonlit135",
      title: "Link to Github Profile", 
      icon: "./images/github.svg",
      alt: "Github"
    },
   
    {
      href: "https://www.linkedin.com/in/pallabi-das-014695256/",
      title: "Link to Linkedin Profile",
      icon: "./images/linkedin.svg",
      alt: "Linkedin"
    }
  ]

   return (
    <footer role="contentinfo" className="footer">
      <div className="row">
        {/* Social Links - GitHub and LinkedIn */}
        <ul className="footer__social-links">
          {socialLinks.map((link, index) => (
            <li key={index} className="footer__social-link-item">
              <a 
                href={link.href} 
                title={link.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={link.icon} 
                  className="footer__social-image" 
                  alt={link.alt} 
                />
              </a>
            </li>
          ))}
        </ul>


        
        <p>
          &copy; 2025 - Designed & Developed by Pallabi
         
        </p>

       
      </div>
    </footer>
  )
}

export default Footer