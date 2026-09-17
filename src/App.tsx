import "./App.css";
import LenisProvider from './components/LenisProvider';
import { ScaleSection } from './components/ScaleSection';

function App() {
  return (
    <LenisProvider>
    <main>
      <ScaleSection className="section intro">
        <div className="container">
            <div className="columns">
              <div>
                <h1>Hey, I'm Filip</h1>
              <p>
                I make web apps, mobile apps and websites. <br />
                Writing code since 2014 - mostly react, react native and next.js.<br />
                Currently living in Poznań, Poland.
                </p>
                <p>
                  <a href="mailto:przydryga.filip@gmail.com">Email</a>
                  <a href="https://www.linkedin.com/in/filip-przydryga/">Linkedin</a>
                  <a href="https://github.com/ghert">Github</a>
                  <a href="https://www.instagram.com/g.h.r.t/">Instagram</a>
                  <a href="https://soundcloud.com/ghert">Soundcloud</a>
                </p>
              </div>
              <div className="me">
                <img width="128" src="/profile.jpg" />
              </div>
            </div>
        </div>
      </ScaleSection>
      <ScaleSection className="section projects dark">
        <div className="container">
          <div className="projects-list">
              <div className="project-item">
                <div>
                  <h3><a href="https://poznan.events">poznan.events</a></h3>
                  <p>Catalog of music events and concerts happening in Poznań. I created this site to help people find events easily and support local music scene.</p>
                  <p>Next.js / PostgreSQL / Tailwind / Daisy UI</p>
              </div>
              <a href="https://poznan.events">
                <img src="/poznanevents.png" alt="Poznan events" width="640px" />
              </a>
            </div>
          </div>
        </div>
        </ScaleSection>
        <ScaleSection className="projects section">
          <div className="container">
            <div className="projects-list">
              <div className="project-item">
                <a href="http://sketches.filipprzydryga.xyz">
                  <img src="/sketches.png" alt="Sketches project" />
                </a>
                <div><h3><a href="sketches.filipprzydryga.xyz">p5.sketches</a></h3>
                  <p>Collection of various experiments using p5.js library.<br/>
                    Typography, 2d, 3d, noise etc.</p>
                </div>
              </div>
            </div>
          </div>
        </ScaleSection>
      <ScaleSection className="tech section dark">
        <h3>Tech stack</h3>
        <h4>Languages</h4>
        <ul className="technologies">
          <li>Typescript</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h4>Frameworks</h4>
        <ul className="technologies">
          <li>React</li>
          <li>React Native</li>
          <li>Next.js</li>
        </ul>
        <h4>Tools</h4>
        <ul className="technologies">
          <li>Expo</li>
          <li>Tanstack Query</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>GIT</li>
          <li>Claude code</li>
          <li>PostgreSQL</li>
          <li>p5.js</li>
        </ul>
      </ScaleSection>

      <ScaleSection className="section">
        <div className="container">
            <div className="columns">
              <div>
                <h3>Music</h3>
              <p>
                Besides being a developer I love making music. Ableton is my DAW of choice, but I use some hardware from time to time: digitone, digitakt and yamaha reface cs.
              </p>
              <p>
                Checkout my <a href="http://soundcloud.com/ghert">soundcloud</a> for more.
                </p>
              </div>
              <p>
                <iframe width="100%" height="200" scrolling="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2336077325&color=%2397e4ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </p>
            </div>
        </div>
      </ScaleSection>
      </main>
    </LenisProvider>
  );
}

export default App;
