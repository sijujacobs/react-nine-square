import { useEffect, useState } from "react";
// import withFetchName from './hoc/withNewFetch';
const FruitList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('FruitList :: useEffect');
    fetchData();
  }, []);

  const fetchData = async (rUrl) => {
    console.log('2. fetchData');
    const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const fUsers = await fetchResponse.json();
    setUsers(fUsers);
  }


  const onClickHandler = (e) => {
    const { className } = e.target;
    console.log(className, ' eTarget : ', e.target);
    const buttonType = className.split(' ')[1];
    switch (buttonType) {
      case 'add':
        const newUser = {
          id: 1,
          name: 'aaaName',
          phone: '1111',
          email: 'email@email.com'
        }
        const newUsers = [...users, newUser];
        console.log('newUsers : ', newUsers);

        setUsers(newUsers);
        break;
      case 'delete':
        console.log('1.  --->: users ', users);
        const userId = e.target.getAttribute('data-userid');
        console.log('2. userid ', userId);
        const thisUser = users.find((u) => Number(u.id) === Number(userId));
        // const tUser = users.find(f => f.id !== userId);
        console.log('delete button clicked : thisUser ', thisUser);
        const theseUsers = users.filter((u) => Number(u.id) !== Number(userId));
        setUsers(theseUsers);
        break;
      default:
        break;
    }
  }
  return (<>
    <h3>Fruit List</h3>
    <table>
      <tbody>
        {
          users && users.map((u, uIndex) => (
            <tr key={uIndex}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td><button className="actionButton delete" data-userid={u.id} onClick={onClickHandler}>Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className="actionContainer">
      <button className="actionButton add" onClick={onClickHandler}>Add</button>
      <button className="actionButton edit" onClick={onClickHandler}>Edit</button>
    </div>
  </>);
}
export default FruitList;