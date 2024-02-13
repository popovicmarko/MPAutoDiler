import React, { useState } from 'react';

function CarSelectionForm() {
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');

  const brands = ["Audi", "BMW", "Mercedes"];
  const years = ["2020", "2021", "2022"];
  const models = {
    Audi: ["A4", "A6", "Q5"],
    BMW: ["320", "X5", "X6"],
    Mercedes: ["C-Class", "E-Class", "S-Class"]
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
    setModel('');
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Ovdje možete implementirati logiku za pretragu
  //   console.log(Pretražujem: Marka: ${brand}, Godina: ${year}, Model: ${model});
  // };

  return (
    <div className="car-selection-form">
      <form onSubmit>
        <div className="form-group">
          <label htmlFor="brand-select">Marka:</label>
          <select id="brand-select" value={brand} onChange={handleBrandChange}>
            <option value="">Izaberite marku</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="year-select">Godina:</label>
          <select id="year-select" value={year} onChange={handleYearChange}>
            <option value="">Izaberite godinu</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="model-select">Model:</label>
          <select id="model-select" value={model} onChange={handleModelChange} disabled={!brand}>
            <option value="">Prvo izaberite marku</option>
            {brand && models[brand].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="search-button">Pretraži</button>
        </div>
      </form>
    </div>
  );
}

export default CarSelectionForm;