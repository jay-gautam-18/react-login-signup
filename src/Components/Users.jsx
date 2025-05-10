import React from 'react'

const Users = ({uu ,deleteHandler,userId}) => {
  
  return (
    <div className='h-[8vh] space-x-3 w-[27vh] relative hover:scale-115 ease-linear transition-all text-white opacity-80 rounded-4xl flex items-center justify-start pl-3 bg-amber-800 '>
        <div className='rounded-full  h-10 w-10 bg-amber-950 overflow-hidden'>
          <div className='rounded-full opacity-73 h-[80%] w-[80%] bg-white'>
            <div className='rounded-full opacity-73 h-[80%] w-[80%]  bg-amber-950'>
              <div className='rounded-full opacity-73 h-[60%] w-[60%] bg-white'></div>
            </div>
          </div>
        </div>
        <h1 className='text-3xl font-extrabold italic'>{uu}</h1>
        <h1 className='text-amber-950 pl-3 hover:text-white transition-all font-extrabold text-xl absolute top-6.7 left-50  ' onClick={()=>deleteHandler(userId)}>X</h1>
    </div> 
  )
}

export default Users