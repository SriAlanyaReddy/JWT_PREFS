import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

{/*const App = () => {
  const token = sessionStorage.getItem('token');

  return (
    <Router>
      <nav>
        <ul>
          <li>
        <Link to="/auth/signup">Signup</Link>
        </li>
        <li>
        <Link to="/auth/login">Login</Link>
        </li>
        <li>
        <Link to="/">User Auth App</Link>
        </li>
        {token && <Link to="/dashboard">Dashboard</Link>}
        </ul>
      </nav>

      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/auth/login"/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;*/}


{/*const App = () => {
  const token = sessionStorage.getItem('token');

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', padding: '20px' }}>
        <nav style={{ marginBottom: '20px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li style={{ display: 'inline', marginRight: '15px' }}>
              <Link to="/auth/signup" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Signup</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '15px' }}>
              <Link to="/auth/login" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Login</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '15px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>User Auth App</Link>
            </li>
            {token && (
              <li style={{ display: 'inline', marginRight: '15px' }}>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Dashboard</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={token ? <Dashboard /> : <Navigate to="/auth/login" />}
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;*/}


const App = () => {
  const token = sessionStorage.getItem('token');

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', padding: '20px' }}>
        {/* Navbar visible only when not logged in */}
        {!token && (
          <nav style={{ marginBottom: '20px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li style={{ display: 'inline', marginRight: '15px' }}>
                <Link to="/auth/signup" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Signup</Link>
              </li>
              <li style={{ display: 'inline', marginRight: '15px' }}>
                <Link to="/auth/login" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Login</Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Navbar visible when logged in */}
        {token && (
          <nav style={{ marginBottom: '20px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li style={{ display: 'inline', marginRight: '15px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>User Auth App</Link>
              </li>
              <li style={{ display: 'inline', marginRight: '15px' }}>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Dashboard</Link>
              </li>
              <li style={{ display: 'inline', marginRight: '15px' }}>
                <Link to="/" onClick={() => {
                  sessionStorage.removeItem('token');
                  sessionStorage.removeItem('user');
                }} style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>Logout</Link>
              </li>
            </ul>
          </nav>
        )}

        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={token ? <Dashboard /> : <Navigate to="/auth/login" />}
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
