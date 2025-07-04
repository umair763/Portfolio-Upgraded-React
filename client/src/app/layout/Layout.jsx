import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	FaUser,
	FaFileAlt,
	FaBriefcase,
	FaTrophy,
	FaEnvelope,
	FaMobileAlt,
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaFacebookF,
	FaGithub,
	FaLinkedinIn,
	FaInstagram,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import NavLink from "../components/NavLink";
import BackgroundAnimation from "../components/BackgroundAnimation";
import img from "../../assets/images/myimg2.jpg";
import img1 from "../../assets/images/bg-1.jpg";
import img2 from "../../assets/images/bg-2.jpg";
import img3 from "../../assets/images/bg-3.jpg";
import img4 from "../../assets/images/bg-4.jpg";

function Layout({ children }) {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	// Track scroll position for parallax effect
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navLinks = [
		{ path: "/", icon: <FaUser size={18} />, label: "About" },
		{ path: "/resume", icon: <FaFileAlt size={18} />, label: "Resume" },
		{ path: "/work", icon: <FaBriefcase size={18} />, label: "Work" },
		{ path: "/awards", icon: <FaTrophy size={18} />, label: "Certificates" },
		{ path: "/contact", icon: <FaEnvelope size={18} />, label: "Contact" },
	];

	const contactInfo = [
		{
			icon: <FaMobileAlt size={20} />,
			title: "Phone",
			value: "+92 340-5688540",
		},
		{
			icon: <FaEnvelope size={20} />,
			title: "Email",
			value: "muhammadumairkhan945@gmail.com",
		},
		{
			icon: <FaMapMarkerAlt size={20} />,
			title: "Location",
			value: "E-9 Islamabad, Pakistan",
		},
		// {
		// 	icon: <FaCalendarAlt size={20} />,
		// 	title: "Birthday",
		// 	value: "Dec 19, 2002",
		// },
	];

	const socialLinks = [
		{ href: "https://www.facebook.com/u.k584", icon: <FaFacebookF size={16} /> },
		{ href: "https://github.com/umair763", icon: <FaGithub size={16} /> },
		{ href: "https://www.linkedin.com/in/muhammad-umair-khan-012549265", icon: <FaLinkedinIn size={16} /> },
		{ href: "https://www.instagram.com/u_k_584", icon: <FaInstagram size={16} /> },
		{ href: "http://www.fiverr.com/s/99Wd0Ee", icon: <SiFiverr size={16} color="#1dbf73" /> }
	];

	const handleDownloadCV = () => {
		// Use a direct link for downloading the file
		const link = document.createElement("a");
		link.href = "/documents/Muhammad-Umair-CV.txt";
		link.download = "Muhammad-Umair-CV.txt";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div
			className="min-h-screen w-full relative"
			style={{
				background: `
          radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, rgba(79, 70, 229, 0.03) 90.1%),
          linear-gradient(to right, rgba(59, 130, 246, 0.02) 0%, rgba(79, 70, 229, 0.01) 100%)
        `,
				backgroundAttachment: "fixed",
			}}>
			{/* Interactive Background Animation */}
			<BackgroundAnimation />

			{/* Animated background shapes */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				{/* Floating circles */}
				<div
					className="absolute top-10 right-10 w-96 h-96 rounded-full bg-blue-600 opacity-5"
					style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px)` }}></div>
				<div
					className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-indigo-600 opacity-5"
					style={{ transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.03}px)` }}></div>
				<div
					className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-cyan-600 opacity-5"
					style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.05}px)` }}></div>
			</div>

			<div className="w-full max-w-[1920px] mx-auto px-4 py-4 relative z-10">
				<div className="flex flex-col md:flex-row gap-6">
					{/* Left sidebar - Profile section */}
					<div className="md:w-1/3 lg:w-1/4">
						<div className="bg-white rounded-xl shadow-md sticky top-4">
							{/* Profile image */}
							<div className="relative h-56 bg-gradient-to-r rounded-t-xl">
								<div
									className="absolute inset-0 rounded-t-lg"
									style={{
										backgroundImage: `url(${img1})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}></div>

								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
									<div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
										<img
											src={img}
											alt="Muhammad Umair"
											className="w-full h-full object-cover object-center"
											style={{ objectPosition: "center center" }}
										/>
									</div>
								</div>
							</div>

							{/* Profile details */}
							<div className="pt-16 pb-6 text-center">
								<h1 className="text-xl font-bold">Muhammad Umair</h1>
								<div className="bg-gray-200 text-gray-700 rounded-full py-1 px-4 mx-auto w-max text-sm mt-2">
									Front-End Developer
								</div>

								{/* Social media links */}
								<div className="flex justify-center mt-4 space-x-3">
									{socialLinks.map((social, index) => (
										<a
											key={index}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
											{social.icon}
										</a>
									))}
								</div>

								{/* Contact information */}
								<div className="mt-6 px-6">
									{contactInfo.map((item, index) => (
										<div key={index}>
											<div className="flex items-start py-3">
												<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
													{item.icon}
												</div>
												<div className="ml-4 text-left">
													<div className="text-sm text-gray-500">{item.title}</div>
													<div className="text-sm font-medium text-gray-800 break-all">{item.value}</div>
												</div>
											</div>
											{index < contactInfo.length - 1 && <div className="h-px bg-gray-200 mx-2"></div>}
										</div>
									))}
								</div>

								{/* Download CV button */}
								{/* <div className="px-6 mt-6">
									<button
										onClick={handleDownloadCV}
										className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors">
										Download CV
									</button>
								</div> */}
							</div>
						</div>
					</div>

					{/* Right content area */}
					<div className="md:w-2/3 lg:w-3/4">
						{/* Navigation tabs - Hidden on mobile */}
						<div className="bg-white rounded-xl shadow-md mb-3 overflow-hidden hidden md:block">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-75"></div>
							<div className="py-3 px-4">
								<div className="grid grid-cols-5 gap-2">
									{navLinks.map((link) => (
										<NavLink
											key={link.path}
											to={link.path}
											icon={link.icon}
											label={link.label}
										/>
									))}
								</div>
							</div>
						</div>

						{/* Content area - Separate container */}
						<div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden relative">
							{/* Subtle pattern background */}
							<div
								className="absolute inset-0 opacity-[0.03] pointer-events-none"
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								}}></div>

							{/* Futuristic border accent */}
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600"></div>
							<div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600"></div>

							<div className="p-6 relative">{children}</div>
						</div>

						{/* Footer */}
						<div className="text-center text-gray-500 text-sm mt-4 mb-8">
							© {new Date().getFullYear()} Muhammad Umair. All rights reserved.
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu toggle */}
			<div className="md:hidden fixed bottom-4 right-4 z-50">
				<button
					onClick={toggleMenu}
					className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center">
					{isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
				</button>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					className="md:hidden fixed bottom-20 right-4 bg-white shadow-xl rounded-xl overflow-hidden z-40 w-64">
					<div className="py-2 px-3">
						<div className="grid grid-cols-3 gap-2">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`flex flex-col items-center justify-center px-2 py-3 rounded-lg text-center transition-all duration-200 ${
										location.pathname === link.path
											? "bg-blue-600 text-white"
											: "bg-gray-50 text-gray-700 hover:bg-blue-100"
									}`}
									onClick={() => setIsMenuOpen(false)}>
									<span className="text-lg mb-1">{link.icon}</span>
									<span className="text-xs font-medium">{link.label}</span>
								</Link>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
}

export default Layout;
