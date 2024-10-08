import React from 'react';
import { Link } from 'react-scroll';
import { FaUserGraduate, FaPlus } from 'react-icons/fa';
import { RiHomeFill } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa6";

const Navbar = () => {
    const sections = [
        { name: 'Home', icon: <RiHomeFill size={22} /> },
        { name: 'Education', icon: <FaUserGraduate size={19} /> },
        { name: 'Experience', icon: <BsFillBriefcaseFill size={20} /> },
        { name: 'Skills', icon: <FaBrain size={18} /> },
        { name: 'Additional', icon: <FaPlus size={19} /> },
        // { name: 'Contact', icon: <FaEnvelope size={19} /> },
    ];

    return (
        <nav className="bg-white shadow fixed w-full z-20 top-0 left-0">
            <div className="nav-bar mx-auto items-center py-3 md:py-4 px-6">
                <ul className="justify-around flex">
                    {sections.map((section) => (
                        <li key={section.name}>
                            <Link
                                to={section.name.toLowerCase()}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-indigo-600" // Tailwind CSS classes for the active link
                                className="nav-link hover:text-indigo-600 transition cursor-pointer flex flex-col items-center"
                            >
                                <span className="block md:hidden">{section.icon}</span>
                                <span className="hidden md:block font-bold">{section.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
