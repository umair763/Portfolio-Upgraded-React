import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Work from '../pages/Work';
import Awards from '../pages/Awards';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Layout from '../layout/Layout';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/resume" element={<Layout><Resume /></Layout>} />
      <Route path="/work" element={<Layout><Work /></Layout>} />
      <Route path="/awards" element={<Layout><Awards /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default AppRoutes;