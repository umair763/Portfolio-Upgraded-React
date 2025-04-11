import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Card from '@app/components/common/Card';
import Timeline from '@app/components/Timeline';

const Experience = () => {
  // Work Experience
  const workExperience = [
    {
      title: 'Lead Frontend Developer',
      organization: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Leading the frontend development team in building modern web applications. Implementing best practices, mentoring junior developers, and ensuring code quality and performance.',
      skills: ['React', 'TypeScript', 'Next.js', 'Redux']
    },
    {
      title: 'Frontend Developer',
      organization: 'WebCraft Studios',
      period: '2019 - 2021',
      description: 'Developed responsive and interactive web applications. Collaborated with designers and backend developers to create seamless user experiences. Optimized website performance and accessibility.',
      skills: ['JavaScript', 'React', 'CSS3', 'REST APIs']
    },
    {
      title: 'Web Developer',
      organization: 'Digital Creations',
      period: '2018 - 2019',
      description: 'Created and maintained websites for various clients. Implemented responsive designs and improved website performance. Worked on both frontend and backend development tasks.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery']
    },
  ];
  
  // Education
  const education = [
    {
      title: 'Master of Computer Science',
      organization: 'Tech University',
      period: '2016 - 2018',
      description: 'Specialized in web technologies and user interface design. Completed thesis on responsive web design patterns and their impact on user engagement.',
    },
    {
      title: 'Bachelor of Science in Computer Engineering',
      organization: 'National University',
      period: '2012 - 2016',
      description: 'Focused on programming fundamentals, algorithms, and software development. Participated in various hackathons and coding competitions.',
    },
  ];
  
  // Certifications
  const certifications = [
    {
      title: 'Advanced React and Redux',
      organization: 'Udemy',
      period: '2020',
      description: 'Comprehensive course covering advanced React concepts, Redux state management, middleware, and testing.',
    },
    {
      title: 'Frontend Web Developer Nanodegree',
      organization: 'Udacity',
      period: '2019',
      description: 'Intensive program covering HTML, CSS, JavaScript, responsive design, and web performance optimization.',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      organization: 'freeCodeCamp',
      period: '2018',
      description: 'Certification in JavaScript fundamentals, ES6, regex, debugging, data structures, and algorithm scripting.',
    },
  ];
  
  return (
    <section className="py-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white heading-underline">
          Experience & Education
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          My professional journey, academic background, and certifications.
        </p>
      </div>
      
      <div className="space-y-10">
        {/* Work Experience */}
        <Card data-aos="fade-up">
          <div className="mb-6 flex items-center">
            <span className="icon-bg mr-4">
              <FaBriefcase />
            </span>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Work Experience
            </h3>
          </div>
          
          <Timeline items={workExperience} />
        </Card>
        
        {/* Education */}
        <Card data-aos="fade-up" data-aos-delay="200">
          <div className="mb-6 flex items-center">
            <span className="icon-bg mr-4">
              <FaGraduationCap />
            </span>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Education
            </h3>
          </div>
          
          <Timeline items={education} />
        </Card>
        
        {/* Certifications */}
        <Card data-aos="fade-up" data-aos-delay="400">
          <div className="mb-6 flex items-center">
            <span className="icon-bg mr-4">
              <FaGraduationCap />
            </span>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Certifications
            </h3>
          </div>
          
          <Timeline items={certifications} />
        </Card>
        
        {/* Looking for opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center py-8 px-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            I'm Always Open to New Opportunities
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Looking for a skilled frontend developer for your project? I'm currently available for 
            freelance work and interesting opportunities. Let's create something amazing together!
          </p>
          <a 
            href="/contact" 
            className="btn btn-primary inline-block"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;