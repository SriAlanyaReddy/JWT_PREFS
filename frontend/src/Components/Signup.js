

import React from 'react';
import axios from 'axios';
import { useState } from 'react';

{/*const Signup= () => {
    const [formdata, setformdata] = useState({
        name:"",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/signup', formdata);
            alert("sign in successfully");
            setformdata({ name:"",email: "", password: "" });
            
           
        } catch (err) {
            alert(`Error: ${err.response?.data?.message || err.message}`);
        }
    };

    return (
        <div className="signinpage">
            <center>
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formdata.name}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formdata.email}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formdata.password}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <button type="submit">Signup</button>
                </form>
            </center>
        </div>
    );
};

export default Signup;*/}


const Signup = () => {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/signup', formdata);
            alert("Sign up successfully");
            setformdata({ name: "", email: "", password: "" });
        } catch (err) {
            alert(`Error: ${err.response?.data?.message || err.message}`);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f4f4f9',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '16px',
                                color: '#333'
                            }}
                            placeholder="Enter your name"
                            value={formdata.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '16px',
                                color: '#333'
                            }}
                            placeholder="Enter your email"
                            value={formdata.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '16px',
                                color: '#333'
                            }}
                            placeholder="Enter your password"
                            value={formdata.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            fontSize: '16px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

