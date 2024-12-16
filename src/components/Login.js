import React, { useState } from 'react';

const Login = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Helper function to validate email format
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLoginClick = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    setLoading(true);
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('https://local-tutor-hub.kesug.com/adminlog.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to the server.');
      }

      const data = await response.json();

      if (data.status === 'success') {
        // Navigate to the Admin page on successful login
        onPageChange('Admin');
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Unable to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("/tutor.jpeg"), linear-gradient(to bottom, #ffffff, #cccccc)',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div
        style={{
          width: '300px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          marginTop: '50px',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#0000ff' }}>Admin Login</h2>
        <form onSubmit={handleLoginClick}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: loading ? '#cccccc' : '#0000ff',
              color: 'white',
              padding: '10px 0',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </div>
      <h1
        style={{
          fontSize: '48px',
          color: '#000',
          marginTop: '50px',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Local Tutor Hub
      </h1>
    </div>
  );
};

export default Login;
