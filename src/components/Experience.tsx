import type { ReactNode } from "react";

type Job = {
  role: string;
  company: string;
  url: string;
  logo: string;
  period: string;
  description?: ReactNode;
};

const jobs: Job[] = [
  {
    role: "React Native Developer",
    company: "Youwell AS",
    logo: "/logos/youwell.png",
    url: "https://www.youwell.no/en",
    period: "Nov 2024 – Dec 2025",
    description: (
      <>
        Built and maintained a suite of 9 mental health apps, including{" "}
        <a href="https://play.google.com/store/apps/details?id=no.youwell.apps.patient.sidekick">
          Sidekick
        </a>
        ,{" "}
        <a href="https://play.google.com/store/apps/details?id=no.youwell.ADHD">
          ADA
        </a>{" "}
        and{" "}
        <a href="https://play.google.com/store/apps/details?id=no.youwell.remonitgout">
          Urika
        </a>
        , in a React Native monorepo, along with their shared UI library and a
        dashboard for therapists. Led the migration of every app to new RN
        architecture and handled App Store and Google Play releases.
      </>
    ),
  },
  {
    role: "React Developer",
    company: "FRAM Studio Ltd",
    logo: "/logos/fram.png",
    url: "https://framstudio.co.uk/",
    period: "May 2022 – Apr 2024",
    description: (
      <>
        Built the <a href="https://www.native.fm/">native.fm</a> dashboard for
        managing live events and tickets, including a page builder where
        organizers design their own event pages. Also worked on the Next.js
        ticket shop and mobile apps for ticket holders and door scanning.
      </>
    ),
  },
  {
    role: "React Developer",
    company: "adchitects",
    logo: "/logos/adchitects.png",
    url: "https://adchitects.co/",
    period: "Jun 2020 – Apr 2022",
    description: (
      <>
        Shipped the Awwwards-nominated{" "}
        <a href="https://genkiinstruments.com/">genkiinstruments.com</a> store
        with Next.js and headless Shopify, a social media app with React and
        Express, and multiple content-managed Next.js websites.
      </>
    ),
  },
  {
    role: "React Native Developer",
    company: "UpMenu",
    logo: "/logos/upmenu.png",
    url: "https://www.upmenu.com/",
    period: "Sep 2019 – Jun 2020",
    description:
      "Rebuilt a food delivery app in React Native, replacing its previous Swift version, and fixed a critical bug in a native Objective-C module.",
  },
  {
    role: "Front-end Developer",
    company: "MUG",
    logo: "/logos/mug.png",
    url: "https://www.mug.pl/",
    period: "Jan 2019 – Jun 2019",
    description:
      "Built an Electron app for thermal printers with a C++ hardware module and maintained an e-learning platform used by major automotive companies.",
  },
  {
    role: "Front-end Developer",
    company: "VentureDevs",
    logo: "/logos/venturedevs.png",
    url: "https://www.venturedevs.com/",
    period: "Jun 2017 – Feb 2018",
    description:
      "Maintained a React Native stock market simulator app and created custom Shopify themes for e-commerce clients.",
  },
  {
    role: "Front-end Developer",
    company: "Apptension",
    logo: "/logos/apptension.png",
    url: "https://apptension.com/",
    period: "Oct 2015 – Feb 2017",
    description:
      "Built a React dashboard with D3.js charts and animated ads with GSAP for a large telecom client.",
  },
  {
    role: "Front-end Developer",
    company: "Merixstudio",
    logo: "/logos/merixstudio.png",
    url: "https://www.merixstudio.com/",
    period: "Aug 2014 – Sep 2015",
    description: "Created websites for small businesses and corporate clients.",
  },
];

export default function Experience() {
  return (
    <section className="section experience">
      <h2>Experience</h2>
      <ol className="jobs">
        {jobs.map((job) => (
          <li key={`${job.company}-${job.period}`} className="job">
            <div className="job-meta">{job.period}</div>
            <div>
              <h3>
                <img className="job-logo" src={job.logo} alt="" />
                <a className="job-company" href={job.url}>
                  {job.company}
                </a>{" "}
                <span className="job-role">
                  <span className="job-dot">· </span>
                  {job.role}
                </span>
              </h3>
              {job.description && (
                <p className="job-description">{job.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
