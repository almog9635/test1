import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('username:', username);
    console.log('Password:', password);
    axios.post('http://localhost:8080/login', { username, password })
    .then(response => {
      sessionStorage.setItem("accessToken", response.data.accessToken);
      sessionStorage.setItem("refreshToken", response.data.refreshToken);
      console.log("Login successful:", response.data);
      console.log("hello")
    })
    .catch(error => {
    console.error("Login failed:", error);
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        required
        style={styles.input}
      />
      <label style={styles.label}>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  label: {
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '16px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LoginForm;
