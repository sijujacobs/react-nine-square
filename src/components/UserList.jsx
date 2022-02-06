import { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
const UserList = () => {
  const [users, serUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersUrl = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(usersUrl);
      serUsers(await response.json());
    }
    fetchUsers();
  }, []);

  return (
    <Fragment>
      <h2>Users List</h2>
      <table>
        <tbody>
          {
            users && users.map((u, uIndex) => (
              <tr key={uIndex}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Fragment>

  )
}

export default UserList;