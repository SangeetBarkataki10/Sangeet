import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic"
});

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between p-4 gap-6 py-6">
      <div className={`${sourceSans3.className} text-5xl w-48 h-14 text-transparent bg-linear-to-r from-[#5133bc] to-[#b81bc0] bg-clip-text font-bold`}>
        Sangeet
      </div>
      <div className="flex space-x-4 text-white">
        <a href="#home" className="hover:underline">
          About
        </a>
        <a href="#about" className="hover:underline">
          Projects/Experience
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
