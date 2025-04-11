import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from './common/Card';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const BlogPostPreview = ({ post }) => {
  const {
    id,
    title,
    excerpt,
    date,
    author,
    category,
    image
  } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        {/* Blog Image */}
        <div className="h-48 overflow-hidden">
          <img
            src={image || 'https://via.placeholder.com/400x200?text=Blog+Post'}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
            }}
          />
        </div>
        
        {/* Blog Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center text-xs text-gray-500 space-x-4 mb-3">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1" /> {date}
            </span>
            <span className="flex items-center">
              <FaUser className="mr-1" /> {author}
            </span>
            <span className="flex items-center">
              <FaTag className="mr-1" /> {category}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {title}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
            {excerpt}
          </p>
          
          <Link 
            to={`/blog/${id}`} 
            className="text-primary font-medium text-sm hover:underline mt-auto"
          >
            Read More →
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogPostPreview;