import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import our componenets and custom Hook
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import useToken from './useToken';

function App() {
  //this is a Hook, it hooks into the state of our App component and stores our token 
  // setToken wnich is the fucntion that updates token
  //the inital state of token undefined
  //const [token, setToken] = useState();
  //console.log(token);

  //this is our custom Hook
  const {token, setToken} = useToken();

  //if token does not have a value (which is the default value of the hook), display Login if the token is falsy.
  //return our Login component with the setToken function 

  if(!token){
    //this returns our Login component with the setToken attribute which calls setToken from our hook
    return <Login setToken={setToken} />
  }

  //if there is a token found then return Application and the corresponding route
  return (
    <div className="wrapper">
      <h1>Application</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/preferences' element={<Preferences />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
