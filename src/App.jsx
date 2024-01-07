import "./App.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rings from "./components/Rings";
import Skill from "./components/Skill";
import Project from "./components/Project";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="container">
        <header>
          <nav>
            <h3 className="logo-text">neda azizi</h3>
            <ul>
              <li>
                <a href="https://github.com/neda-pro/" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/linktoneda/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </nav>

          <section className="intro">
            <h1 className="heading-xl">
              Nice to meet you!
              <br />
              I'm <u>Neda</u>.
            </h1>
            <p className="body-l">
              Based in the Netherlands, I'm a front-end developer passionate
              about creating beautiful and functional products.
            </p>
            <a className="link-button" href="#footer">
              CONTACT ME
            </a>
          </section>

          <Rings
            style={{ top: "10rem", left: "-20rem" }}
            ovalStyle={{ marginLeft: "-10rem" }}
          />
          <div className="profile">
            <div className="circle" />
          </div>
        </header>

        <section id="skills">
          <Rings
            style={{ right: 0, top: "25rem" }}
            ovalStyle={{ marginRight: "-26rem" }}
          />
          <Skill
            title="Programming Languages"
            items={["HTML", "CSS", "JvaScript"]}
          />
          <Skill
            title="Frameworks & Libraries"
            items={[
              "React",
              "React Query",
              "React Router",
              "React Native",
              "Axios",
              "Material UI",
              "Redux Tool Kit",
              "Zustand",
            ]}
          />
          <Skill
            title="UI/UX Tools"
            items={["Figma", "Adobe XD", "Adobe Tools(PS, etc)"]}
          />
          <Skill title="Version Control" items={["Git", "GitHub"]} />
          <Skill
            title="Productivity"
            items={[
              "Agile working(scrum, standup, etc)",
              "Jira",
              "Miro",
              "Google Workspace Tools",
            ]}
          />
          <Skill
            title="Others"
            items={["Team work", "Ownership", "Gen AI tools(GPT, Copilot)"]}
          />
        </section>

        <section id="projects">
          <div className="projects-heading">
            <h1 className="heading-xl">Projects</h1>
            <a className="link-button" href="#footer">
              CONTACT ME
            </a>
          </div>
          <main>
            <Project
              project={{
                name: "Snap",
                image: "snap.png",
                skills: ["React", "JS", "CSS", "React Router", "Zustand"],
                projectLink: "https://snap.neda.pro",
                codeLink: "https://github.com/neda-pro/snap",
              }}
            />
            <Project
              project={{
                name: "Chaloos",
                image: "chaloos.png",
                skills: [
                  "React",
                  "JS",
                  "MUI",
                  "Redux Toolkit",
                  "React Router",
                  "React Query",
                  "Axios",
                ],
                projectLink: "https://chaloos.neda.pro",
                codeLink: "https://github.com/neda-pro/chaloos",
              }}
            />
            <Project
              project={{
                name: "Newsletter",
                image: "newsletter.png",
                skills: ["React", "JS", "CSS"],
                projectLink: "https://newsletter.neda.pro",
                codeLink: "https://github.com/neda-pro/newsletter",
              }}
            />
            <Project
              project={{
                name: "Multi Step Subscription",
                image: "multi-step.png",
                skills: ["React", "JS", "MUI", "Redux Toolkit", "React Router"],
                projectLink: "https://multistep.neda.pro",
                codeLink: "https://github.com/neda-pro/multi-step-form",
              }}
            />
            <Project
              project={{
                name: "My Portfolio",
                image: "portfolio.png",
                skills: ["React", "CSS"],
                projectLink: "https://neda.pro",
                codeLink: "https://github.com/neda-pro/portfolio",
              }}
            />
          </main>
        </section>
      </div>
      <footer id="footer">
        <div className="container">
          <div className="footer-contact-wrapper">
            <div>
              <h1 className="heading-xl">Contact</h1>
              <p className="body-l contact-note">
                I would love to hear about your project and how I could help. do
                not hesitate to contact me!
              </p>
            </div>
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <p className="body-l">neda-pro@outlook.com</p>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
                <a
                  href="https://www.linkedin.com/in/linktoneda/"
                  target="_blank"
                ></a>
                <p className="body-l">@linktoneda</p>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faGithub} />
                </i>
                <a href="https://github.com/neda-pro" target="_blank"></a>
                <p className="body-l">@neda-pro</p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="footer-bottom">
            <h3 className="logo-text">neda azizi</h3>
            <p className="body-l">
              &copy; 2024 all rights reserved for neda.pro
            </p>
          </div>
          <Rings
            style={{ right: 0, top: "25rem" }}
            ovalStyle={{ marginRight: "-21rem" }}
          />
        </div>
      </footer>
    </>
  );
}

export default App;
