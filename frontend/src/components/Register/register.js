import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možete dodati logiku za slanje podataka na server
    console.log(formData);
  };

  return (
    <div className="container-reg">
      <div className="row justify-content-center ">
        <div className="col-md-6" >
          <h2>Registracija</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Korisničko ime</label>
              <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email adresa</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Lozinka</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Potvrdite lozinku</label>
              <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Registracija</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
