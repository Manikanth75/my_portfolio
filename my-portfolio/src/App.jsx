import { useEffect, useState } from "react";
import "./App.css";
function App()
 {
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0
});
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
  return (
    <>
    <div
  className="cursor-glow"
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
  <p className="intro">Hello, I'm</p>

  <h1 className="hero-name">Manikanth Belkera</h1>

  <h2 className="hero-role">
    Computer Science Engineering Student
  </h2>

  <p className="hero-description">
    I am interested in programming, web development and technology.
  </p>

  <button className="hero-button">
    View My Projects
  </button>
</section>

      {/* About */}
      <section id="about" className="reveal">
        <h1>About Me</h1>

        <p>
          I'm a Computer Science Engineering student who enjoys
          learning programming and building useful projects.
        </p>
      </section>

      {/* Skills */}
      <section id="skills"className="reveal">
        <h1>My Skills</h1>

        <div>
          <p>C Programming</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Node.js</p>
          <p>MongoDB</p>
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
      <section id="contact"className="reveal">
        <h1>Contact Me</h1>

        <p>Email: manibelkeri@gmail.com</p>
        <p>Phone: +91 8073123104</p>
      </section>
    </>
  );
}

export default App;