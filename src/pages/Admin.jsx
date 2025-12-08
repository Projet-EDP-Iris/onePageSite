import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication - In production, use proper backend authentication
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: '', password: '' });
  };

  if (isLoggedIn) {
    return (
      <div className="admin-dashboard">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-card">
            <h2>Welcome to Iris Admin Panel</h2>
            <p>Manage your application settings and monitor user activity.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p className="stat-number">1,234</p>
            </div>
            <div className="stat-card">
              <h3>Active Sessions</h3>
              <p className="stat-number">456</p>
            </div>
            <div className="stat-card">
              <h3>Calendar Runs</h3>
              <p className="stat-number">12,345</p>
            </div>
            <div className="stat-card">
              <h3>Revenue</h3>
              <p className="stat-number">$45,678</p>
            </div>
          </div>

          <div className="admin-sections">
            <div className="admin-section">
              <h3>User Management</h3>
              <p>View and manage user accounts, permissions, and subscriptions.</p>
              <button className="admin-action-btn">Manage Users</button>
            </div>

            <div className="admin-section">
              <h3>Analytics</h3>
              <p>View detailed analytics and reports on app usage and performance.</p>
              <button className="admin-action-btn">View Analytics</button>
            </div>

            <div className="admin-section">
              <h3>Settings</h3>
              <p>Configure application settings, integrations, and preferences.</p>
              <button className="admin-action-btn">Configure Settings</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Iris Admin</h1>
          <p>Login to access the admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="login-footer">
            <a href="/" className="back-link">← Back to Home</a>
          </div>
        </form>

        <div className="demo-credentials">
          <p><strong>Demo Credentials:</strong></p>
          <p>Username: admin</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
