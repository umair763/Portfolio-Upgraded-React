import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="flex justify-between items-center mb-2">
              <h5 className="font-semibold">{item.title}</h5>
              <span className="text-xs text-gray-500">{item.period}</span>
            </div>
            <h6 className="text-sm text-gray-600 mb-2">{item.organization}</h6>
            <p className="text-sm text-gray-500">{item.description}</p>
            
            {item.skills && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;