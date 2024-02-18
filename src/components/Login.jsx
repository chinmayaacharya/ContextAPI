import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext';


function Login() {
  const [username,setUsername]=useState('');
  const [pass,setPass]=useState('');
  const{setUser}=useContext(UserContext)
  const handleSubmit=(e)=>{
   e.preventDefault()
   setUser({username,pass})
  }
  return (
    <div><h2>Login</h2>
      <div>
        <input 
        type='text'
        value={username}
        placeholder='Username'
        onChange={(e)=>setUsername(e.target.value)}
        >

        </input>
      
        <input type="password" 
        value={pass}
        placeholder='Password'
        onChange={(e)=>setPass(e.target.value)}
        />
        
          <button onClick={handleSubmit}>Submit</button>
        
      </div>
    </div>
  )
}

export default Login