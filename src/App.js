import "./App.css";
import { CardComponent, List, Portfolio } from "./components/List";
import {
  comp,
  links,
  socials,
  contact,
  experience,
  portfolios,
} from "./components/constants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div style={{padding:"5px"}}>
            <img
              src="/images/app.png"
              alt="app"
              style={{ width: "50px", height: "50px", borderRadius: "25px"  }}
            />
          </div>
          <ul id="ul">{links.map((link) => List(link.link, link.title))}</ul>
        </nav>
        <div className="header-body">
          <div className="header-body-text">
            <span>
              <h3>HI EVERYONE ,</h3>
            </span>
            <span className="span">
              I'M
              <div className="body-big-text"> TOLULOPE BAMISILE</div>
            </span>
            <span>
              <b>I AM A FULLSTACK DEVELOPER</b>
            </span>
            <span>
              WHICH MEANS I CAN HELP 
              <em>
                <b> CREATE</b>
              </em>
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "bisque",
              }}
            >
              <i>AWESOME WEB APPLICATIONS,</i>
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "bisque",
              }}
            >
              <i>SOFTWARES, MOBILEAPPS</i>
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "bisque",
              }}
            >
              <i>AS WELL AS WONDERFUL CROSS-PLATFORM APPS</i>
            </span>
            <br />
            <a id="btn" className="button" href='#contact'>
              CONTACT ME
            </a>
          </div>
          <div className="header-body-image">
            <img
              src={"/images/tolus.png"}
              alt={"profile"}
              style={{ width: "120%", heigth: "120%" }}
            />
            <div className="image-abs">
              <div className="straight-line"></div>
              {socials.map((items) => (
                <div key={items.alt}>
                  <a href={items.link} target="blank">
                    <img
                      src={items.image}
                      alt={items.alt}
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "5px",
                        marginBottom: "2px",
                      }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="App-main">
        <section id="about">
          <div className="main-about">
            <div className="side">
              <h2>About Me</h2>
            </div>
            <p style={{ color: "#7c808f" }}>
              I am a Creative FullStack Developer talented at integrating novel
              design elements and interaction points to build new and exciting
              user experiences. Complex problem-solver with analytical and
              driven mindset. Dedicated to achieving demanding development
              objectives according to tight schedules while producing impeccable
              code. Committed to presenting users with easy-to-use interfaces
              and entertainment elements while driving exceptional ROI. Being a
              Hard Working Project coordinator brings proven success in
              overseeing administrative areas. Knowledgeable about best methods
              for managing resources, schedules and personnel to achieve
              objectives. Tech-savvy and always looking for improvement
              opportunities.
            </p>
          </div>
          <div className="main-skill">
            <div id="skills">
              {comp.map((items) => CardComponent(items.stack, items.array))}
            </div>
            <div className="side">
              <h2>SKILLS</h2>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2 style={{ color: "burlywood" }}>Portfolio</h2>
          <div className="portfolios">
            {portfolios.map(({ name, link, image, description, tech }) =>
              Portfolio(name, link, image, description, tech)
            )}
          </div>
        </section>
        <section id="experience">
          <div id="design">
            <h2>Experience</h2>
          </div>
          <div>
            {experience.map((items) => (
              <div className="experience-container">
                <div className="">
                  <div className="experience-top">{items.top.date}</div>
                </div>
                <div className="experience-lower">
                  <div className="line"></div>
                  <div>
                    {items.data.map((elements) => (
                      <div style={{ marginBottom: "7px", color: "#7c808f" }}>
                        {elements}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contact">
          <h2 style={{ color: "burlywood" }}>Contact Me</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: "15px",
                backgroundColor: "#838486",
                padding: "5px",
                fontWeight: "500",
              }}
            >
              <div style={{ width: "20px", height: "20px" }}>
                <img
                  src={"/images/email.png"}
                  alt="phone"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </div>
              tolulopebamisile@gmail.com
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {contact.map((con) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#838486",
                    padding: "5px",
                    fontWeight: "500",
                    margin: "2px",
                  }}
                >
                  <div style={{ width: "20px", height: "20px" }}>
                    <img
                      src={"/images/phone.png"}
                      alt="phone"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  {con}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; Tolulope, {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
