import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StockData from './StockData';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        // Handle logout error if needed
        console.log('Logout error:', error);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'pink', // Set your desired gradient colors here
        padding: '20px',
      }}
    >
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Logout
        </button>
      </div>
      <StockData />
    </div>
  );
};

export default Dashboard;
