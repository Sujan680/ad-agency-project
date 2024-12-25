import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleLinkCLick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const offset = -70;
    const element = document.getElementById(id);
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b border-red-50/10 bg-emerald-950">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="adCarrot" width={120} height={20} />
              </a>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center bg-emerald-950 p-2 text-orange-50"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex flex-col items-center md:items-start space-y-2  bg-emerald-950 px-20 pt-20 text-3xl md:text-5xl font-bold uppercase text-emerald-200 lg:text-6xl">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute right-4 top-4 rounded-full bg-emerald-900 p-2 text-orange-50 lg:right-20"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkCLick(e, link.id)}
              className="transition-colors duration-500 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
