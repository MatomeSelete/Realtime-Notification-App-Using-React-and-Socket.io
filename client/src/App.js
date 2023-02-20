

import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/NavBar/Navbar";
import { posts } from "./data";
import { io } from "socket.io-client";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
//   const [socket, setSocket] = useState(null);
const socket = io("http://localhost:5000");

  useEffect(() => {
    // setSocket(io("http://localhost:5000"));
    

    socket.on("connect", () => {
        // socket.emit('connected');
        console.log(socket.id)
      });
   
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user}/>
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <h2>Lama App</h2>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;








// import React, { useState, useEffect } from 'react';
// import { io } from "socket.io-client";

// ////// ------------- components -------------\\\\\\\\\\
// import Navbar from './components/NavBar/Navbar'
// import Card from './components/card/Card'
// import { posts} from './data'

// ////// ------------- styles -------------\\\\\\\\\\
// import './App.css';

// function App() {

// const [username, setUsername] = useState("")
// const [user, setUser] = useState("")
// // const [socket, setSocket] = useState(null);

// useEffect(() => {
//   const socket = io("http//localhost:5000");
//   console.log(socket)
// }, [])

// // useEffect(() => {
// //   socket?.emit("newUser", user);
// // }, [socket, user]);

// // console.log(user)

//   return (
//     <div className="container">

//       {user ? (
//         <>
//         <Navbar />
//         {posts.map((post)=>
//           <Card key={post.id} post={ post } />
//         )}
        
//         <span className='username'> {user} </span>
//         </>
//       ) : (

      

//       <div className='login'>
//           <input 
//           type='text' 
//           placeholder='username' 
//           onChange={(e)=> setUsername(e.target.value)}
//           />
//           <button onClick={()=> setUser(username)}>login</button>
//       </div>
//        )} 
//     </div>
//   );
// }

// export default App;
