import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Password change state
  const [passwordChange, setPasswordChange] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  // Mock users data - in production, this would come from a database
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Pro', joined: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Free', joined: '2024-02-20', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', plan: 'Enterprise', joined: '2024-01-10', status: 'Active' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', plan: 'Pro', joined: '2024-03-05', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', plan: 'Free', joined: '2024-02-28', status: 'Inactive' },
  ]);

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

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordChange(prev => ({
      ...prev,
      [name]: value
    }));
    setPasswordError('');
    setPasswordSuccess('');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    // Validation
    if (passwordChange.currentPassword !== 'admin123') {
      setPasswordError('Current password is incorrect');
      return;
    }

    if (passwordChange.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters');
      return;
    }

    if (passwordChange.newPassword !== passwordChange.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    // In production, you would call an API to update the password
    setPasswordSuccess('Password changed successfully!');
    setPasswordChange({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  if (isLoggedIn) {
    return (
      <div className="admin-dashboard">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        <div className="dashboard-content">
          {/* Team Links Section */}
          <div className="team-links-section">
            <h2 className="section-title">Important Team Links</h2>
            <div className="links-grid">
              <a href="https://trello.com" target="_blank" rel="noopener noreferrer" className="link-card trello">
                <div className="link-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 0H3C1.343 0 0 1.343 0 3v18c0 1.656 1.343 3 3 3h18c1.656 0 3-1.344 3-3V3c0-1.657-1.344-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .794-.645 1.44-1.44 1.44H15c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.646-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z"/>
                  </svg>
                </div>
                <div className="link-info">
                  <h3>Trello</h3>
                  <p>Project Management</p>
                </div>
              </a>

              <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="link-card drive">
                <div className="link-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.71 3.5L1.15 15l3.42 6.01L11.13 9.5 7.71 3.5zm6.28 0l6.56 11.5-3.42 6.01L10.57 9.5 14 3.5zM8.86 15L5.44 21h13.12l3.42-6H8.86z"/>
                  </svg>
                </div>
                <div className="link-info">
                  <h3>Google Drive</h3>
                  <p>Shared Documents</p>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-card linkedin">
                <div className="link-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="link-info">
                  <h3>LinkedIn</h3>
                  <p>Company Page</p>
                </div>
              </a>
            </div>
          </div>

          {/* Password Management Section */}
          <div className="password-section">
            <h2 className="section-title">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="password-form">
              <div className="password-form-grid">
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwordChange.currentPassword}
                    onChange={handlePasswordInputChange}
                    placeholder="Enter current password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwordChange.newPassword}
                    onChange={handlePasswordInputChange}
                    placeholder="Enter new password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwordChange.confirmPassword}
                    onChange={handlePasswordInputChange}
                    placeholder="Confirm new password"
                    required
                  />
                </div>
              </div>

              {passwordError && <div className="error-message">{passwordError}</div>}
              {passwordSuccess && <div className="success-message">{passwordSuccess}</div>}

              <button type="submit" className="password-submit-btn">
                Update Password
              </button>
            </form>
          </div>

          {/* User Statistics */}
          <div className="user-stats-section">
            <h2 className="section-title">User Statistics</h2>
            <div className="stats-summary">
              <div className="stat-box">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="stat-data">
                  <h3>Total Users</h3>
                  <p className="stat-value">{users.length}</p>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon active">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="stat-data">
                  <h3>Active Users</h3>
                  <p className="stat-value">{users.filter(u => u.status === 'Active').length}</p>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon pro">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="stat-data">
                  <h3>Pro Users</h3>
                  <p className="stat-value">{users.filter(u => u.plan === 'Pro').length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* User List */}
          <div className="user-list-section">
            <h2 className="section-title">All Users</h2>
            <div className="users-table-container">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Plan</th>
                    <th>Joined</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td className="user-name">{user.name}</td>
                      <td className="user-email">{user.email}</td>
                      <td>
                        <span className={`plan-badge ${user.plan.toLowerCase()}`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="user-date">{new Date(user.joined).toLocaleDateString()}</td>
                      <td>
                        <span className={`status-badge ${user.status.toLowerCase()}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
