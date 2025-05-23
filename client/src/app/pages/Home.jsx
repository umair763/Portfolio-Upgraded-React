import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
		<div className="about-section">
			<h2
				className="text-2xl font-bold mb-6"
				data-aos="fade-up">
				About Me
			</h2>

			{/* Brief Introduction */}
			<div
				className="mb-8"
				data-aos="fade-up"
				data-aos-delay="100">
				<h3 className="text-xl font-semibold mb-4">Who am I?</h3>
				<p className="text-gray-600 mb-4">
					Hello! I'm Muhammad Umair, a passionate Frontend Developer based in Islamabad, Pakistan. I enjoy turning
					complex problems into simple, beautiful and intuitive designs. My goal is to build web applications that are
					not only functional but also provide exceptional user experiences.
				</p>
				<p className="text-gray-600">
					When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
					enhancing my skills through online courses and tutorials. I believe in continuous learning and staying updated
					with the latest trends in web development.
				</p>
			</div>

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
								Build a web applications using React, Tailwind CSS, and other modern frontend technologies.Delivered
								high-quality software solutions.
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
								During my internship at Kairiz Cyber Technology, I strengthened my frontend fundamentals by building
								responsive interfaces and interactive components using HTML, CSS, JavaScript, and Bootstrap. This
								hands-on experience laid the groundwork for my proficiency in crafting clean, accessible, and
								user-friendly web experiences.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Skills Section */}
			<div
				className="mb-8"
				data-aos="fade-up"
				data-aos-delay="500">
				<h3 className="text-xl font-semibold mb-4 flex items-center">
					<FaCode className="mr-2 text-blue-600" /> Technical Skills
				</h3>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{[
						{ name: "HTML5", level: "95%" },
						{ name: "CSS3/SCSS", level: "90%" },
						{ name: "JavaScript", level: "85%" },
						{ name: "React.js", level: "70%" },
						{ name: "Tailwind CSS", level: "85%" },
						{ name: "Git/GitHub", level: "65%" },
						{ name: "Responsive Design", level: "65%" },
						{ name: "UI/UX Principles", level: "70%" },
						{ name: "RESTful APIs", level: "65%" },
					].map((skill, index) => (
						<div
							key={index}
							className="skill-item"
							data-aos="fade-up"
							data-aos-delay={550 + index * 50}>
							<div className="flex justify-between mb-1">
								<span className="text-sm font-medium">{skill.name}</span>
								<span className="text-xs text-gray-500">{skill.level}</span>
							</div>
							<div className="h-2 bg-gray-200 rounded overflow-hidden">
								<div
									className="h-full bg-blue-600"
									style={{ width: skill.level }}></div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Tools & Technologies */}
			<div
				className="mb-8"
				data-aos="fade-up"
				data-aos-delay="750">
				<h3 className="text-xl font-semibold mb-4 flex items-center">
					<FaLaptopCode className="mr-2 text-blue-600" /> Tools & Technologies
				</h3>

				<div className="flex flex-wrap gap-3">
					{[
						"VSCode",
            "Anaconda",
            "Kaggle",
            "Draw.io",
            "Latex",
            "Microsoft Project",
            "Tensor flow",
            "Flutter",
            "Firebase",
            "MS Sql",
						"GitHub",
						"Chrome DevTools",
						"Vercel",
					].map((tool, index) => (
						<span
							key={index}
							className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
							data-aos="zoom-in"
							data-aos-delay={800 + index * 30}>
							{tool}
						</span>
					))}
				</div>
			</div>

			{/* Personal Interests */}
			<div
				data-aos="fade-up"
				data-aos-delay="900">
				<h3 className="text-xl font-semibold mb-4">What I Like</h3>
				<p className="text-gray-600">
					Beyond coding, I enjoy reading tech blogs, participating in hackathons, and contributing to open-source
					projects. I'm also passionate about teaching and sharing my knowledge with others through mentoring and
					writing technical articles.
				</p>
			</div>
		</div>
  );
}

export default Home;