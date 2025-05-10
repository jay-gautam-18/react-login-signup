import React from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import UserList from './Components/UserList'
const App = () => {
  const [toggler, settoggler] = useState(true)  
  const { register,formState: { errors }, handleSubmit ,reset} = useForm()
  const forms = {
    register,handleSubmit ,reset
  }
  const [users, setusers] = useState([])
  const user = {
    users,setusers
  }
  return (
    <div className='h-screen w-screen bg-amber-500 flex items-center justify-center'>
      {toggler ? 
      <Register toggler={toggler} user={user} settoggler={settoggler} forms={forms}/>
       :
        <Login toggler={toggler} settoggler={settoggler} user={user} forms={forms}/>}
        {users.length != 0 ? <UserList user = {users} setusers={setusers} />: 
        <h1 className='text-[45px] opacity-75 text-amber-950 absolute left-[85%] top-0 font-extrabold  trackinh-tighter mt-4  italic ' >No :-( Registered User</h1> }
      
    </div>
  )
}

export default App