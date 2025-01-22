import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CreateUser = ({ createnewuser, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    createnewuser(formData);
    setFormData({ name: '', email: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>
      <button type="submit" className="save" disabled={isLoading}>
        <div className="button-content">
          Créer l'utilisateur
          {isLoading && <div className="spinner" />}
        </div>
      </button>
    </form>
  )
}

export default CreateUser;