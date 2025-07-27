const Work = () => {
  const projects = [
    {
      title: "ECommerce",
      description: "E-Commerce web application built using modern technologies to provide a seamless shopping experience.",
      technologies: ["ReactJs", "NodeJs", "MongoDB", "ExpressJs"],
      liveUrl: "https://ecommerece-forever.vercel.app/",
      githubUrl: "https://github.com/moonlit135/EcommereceForever",
      image: "./images/project-1.png"
    }
    
  ]

  return (
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
          {projects.map((project, index) => (
            <div key={index} className="work__box">
              <div className="work__text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="work__list">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className="work__links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href={project.githubUrl} title="View Source Code" target="_blank" rel="noopener noreferrer">
                    <img src="./images/github.svg" className="work__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div className="work__image-box">
                <img src={project.image} className="work__image" alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work