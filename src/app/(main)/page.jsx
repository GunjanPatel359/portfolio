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
    const { color, setColor } = useTheme()
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
                <div className="logo text-2xl font-semibold inline">Portfolio</div>
                <div>
                    <ul className="flex space-x-6 text-xl">
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
                            <button className="bg-gray-500 rounded-full w-7 h-7 ml-2 shadow-lg" onClick={() => setColor("")}>
                            </button>
                            <button className="bg-blue-500 rounded-full w-7 h-7 ml-2 shadow-lg" onClick={() => setColor("blue")}>
                            </button>
                            <button className="bg-orange-500 rounded-full w-7 h-7 ml-2 shadow-lg" onClick={() => setColor("warm")}>
                            </button>
                            <button className="bg-green-500 rounded-full w-7 h-7 ml-2 shadow-lg" onClick={() => setColor("green")}>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="py-10 px-6 sm:py-24 bg-colorback text-center block sm:flex justify-evenly"
            >
                <div className="flex my-auto">
                    <img
                        src="/main-2.jpeg"
                        alt="Gunjan profile picture"
                        width={250}
                        height={290}
                        className="rounded mx-auto border border-colorfront"
                    />
                </div>
                <div className="flex flex-col justify-center text-colorfront mt-16 sm:mt-0">
                    <p className="text-xl font-medium">Hello, I'm</p>
                    <h1 className="text-4xl font-extrabold">Gunjan Patel</h1>
                    <p className="text-2xl font-extrabold">
                        Student
                        <br />
                        Fullstack Developer
                    </p>
                    <div className="flex space-x-4 justify-center mt-6">
                        <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-full hover:shadow">
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

            <section className="md:py-20 py-10 bg-colorback text-colorfront" id="about">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <p className="text-xl font-medium text-center">Get To Know More</p>
                    <h1 className="text-4xl font-extrabold text-center mb-12">About Me</h1>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="md:max-w-2xl xl:max-w-2xl lg:max-w-md  sm:max-w-xl text-center">
                            <p className="text-lg leading-relaxed text-justify">
                                Hey there! 👋 I'm Gunjan, a passionate Fullstack Web Developer who loves crafting amazing digital experiences. 💻✨ Whether it's coding sleek websites, designing user-friendly interfaces, or solving complex problems, I'm always up for the challenge! 🚀 When I'm not working, you’ll find me exploring new tech, sipping on coffee ☕, or brainstorming my next big idea. Let's connect and create something awesome together! 🎨💡
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-lg">
                            <div className="border border-colorfront p-6 rounded-2xl bg-colorback shadow-lg text-center" style={{ filter: 'brightness(0.96)' }}>
                                <BiSolidMedal size={40} className="mx-auto mb-2" />
                                <h3 className="text-xl font-semibold">Experience</h3>
                                <p className="text-sm">2+ years <br /> Fullstack Development</p>
                            </div>
                            <div className="border border-colorfront p-6 rounded-2xl bg-colorback shadow-lg text-center" style={{ filter: 'brightness(0.96)' }}>
                                <FaUserGraduate size={40} className="mx-auto mb-2" />
                                <h3 className="text-xl font-semibold">Education</h3>
                                <p className="text-sm">B.Tech. Bachelor's Degree</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 max-w-4xl lg:max-w-6xl mx-auto text-center lg:text-left">
                        <p className="text-lg leading-relaxed text-justify">
                            I completed my schooling at Shri J M Chaudhary Sarvajanik Vidyalaya in 2020 with a Science background. Currently, I am pursuing a B.Tech at Ganpat University. As a Computer Engineering student, I have been immersed in my field for 2.5 years. In my free time, I enjoy playing games, exploring new places, and watching movies. My passion lies in web development, with a strong interest in backend designs and system architecture.
                        </p>
                    </div>
                </div>
            </section>

            <div className="pt-10 text-colorfront">
                <p className="text-center font-semibold">Explore My</p>
                <h1 className="text-5xl text-center font-bold">Experience</h1>
                <div className="flex flex-col justify-center">
                    <div className="gap-8 mb-8 mt-8 grid lg:grid-cols-2 md:grid-cols-1 lg:mx-32 md:mx-36 sm:mx-20 mx-16">
                        <div
                            className="details-container lg:px-10 sm:px-3 py-10 flex-1 bg-colorback text-colorfront rounded-2xl border border-colorfront text-center"
                            style={{ filter: "brightness(0.95)" }}
                        >
                            <h2 className="text-colorfront font-semibold text-2xl mb-6">
                                Frontend Development
                            </h2>
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[2.5rem] gap-[1rem] justify-around sm:px-0 px-5">
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">HTML</h3>
                                        <p className="text-left ml-4">Experienced</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">CSS</h3>
                                        <p className="text-left ml-4">Experienced</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">React.js</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">JavaScript</h3>
                                        <p className="text-left ml-4">Advance</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="details-container lg:px-10 sm:px-1 py-10 flex-1 bg-colorback text-colorfront rounded-2xl border border-colorfront text-center"
                            style={{ filter: "brightness(0.95)" }}
                        >
                            <h2 className="text-colorfront font-semibold text-2xl mb-6">
                                Backend Development
                            </h2>
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[2.5rem] gap-[1rem] justify-around sm:px-0 px-5">
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">PostgreSQL</h3>
                                        <p className="text-left ml-4">Basic</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">Node JS</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">MongoDB</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-0.5 items-center justify-around">
                                    <BsFillCheckCircleFill size={28} className="mx-auto" />
                                    <div className="sm:col-span-3 col-span-2">
                                        <h3 className="font-bold text-xl text-left ml-4">Git</h3>
                                        <p className="text-left ml-4">Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-colorback text-colorfront" id="projects">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <h1 className="text-4xl font-extrabold text-center mb-12">Projects</h1>

                    {/* Taste Project */}
                    <div className="mb-16 border border-colorfront rounded-2xl p-6 shadow-lg bg-colorback">
                        <h2 className="text-2xl font-bold mb-3">Taste – Restaurant Management Web App</h2>
                        <p className="mb-4 text-justify">
                            A comprehensive system for managing restaurant operations including dine-in, online orders, and role-based control. Features real-time order tracking, PayPal integration, and performance improvements via migration from MERN to Next.js.
                        </p>
                        <p className="mb-4 italic text-sm">Tech Stack: Next.js, Node.js, MongoDB, WebSockets, Tailwind CSS, PayPal</p>
                        <div className="aspect-video mb-4">
                            <iframe
                                src="https://restaurant-webapp-rho.vercel.app/"
                                title="Taste Project Preview"
                                className="w-full h-full rounded-md border bg-white"
                            ></iframe>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://restaurant-webapp-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Live Demo</a>
                            <a href="https://github.com/GunjanPatel359/restaurant-webapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline">GitHub</a>
                        </div>
                    </div>

                    {/* Chatverse Project (no iframe) */}
                    <div className="mb-16 border border-colorfront rounded-2xl p-6 shadow-lg bg-colorback">
                        <h2 className="text-2xl font-bold mb-3">Chatverse – Real-time Chat Application</h2>
                        <p className="mb-4 text-justify">
                            In-progress app designed for real-time communication within organizations. Supports structured permissions, voice/video calls, screen sharing, and uses serverless functions for scalable backend operations.
                        </p>
                        <p className="mb-4 italic text-sm">Tech Stack: Next.js, Prisma, Clerk, LiveKit, Socket.io, MongoDB, Tailwind CSS</p>
                        <img
                            src="/chatverse-preview.jpg"
                            alt="Chatverse Project Screenshot"
                            className="rounded-md border mb-4 w-full object-cover aspect-video"
                        />
                        <div className="flex gap-4">
                            <a href="https://chatapp-delta-sandy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Live Demo</a>
                            <a href="https://github.com/GunjanPatel359/chatapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline">GitHub</a>
                        </div>
                    </div>

                    {/* Discord Clone Project (no iframe) */}
                    <div className="mb-16 border border-colorfront rounded-2xl p-6 shadow-lg bg-colorback">
                        <h2 className="text-2xl font-bold mb-3">Discord Clone</h2>
                        <p className="mb-4 text-justify">
                            A full-stack real-time chat application inspired by Discord. Built using modern technologies to support servers, channels, messages, and voice features. Focused on backend structure and user role management.
                        </p>
                        <p className="mb-4 italic text-sm">Tech Stack: Next.js, Tailwind CSS, Clerk, MongoDB, Socket.io, shadcn UI</p>
                        <img
                            src="/discord-preview.jpg"
                            alt="Discord Clone Screenshot"
                            className="rounded-md border mb-4 w-full object-cover "
                        />
                        <div className="flex gap-4">
                            <a href="https://chat-dis-six-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Live Demo</a>
                            <a href="https://github.com/GunjanPatel359/discord-clone" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline">GitHub</a>
                        </div>
                    </div>



                    {/* Copied Projects List */}
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-bold mb-3">Other Projects</h2>
                        <ul className="list-disc list-inside">
                            <li>Lingo – Language learning platform like Duolingo</li>
                            <li>E-Vendor – E-commerce site</li>
                            <li>More on <a className="text-blue-500 underline" href="https://github.com/GunjanPatel359" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </section>




        </>
    );
};

export default MainPage;
