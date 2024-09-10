import "./App.css";
import { ReactP5Wrapper, P5CanvasInstance } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  let centerX = 0.0;
  let centerY = 0.0;
  const radius = 40;
  let rotAngle = -90;
  let accelX = 0.0;
  let accelY = 0.0;
  let deltaX = 0.0;
  let deltaY = 0.0;
  const springing = 0.0009;
  const damping = 0.98;
  // Declare variables for specifying vertex locations
  const nodes = 8;
  const nodeStartX: number[] = [];
  const nodeStartY: number[] = [];
  const nodeX: number[] = [];
  const nodeY: number[] = [];
  const angle: number[] = [];
  const frequency: number[] = [];

  // Declare the variable for the curve tightness
  let organicConstant = 1.0;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    // Initialize arrays to 0
    for (let i = 0; i < nodes; i++) {
      nodeStartX[i] = 0;
      nodeStartY[i] = 0;
      nodeX[i] = 0;
      nodeY[i] = 0;
      angle[i] = 0;
    }

    // Initialize frequencies for corner nodes
    for (let i = 0; i < nodes; i++) {
      frequency[i] = p5.random(5, 32);
    }

    p5.noStroke();
    p5.angleMode(p5.DEGREES);
  };

  function drawShape() {
    // Calculate node starting locations
    for (let i = 0; i < nodes; i++) {
      nodeStartX[i] = centerX + p5.cos(rotAngle) * radius;
      nodeStartY[i] = centerY + p5.sin(rotAngle) * radius;
      rotAngle += 360.0 / nodes;
    }

    // Draw the polygon

    p5.curveTightness(organicConstant);
    const shapeColor = p5.lerpColor(
      p5.color("red"),
      p5.color("yellow"),
      organicConstant,
    );
    p5.fill(shapeColor);

    p5.beginShape();
    for (let i = 0; i < nodes; i++) {
      p5.curveVertex(nodeX[i], nodeY[i]);
    }
    p5.endShape(p5.CLOSE);
  }

  function moveShape() {
    // Move center point
    deltaX = p5.mouseX - centerX;
    deltaY = p5.mouseY - centerY;

    // Create springing effect
    deltaX *= springing;
    deltaY *= springing;
    accelX += deltaX;
    accelY += deltaY;

    // Move center
    centerX += accelX;
    centerY += accelY;

    // Slow down springing
    accelX *= damping;
    accelY *= damping;

    // Change curve tightness based on the overall acceleration;
    // use abs() to avoid dependence on direction of acceleration
    organicConstant = 1 - (p5.abs(accelX) + p5.abs(accelY)) * 0.1;

    // Move nodes
    for (let i = 0; i < nodes; i++) {
      nodeX[i] = nodeStartX[i] + p5.sin(angle[i]) * (accelX * 2);
      nodeY[i] = nodeStartY[i] + p5.sin(angle[i]) * (accelY * 2);
      angle[i] += frequency[i];
    }
  }

  p5.draw = () => {
    p5.background(250, 50);
    // Draw and move the shape
    drawShape();
    moveShape();
  };
}

function App() {
  return (
    <>
      <p> Hello! 👋</p>
      <p>
        I'm Filip - Poznań based software developer specializing in react &amp;
        typescript &amp; node.js writing code since 2014. I make websites,
        webapps and mobile apps.
      </p>
      <hr />
      <h3>Stuff I use</h3>
      <ul>
        <li>Typescript</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>Firebase</li>
        <li>Jest</li>
        <li>GIT</li>
        <li>React</li>
        <li>React Native</li>
        <li>Figma</li>
        <li>Vite</li>
        <li>p5.js</li>
        <li>three.js</li>
        <li>react-query</li>
        <li>Redux</li>
        <li>Expo</li>
      </ul>
      <hr />
      <h3>Music</h3>
      <p>
        Besides being a developer I love making music using ableton and elektron
        boxes.
      </p>
      <p>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/2BKGf52ZhO45PWUFjRno14?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>
      <hr />

      <p>
        Find me:{" "}
        <a href="https://www.linkedin.com/in/filip-przydryga/">Linkedin</a>
        {" + "}
        <a href="https://github.com/ghert">Github</a>
        {" + "}
        <a href="https://www.instagram.com/g.h.r.t/">Instagram</a>
        {" + "}
        <a href="https://soundcloud.com/ghert">Soundcloud</a>
        <p>przydryga.filip@gmail.com</p>
      </p>
      <ReactP5Wrapper sketch={sketch} />
    </>
  );
}

export default App;
