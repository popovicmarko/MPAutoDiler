import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [korisničkoIme, postaviKorisničkoIme] = useState('');
  const [lozinka, postaviLozinku] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možete dodati logiku za slanje podataka na server ili autentikaciju
    console.log('Korisničko ime:', korisničkoIme);
    console.log('Lozinka:', lozinka);
  };

  return (
    <div className='login'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="korisnicko-ime">Username:</label>
          <input
            type="text"
            id="korisnicko-ime"
            value={korisničkoIme}
            onChange={(e) => postaviKorisničkoIme(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lozinka">Password:</label>
          <input
            type="password"
            id="lozinka"
            value={lozinka}
            onChange={(e) => postaviLozinku(e.target.value)}
          />
        </div>
        <button type="submit">Prijavi se</button>
      </form>
    </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
