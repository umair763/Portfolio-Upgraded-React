import React, { useState, useEffect } from 'react';
import { FiDownload, FiCalendar, FiMap, FiBriefcase, FiBook, FiAward, FiTag, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Resume.css';

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
        "Mentored junior developers and conducted code reviews"
      ]
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
        "Worked with RESTful APIs and state management libraries"
      ]
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
        "Collaborated with designers to implement visual elements"
      ]
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Boston, MA",
      duration: "2014 - 2017",
      icon: <FiBook />,
      description: "Graduated with honors. Specialized in web development and software engineering."
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      institution: "CodeCamp",
      location: "Online",
      duration: "2017",
      icon: <FiCheckCircle />,
      description: "Intensive 12-week program focused on modern JavaScript frameworks and responsive design."
    }
  ];

  const skillsData = {
    technical: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 75 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 },
      { name: "Git", level: 80 },
      { name: "npm/yarn", level: 85 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 75 }
    ],
    soft: [
      "Problem Solving", "Communication", "Teamwork", 
      "Attention to Detail", "Time Management", "Adaptability"
    ]
  };

  const certificationsData = [
    {
      id: 1,
      name: "Frontend Web Developer Certification",
      issuer: "Web Dev Academy",
      year: "2020",
      image: "/assets/certificate1.png", // replace with actual image path
      description: "Comprehensive frontend development certification covering HTML, CSS, JavaScript and modern frameworks."
    },
    {
      id: 2,
      name: "React Advanced Concepts",
      issuer: "React Training",
      year: "2019",
      image: "/assets/certificate2.png", // replace with actual image path
      description: "Advanced concepts in React including hooks, context API, performance optimization, and testing."
    },
    {
      id: 3,
      name: "JavaScript Algorithms and Data Structures",
      issuer: "Code School",
      year: "2018",
      image: "/assets/certificate3.png", // replace with actual image path
      description: "In-depth study of JavaScript algorithms, data structures, and problem-solving techniques."
    }
  ];

  const downloadResume = () => {
    // Use a direct link for downloading the file
    const link = document.createElement('a');
    link.href = '/documents/Muhammad-Umair-CV.txt';
    link.download = 'Muhammad-Umair-CV.txt';
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
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Professional Resume
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My professional journey, skills, and qualifications in frontend development. With a focus on creating responsive, 
          user-friendly, and visually appealing web applications.
        </p>
        <motion.button 
          onClick={downloadResume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all inline-flex items-center pulsing-download"
        >
          <FiDownload className="mr-2" /> Download Full Resume
        </motion.button>
      </motion.div>

      {/* Resume Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Experience & Education */}
        <div className="lg:col-span-7 space-y-8">
          {/* Experience Section */}
          <motion.section 
            className="resume-card p-6" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="resume-section-heading flex items-center mb-8">
              <FiBriefcase className="mr-2 text-blue-600" /> Work Experience
            </h2>
            <div className="timeline">
              {experienceData.map((job, index) => (
                <motion.div 
                  key={job.id} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p className="font-medium text-gray-700">{job.company}</p>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <FiMap className="mr-1" /> 
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0">
                      <FiCalendar className="mr-1" /> 
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {job.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="text-gray-600 pl-5 relative flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 * (i + 1) + 0.2 }}
                      >
                        <span className="absolute left-0 top-1.5 w-3 h-3 text-blue-500">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section 
            className="resume-card p-6" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="resume-section-heading flex items-center mb-8">
              <FiBook className="mr-2 text-blue-600" /> Education
            </h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * (index + 1) }}
                >
                  <div className="education-icon">
                    {edu.icon}
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <div className="inline-flex items-center text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full mt-1 md:mt-0">
                        <FiCalendar className="mr-1" /> 
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="font-medium text-gray-700 mt-1">{edu.institution}</p>
                    <div className="flex items-center text-gray-500 text-sm mt-1 mb-3">
                      <FiMap className="mr-1" /> 
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column - Skills & Certifications */}
        <div className="lg:col-span-5 space-y-8">
          {/* About Section */}
          <motion.section 
            className="resume-card p-6" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="resume-section-heading flex items-center">
              <FiBook className="mr-2 text-blue-600" /> Professional Summary
            </h2>
            <p className="text-gray-600">
              Passionate Frontend Developer with 5+ years of experience creating 
              responsive, user-friendly web applications. Specializing in React 
              and modern JavaScript frameworks with a strong focus on performance 
              optimization and accessibility. Committed to delivering high-quality code
              and exceptional user experiences.
            </p>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            className="resume-card p-6" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
                      transition={{ duration: 1, delay: 0.1 * index }}
                    ></motion.div>
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
                  whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(59, 130, 246, 0.25)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section 
            className="resume-card p-6" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
                  transition={{ duration: 0.3, delay: 0.15 * index }}
                >
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
          </motion.section>
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
            onClick={closeCertificate}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center">
                <h3 className="font-bold">{selectedCertificate.name}</h3>
                <button onClick={closeCertificate} className="text-white hover:text-gray-200">
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
                      e.target.src = `https://via.placeholder.com/800x600?text=${selectedCertificate.name.replace(/\s+/g, '+')}`;
                    }}
                  />
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800">Description</h4>
                  <p className="text-gray-600">{selectedCertificate.description}</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Issued by: <span className="font-medium">{selectedCertificate.issuer}</span></span>
                  <span className="text-gray-600">Year: <span className="font-medium">{selectedCertificate.year}</span></span>
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