// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Test } from './Test'
// import { Test2 } from './Test2'
// App component
import React from 'react';
import { Route, Routes, Link, useNavigate} from 'react-router-dom';
import {Home, About, Header, Tasks, Todo} from './components'
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/layout/Footer';

function App() {
  //const nav = useNavigate();

  // const handleAboutClick = () => 
  // {
  //   nav('/about');
  // };

  //  <button onClick={handleAboutClick}>about screen</button>

  return (
    <div>
      <Header/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/todo/:todoId" element={<Todo />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
  //const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://dummyjson.com/users')
  //     const data = await res.json()
  //     setUsers(data.users)
  //   }
  //   fetchData()
  // }, [])

  // return (
  //   <div>      
  //     {users.map((user) =>(
  //       <div key={user.id}>
  //         <h1>{user.firstName + " " + user.bank.cardNumber}</h1>
  //       </div>
  //     )) }
  //   </div>
  // )

  //const [count, setCount] = useState(0)
  //const [show, setShow] = useState(false)
  // const [abc, setAbc] = useState('a')

  // const changeCount = () => {
  //   setCount(count + 1)
  // }
  // const nextChar = () => {
  //   setAbc(String.fromCharCode(abc.charCodeAt(0) + 1))
  // } 

  // const [user, setUser] = useState(
  //   [ {name:'avi', age:21}, {name:'tal', age:40}]
  // )

  // useEffect(() => {
  //   console.log("useEffect1")
  //   alert(count)

  //   return () => {
  //     console.log("useEffect2")
  //   }
  // }, [count])
  
  // console.log("App.jsx")

  // <Test count={count} setCount={setCount}/>
  // <button onClick={()=>setShow(!show)}>
  //       next component
  //     </button>

  //     {show ? <Test2 /> : null}

  //     <h1>
  //       bool value: {show.toString()}
  //     </h1>
//   <h1>
//   count: {count}
//   <br />
//   abc: {abc}
//   <br />
  //   {JSON.stringify(user)}
// </h1>
// <button onClick={changeCount}>
//     add count
// </button>
// <br></br>
// <button onClick={nextChar}>
//     add abc
// </button>

