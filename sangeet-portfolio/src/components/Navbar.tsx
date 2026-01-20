import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic",
});

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between p-4 gap-6 py-6">
      <Link
        className={`${sourceSans3.className} text-5xl w-48 h-14 text-transparent bg-linear-to-r from-[#5133bc] to-[#b81bc0] bg-clip-text font-bold`}
        href="/"
      >
        Sangeet
      </Link>
      <div className="flex space-x-4 text-[var(--nav-links)]">
        <Link href="/" className="hover:text-[var(--hover-links)]">
          About
        </Link>
        <Link href="/experience" className="hover:text-[var(--hover-links)]">
          Projects/Experience
        </Link>
        <Link href="mailto:sbarkataki018@gmail.com" className="hover:text-[var(--hover-links)]">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
