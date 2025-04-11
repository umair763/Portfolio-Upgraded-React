import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '@app/components/common/Loader';

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
  useEffect(() => {
    // Simulate checking auth status
    const checkAuth = async () => {
      const token = localStorage.getItem('auth_token');
      
      // Simulating an API call to verify token
      setTimeout(() => {
        // For now, we'll just check if token exists
        setIsAuthenticated(!!token);
      }, 500);
    };
    
    checkAuth();
  }, []);
  
  // Show loader while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size="large" />
      </div>
    );
  }
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoutes;