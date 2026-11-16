import "./App.css";
import Experience from "./components/Experience";
import LenisProvider from "./components/LenisProvider";
import ProjectCard from "./components/ProjectCard";
import TechList from "./components/TechList";
import {
  siClaude,
  siCss,
  siDocker,
  siDrizzle,
  siExpo,
  siExpress,
  siFigma,
  siGit,
  siGraphql,
  siHtml5,
  siJavascript,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siReactquery,
  siRedux,
  siSentry,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

// Simple Icons has no Zustand logo — a simple bear head in the same 24x24 style
const bearIcon = {
  path:
    "M3.5 13.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Z" +
    "M2 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z" +
    "M15 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z" +
    "M7.7 12a1.3 1.3 0 1 1 2.6 0a1.3 1.3 0 1 1-2.6 0Z" +
    "M13.7 12a1.3 1.3 0 1 1 2.6 0a1.3 1.3 0 1 1-2.6 0Z" +
    "M9.2 16.5a2.8 2.8 0 1 1 5.6 0a2.8 2.8 0 1 1-5.6 0Z" +
    "M10.9 15.8a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0-2.2 0Z",
};

function App() {
  return (
    <LenisProvider>
      <main>
        <section className="section intro">
          <div className="container">
            <div className="columns">
              <div>
                <h1>Hey, I'm Filip</h1>
                <p>
                  I love bulding web and mobile products. I spent last 10 years
                  delivering SaaS products, mobile apps, dashboards, e-commerce
                  storefronts, CMS websites and backends. I'm open to{" "}
                  <a href="mailto:przydryga.filip@gmail.com">work</a>
                </p>
                <div className="links">
                  <a href="mailto:przydryga.filip@gmail.com">Email</a>
                  <a href="https://www.linkedin.com/in/filip-przydryga/">
                    Linkedin
                  </a>
                  <a href="https://github.com/ghert">Github</a>
                  <a href="https://www.instagram.com/g.h.r.t/">Instagram</a>
                </div>
              </div>
              <div className="me">
                <img width="128" src="/profile.jpg" />
              </div>
            </div>
          </div>
        </section>
        <section className="section projects">
          <div className="container">
            <h2>Personal Projects</h2>
            <div className="projects-list">
              <ProjectCard
                href="https://poznan.events"
                title="poznan.events"
                image="/poznanevents.png"
                imageAlt="Poznan events"
                video="/poznanevents.mp4"
              >
                <p>
                  Catalog of music events and concerts happening in Poznań. I
                  created this site to help people find events easily and
                  support local music scene.
                </p>
                <p>Next.js / PostgreSQL / Tailwind / Daisy UI</p>
              </ProjectCard>
              <ProjectCard
                href="http://sketches.filipprzydryga.xyz"
                title="p5.sketches"
                image="/sketches.png"
                imageAlt="Sketches project"
                video="/sketches.mp4"
              >
                <p>
                  Collection of various experiments using p5.js library.
                  <br />
                  Typography, 2d, 3d, noise etc.
                </p>
              </ProjectCard>
            </div>
          </div>
        </section>
        <Experience />
        <section className="tech section">
          <h2>Tech Stack</h2>
          <TechList
            items={[
              { name: "TypeScript", icon: siTypescript },
              { name: "React", icon: siReact },
              { name: "React Native", icon: siReact },
              { name: "Next.js", icon: siNextdotjs },
              { name: "Node.js", icon: siNodedotjs },
              { name: "PostgreSQL", icon: siPostgresql },
              { name: "Expo", icon: siExpo },
              { name: "JavaScript", icon: siJavascript },
              { name: "Tailwind", icon: siTailwindcss },
              { name: "React Query", icon: siReactquery },
              { name: "Redux", icon: siRedux },
              { name: "Zustand", icon: bearIcon },
              { name: "Drizzle ORM", icon: siDrizzle },
              { name: "Express", icon: siExpress },
              { name: "GraphQL", icon: siGraphql },
              { name: "Docker", icon: siDocker },
              { name: "Sentry", icon: siSentry },
              { name: "React Navigation", icon: siReact },
              { name: "HTML", icon: siHtml5 },
              { name: "CSS", icon: siCss },
              { name: "Git", icon: siGit },
              { name: "Figma", icon: siFigma },
              { name: "Claude Code", icon: siClaude },
              { name: "MCP", icon: siModelcontextprotocol },
            ]}
          />
        </section>

        <section className="section music">
          <div className="container">
            <h2>Music</h2>
            <div className="columns">
              <div>
                <p>
                  Besides being a developer I love making music. Ableton is my
                  DAW of choice, but I use some hardware from time to time:
                  digitone, digitakt and yamaha reface cs.
                </p>
                <p>
                  Checkout my{" "}
                  <a href="http://soundcloud.com/ghert">soundcloud</a> for more
                  tracks.
                </p>
              </div>
              <p>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1889269635&color=%233c97d1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </p>
            </div>
          </div>
        </section>
      </main>
    </LenisProvider>
  );
}

export default App;
