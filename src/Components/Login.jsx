import React from 'react'

const Login = ({toggler,settoggler,forms,user}) => {
  const submitHandler =(data) => {
    if(user.users.length === 0){
      alert("no user found , please register")
      return
    }
    user.users.find(u => u.email === data.email && u.password === data.password ? alert("Login Successful") : alert("Invalid Credentials"))
  }
  
  return (
    <div className='h-[70vh] w-[120vh] rounded-4xl overflow-hidden shadow-[30px] shadow-black  bg-white flex'>
      <div className='h-full w-1/2 rounded-4xl shadow-black bg-yellow-800 flex items-center bg-cover justify-center bg-[url(https://images.unsplash.com/photo-1594162550791-1a03cfc339d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNpcmNsZXN8ZW58MHx8MHx8fDA%3D)]'>
        <div className='bg-black opacity-65 h-4/5 w-4/5 rounded-4xl flex items-center'>
        <h1 className='text-7xl font-extrabold text-white p-3'>Let's Start The Journey</h1>
        </div>
      </div>
      <div className='h-full w-1/2  shadow-[30px] shadow-black  bg-white flex flex-col items-start pl-10 justify-evenly'>
        <h1 className='text-[55px] opacity-75 text-amber-900 font-extrabold  trackinh-tighter mt-4  italic' > Login Page</h1>
        <form onSubmit={forms.handleSubmit(submitHandler)}
        className='h-[60%] w-[100%] flex flex-col  justify-evenly  items-start '>
            
            <input className='bg-transparent h-[10%] w-[90%] border-b-2 placeholder:italic place-content-stretch rounded py-3 px-2 text-xl' type="email" placeholder='email' 
            {...forms.register("email")} />
            <input className='bg-transparent h-[10%] w-[90%] border-b-2 placeholder:italic place-content-stretch rounded py-3 px-2 text-xl' type="password" placeholder='enter password' {...forms.register("password")} />
            <button type='submit' className='bg-yellow-500 transition-all text-amber-950 hover:bg-amber-900 hover:text-yellow-500 py-2 px-10 rounded-xl text-xl font-bold'>SignIn</button>
        </form>
        <div className=' w-full mb-7 flex justify-start items-center space-y-2 '>
            <small className='text-lg underline'>Don't have an account?</small> 
            <button  onClick={()=>settoggler(!toggler)} className='ml-4 underline pb-1.5  text-blue-800'> Register?</button> 
        </div>
      </div>
    </div>
  )
}

export default Login