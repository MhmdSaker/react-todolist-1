import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br></br>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <button type="submit">Login</button>
    </form>
  );
}


export default LoginForm;
