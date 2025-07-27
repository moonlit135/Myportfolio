import { useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
const About = () => {
    const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Intersection Observer triggered:', entries);
        entries.forEach(entry => {
          console.log('Entry:', {
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            target: entry.target
          });
          
          if (entry.isIntersecting) {
            console.log('Section is in view, looking for SVG...');
            const svg = aboutRef.current?.querySelector('svg');
            console.log('Found SVG:', !!svg);
            if (svg) {
              console.log('Adding animated class to SVG');
              svg.classList.add('animated');
              console.log('SVG classes after adding:', svg.className);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold to 10% visibility
        rootMargin: '0px' // Reset rootMargin to default first
      }
    );

    if (aboutRef.current) {
      console.log('Starting to observe about section');
      observer.observe(aboutRef.current);
      console.log('About section ref:', aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
   


  
  return (
    <section ref={aboutRef} className="about" id="about">
        <div className="row">
            <h2>About Me</h2>
            <div className="about__content">
            
            <div className="about__text">
                <p>
                 I'm a Full Stack Developer with a passion for turning complex ideas into seamless digital experiences. I work mainly with the MERN stack(MongoDB, ExpressJs, ReactJs, NodeJs) with a strong focus on building efficient, scalable, and user-centric web applications.
                </p>
                <p>
                 I thrive at the intersection of creativity and logic — from designing clean, intuitive UIs to architecting robust backend systems. I pay close attention to details, write clean code, and always try to improve the user experience.
                </p>
                <p>
                 I'm currently looking for opportunities to contribute to impactful projects, grow alongside talented teams, and continue learning in the ever-evolving world of web development.
                </p>
                <a href="https://drive.google.com/file/d/1hSTA1NsINynQnUThWee-ihfP6J5jiCwG/view?usp=sharing" className="btn">My Resume</a>
            </div>

            <div className="about__image-box">
              <ReactSVG src="/images/animate.svg" />
            </div>
            
            </div>
        </div>
    </section>
  )
};

export default About;

