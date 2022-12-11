import Login from "pages/login";
import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default PrivateRoutes;