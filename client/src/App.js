import React, { useState } from 'react';
import './App.css';

function App() {

const [username, setUsername] = useState("")
const [user, setUser] = useState("")

console.log(user)

  return (
    <div className="container">

      <div className='login'>
          <input 
          type='text' 
          placeholder='username' 
          onChange={(e)=> setUsername(e.target.value)}
          />
          <button onClick={()=> setUser(username)}>login</button>
      </div>
      
    </div>
  );
}

export default App;