import { useState } from "react";
import '../index.css';

const Userform = ({ onAddUser }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');

    const handleUser = async (e) => {
        e.preventDefault();
        const user = { name, age, id, address: { street, city }, email };
        try {
            const response = await fetch("http://localhost:8080/api/users",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                }
            )
            await onAddUser();
            if (!response.ok) console.log("User has not been added");
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={handleUser} className="form-container">
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age: </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="id">ID: </label>
                    <input
                        type="number"
                        value={id}
                        onChange={(e) => setId(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="street">Street: </label>
                    <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="city">City: </label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Userform;