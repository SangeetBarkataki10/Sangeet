import Carousel from "./Carousel";
import ExperienceCard from "./ExperienceCard";
import Spark from "../../public/ACM-Spark.svg";
import Borde from "../../public/borde-logo.png";
import DAS from "../../public/DAS-logo.svg";  
import DAU from "../../public/DAU.svg";
import DC from "../../public/DesignCo.svg";
import Musaic from "../../public/Musaic_Logo.png";
import Waveform from "../../public/Waveform.png";
import DSS from "../../public/DSS.jpg";
import R from "../../public/r.svg";
import RM from "../../public/RM.svg";
import Sangeet from "../../public/SangeetMusic.png";
import JJ from "../../public/JakotJilika.jpeg";
import ID from "../../public/InnerDemonsCover.jpeg";
import DNN from "../../public/Dreams-And-Nightmares.jpg";
import EMM from "../../public/El-Mundo-Mio.png";
import HER from "../../public/Husn-e-Raat.svg";

const experiences = [
    {
    title: "Borde AI Intern",
    image: Borde,
    description:
      "Created AI model to grade corn quality as per USDA standards using computer vision models.",
    skills: "Top Skills: YOLOv5, D-FINE, PyTorch",
    date: "June 2025 - Sep 2025",
    width: 180,
    height: 180,
    link: "https://www.borde.io/"
    },
{
    title: "ACM Spark Web Dev (UCR)",
    image: Spark,
    description:
      "Developed Vietnamese Student Association website in Fall 2025. Currently creating new site for Rides@UCR.",
    skills: "Top Skills: Typescript, React, Tailwind CSS",
    date: "Sep 2025 - Present",
    width: 100,
    height: 100,
    link: "https://acm.cs.ucr.edu/programs/spark"
  },
  {
    title: "ACM DAS SWE (UCR)",
    image: DAS,
    description:
      "Working on an LLM-powered study tool with different studying methods and ability to save session.",
    skills: "Top Skills: Flask, SQLAlchemy, PostgreSQL",
    date: "Jan 2026 - Present",
    width: 100,
    height: 100,
    link: "https://acm.cs.ucr.edu/programs/das"
  },
  {
    title: "DAU Industry Relations Intern (UCR)",
    image: DAU,
    description:
      "Shadowing IR officer and assisting with outreach to companies and professionals for events.",
    skills: "Top Skills: Market Research, Networking, Professional Communication",
    date: "Jan 2026 - Present",
    width: 110,
    height: 110,
    link: "https://designatucr.com"
  },
  {
    title: "DesignCo Project Designer (UCR)",
    image: DC,
    description:
      "Designing a website for UCR Blood Initiative on Project Committee for handoff to ACM Spark.",
    skills: "Top Skills: Figma, UI/UX, Responsive Design",
    date: "Jan 2026 - Present",
    width: 70,
    height: 70,
    link: "https://designatucr.com/designco"
  },
  {
    title: "Data Science Society Tech Lead (UCR)",
    image: DSS,
    description:
      "Lead analysis on use of vocal biometrics to identify Parkinson’s using data from Little et. al. 2012 (Unavailable due to privacy).",
    skills: "Top Skills: Seaborn, Scikit-learn, Statistical Analysis",
    date: "Mar 2025 - May 2025",
    width: 70,
    height: 70,
  },
  {
    title: "Musaic (Advanced CS Capstone)",
    image: Musaic,
    description:
      "Streamlit market analysis tool for YouTube Top 10 Songs (Sonoteller API free version discontinued).",
    skills: "Top Skills: Python, Streamlit, Market Analysis, Selenium Webdriver",
    date: "March 2024 - May 2024",
    width: 60,
    height: 60,
  },
  {
    title: "Waveform (CS100 Software Construction Capstone)",
    image: Waveform,
    description:
      "Web app animated audio visualizer to create engaging music visuals for content creators (group project).",
    skills: "Top Skills: Librosa, WebAudio API, GitHub Projects",
    date: "October 2025 - Present",
    width: 100,
    height: 100,
    link: "https://github.com/SangeetBarkataki10/Waveform-SangeetBarkataki"
  },
  {
    title: "NBA Report (For STAT107 Stats in R)",
    image: R,
    description:
      "Analyzed 2010-2024 NBA regular season team stats to identify biggest contributors to wins.",
    skills: "Top Skills: R, Data Wrangling, Statistical Analysis",
    date: "Sep 2025 - Dec 2025",
    width: 70,
    height: 70,
    link: "https://drive.google.com/file/d/1jwRLBaJsSVTHwZeZ-v6oUippzFVLrOmT/view"
  },
//   {
//     title: "Ethnomusicological Research",
//     image: Spark,
//     description:
//       "Conducted research on the traditional music of Northeast India, analyzing its cultural significance and contemporary relevance.",
//     date: "Jun 2022 - Dec 2022",
//     width: 100,
//     height: 100,
//     link: "https://www.borde.io/"
//   },
  {
    title: "Raag Milan",
    image: RM,
    description:
      "Algorithmic synthesis of two base ragas (modes) using Indian classical theory (mathematical framework in development).",
    skills: "Top Skills: Computational Music Theory, Formal System Design, NetworkX",
    date: "Mar 2025 - Present",
    width: 160,
    height: 160,
  },
  {
    title: "Sangeet Official Artist Website",
    image: Sangeet,
    description:
      "Creating professional artist website to showcase music (Available on request).",
    date: "Sep 2024 - Present",
    skills: "Top Skills: Product Design, End-to-End Production, SEO",
    width: 125,
    height: 125,
  },
];

