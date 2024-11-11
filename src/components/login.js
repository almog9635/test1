// Login.js
import React from 'react';
import LoginForm from './loginform';

const Login = () => {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  }
};

export default Login;
