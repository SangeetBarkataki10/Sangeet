import Link from "next/link";
import Borde from "../../public/borde-logo.png";
import Waveform from "../../public/Waveform.png";
import DSS from "../../public/DSS.jpg";
import RM from "../../public/RM.svg";
import Sangeet from "../../public/SangeetMusic.png";
import ExperienceCard from "./ExperienceCard";
import Carousel from "./Carousel";

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
    link: "https://www.borde.io/",
    dark: true,
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
    dark: true,
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
    link: "https://github.com/SangeetBarkataki10/Waveform-SangeetBarkataki",
    dark: true,
  },
  {
    title: "Raag Milan",
    image: RM,
    description:
      "Algorithmic synthesis of two base ragas (modes) using Indian classical theory (mathematical framework in development).",
    skills:
      "Top Skills: Computational Music Theory, Formal System Design, NetworkX",
    date: "Mar 2025 - Present",
    width: 160,
    height: 160,
    dark: true,
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
    dark: true,
  },
];
const Experience = () => {
  const items = experiences.map((experience) => (
    <ExperienceCard
      key={`${experience.title}-${experience.date}`}
      {...experience}
    />
  ));
  return (
    <div className="flex flex-col gap-4 py-4 my-4 items-center w-full">
      <Link
        href="/experience"
        className="text-5xl font-bold text-white hover:text-[#EAA905]"
      >
        Projects/Experience
      </Link>
      <section className="w-full py-6 mx-auto">
        <Carousel items={items} />
      </section>
      <Link
        href="/experience"
        className="w-3/4 font-bold text-white text-xl text-center hover:text-[#EAA905]"
      >
        Click here to see a comprehensive list of experiences and skills
      </Link>
      <Link
        href="https://drive.google.com/file/d/1J8CNheHGCXi4oZT0GsYAG9NTkwAORIm-/view"
        target="_blank"
        className="w-3/4 font-bold text-white text-xl text-center hover:text-[#EAA905]"
      >
        Click here to see my resume
      </Link>
    </div>
  );
};

export default Experience;
