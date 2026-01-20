import SocialCard from "./SocialCard";
import GH from "../../public/GitHub_Invertocat_Black.png";
import Spotify from "../../public/Spotify.png";
import YT from "../../public/Youtube.png";
import Linkedin from "../../public/Linkedin.png";
import GM from "../../public/Gmail.png";

const socialLinks = [
  {
    title: "GitHub",
    image: GH,
    link: "https://github.com/SangeetBarkataki10",
  },
  {
    title: "LinkedIn",
    image: Linkedin,
    link: "https://www.linkedin.com/in/sangeet-barkataki/",
    width: 800,
    height: 800,
  },
  {
    title: "Gmail",
    image: GM,
    link: "mailto:sbarkataki018@gmail.com",
  },
  {
    title: "Spotify",
    image: Spotify,
    link: "https://open.spotify.com/artist/104HheSj2HHKkqomCredXW?si=JHlcfNR8Shq-8Qh2u474KA",
  },
  {
    title: "YouTube",
    image: YT,
    link: "https://www.youtube.com/@sangeetmusicofficial/videos",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 mb-4 items-center w-full">
      <h1 className="text-5xl font-bold text-white">Contact/Find Me</h1>
      <div className="flex justify-center w-full mt-4">
        <div
          className="grid grid-cols-5 gap-8
          w-full max-w-5xl
          p-6
          rounded-2xl
          bg-white/10 backdrop-blur-md
          border border-white/15
          place-items-center"
        >
          {socialLinks.map((social) => (
            <SocialCard
              key={social.title}
              title={social.title}
              image={social.image}
              link={social.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
