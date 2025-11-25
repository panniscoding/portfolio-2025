"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <a href="#Home" className="logo-holder">
          <div className="logo">
            <img src="images/logo.webp" alt="logo" width="48" />
          </div>
          <div className="logo-text">Pann's Portfolio</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skill</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:panneiphyu.ms@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Pann 🌸,
              </h1>
              <p>
                Junior Developer with a unique blend of technical expertise and
                high-end hospitality experience. I specialize in creating
                efficient, scalable solutions that prioritize client needs and
                user experience. When I'm not coding, you'll find me enjoying
                the hoppy bitterness of a good Guinness 🖤
              </p>
              <div className="call-to-action">
                <a href="./src/Pann_Tech_Resume.pdf" className="button black">
                  View Resume
                </a>
                <a
                  href="mailto:panneiphyu.ms@gmail.com"
                  className="button white"
                >
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/panniscoding/portfolio-2025">
                  <img src="./images/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/pann-ei-phyu-849916b0/">
                  <img src="./images/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./images/pann.png" alt="Pann" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./images/html.png" alt="HTML" width="128" />
              <img src="./images/css.png" alt="CSS" width="128" />
              <img src="./images/javascript.png" alt="JS" width="128" />
              <img src="./images/react.png" width="128" alt="React" />
              <img src="./images/vscode.png" width="128" alt="VS Code" />
              <img src="./images/python.png" width="128" alt="Python" />
              <img src="./images/seo.png" alt="SEO" width="128" />
              <img src="./images/icon-AI.png" alt="AI" width="128" />
              <img src="./images/html.png" alt="HTML" width="128" />
              <img src="./images/css.png" alt="CSS" width="128" />
              <img src="./images/javascript.png" alt="JS" width="128" />
              <img src="./images/react.png" width="128" alt="React" />
              <img src="./images/vscode.png" width="128" alt="VS Code" />
              <img src="./images/python.png" width="128" alt="Python" />
              <img src="./images/seo.png" alt="SEO" width="128" />
              <img src="./images/icon-AI.png" alt="AI" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small> About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>GIT</li>
                <li>Responsive</li>
                <li>SEO</li>
                <li>AJAX/API</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>Get to know me a bit</h3>
              <p>
                I'm a career-changing Junior Developer with 10 years of
                hospitality management experience, now channeling my passion for
                problem-solving into full-stack development. My decade managing
                high-end operations taught me to build efficient systems under
                pressure, anticipate user needs, and lead diverse teams through
                complex challenges.
              </p>
              <p>
                Currently working as Personal Assistant at a branding
                consultancy and Financial Controller at the Fashion Store while
                dedicating every available hour to mastering my technical skills
                across the entire stack. I'm seeking my first tech role where I
                can bring my operational mindset, client-focused approach, and
                hunger to learn to a development team that values diverse
                perspectives.
              </p>
            </div>
          </div>
        </section>
        <section id="projects" className="project container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="project-grid">
            <a href="http://www.canapa-x.com" className="project-item">
              <img src="./images/canapa-web.png" alt="Canapa-X" width="100%" />
            </a>
            <a href="#" className="project-item">
              <img
                src="./images/Python_AI_project.png"
                alt="Python-AI"
                width="100%"
              />
            </a>

            <a href="www.amsterboat.com" className="project-item">
              <img src="./images/amsterboat.jpg" alt="" width="100%" />
            </a>
            <a href="#" className="project-item">
              <img
                src="./images/weather.png"
                alt="Js-weather-app"
                width="100%"
              />
            </a>

            <a href="#" className="project-item">
              <img
                src="./images/HTML, CSS project.png"
                alt="Css-workshop"
                width="100%"
              />
            </a>
            <a href="#" className="project-item">
              <img
                src="./images/Python_Project.png"
                alt="Python-project"
                width="100%"
              />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>AI Chatbot</h3>
              <p>
                I've put a Chatbot at the footer which knows all my skills and
                has a copy of my CV. You can ask questions about me to get a
                better idea of who I am and what I've done.
              </p>
              <p>
                You can also download my CV here if you want to take a look at
                it. I'm currently looking for new opportunnities so if you hace
                a project you think I'd be a good fit for, please get in touch!
              </p>
              <a href="./src/Pann_Tech_Resume.pdf" className="button black">
                Download my Resume
              </a>
            </div>

            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-9ef8b10a-b4ec-4c7d-99d3-83643181d981"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>
      </main>
    </>
  );
}
