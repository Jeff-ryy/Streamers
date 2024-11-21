import Text from "./Textarea";
const Navbar = ({ setIsSidebarOpen }) => {
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">

            <div className="flex">
                <button
                    className=" text-white"
                    onClick={() => setIsSidebarOpen((prev) => !prev)}>
                    ☰
                </button>

                <div className="font-bold text-lg ml-5">Videofy</div>
                {/* Hamburger Button for Mobile */}

            </div>
            <div>
                {/* Searchbar */}
                <Text
                    color="primary"
                    minRows={2}
                    placeholder="search"
                    size="lg"
                    variant="outlined"
                    
                />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
                <a href="#home" className="hover:text-gray-400">
                    Home
                </a>
                <a href="#about" className="hover:text-gray-400">
                    About
                </a>
                <a href="#services" className="hover:text-gray-400">
                    Services
                </a>
                <a href="#contact" className="hover:text-gray-400">
                    Contact
                </a>
            </nav>
        </header>
    );
};
export default Navbar;