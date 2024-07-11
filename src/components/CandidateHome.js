import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListCard from './Common/ListCard';
import SearchComponent from './Common/SearchComponent';

 // Import custom CSS file for additional styles if needed

const CandidateHome = () => {
  const history = useNavigate();
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      history('/login');
    } else {
      loadData();
    }
  }, [history]);

  const loadData = async () => {
    try {
      const referralData = await 
      setReferrals(referralData);
      const serviceData = await 
      setServices(serviceData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    history('/login');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Candidate Home</h1>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <div className="mb-4">
        <SearchComponent />
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <ListCard items={referrals} title="Referrals" />
        </div>
        <div className="col-md-6 mb-4">
          <ListCard items={services} title="Services" />
        </div>
      </div>
    </div>
  );
};

export default CandidateHome;
