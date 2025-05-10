import React from 'react'
import Users from './Users'
const UserList = ({user,setusers}) => {
  const deleteHandler = (e)=>{
  const copyUser = [...user]
  copyUser.splice(e,1)
  setusers(copyUser);

  }
  const useList = user.map((user, i) => {
    return <li className='mb-2' key={i}><Users uu={user.name} userId={i} deleteHandler={deleteHandler} /></li> 
  })
  return (
    <div className='absolute py-5 h-full left-[83%] flex flex-col gap-3'>
      <h1 className='text-[45px] opacity-75 text-amber-950 font-extrabold  trackinh-tighter mt-4  italic ' >Registered User:</h1>
      <ul className=' pl-3 space-x-2'>
       {useList}
      </ul>
    </div>
  )
}

export default UserList