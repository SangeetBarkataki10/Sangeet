import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  title: string;
  description: string;
  skills?: string;
  date: string;
  image: StaticImageData;
  width: number;
  height: number;
  link?: string;
  dark? : boolean;
}

const ExperienceCard = ({ title, description, skills, date, image, width, height, link, dark }: ExperienceCardProps) => {
    const img = (<Image
        src={image}
        alt={title}
        width={width}
        height={height}
        className="mx-auto my-4 w-contain"
      />);
      const bgLight = "bg-[#e0b0112f] shadow-[#1a082f]";
      const titleLight = "text-[#170758]";
      const titleDark = "text-[#ffb405]";
      const textLight = "text-[#060719]";
      const textDark = "text-[#ffd904]";
      const dateLight = "text-[#060719]";
      const dateDark = "text-[#EAA905]";
      const bgDark = "bg-[#770c2527] shadow-[#fdb704]";

  return (
    <div className={`flex flex-col ${dark ? bgDark : bgLight} p-6 rounded-lg shadow-md m-4 w-90 h-95`}>
      <h3 className={`text-xl font-bold text-center ${dark ? titleDark : titleLight}`}>{title}</h3>
      {link ? (
        <Link href={link} target="_blank" className="h-fit flex items-center justify-center">
          {img}
        </Link>
      ) : (
        img
      )}
      <p className={`${dark ? textDark : textLight}`}>{description}</p>
      <div className="mt-auto">
      <p className={`${dark ? textDark : textLight} mb-1`}>{skills}</p>
      <p className={`text-sm font-bold ${dark ? dateDark : dateLight}`}>{date}</p>
        </div>
    </div>
  );
};

export default ExperienceCard;