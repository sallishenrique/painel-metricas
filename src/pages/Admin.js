import React, { useState } from 'react';
import Header from '../components/Header';

function Admin() {
  const [form, setForm] = useState({
    cadastros: '',
    acessos: '',
    rolagem: '',
    tempo: '',
    utm: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dados cadastrados (fictício): ' + JSON.stringify(form, null, 2));
    setForm({ cadastros: '', acessos: '', rolagem: '', tempo: '', utm: '' });
  };

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Administração</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
          {['cadastros', 'acessos', 'rolagem', 'tempo', 'utm'].map((field) => (
            <div key={field} style={{ marginBottom: '10px' }}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          ))}
          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
}

export default Admin;

