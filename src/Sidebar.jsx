const Sidebar = ({ isOpen, setIsSidebarOpen }) => {

console.log(isOpen, "open ")
    return (
        <aside
            className={`fixed z-10 inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full w-52"
                } transition-transform duration-300 bg-gray-800 text-white md:translate-x-0 md:static`}
                // style={{width: isOpen ? }}
                >
                    
            <div className="p-4 font-bold text-lg"><img src="" alt="Logo" /></div>
            
            
            <nav className="mt-4">
                <ul>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <a href="#home" onClick={() => setIsSidebarOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <a href="#about" onClick={() => setIsSidebarOpen(false)}>
                            About
                        </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <a href="#services" onClick={() => setIsSidebarOpen(false)}>
                            Services
                        </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <a href="#contact" onClick={() => setIsSidebarOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
export default Sidebar;