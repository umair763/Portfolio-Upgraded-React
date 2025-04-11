import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ 
  skill, 
  progress = 85,
  icon,
  className = '' 
}) => {
  return (
    <motion.div 
      className={`mb-5 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {icon && (
            <span className="icon-bg mr-3 text-sm">
              {icon}
            </span>
          )}
          <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">{skill}</h4>
        </div>
        <span className="text-sm font-semibold text-primary">{progress}%</span>
      </div>
      
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBadge;