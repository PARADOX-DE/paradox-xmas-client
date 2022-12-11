import Dashboard from "pages/dashboard/login";
import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default PrivateRoutes;