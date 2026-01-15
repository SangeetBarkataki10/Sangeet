import Image, { StaticImageData } from "next/image";
interface HeroProps {
  profile: StaticImageData;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <div className="flex items-center my-8 gap-36 font">
      <div className="pl-48 w-1/2 items-center justify-center">
        <h1 className="text-7xl font-bold text-white">
          Sangeet Barkataki — Fusing AI, Art, and Culture
        </h1>
      </div>
      <div className="w-1/2 items-center justify-center">
        <Image
          src={profile}
          alt="Profile Picture"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default Hero;
