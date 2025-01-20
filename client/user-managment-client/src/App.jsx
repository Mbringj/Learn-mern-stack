import { useState, useEffect } from 'react';
import axios from 'axios';
import Createuser from './components/createUser';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users")
      .then( response => {
        setUsers(response.data);
        console.log(`users data is ${response.data}`);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleCreateUser = (newUser) => {
    setUsers([...users, newUser]);

    axios
      .post('http://localhost:8000/users', newUser)
      .then(response => {
        console.log('Create user' + response.data);
      })
      .catch(error => console.log(error));   
  }

  return (
    <>
      <div>
          <table border={1}>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>email</td>
            </tr>
            <>
              {
                users?.map((user) => (
                  <tr key={user?.id}>
                    <td>{user?.id}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                  </tr>
                ))
              }
            </>
          </table>
          <Createuser createnewuser={handleCreateUser}/>
      </div>
    </>
  )
}

export default App
