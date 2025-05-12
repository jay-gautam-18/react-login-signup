import React from 'react'

const Users = ({uu,ue ,deleteHandler,userId}) => {
  
  return (
    <div className='h-[9.5vh] space-x-3 w-[29vh] relative hover:scale-115 ease-linear transition-all text-white opacity-80 rounded-4xl flex items-center justify-start pl-3 bg-amber-800 '>
        <div className='rounded-full  h-10 w-10 bg-amber-950 overflow-hidden'>
          <div className='rounded-full opacity-73 h-[80%] w-[80%] bg-white'>
            <div className='rounded-full opacity-73 h-[80%] w-[80%]  bg-amber-950'>
              <div className='rounded-full opacity-73 h-[60%] w-[60%] bg-white'></div>
            </div>
          </div>
        </div>
        <div>
        <h1 className='text-2xl font-extrabold italic'>{uu}</h1>
        <small className='font-bold'>{ue}</small>
        </div>
        <h1 className='text-amber-950 pl-3 hover:text-white transition-all font-extrabold text-xl absolute top-6.7 left-60  ' onClick={()=>deleteHandler(userId)}>X</h1>
    </div> 
  )
}

export default Users