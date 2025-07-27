
const Technology =() => {
    const technologies = [
    { name: 'HTML5', icon: '/images/html.svg' },
    { name: 'CSS3', icon: '/images/css.svg' },
    { name: 'JavaScript', icon: '/images/javascript.svg' },
    { name: 'React', icon: '/images/react.svg' },
    { name: 'Node.js', icon: '/images/nodejs.svg' },
    { name: 'Express.js', icon: '/images/express.svg' },
    { name: 'MongoDB', icon: '/images/mongodb.svg' },
    { name: 'MySQL', icon: '/images/mysql.svg' },
    { name: 'React Native', icon: '/images/react-native.svg' }
  ];

    return(
        <section className="technologies" id="technologies">
        <div className="row">
          <h2>Technologies </h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  )
    
}

export default Technology