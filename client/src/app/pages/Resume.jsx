import React, { useState, useEffect } from "react";
import {
	FiDownload,
	FiCalendar,
	FiMap,
	FiBriefcase,
	FiBook,
	FiAward,
	FiTag,
	FiCheckCircle,
	FiExternalLink,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Resume.css";
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
	// State for animation
	const [skillsVisible, setSkillsVisible] = useState(false);
	const [selectedCertificate, setSelectedCertificate] = useState(null);

	// Trigger skill animation when visible
	useEffect(() => {
		const timer = setTimeout(() => {
			setSkillsVisible(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	// Sample resume data
	const experienceData = [
		{
			id: 1,
			title: "Senior Frontend Developer",
			company: "Tech Solutions Inc.",
			location: "New York, NY",
			duration: "Jan 2021 - Present",
			color: "#3b82f6",
			description: [
				"Lead frontend development for enterprise SaaS platform with React and TypeScript",
				"Implemented responsive designs improving mobile conversion rates by 35%",
				"Collaborated with UX team to create component libraries and design systems",
				"Mentored junior developers and conducted code reviews",
			],
		},
		{
			id: 2,
			title: "Frontend Developer",
			company: "WebCraft Agency",
			location: "Boston, MA",
			duration: "Mar 2018 - Dec 2020",
			color: "#8b5cf6",
			description: [
				"Developed interactive websites for clients across various industries",
				"Optimized site performance reducing load times by 40%",
				"Implemented cross-browser compatible solutions",
				"Worked with RESTful APIs and state management libraries",
			],
		},
		{
			id: 3,
			title: "Web Developer Intern",
			company: "Digital Creations",
			location: "Remote",
			duration: "Jun 2017 - Feb 2018",
			color: "#6366f1",
			description: [
				"Assisted in developing responsive websites using HTML, CSS, and JavaScript",
				"Created landing pages for marketing campaigns",
				"Maintained and updated existing websites",
				"Collaborated with designers to implement visual elements",
			],
		},
	];

	const educationData = [
		{
			id: 1,
			degree: "Bachelor of Science in Computer Science",
			institution: "University of Technology",
			location: "Boston, MA",
			duration: "2014 - 2017",
			icon: <FiBook />,
			description: "Graduated with honors. Specialized in web development and software engineering.",
		},
		{
			id: 2,
			degree: "Web Development Bootcamp",
			institution: "CodeCamp",
			location: "Online",
			duration: "2017",
			icon: <FiCheckCircle />,
			description: "Intensive 12-week program focused on modern JavaScript frameworks and responsive design.",
		},
	];

	const skillsData = {
		technical: [
			{ name: "HTML5", level: 95 },
			{ name: "CSS3", level: 90 },
			{ name: "JavaScript (ES6+)", level: 85 },
			// { name: "TypeScript", level: 80 },
			{ name: "React.js", level: 70 },
			// { name: "Next.js", level: 75 },
			// { name: "Redux", level: 80 },
			{ name: "Tailwind CSS", level: 85 },
			{ name: "Responsive Design", level: 65 },
			{ name: "RESTful APIs", level: 65 },
			// { name: "GraphQL", level: 70 },
			{ name: "Git/Github", level: 65 },
			// { name: "npm/yarn", level: 85 },
			// { name: "Webpack", level: 75 },
			// { name: "Jest", level: 80 },
			// { name: "Cypress", level: 75 },
		],
		soft: ["Problem Solving", "Communication", "Teamwork", "Attention to Detail", "Time Management", "Adaptability"],
	};

	const certificationsData = [
		{
			id: 1,
			name: "Frontend Web Developer Certification",
			issuer: "Web Dev Academy",
			year: "2020",
			image: "/assets/certificate1.png", // replace with actual image path
			description:
				"Comprehensive frontend development certification covering HTML, CSS, JavaScript and modern frameworks.",
		},
		{
			id: 2,
			name: "React Advanced Concepts",
			issuer: "React Training",
			year: "2019",
			image: "/assets/certificate2.png", // replace with actual image path
			description: "Advanced concepts in React including hooks, context API, performance optimization, and testing.",
		},
		{
			id: 3,
			name: "JavaScript Algorithms and Data Structures",
			issuer: "Code School",
			year: "2018",
			image: "/assets/certificate3.png", // replace with actual image path
			description: "In-depth study of JavaScript algorithms, data structures, and problem-solving techniques.",
		},
	];

	const downloadResume = () => {
		// Use a direct link for downloading the file
		const link = document.createElement("a");
		link.href = "/documents/My CV-1.pdf";
		link.download = "My CV-1.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// Certificate modal handler
	const openCertificate = (cert) => {
		setSelectedCertificate(cert);
	};

	const closeCertificate = () => {
		setSelectedCertificate(null);
	};

	return (
		<div className="space-y-10">
			<motion.div
				className="text-center mx-auto space-y-4 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
					Professional Resume
				</h1>
				<p className="text-gray-600 max-w-2xl mx-auto">
					My professional journey, skills, and qualifications in frontend development. With a focus on creating
					responsive, user-friendly, and visually appealing web applications.
				</p>
				<motion.button
					onClick={downloadResume}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all inline-flex items-center ">
					<FiDownload className="mr-2" /> Download Full Resume
				</motion.button>
			</motion.div>

			{/* Resume Content */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
				{/* Left Column - Experience & Education */}
				<div className="lg:col-span-7 space-y-8">
					{/* Experience Section */}
					<div className="resume-card p-6">
						{/* Experience */}
						<div
							className="mb-8"
							data-aos="fade-up"
							data-aos-delay="350">
							<h3 className="text-xl font-semibold mb-4 flex items-center">
								<FaBriefcase className="mr-2 text-blue-600" /> Experience
							</h3>

							<div className="timeline-container">
								<div
									className="timeline-item"
									data-aos="fade-up"
									data-aos-delay="400">
									<div className="timeline-content">
										<h4 className="font-medium">Freelance</h4>
										<p className="text-sm text-gray-500">Triadic Marketing. - 2025</p>
										<p className="mt-2 text-gray-600">
											Build a web applications using React, Tailwind CSS, and other modern frontend
											technologies.Delivered high-quality software solutions.
										</p>
									</div>
								</div>

								<div
									className="timeline-item"
									data-aos="fade-up"
									data-aos-delay="450">
									<div className="timeline-content">
										<h4 className="font-medium">Web Development Intern</h4>
										<p className="text-sm text-gray-500">KaiRiz Cyber Technologies (SMC-Private) Limited - 2024</p>
										<p className="mt-2 text-gray-600">
											During my internship at Kairiz Cyber Technology, I strengthened my frontend fundamentals by
											building responsive interfaces and interactive components using HTML, CSS, JavaScript, and
											Bootstrap. This hands-on experience laid the groundwork for my proficiency in crafting
											clean, accessible, and user-friendly web experiences.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Education Timeline */}
					<div
						className="mb-8"
						data-aos="fade-up"
						data-aos-delay="200">
						<h3 className="text-xl font-semibold mb-4 flex items-center">
							<FaGraduationCap className="mr-2 text-blue-600" /> Education
						</h3>

						<div className="timeline-container">
							<div
								className="timeline-item"
								data-aos="fade-up"
								data-aos-delay="250">
								<div className="timeline-content">
									<h4 className="font-medium">Bachelor of Information Technology</h4>
									<p className="text-sm text-gray-500">Bahria University - 2022-2026</p>
									<p className="mt-2 text-gray-600">
										Focused on web technologies, algorithms and data structures. Completed several projects using
										modern development frameworks.
									</p>
								</div>
							</div>

							<div
								className="timeline-item"
								data-aos="fade-up"
								data-aos-delay="300">
								<div className="timeline-content">
									<h4 className="font-medium">FSC</h4>
									<p className="text-sm text-gray-500">Fazaia Inter College - 2021</p>
									<p className="mt-2 text-gray-600">
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right Column - Skills & Certifications */}
				<div className="lg:col-span-5 space-y-8">
					{/* About Section */}
					<motion.section
						className="resume-card p-6"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<h2 className="resume-section-heading flex items-center">
							<FiBook className="mr-2 text-blue-600" /> Professional Summary
						</h2>
						<p className="text-gray-600">
							Passionate Frontend Developer with 1+ years of experience creating responsive, user-friendly web
							applications. Specializing in React and modern JavaScript frameworks with a strong focus on performance
							optimization and accessibility. Committed to delivering high-quality code and exceptional user
							experiences.
						</p>
					</motion.section>

					{/* Skills Section */}
					<motion.section
						className="resume-card p-6"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}>
						<h2 className="resume-section-heading flex items-center">
							<FiTag className="mr-2 text-blue-600" /> Technical Skills
						</h2>
						<div className="space-y-4 mt-4">
							{skillsData.technical.map((skill, index) => (
								<div key={index}>
									<div className="flex justify-between items-center mb-1">
										<span className="font-medium text-gray-700">{skill.name}</span>
										<span className="text-sm text-blue-600">{skill.level}%</span>
									</div>
									<div className="skill-progress">
										<motion.div
											className="skill-progress-bar"
											initial={{ width: "0%" }}
											animate={{ width: skillsVisible ? `${skill.level}%` : "0%" }}
											transition={{ duration: 1, delay: 0.1 * index }}></motion.div>
									</div>
								</div>
							))}
						</div>

						<h2 className="resume-section-heading flex items-center mt-8">
							<FiTag className="mr-2 text-blue-600" /> Soft Skills
						</h2>
						<div className="flex flex-wrap gap-2 mt-4">
							{skillsData.soft.map((skill, index) => (
								<motion.span
									key={index}
									className="skill-badge"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: 0.1 * index }}
									whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(59, 130, 246, 0.25)" }}>
									{skill}
								</motion.span>
							))}
						</div>
					</motion.section>

					{/* Certifications Section */}
					{/* <motion.section
						className="resume-card p-6"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}>
						<h2 className="resume-section-heading flex items-center">
							<FiAward className="mr-2 text-blue-600" /> Certifications
						</h2>
						<div className="space-y-4 mt-4">
							{certificationsData.map((cert, index) => (
								<motion.div
									key={cert.id}
									className="certification-card"
									onClick={() => openCertificate(cert)}
									whileHover={{ x: 5 }}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.15 * index }}>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="font-medium text-gray-800">{cert.name}</h3>
											<p className="text-gray-600 text-sm">{cert.issuer}</p>
										</div>
										<span className="text-blue-600 font-semibold">{cert.year}</span>
									</div>
									<div className="flex items-center justify-between mt-2 text-sm">
										<span className="text-blue-500 hover:underline inline-flex items-center cursor-pointer">
											<FiExternalLink className="mr-1" /> View Certificate
										</span>
									</div>
								</motion.div>
							))}
						</div>
					</motion.section> */}
				</div>
			</div>

			{/* Certificate Modal */}
			<AnimatePresence>
				{selectedCertificate && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeCertificate}>
						<motion.div
							className="bg-white rounded-xl overflow-hidden max-w-2xl w-full"
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}>
							<div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center">
								<h3 className="font-bold">{selectedCertificate.name}</h3>
								<button
									onClick={closeCertificate}
									className="text-white hover:text-gray-200">
									✕
								</button>
							</div>
							<div className="p-6">
								<div className="bg-gray-100 rounded-lg p-2 mb-4">
									<img
										src={selectedCertificate.image}
										alt={selectedCertificate.name}
										className="w-full h-auto object-contain"
										onError={(e) => {
											e.target.onerror = null;
											e.target.src = `https://via.placeholder.com/800x600?text=${selectedCertificate.name.replace(
												/\s+/g,
												"+"
											)}`;
										}}
									/>
								</div>
								<div className="mb-4">
									<h4 className="font-medium text-gray-800">Description</h4>
									<p className="text-gray-600">{selectedCertificate.description}</p>
								</div>
								<div className="flex justify-between items-center text-sm">
									<span className="text-gray-600">
										Issued by: <span className="font-medium">{selectedCertificate.issuer}</span>
									</span>
									<span className="text-gray-600">
										Year: <span className="font-medium">{selectedCertificate.year}</span>
									</span>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Resume;
