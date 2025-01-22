import { useState } from 'react';

function EditUser({ user, onSave, onCancel, isLoading }) {
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user.id, editedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="edit-name">Nom:</label>
        <input
          type="text"
          id="edit-name"
          value={editedUser.name}
          onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edit-email">Email:</label>
        <input
          type="email"
          id="edit-email"
          value={editedUser.email}
          onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="save" disabled={isLoading}>
          <div className="button-content">
            Sauvegarder
            {isLoading && isLoading === 'save' && <div className="spinner" />}
          </div>
        </button>
        <button type="button" className="cancel" onClick={onCancel} disabled={isLoading}>
          <div className="button-content">
            Annuler
            {isLoading && isLoading === 'cancel' && <div className="spinner" />}
          </div>
        </button>
      </div>
    </form>
  );
}

export default EditUser; 