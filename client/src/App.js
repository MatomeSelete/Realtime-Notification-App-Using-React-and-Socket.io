import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar'
import Card from './components/card/Card'
import { posts} from './data'
import './App.css';

function App() {

const [username, setUsername] = useState("")
const [user, setUser] = useState("")

console.log(user)

  return (
    <div className="container">

      {user ? (
        <>
        <Navbar />
        {posts.map((post)=>
          <Card key={post.id} post={ post } />
        )}
        
        <span className='username'> {user} </span>
        </>
      ) : (

      

      <div className='login'>
          <input 
          type='text' 
          placeholder='username' 
          onChange={(e)=> setUsername(e.target.value)}
          />
          <button onClick={()=> setUser(username)}>login</button>
      </div>
       )} 
    </div>
  );
}

export default App;
