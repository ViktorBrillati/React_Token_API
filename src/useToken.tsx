import React, { useState } from 'react';

function useToken() {
    //now that we have set our token in session storage we want to retreive it so that we 
    // can authenticate the user and return the correct route
    const getToken = () => {
        //now we get our token from sessionStorage which was stringified and now 
        //sotred in a const called tokenString
        const tokenString = sessionStorage.getItem('token')!;
        console.log(tokenString);
        //we want to parse our JSON string into an object 
        const userToken = JSON.parse(tokenString);
        console.log(userToken);
        return userToken?.token
      }

    const [token, setToken] = useState(getToken());

    //setToken is the function that is updating our token so the argument is the token itself
    const saveToken = userToken => {
    console.log(userToken);
    //now that we have our token from our sever we want to save the token to a session
    //The setItem() method sets the value of the specified Storage Object item
    //the setItem contains 2 parameters: the keyname and the value 
    sessionStorage.setItem('token', JSON.stringify(userToken));
    //this sets the value of our token into session storage!
    setToken(userToken.token);
  }  

  return {
      setToken: saveToken,
      token
  }

}

export default useToken;