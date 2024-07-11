// src/components/IndexPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>Welcome to Workai</h1>
        <Link to="/login" className="btn btn-primary mt-3">Login</Link>
      </div>
    </div>
  );
};

export default IndexPage;
