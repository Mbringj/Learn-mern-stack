import { useState, useEffect } from 'react';
import axios from 'axios';
import Createuser from './components/createUser';
import EditUser from './components/EditUser';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingActions, setLoadingActions] = useState({});

  const fetchUsers = () => {
    setIsLoading(true);
    axios.get("http://localhost:8000/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = (newUser) => {
    setLoadingActions({ ...loadingActions, create: true });
    axios
      .post('http://localhost:8000/users', newUser)
      .then(response => {
        fetchUsers();
        console.log('Utilisateur créé avec succès');
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoadingActions({ ...loadingActions, create: false });
      });   
  }

  const handleDeleteUser = async(id) => {
    const newLoadingActions = { ...loadingActions };
    newLoadingActions[`delete-${id}`] = true;
    setLoadingActions(newLoadingActions);

      axios
        .delete(`http://localhost:8000/users/${id}`)
      .then(() => {
        fetchUsers();
        console.log('Utilisateur supprimé avec succès');
      })
      .catch(error => console.log(error))
      .finally(() => {
        const finalLoadingActions = { ...loadingActions };
        finalLoadingActions[`delete-${id}`] = false;
        setLoadingActions(finalLoadingActions);
      });
  }

  const handleEditUser = (id, updatedUser) => {
    setLoadingActions({ ...loadingActions, [id]: true });
    axios
      .put(`http://localhost:8000/users/${id}`, updatedUser)
      .then(() => {
        fetchUsers();
        setEditingUserId(null);
        console.log('Utilisateur modifié avec succès');
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoadingActions({ ...loadingActions, [id]: false });
      });
  }

  return (
    <div className="container">
      <h1>Gestion des Utilisateurs</h1>
      <div className={`table-container ${isLoading ? 'table-loading' : ''}`}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user?.id}>
                {editingUserId === user.id ? (
                  <td colSpan="4">
                    <EditUser
                      user={user}
                      onSave={handleEditUser}
                      onCancel={() => setEditingUserId(null)}
                      isLoading={loadingActions[user.id]}
                    />
                  </td>
                ) : (
                  <>
                    <td>{user?.id}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                      <button 
                        className="edit"
                        onClick={() => setEditingUserId(user.id)}
                        disabled={loadingActions[`edit-${user.id}`] || loadingActions[`delete-${user.id}`]}
                      >
                        <span>Éditer</span>
                        {loadingActions[`edit-${user.id}`] && <div className="spinner" />}
                      </button>
                      <button 
                        className="delete"
                        onClick={() => handleDeleteUser(user.id)}
                        disabled={loadingActions[`edit-${user.id}`] || loadingActions[`delete-${user.id}`]}
                      >
                        Supprimer
                        {loadingActions[`delete-${user.id}`] && <div className="spinner" />}
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="create-user-section">
        <h2>Ajouter un utilisateur</h2>
        <Createuser 
          createnewuser={handleCreateUser} 
          isLoading={loadingActions.create}
        />
      </div>
    </div>
  );
}

export default App
