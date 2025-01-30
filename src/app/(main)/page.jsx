"use client"
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../hooks/use-theme";
import { useEffect, useState } from "react";

const MainPage = () => {
    const { theme, setTheme } = useTheme()
    const {color,setColor}=useTheme()
    const [foregroundColor, setForegroundColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const getCSSColor = (variable) => {
        return getComputedStyle(document.documentElement)
            .getPropertyValue(variable)
            .trim();
    };

    useEffect(() => {
        const fetchColors = () => {
            const primary = getCSSColor('--color-foreground');
            const secondary = getCSSColor('--color-background');
            setForegroundColor(primary);
            setBackgroundColor(secondary);
        }

        fetchColors();
    }, [theme])

    return (
        <>
            {/* <div id="loading-page" className="flex items-center justify-center h-screen bg-gray-900 text-white">
                <canvas id="loading-background" className="absolute w-full h-full"></canvas>
                <div className="loading-content text-center z-10">
                    <h1 className="text-3xl font-bold">Welcome to my Portfolio</h1>
                </div>
                <div id="progress-counter" className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-xl">1%</div>
            </div> */}

            <div className="flex justify-between items-center p-6 text-colorfront top-0 w-full text-2xl">
                <div className="logo text-2xl font-semibold">Portfolio</div>
                <div>
                    <ul className="flex space-x-6 text-xl">
                        <li>
                            <Link href="/about" className="text-colorfront hover:opacity-40 font-medium">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience" className="text-colorfront hover:opacity-40 font-medium">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-colorfront hover:opacity-40 font-medium">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-colorfront hover:opacity-40 font-medium">
                                Contact
                            </Link>
                        </li>
                        <li className="flex">
                            {theme === "dark" ? (
                                <button className="text-xl" onClick={() => setTheme("light")}>
                                    <FaSun className="my-auto" fill={backgroundColor} size={22} />
                                </button>
                            ) : (
                                <button className="text-xl" onClick={() => setTheme("dark")}>
                                    <BsFillMoonStarsFill className="my-auto" fill={foregroundColor} size={22} />
                                </button>
                            )}
                            <button onClick={()=>setColor("blue")}>
                                blue
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* TODO Moblie NavBar */}
            {/* <div className="block md:hidden p-6 bg-gray-800 text-white fixed op-0 w-full z-10">
                <div className="logo text-2xl font-semibold">Zakir Husain</div>
                <div className="hamburger-menu flex items-center justify-between">
                    <div className="hamburger-icon" onclick="toggleMenu()">
                        <span className="block w-6 h-0.5 bg-white my-1"></span>
                        <span className="block w-6 h-0.5 bg-white my-1"></span>
                        <span className="block w-6 h-0.5 bg-white my-1"></span>
                    </div>
                    <div className="menu-links hidden flex-col space-y-4 mt-6">
                        <li><a href="#about" className="text-white hover:text-gray-400" onclick="toggleMenu()">About</a></li>
                        <li><a href="#experience" className="text-white hover:text-gray-400" onclick="toggleMenu()">Experience</a></li>
                        <li><a href="#projects" className="text-white hover:text-gray-400" onclick="toggleMenu()">Projects</a></li>
                        <li><a href="#contact" className="text-white hover:text-gray-400" onclick="toggleMenu()">Contact</a></li>
                        <li>
                            <button id="theme-toggle-mobile" className="theme-toggle text-xl">
                                <i className="fas fa-sun"></i>
                                <i className="fas fa-moon"></i>
                            </button>
                        </li>
                    </div>
                </div>
            </div> */}

            <div
                className="py-24 px-6 bg-colorback text-center flex justify-evenly"
            >
                <div className="mb-8 flex my-auto">
                    <img
                        src="/main-2.jpeg"
                        alt="Gunjan profile picture"
                        width={250}
                        height={290}
                        className="rounded mx-auto border border-colorfront"
                    />
                </div>
                <div className="flex flex-col justify-center text-colorfront">
                    <p className="text-xl font-medium">Hello, I'm</p>
                    <h1 className="text-4xl font-extrabold">Gunjan Patel</h1>
                    <p className="text-2xl font-extrabold">
                        Student
                        <br />
                        Fullstack Developer
                    </p>
                    <div className="flex space-x-4 justify-center mt-6">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                            Download CV
                        </button>
                        <Link href="/contact">
                            <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
                                Contact Info
                            </button>
                        </Link>
                    </div>
                    <div className="mt-6 flex justify-center space-x-6">
                        <Link
                            className="cursor-pointer"
                            alt="Linkedin profile"
                            href="https://www.linkedin.com/in/gunjan-patel-a37a45311/"
                            title="Linkedin"
                        >
                            <BsLinkedin size={30} />
                        </Link>
                        <Link
                            className="cursor-pointer"
                            alt="Github profile"
                            href="https://github.com/GunjanPatel359"
                            title="Github"
                        >
                            <FaGithub size={31} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-colorback text-colorfront">
                <p className="text-xl font-medium text-center">Get To Know More</p>
                <h1 className="text-4xl font-extrabold text-center mb-8">About Me</h1>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 space-x-10">
                    <div className="">
                        <img
                            src="additional.jpeg"
                            alt="Profile picture"
                            className="rounded-xl shadow-lg h-[400px]"
                        />
                    </div>
                    <div className="space-y-6 max-w-[600px] text-center md:text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border border-colorfront p-5 rounded-2xl bg-colorback" style={{ filter: 'brightness(0.96)' }}>
                                <BiSolidMedal size={35} className="mx-auto" />
                                <h3 className="text-xl font-semibold text-center">
                                    Experience
                                </h3>
                                <p className="text-sm text-center">
                                    2+ years <br />
                                    Fullstack Development
                                </p>
                            </div>
                            <div className="border border-colorfront p-5 rounded-2xl bg-colorback" style={{ filter: 'brightness(0.96)' }}>
                                <FaUserGraduate size={35} className="mx-auto" />
                                <h3 className="text-xl font-semibold text-center">Education</h3>
                                <p className="text-sm text-center">B.Tech. Bachelors Degree</p>
                            </div>
                        </div>
                        <div className="text-container mt-6">
                            <p className="text-lg text-justify">
                                I have done my school graduation from Shri J M Chaudhary
                                Sarvajanik Vidyalaya in 2020 with a Science. And currently
                                pursuing B.Tech at Ganpat University. After school, I started
                                working as a Computer Engineering student at Ganpat University.
                                I have been studying there for 2.5 years. In my free time, I
                                enjoy playing games, exploring, and watching movies. I am
                                passionate about web development and interested about backend
                                designs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-10 text-colorfront">
                <p className="text-center font-semibold">Explore My</p>
                <h1 className="text-5xl text-center font-bold">Experience</h1>
                <div className="flex flex-col justify-center">
                    <div className="gap-8 mb-8 mt-8 grid md:grid-cols-2 mx-8">
                        <div
                            className="details-container p-10 py-9 flex-1 bg-colorback text-colorfront rounded-2xl border border-colorfront text-center"
                            style={{ filter: "brightness(0.95)" }}
                        >
                            <h2 className="text-colorfront font-semibold text-2xl mb-6">
                                Frontend Development
                            </h2>
                            <div className="grid grid-cols-2 gap-[2.5rem] justify-around">
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">HTML</h3>
                                        <p className="text-left ml-4">Experienced</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">CSS</h3>
                                        <p className="text-left ml-4">Experienced</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">React.js</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">JavaScript</h3>
                                        <p className="text-left ml-4">Advance</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="details-container p-10 flex-1 bg-colorback text-colorfront rounded-2xl border border-colorfront text-center"
                            style={{ filter: "brightness(0.95)" }}
                        >
                            <h2 className="text-colorfront font-semibold text-2xl mb-6">
                                Backend Development
                            </h2>
                            <div className="grid grid-cols-2 gap-[2.5rem] justify-around">
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">PostgreSQL</h3>
                                        <p className="text-left ml-4">Basic</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">Node JS</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">MongoDB</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-xl text-left ml-4">Git</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <div id="loading-page">
                    <canvas id="loading-background"></canvas>
                    <div className="loading-content">
                        <h1>Welcome to my Portfolio</h1>
                    </div>
                    <div id="progress-counter">1%</div>
                </div>

                <section id="projects">
                    <p className="section__text__p1">Browse My Recent</p>
                    <h1 className="title">Under testing</h1>
                    <div className="experience-details-container">
                        <div className="about-containers">
                            <div className="details-container color-container">
                                <div className="article-container">
                                    <img src="project-1.png" alt="Project 1" className="project-img" />
                                </div>
                                <h2 className="experience-sub-title project-title">Saas app</h2>
                                <div className="btn-container">
                                    <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/zakir19/saas-app/tree/main'">
                                        Github
                                    </button>

                                    <button className="btn btn-color-2 project-btn" onclick="location.href='https://saas-app-zak-exp.vercel.app'">
                                        Live Demo
                                    </button>
                                </div>
                            </div>
                            <div className="details-container color-container">
                                <div className="article-container">
                                    <img src="project-2.jpg" alt="Project 2" className="project-img" />
                                </div>
                                <h2 className="experience-sub-title project-title">coffe Frontend</h2>
                                <div className="btn-container">
                                    <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/zakir19/coffewebsite'">
                                        Github
                                    </button>
                                    <button className="btn btn-color-2 project-btn" onclick="location.href='https://coffewebsite-zak.vercel.app/'">
                                        Live Demo
                                    </button>
                                </div>
                            </div>
                            <div className="details-container color-container">
                                <div className="article-container">
                                    <img src="project-3.png" alt="Project 3" className="project-img" />
                                </div>
                                <h2 className="experience-sub-title project-title">Project Three</h2>
                                <div className="btn-container">
                                    <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/Zakir19'">
                                        Github
                                    </button>
                                    <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/Zakir19'">
                                        Live Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="arrow.png" alt="Arrow icon" className="icon arrow" onclick="location.href='./#contact'" />
                </section>
                <section id="contact">
                    <p className="section__text__p1">Get in Touch</p>
                    <h1 className="title">Contact Me</h1>
                    <div className="contact-info-upper-container">
                        <div className="contact-info-container">
                            <img src="email.png" alt="Email icon" className="icon contact-icon email-icon" />
                            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
                        </div>
                        <div className="contact-info-container">
                            <img src="linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
                            <p><a href="'https://www.linkedin.com/in/patel-zakir-h-3b3019253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'">LinkedIn</a></p>
                        </div>
                    </div>
                </section>

            </div> */}
        </>
    );
};

export default MainPage;
