import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';

//here we wait to call out API which we are running in Express on port 8080
//we use fetch to get the info from our API with request headers 
//call the fetch method using the POST option
async function loginUser(creds) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //we turn our creds object which holds a JSON of username and password and then stringify it
      body: JSON.stringify(creds)
      //the json method returns a promise 
    })
    //we return the data from our server
    .then(data => data.json())
}

//here we are passing in the value of our setToken function into our Login function 
function Login({setToken}) {

    const [username, setUsername] = useState(String);
    const [password, setPassword] = useState(String);

    //create a form submit handler called handleSubmit 
    //this will call loginUser with the username and password and then call our setToken function
    const handleSubmit = async e => {
        e.preventDefault();
        //Once we submit our form we call our handleSubmit which then calls loginuser
        //we pass username and password as a JSON to loginuser 
        //and then store what is returned by loginUser to a varibale token, which is our key! 
        const token = await loginUser({
            username,
            password
        });
        console.log(token);
        //the result of our console.log is a object with our token from our server!
        setToken(token);
    }

    return(
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <p>Username:</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label htmlFor="">
                    <p>Password:</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTyoes = {
    setToken: PropTypes.func.isRequired 
}

export default Login;