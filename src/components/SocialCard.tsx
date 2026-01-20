import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SocialCardProps {
  title: string;
  image: StaticImageData;
  link: string;
  height?: number;
  width?: number;
}

const SocialCard = ({ title, image, link, height, width }: SocialCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex flex-col items-center justify-center
        rounded-2xl bg-white/90
        shadow-md shadow-black/20
        p-5
        w-full max-w-[180px] min-h-[150px]
        transition hover:-translate-y-1 hover:shadow-lg
      "
    >
      <h3 className="text-lg font-bold text-center text-[#060719]">{title}</h3>

      <div className="relative mt-3 h-14 w-14">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className="object-contain"
          sizes="56px"
        />
      </div>
    </Link>
  );
};

export default SocialCard;
