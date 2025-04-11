import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/Work.css';

// Project data with categories
const projectsData = [
  {
    id: 1,
    title: "Todo App",
    description: "MERN stack application with Tailwind framework",
    image: "/assets/todo.svg",
    demoLink: "https://example.com/todo",
    githubLink: "https://github.com/umair763/todo-app",
    category: "Web App"
  },
  {
    id: 2,
    title: "Chrome Extension",
    description: "Chrome extension for Todo tasks",
    image: "/assets/chrome-extension.svg",
    demoLink: "https://example.com/chrome-ext",
    githubLink: "https://github.com/umair763/chrome-extension",
    category: "Extension"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A responsive interactive website",
    image: "/assets/portfolio.svg",
    demoLink: "https://example.com/portfolio",
    githubLink: "https://github.com/umair763/portfolio",
    category: "Website"
  },
  {
    id: 4,
    title: "Tour Guide",
    description: "A responsive tour guide website",
    image: "/assets/profile.svg",
    demoLink: "https://example.com/tour-guide",
    githubLink: "https://github.com/umair763/tour-guide",
    category: "Website"
  },
  {
    id: 5,
    title: "Website Clone",
    description: "Clone of a famous ecommerce website using HTML and CSS",
    image: "/assets/todo.svg",
    demoLink: "https://example.com/website-clone",
    githubLink: "https://github.com/umair763/website-clone",
    category: "Website"
  },
  {
    id: 6,
    title: "Github Explorer",
    description: "Web application to search and explore GitHub profiles",
    image: "/assets/chrome-extension.svg",
    demoLink: "https://example.com/github-explorer",
    githubLink: "https://github.com/umair763/github-explorer",
    category: "Web App"
  }
];

// Extract unique categories
const categories = ['All', ...new Set(projectsData.map(project => project.category))];

const Work = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [animate, setAnimate] = useState(false);

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
    }
    
    // Add a small delay before re-animating
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeFilter]);

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
    <div className="work-section">
      <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">My Work</h2>
      
      {/* Filter buttons */}
      <div className="filter-buttons mb-8" data-aos="fade-up" data-aos-delay="50">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`filter-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category 
                  ? 'active bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${(project.id % 6) * 100}ms` }}
          >
            <div className="relative h-48 bg-gray-200 overflow-hidden group">
              {project.image ? (
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover project-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x200?text=${project.title.replace(/\s+/g, '+')}`;
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium">
                  {project.title}
                </div>
              )}
              
              {/* Category badge */}
              <span className="category-badge">
                {project.category}
              </span>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              
              <div className="flex justify-between">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="bg-gray-100 rounded-lg p-8 text-center" data-aos="fade-up">
          <h3 className="text-lg font-medium text-gray-700 mb-2">No projects found</h3>
          <p className="text-gray-500">No projects match the selected filter criteria.</p>
          <button 
            onClick={() => setActiveFilter('All')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors empty-state-button"
          >
            Show All Projects
          </button>
        </div>
      )}
      
      <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="400">
        <p className="text-gray-600 mb-4">
          Want to see more of my work? Check out my GitHub profile for additional projects.
        </p>
        <a 
          href="https://github.com/umair763" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary inline-block"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  );
};

export default Work;