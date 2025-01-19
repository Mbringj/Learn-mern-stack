import { useState, useEffect } from 'react';
import axios from 'axios';

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
      </div>
    </>
  )
}

export default App
