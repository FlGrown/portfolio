import { CareerChapterType } from "@/types";

// Top of the stack first. `width` only shapes the brick; it carries no meaning.
export const career: CareerChapterType[] = [
  {
    id: "capital-rx",
    years: "2021 – Present",
    org: "Capital Rx",
    role: "Senior Front-End Software Developer",
    body: "Complex frontend flows for a new medical claims adjudication system, the Prior Authorization tool rebuild, and accessibility work across the component library.",
    tone: "accent",
    width: 100,
  },
  {
    id: "thinkful",
    years: "2019 – 2020",
    org: "Thinkful",
    role: "Web Development Mentor",
    body: "Weekly sessions with web development students on HTML, CSS, accessibility, JavaScript, React, Node, and MongoDB, with feedback on their capstone projects.",
    tone: "yellow",
    width: 64,
  },
  {
    id: "finalsite",
    years: "2016 – 2021",
    org: "Finalsite",
    role: "Front-End Developer",
    body: "Fully responsive, ADA-compliant client sites and reusable components inside a proprietary CMS, plus documentation for non-technical users.",
    tone: "ink",
    width: 90,
  },
  {
    id: "state-of-maryland",
    years: "2014 – 2016",
    org: "State of Maryland",
    role: "Webmaster, Department of Human Resources",
    body: "Redesigned the public and intranet sites, worked with the graphics team on mockups and wireframes, and built a custom WordPress theme.",
    tone: "red",
    width: 72,
  },
  {
    id: "rare-genomics",
    years: "2013 – 2015",
    org: "Rare Genomics Institute",
    role: "Volunteer Web Developer",
    body: "Redesigned and maintained the Squarespace site, and set up Google Analytics and Google Tag Manager.",
    tone: "teal",
    width: 80,
  },
];

export const education =
  "BS Psychology, UCF · MA Mathematics, Jacksonville University";

export default career;
