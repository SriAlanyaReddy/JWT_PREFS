import React from 'react';
import { useNavigate } from 'react-router-dom';

{/*const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    alert("You are logged out");
    navigate("/auth/signup");
  };

  const user = JSON.parse(sessionStorage.getItem('user')) || {};
  return (
    <div>
      <h1>Welcome, {user.name || 'User'}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;*/}


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    alert("You are logged out");
    navigate("/auth/signup");
  };

  const user = JSON.parse(sessionStorage.getItem('user')) || {};

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f9',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '2em',
        color: '#333',
        marginBottom: '20px'
      }}>
        Welcome, {user.name || 'User'}!
      </h1>
      <button onClick={handleLogout} style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

