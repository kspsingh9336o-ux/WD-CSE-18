import React, { useEffect, useState } from "react";

function UseEffectExample() {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/eranubhav")
            .then(response => response.json())
            .then(data => setApiData(data));
    }, []);

    return (
        <>
            <h1 style={{ color: "red" }}>API Data</h1>

            <p>
                The useEffect hook is used to perform side effects in functional components.
            </p>

            {apiData && (
                <div>
                    <h2 style={{ color: "blue" }}>{apiData.name}</h2>
                    <img src={apiData.avatar_url} alt="profile" width="150" />
                    <p>Followers: {apiData.followers}</p>
import React, {useState} from 'react'

function DemoForm(){
    const [Data, setData] = useState({name: '', email: '', password: ''})

    const handleChange = (e) => {
        setData({...Data, [e.target.name]: e.target.value})
    });

    return (
        <div>
            <h1>User Demo Form</h1>
            <form>
                <input type='text' name='name' placeholder='Enter your name' value={Data.name} onChange={handleChange} />
                <input type='email' name='email' placeholder='Enter your email' value={Data.email} onChange={handleChange} />
                <input type='password' name='password' placeholder='Enter your password' value={Data.password} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default DemoForm




                </div>
            )}
        </>
    );
}

export default UseEffectExample;