import React, { useState } from 'react';
import '../css/App.css';
import Login from './login';
import Books from './books';


function App1() {

  const [token, setToken] = useState('');

  
  const userLogin = (tok) => {
    setToken(tok);
    
  }
  
  
  return (
    <div className="App1">
      <Login userLogin={userLogin}/>
      <Books token={token}/>
    </div>
  );
}

export default App1;
