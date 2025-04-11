import React, { useState } from 'react';
import { FiAward, FiCalendar, FiExternalLink, FiMapPin, FiX, FiCheckCircle, FiTarget, FiBookOpen } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Awards.css';

const Awards = () => {
  // State for certificate modal
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  // Open certificate modal
  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Close certificate modal
  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };
  
  // Enhanced awards data with images
  const awardsData = [
    {
      id: 1,
      title: "Outstanding Web Design Award",
      organization: "Web Design Excellence",
      date: "May 2023",
      description: "Recognized for creating an exceptional e-commerce website with innovative UX design and accessibility features that increased client conversion by 45%.",
      image: "/assets/certificate1.png", // replace with actual image path
      badge: "Gold Medal",
      location: "New York, USA",
      details: "This prestigious award recognizes the most innovative and effective web designs that combine aesthetics with functionality. The project demonstrated exceptional use of modern design principles and accessibility standards."
    },
    {
      id: 2,
      title: "Frontend Developer of the Year",
      organization: "DevCommunity Awards",
      date: "December 2022",
      description: "Selected from over 500 nominees for excellence in frontend development, focusing on performance optimization and creating seamless user experiences.",
      image: "/assets/certificate2.png", // replace with actual image path
      badge: "Top Developer",
      location: "Online Ceremony",
      details: "The DevCommunity Awards celebrate outstanding achievements in software development. This recognition acknowledges consistent excellence in frontend development practices, code quality, and innovative solutions."
    },
    {
      id: 3,
      title: "Best Responsive Design",
      organization: "Mobile UX Awards",
      date: "August 2022",
      description: "Awarded for creating a highly adaptable website framework that provides optimal viewing experience across all devices and screen sizes.",
      image: "/assets/certificate3.png", // replace with actual image path
      badge: "First Place",
      location: "San Francisco, CA",
      details: "The Mobile UX Awards recognize excellence in responsive design and mobile user experience. This award celebrates the creation of a flexible framework that maintains optimal user experience across desktop, tablet, and mobile devices."
    },
    {
      id: 4,
      title: "Innovation in Web Technology",
      organization: "TechForum Conference",
      date: "March 2022",
      description: "Recognized for implementing cutting-edge web technologies and performance optimizations that set new standards in the industry.",
      image: "/assets/todo.svg", // replace with actual image path
      badge: "Innovator",
      location: "Boston, MA",
      details: "This award celebrates pioneers who push the boundaries of web technology. The recognition was based on implementation of progressive web app features, advanced caching strategies, and innovative performance optimizations."
    }
  ];

  // Enhanced certifications data with images
  const certificationsData = [
    {
      id: 1,
      title: "Advanced Frontend Development",
      organization: "Frontend Masters",
      date: "2023",
      description: "Comprehensive certification covering advanced React patterns, state management, and modern CSS techniques.",
      image: "/assets/certificate1.png", // replace with actual image path
      icon: <FiTarget />,
      color: "#3b82f6",
      skills: ["React Patterns", "Redux", "Performance Optimization", "CSS-in-JS"],
      details: "This certification validates expertise in building complex, scalable frontend applications using modern JavaScript frameworks and libraries."
    },
    {
      id: 2,
      title: "UI/UX Design Principles",
      organization: "Design Academy",
      date: "2022",
      description: "Certification focusing on user-centered design approaches, wireframing, prototyping, and usability testing.",
      image: "/assets/certificate2.png", // replace with actual image path
      icon: <FiBookOpen />,
      color: "#8b5cf6",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      details: "This certification demonstrates proficiency in creating user-centered designs that prioritize usability, accessibility, and visual aesthetics."
    },
    {
      id: 3,
      title: "Performance Optimization Specialist",
      organization: "Web Performance Institute",
      date: "2021",
      description: "Specialized training in optimizing web application performance, reducing load times, and improving overall user experience.",
      image: "/assets/certificate3.png", // replace with actual image path
      icon: <FiCheckCircle />,
      color: "#6366f1",
      skills: ["Core Web Vitals", "Caching Strategies", "Code Splitting", "Bundle Optimization"],
      details: "This certification validates expertise in implementing performance optimizations that significantly enhance page load times and user experience metrics."
    }
  ];

  // Professional memberships
  const membershipsData = [
    {
      organization: "Frontend Developers Association",
      role: "Active Member",
      since: "2020",
      benefits: "Access to industry conferences, networking events, and educational resources",
      icon: <FiTarget className="text-blue-500" />
    },
    {
      organization: "Web Accessibility Initiative",
      role: "Contributor",
      since: "2021",
      benefits: "Participation in accessibility standards development and community outreach",
      icon: <FiCheckCircle className="text-indigo-500" />
    }
  ];

  return (
    <div className="space-y-10">
      <motion.div 
        className="text-center mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Awards & Achievements
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Recognition, certifications, and achievements I've earned throughout my professional journey 
          as a frontend developer.
        </p>
      </motion.div>

      {/* Awards Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FiAward className="mr-2 text-blue-600" /> Awards & Recognition
        </h2>
        <div className="space-y-6">
          {awardsData.map((award, index) => (
            <motion.div 
              key={award.id} 
              className="award-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {award.badge && (
                <div className="floating-badge px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                  {award.badge}
                </div>
              )}
              <div className="award-card-body">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                    <div className="org-badge mt-2">
                      {award.organization}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                      <FiCalendar className="mr-1" /> 
                      <span>{award.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <FiMapPin className="mr-1" />
                      <span>{award.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">{award.description}</p>
                <button 
                  onClick={() => openCertificate(award)}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium hover:underline"
                >
                  View Certificate <FiExternalLink className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FiAward className="mr-2 text-blue-600" /> Professional Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={cert.id} 
              className="cert-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openCertificate(cert)}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="cert-icon" style={{ backgroundColor: `${cert.color}15`, color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{cert.organization}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="mt-auto">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiCalendar className="mr-1" />
                    <span>Issued: {cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Memberships */}
      <section 
        className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FiAward className="mr-2 text-blue-600" /> Professional Memberships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {membershipsData.map((membership, index) => (
            <motion.div 
              key={index} 
              className="membership-card p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                  {membership.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{membership.organization}</h3>
                  <p className="text-blue-600 text-sm">{membership.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">{membership.benefits}</p>
              <div className="flex justify-end text-gray-500 text-sm">
                <span>Member since {membership.since}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.div 
        className="cta-container p-8 text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Looking for a skilled developer?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I bring my award-winning skills and expertise to every project. 
          Let's work together to create something exceptional.
        </p>
        <motion.a 
          href="/contact" 
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
      
      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedCertificate.title}</h3>
                <button className="close-button" onClick={closeCertificate}>
                  <FiX />
                </button>
              </div>
              <div className="modal-body">
                <div className="certificate-container">
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                    className="certificate-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/800x600?text=${selectedCertificate.title.replace(/\s+/g, '+')}`;
                    }}
                  />
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <div className="org-badge">
                      {selectedCertificate.organization}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FiCalendar className="mr-1" />
                      <span>{selectedCertificate.date}</span>
                    </div>
                  </div>
                  
                  {selectedCertificate.location && (
                    <div className="flex items-center text-gray-600 text-sm mt-2">
                      <FiMapPin className="mr-1" />
                      <span>{selectedCertificate.location}</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Details</h4>
                  <p className="text-gray-600">
                    {selectedCertificate.details || selectedCertificate.description}
                  </p>
                </div>
                
                {selectedCertificate.skills && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  onClick={closeCertificate}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Awards;