import { useEffect, useState } from 'react'
import UserList from './UserList.jsx'
import Userform from './Userform.jsx'

function App() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8080/api/users');

        if (!response.ok) {
            console.log("There has been an error");
        } else {
            const data = await response.json();
            setUsers(data);
        }
    };
    useEffect(() => {fetchUsers()}, []);

    return (
      <>
        <Userform onAddUser={fetchUsers}/>
        <UserList onDeleteUser={fetchUsers} users={users}/>
      </>
    )
}

export default App
