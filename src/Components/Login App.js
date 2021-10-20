import React, { useState } from 'react';
import '../css/App.css';
import Login from './login';
import Login2 from './Login2';


function App1() {

  const [token, setToken] = useState('');

  
  const userLogin = (tok) => {
    setToken(tok);
    
  }
  
  
  return (
    <div className="App1">
      <Login userLogin={userLogin}/>
      <Login2 token={token}/>
    </div>
  );
}

export default App1;
