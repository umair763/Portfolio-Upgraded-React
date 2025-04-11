import React, { useState } from 'react';
import { FaUser, FaLaptopCode, FaHistory, FaUserGraduate, FaAward } from 'react-icons/fa';
import Card from '@app/components/common/Card';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');
   
  // Personal stats
  const stats = [
    { label: 'Years Experience', value: '5+', icon: <FaUserGraduate /> },
    { label: 'Projects Completed', value: '30+', icon: <FaLaptopCode /> },
    { label: 'Happy Clients', value: '25+', icon: <FaUser /> },
    { label: 'Awards', value: '3', icon: <FaAward /> },
  ];
  
  // Journey timeline
  const journeyMilestones = [
    {
      year: '2018',
      title: 'Started as Frontend Developer',
      description: 'Began my journey in web development, focusing on HTML, CSS, and JavaScript.'
    },
    {
      year: '2019',
      title: 'Adopted Modern Frameworks',
      description: 'Dove into React.js and modern JavaScript, transforming my development approach.'
    },
    {
      year: '2020',
      title: 'Joined Tech Startup',
      description: 'Worked with cross-functional teams to build innovative web applications.'
    },
    {
      year: '2021',
      title: 'Lead Frontend Developer',
      description: 'Took leadership role in projects, mentored junior developers.'
    },
    {
      year: '2022-Now',
      title: 'Freelance & Consulting',
      description: 'Working with diverse clients to create exceptional digital experiences.'
    },
  ];
  
  // Services offered
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible websites using modern frameworks and libraries.',
      icon: <FaLaptopCode />
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive, engaging user interfaces with a focus on user experience.',
      icon: <FaUser />
    },
    {
      title: 'Performance Optimization',
      description: 'Improving site speed and performance for better user retention and SEO.',
      icon: <FaHistory />
    },
  ];
  
  return (
    <section className="py-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white heading-underline about-heading">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          Get to know more about me, my background, and what I do.
        </p>
      </div>
      
      <Card className="mb-10" data-aos="fade-up">
        <div className="profile-summary">
          <div className="relative mb-6 md:mb-0">
            <div className="profile-image-container">
              <div className="profile-image"></div>
              <div className="glow-effect"></div>
            </div>
          </div>
          
          <div className="profile-intro">
            <h2>Muhammad Umair</h2>
            <span className="title-badge">Frontend Developer</span>
            <p className="intro-text">
              I'm a passionate frontend developer with 5+ years of experience building 
              responsive, user-friendly websites and applications. I specialize in 
              modern JavaScript frameworks like React, along with HTML5, CSS3, and 
              various frontend technologies.
            </p>
          </div>
        </div>
        
        <div className="stats-container" data-aos="fade-up" data-aos-delay="100">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item"
              data-aos="zoom-in"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="about-tabs">
          <div 
            className={`tab-item ${activeTab === 'journey' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('journey')}
          >
            Journey
            {activeTab === 'journey' && <div className="tab-indicator"></div>}
          </div>
          <div 
            className={`tab-item ${activeTab === 'whatido' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('whatido')}
          >
            What I Do
            {activeTab === 'whatido' && <div className="tab-indicator"></div>}
          </div>
        </div>
        
        <div className="tab-content">
          {activeTab === 'journey' && (
            <div>
              <p className="journey-text">
                My journey in web development began over 5 years ago. Since then, I've continuously expanded 
                my skills and knowledge to stay current with the latest technologies and best practices in 
                the ever-evolving field of frontend development.
              </p>
              
              <div className="timeline">
                {journeyMilestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="timeline-item"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>{milestone.title} <span className="text-sm text-gray-500">({milestone.year})</span></h5>
                      <p>{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'whatido' && (
            <div>
              <p className="journey-text">
                I specialize in creating modern, responsive web applications with a focus on 
                user experience, performance, and maintainability. Here are some of the key 
                services I offer:
              </p>
              
              <div className="what-i-do-grid">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="what-i-do-item"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    <div className="skill-icon-container">{service.icon}</div>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default About;