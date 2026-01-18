import Link from "next/link";

const Experience = () => {
    return (
        <div className="flex flex-col gap-4 py-8 my-8 items-center w-full">
             <Link href="/experience" className="text-5xl font-bold text-white">
                Projects/Experience
            </Link>
            <h1 className="w-3/4 font-bold text-white text-xl text-center">
                Click here to see a comprehensive list of experiences and skills
            </h1>
        </div>
    );
}

export default Experience;