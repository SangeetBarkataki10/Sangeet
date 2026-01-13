const Navbar = () => {
    return (
        <nav className="flex flex-col items-center justify-between p-4 gap-6 ">
            <div className="text-5xl italic w-48 h-14 text-transparent bg-linear-to-r from-[#5133bc] to-[#b81bc0] bg-clip-text font-bold">
                Sangeet
            </div>
            <div className="flex space-x-4 text-white">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;