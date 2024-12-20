import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  // Intersection Observer to update active section based on scroll position
  useEffect(() => {
    const sectionElements = nav.map((item) => document.querySelector(item.link));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionElements.findIndex((section) => section === entry.target);
          if (entry.isIntersecting) {
            setActive(index);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold for when the section is considered "active"
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [nav]);

  return (
    <header className="w-full fixed top-0 left-0 z-[999]">
      {/* Container for desktop view */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Menu Icon for Mobile - Only visible on mobile */}
        <div className="sm:hidden flex justify-center">
          <div
            className="cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiMenuAlt2 size={34} />
          </div>
        </div>

        {/* Navigation Links centered for desktop */}
        <nav className="flex-grow hidden sm:flex justify-center items-center gap-5">
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => {
                setActive(i);
                setShowMenu(false); // Close menu on mobile after clicking
              }}
              className={`text-xl p-2.5 rounded-lg sm:cursor-pointer transition-colors duration-300 ${
                i === active ? "bg-dark_primary text-white" : "text-dark_primary hover:bg-dark_primary hover:text-white"
              }`}
            >
              {createElement(item.icon)}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay for closing the menu when clicking outside */}
      {showMenu && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 sm:hidden"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* Menu Sidebar for mobile view */}
      <div className={`fixed z-[999] w-full flex justify-center ${showMenu ? "top-16" : "top-[-100%]"}`}>
        <nav
          className="flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300"
        >
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => {
                setActive(i);
                setShowMenu(false); // Close menu after clicking
              }}
              className={`text-xl p-2.5 rounded-full cursor-pointer ${
                i === active ? "bg-dark_primary text-white" : "hover:bg-dark_primary hover:text-white"
              }`}
            >
              {createElement(item.icon)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
