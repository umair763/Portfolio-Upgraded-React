import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';
import ProjectCard from '@app/components/ProjectCard';

const Projects = () => {
  // Project Categories
  const categories = [
    'All', 
    'Web Apps', 
    'Landing Pages', 
    'E-commerce', 
    'React', 
    'JavaScript'
  ];
  
  // Project Data
  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce management with analytics, inventory, and order management features.',
      image: 'https://via.placeholder.com/600x350?text=E-Commerce+Dashboard',
      tags: ['React', 'Redux', 'Tailwind CSS', 'E-commerce'],
      demoLink: 'https://example.com/demo1',
      githubLink: 'https://github.com/umair/project1',
      featured: true,
      category: 'E-commerce'
    },
    {
      id: 2,
      title: 'Travel Agency Website',
      description: 'Responsive travel agency website with booking functionality, destination search, and interactive maps.',
      image: 'https://via.placeholder.com/600x350?text=Travel+Agency+Site',
      tags: ['JavaScript', 'HTML/CSS', 'API Integration'],
      demoLink: 'https://example.com/demo2',
      githubLink: 'https://github.com/umair/project2',
      category: 'Web Apps'
    },
    {
      id: 3,
      title: 'Portfolio Template',
      description: 'Customizable portfolio template for developers and designers with multiple theme options.',
      image: 'https://via.placeholder.com/600x350?text=Portfolio+Template',
      tags: ['React', 'Styled Components', 'Animation'],
      demoLink: 'https://example.com/demo3',
      githubLink: 'https://github.com/umair/project3',
      category: 'Landing Pages'
    },
    {
      id: 4,
      title: 'Real Estate Listing Platform',
      description: 'Platform for real estate listings with search, filtering, and user account management.',
      image: 'https://via.placeholder.com/600x350?text=Real+Estate+Platform',
      tags: ['React', 'Node.js', 'MongoDB', 'E-commerce'],
      demoLink: 'https://example.com/demo4',
      githubLink: 'https://github.com/umair/project4',
      featured: true,
      category: 'Web Apps'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and progress tracking.',
      image: 'https://via.placeholder.com/600x350?text=Task+Management+App',
      tags: ['JavaScript', 'Firebase', 'CSS Grid'],
      demoLink: 'https://example.com/demo5',
      githubLink: 'https://github.com/umair/project5',
      category: 'JavaScript'
    },
    {
      id: 6,
      title: 'Product Landing Page',
      description: 'Conversion-focused landing page for product showcase with animations and call-to-actions.',
      image: 'https://via.placeholder.com/600x350?text=Product+Landing+Page',
      tags: ['HTML/CSS', 'JavaScript', 'Responsive'],
      demoLink: 'https://example.com/demo6',
      githubLink: 'https://github.com/umair/project6',
      category: 'Landing Pages'
    },
  ];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  
  // Filter projects based on category and search query
  useEffect(() => {
    let result = allProjects;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(project => 
        project.category === activeCategory || 
        project.tags.includes(activeCategory)
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(result);
  }, [activeCategory, searchQuery]);
  
  return (
    <section className="py-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white heading-underline">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          Explore my featured work and personal projects that showcase my skills and expertise.
        </p>
      </div>
      
      {/* Filter and Search */}
      <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-5 mb-10" data-aos="fade-up">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Categories */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
              <FaFilter />
              <span className="text-sm font-medium">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-light dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Search */}
          <div className="w-full md:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-light dark:border-gray-700 dark:text-white"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="inline-block p-6 bg-gray-100 dark:bg-dark-light rounded-full mb-4">
            <FaSearch className="text-4xl text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;