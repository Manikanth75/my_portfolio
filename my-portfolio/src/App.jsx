import { useEffect, useState } from "react";
import profileImage from "./assets/profile.jpeg";
 import {
  FaCode,
  FaRocket,
  FaEnvelope,
  FaJava,
  FaPython
} from "react-icons/fa";
import "./App.css";
function App()
 {
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0
});
const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
  const sections = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
    
  });
  

  return () => {
    observer.disconnect();
  };
}, []);
useEffect(() => {
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <>
    
    <div
  className={`cursor-glow ${isHovering ? "hover" : ""}`}
  style={{ 
    left: mousePosition.x,
    top: mousePosition.y
  }}
>

</div>
      {/* Navigation */}
      <nav>
        <h2>MANI</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
<section id="home">
  <img src={profileImage} alt="Mani Belkeri" className="profile-image" />
  <p className="intro">Hello.. im</p>

  <h1 className="hero-name">Manikanth Belkera</h1>

  <h2 className="hero-role">
    Computer Science Engineering Student
  </h2>

  <p className="hero-description">
    I am interested in programming, web development and technology.
  </p>

  <button className="hero-button cursor-button"
   onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}>

    View My Projects
  </button>
  <div className="quick-info">

  <a  href="#skills"className="info-card">

  <FaCode className="info-icon" />
    <h3>Skills</h3>
    <p>Java • Python • C</p>
  </a>

  <a href="#projects" className="info-card">
    <FaRocket className="info-icon" />
    <h3>Projects</h3>
    <p>View my work</p>
  </a>

  <a href="#contact" className="info-card">
    <FaEnvelope className="info-icon" />
    <h3>Contact</h3>
    <p>Let's connect</p>
  </a>
</div>
</section>

      {/* About */}
      <section id="about" className="reveal">
  <h1>About Me</h1>

  <div className="about-card">
    <p>
      I'm a Computer Science Engineering student who enjoys
      learning programming and building useful projects.
    </p>
  </div>
</section>

      <section id="skills" className="reveal">
  <h1>My Skills</h1>

  <div className="skills-container">

    <div className="skill-card">
      <FaJava className="skill-icon" />
      <h2>Java</h2>
      <p>
        Object-oriented programming, problem solving,
        and application development.
      </p>
    </div>

    <div className="skill-card">
      <FaPython className="skill-icon" />
      <h2>Python</h2>
      <p>
        Programming, automation, problem solving,
        and beginner-level development.
      </p>
    </div>

    <div className="skill-card">
      <FaCode className="skill-icon" />
      <h2>C</h2>
      <p>
        Programming fundamentals, logic building,
        and data structures.
      </p>
    </div>

  </div>
</section>

      {/* Projects */}
      <section id="projects"className="reveal">
        <h1>My Projects</h1>

        <div>
          <h2>Project 1</h2>
          <p>My first project description.</p>
        </div>

        <div>
          <h2>Project 2</h2>
          <p>My second project description.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="reveal">
  <h1>Contact Me</h1>

  <p>
    Email:{" "}
    <a href="mailto:manibelkeri@gmail.com">
      manibelkeri@gmail.com
    </a>
  </p>
<p>
  Phone:{" "}
  <a href="tel:+91 8073  123104">
    +91 8073  123104
  </a>
</p>
  <p>
    LinkedIn:{" "}
    <a
      href="https://www.linkedin.com/in/manibelkeri-96ab32362/"
      target="_blank"
      rel="noopener noreferrer"
    >
      My LinkedIn
    </a>
  </p>

  <p>
    GitHub:{" "}
    <a
      href="https://github.com/Manikanth75"
      target="_blank"
      rel="noopener noreferrer"
    >
      My GitHub
    </a>
  </p>
  <p> contact information</p>
  
</section>

        
      
    </>
  ); 
}

export default App;