const songs = [
    {
    title: "Jakot Jilika",
    image: JJ,
    description:
      "Bihu-pop fusion produced, recorded and shot in India alongside tenured Assamese singer Bornali Kalita, amassed 90K+ YouTube views,3K streams (Spotify), & high engagement rates on FB and IG.",
    date: "Released Apr 2024",
    width: 100,
    height: 100,
    link: "https://youtu.be/d2er3lO0TXg?si=qcS3VFBCIY_HTGU8",
    dark : true
    },
    {
    title: "Husn-e-Raat (Single)",
    image: HER,
    description:
      "R&B-Indian classical fusion with strong Mughlai aesthetics.",
    date: "In Production - Coming Soon",
    width: 150,
    height: 150,
    dark: true
    },
    {
    title: "Inner Demons",
    image: ID,
    description:
      "Released sophomore LP 'Inner Demons' exploring a blend of sci-fi, horror, and high fantasy to explore existential themes through synthwwave R&B",
    date: "Released Jan 2024",
    width: 100,
    height: 100,
    link: "https://open.spotify.com/album/2wDNC5SyajdIJPiszdFmGc?si=aXjcP60eQfCynbA0DucxDQ",
    dark : true
  },
  {
    title: "Dreams and Nightmares",
    image: DNN,
    description:
      "Debut LP blending hip-hop, R&B, and synthwave exploring themes of ambition, anxiety, and self-discovery.",
    date: "Released Jan 2022",
    width: 100,
    height: 100,
    link: "https://open.spotify.com/album/2xctpNw7ck2deE8GDm6KO1?si=GeX6CtOpRUS_CB9qR4-HOA",
    dark : true
  },
  {
    title: "El Mundo Mío",
    image: EMM,
    description:
      "Debut EP blending reggaetón and R&B, exploring themes of love, heartbreak, and self-discovery.",
    date: "Released Jul 2021",
    width: 100,
    height: 100,
    link: "https://open.spotify.com/album/4TwnYamV377mEQR2Y77DeF?si=QwnEO3aQQzSGhfg-_c5Gow",
    dark : true
  }
];

const Projects = () => {
  const items = experiences.map((experience) => (
    <ExperienceCard key={`${experience.title}-${experience.date}`} {...experience} />
  ));

  const items2 = songs.map((experience) => (
    <ExperienceCard key={`${experience.title}-${experience.date}`} {...experience} />
  ));

  return (
    <section className="w-full py-6 mx-auto">
      <Carousel items={items} />
      <Carousel items={items2} />
    </section>
  );
};

export default Projects;
