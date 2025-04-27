import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import { HeaderProvider } from '../context/Context';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HeaderProvider>
    </BrowserRouter>
  );
};

export default Router;
