import React from "react";
import '../index.css';

const UserList = ({users, onDeleteUser}) => {

    const deleteUser = async (id) => {
        const stat = await fetch(`http://localhost:8080/api/users/${id}`, {
            method: "DELETE"
        })
        
        onDeleteUser();

        if(!stat) console.log("Somthing went wrong while deleting.");
    }

    return (
        <ul className="list">
            {users.map((user) => (
                <li key={user._id} className="card">
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                    <h1>id: {user.id}</h1>
                    <h1>Address: street- {user.address.street}, city- {user.address.city} </h1>
                    <h1>Email: {user.email}</h1>
                    <button onClick={() => deleteUser(user._id)}>Delete user</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;