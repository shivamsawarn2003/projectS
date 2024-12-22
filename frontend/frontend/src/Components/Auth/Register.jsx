import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserContext } from '../../UserContext';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });

      setUser({ name, email: user.email });

      setSuccessMessage('Registration successful! Redirecting...');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister} className="auth-form">
        <h2>Register</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
