import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import BlogPostPreview from '@app/components/BlogPostPreview';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Blog Posts Data
  const allBlogPosts = [
    {
      id: 1,
      title: 'Mastering React Performance Optimization',
      excerpt: 'Explore advanced techniques to optimize your React applications for better performance and user experience.',
      date: 'June 15, 2023',
      author: 'Muhammad Umair',
      category: 'React',
      image: 'https://via.placeholder.com/600x350?text=React+Performance',
    },
    {
      id: 2,
      title: 'The Complete Guide to Modern CSS',
      excerpt: 'Learn about the latest CSS features and techniques that will transform your web development workflow.',
      date: 'May 22, 2023',
      author: 'Muhammad Umair',
      category: 'CSS',
      image: 'https://via.placeholder.com/600x350?text=Modern+CSS',
    },
    {
      id: 3,
      title: 'Building Accessible Web Applications',
      excerpt: 'Practical tips and best practices for creating websites that are accessible to everyone, regardless of ability.',
      date: 'April 10, 2023',
      author: 'Muhammad Umair',
      category: 'Accessibility',
      image: 'https://via.placeholder.com/600x350?text=Web+Accessibility',
    },
    {
      id: 4,
      title: 'Introduction to State Management with Redux',
      excerpt: 'A beginner-friendly guide to understanding and implementing Redux for state management in your React applications.',
      date: 'March 5, 2023',
      author: 'Muhammad Umair',
      category: 'React',
      image: 'https://via.placeholder.com/600x350?text=Redux+State+Management',
    },
    {
      id: 5,
      title: 'Responsive Design Best Practices',
      excerpt: 'Key principles and techniques for creating websites that look great on all devices and screen sizes.',
      date: 'February 18, 2023',
      author: 'Muhammad Umair',
      category: 'Design',
      image: 'https://via.placeholder.com/600x350?text=Responsive+Design',
    },
    {
      id: 6,
      title: 'JavaScript ES6+ Features You Should Know',
      excerpt: 'Explore the most useful modern JavaScript features that will level up your coding skills and productivity.',
      date: 'January 30, 2023',
      author: 'Muhammad Umair',
      category: 'JavaScript',
      image: 'https://via.placeholder.com/600x350?text=JavaScript+ES6',
    },
  ];
  
  // Filter blog posts based on search query
  const filteredBlogPosts = searchQuery
    ? allBlogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allBlogPosts;
  
  return (
    <section className="py-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white heading-underline">
          My Blog
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          Thoughts, tutorials, and insights about web development and design.
        </p>
      </div>
      
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-10" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-light dark:border-gray-700 dark:text-white"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      
      {/* Blog Posts Grid */}
      {filteredBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogPosts.map((post, index) => (
            <BlogPostPreview 
              key={post.id} 
              post={post}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16" data-aos="fade-up">
          <div className="inline-block p-6 bg-gray-100 dark:bg-dark-light rounded-full mb-4">
            <FaSearch className="text-4xl text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            No blog posts found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search criteria
          </p>
        </div>
      )}
      
      {/* Blog Subscription */}
      <div 
        className="mt-16 p-8 bg-gray-50 dark:bg-dark-light rounded-lg shadow-sm text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          Subscribe to My Blog
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Stay updated with my latest articles, tutorials, and insights about web development and design.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark dark:border-gray-700 dark:text-white"
          />
          <button className="btn btn-primary rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;