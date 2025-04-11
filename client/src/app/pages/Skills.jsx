import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaNode, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux } from 'react-icons/si';
import SkillBadge from '@app/components/SkillBadge';
import Card from '@app/components/common/Card';
import Tag from '@app/components/common/Tag';

const Skills = () => {
  // Frontend Skills
  const frontendSkills = [
    { name: 'HTML5', progress: 95, icon: <FaHtml5 /> },
    { name: 'CSS3', progress: 92, icon: <FaCss3Alt /> },
    { name: 'JavaScript', progress: 90, icon: <FaJsSquare /> },
    { name: 'React.js', progress: 90, icon: <FaReact /> },
    { name: 'TypeScript', progress: 85, icon: <SiTypescript /> },
    { name: 'Next.js', progress: 80, icon: <SiNextdotjs /> },
    { name: 'Redux', progress: 85, icon: <SiRedux /> },
    { name: 'Tailwind CSS', progress: 88, icon: <SiTailwindcss /> },
  ];
  
  // Other Skills
  const otherSkills = [
    { name: 'Node.js', progress: 75, icon: <FaNode /> },
    { name: 'SASS/SCSS', progress: 85, icon: <FaSass /> },
    { name: 'Git & GitHub', progress: 88, icon: <FaGitAlt /> },
    { name: 'UI/UX Design', progress: 80, icon: <FaFigma /> },
  ];
  
  // Knowledge categories
  const knowledgeAreas = [
    'Responsive Design',
    'Cross-browser Compatibility',
    'Web Performance Optimization',
    'Accessibility (WCAG)',
    'SEO Best Practices',
    'Progressive Web Apps',
    'Web Animation',
    'Frontend Testing',
    'API Integration',
    'State Management',
    'Component Libraries',
    'CI/CD Pipelines',
  ];
  
  return (
    <section className="py-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white heading-underline">
          My Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          A showcase of my technical skills and expertise acquired over years of experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Frontend Skills */}
        <Card data-aos="fade-up">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
            <span className="text-primary mr-2">❯</span> 
            Frontend Development
          </h3>
          
          <div>
            {frontendSkills.map((skill, index) => (
              <SkillBadge 
                key={index} 
                skill={skill.name} 
                progress={skill.progress} 
                icon={skill.icon}
                data-aos="fade-right"
                data-aos-delay={index * 50}
              />
            ))}
          </div>
        </Card>
        
        {/* Other Skills */}
        <Card data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
            <span className="text-primary mr-2">❯</span> 
            Other Skills
          </h3>
          
          <div>
            {otherSkills.map((skill, index) => (
              <SkillBadge 
                key={index} 
                skill={skill.name} 
                progress={skill.progress} 
                icon={skill.icon}
                data-aos="fade-right"
                data-aos-delay={index * 50 + 200}
              />
            ))}
          </div>
          
          <h3 className="text-xl font-bold my-6 text-gray-800 dark:text-white">
            <span className="text-primary mr-2">❯</span> 
            Knowledge Areas
          </h3>
          
          <div className="flex flex-wrap gap-3" data-aos="fade-up">
            {knowledgeAreas.map((area, index) => (
              <Tag 
                key={index}
                className="py-2 px-4"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                {area}
              </Tag>
            ))}
          </div>
        </Card>
      </div>
      
      {/* Skills Description */}
      <Card className="p-8" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          My Approach to Development
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I believe in writing clean, maintainable code that adheres to best practices and industry standards. 
          My development approach prioritizes:
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
          <li>
            <span className="font-medium text-gray-800 dark:text-gray-200">User-Centric Design:</span>{' '}
            Creating interfaces that are intuitive and accessible to all users.
          </li>
          <li>
            <span className="font-medium text-gray-800 dark:text-gray-200">Performance Optimization:</span>{' '}
            Ensuring fast load times and smooth interactions for the best user experience.
          </li>
          <li>
            <span className="font-medium text-gray-800 dark:text-gray-200">Responsive Development:</span>{' '}
            Building applications that work flawlessly across all devices and screen sizes.
          </li>
          <li>
            <span className="font-medium text-gray-800 dark:text-gray-200">Continuous Learning:</span>{' '}
            Staying updated with the latest technologies and best practices in frontend development.
          </li>
        </ul>
        
        <p className="text-gray-600 dark:text-gray-400">
          I'm constantly expanding my skillset and exploring new technologies to enhance my development capabilities.
          Currently, I'm focusing on advancing my knowledge in React performance optimization and modern state management patterns.
        </p>
      </Card>
    </section>
  );
};

export default Skills;