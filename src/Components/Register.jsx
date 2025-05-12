import React from 'react'

const Register = ({toggler,settoggler,forms,user}) => {
  const submitHandler = (data) => {
    const found = user.users.find( u =>  u.email === data.email || u.name === data.name)
    if(found){
      alert("User already exists")
      forms.reset()
      return
    }
    user.setusers((prevUsers) => [...prevUsers, { name: data.name, email: data.email , password: data.password }]);
    forms.reset()
  }
  
  return (
    <div className='h-[70vh] w-[120vh] rounded-4xl overflow-hidden shadow-[30px] shadow-black  bg-white flex'>
      <div className='h-full w-1/2 rounded-4xl bg-yellow-800 flex items-center bg-cover justify-center bg-[url(https://images.unsplash.com/photo-1594162550791-1a03cfc339d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNpcmNsZXN8ZW58MHx8MHx8fDA%3D)]'>
        <div className='bg-black opacity-65 h-4/5 w-4/5 rounded-4xl flex items-center'>
        <h1 className='text-7xl font-extrabold text-white p-3'>Get Back To The Journey</h1>
        </div>
      </div>
    <div className='h-full w-1/2  shadow-[30px] shadow-black  bg-white flex flex-col items-start pl-10 justify-evenly'>
        <h1 className='text-[55px] opacity-75 text-amber-900 font-extrabold  trackinh-tighter mt-4  italic' > Register page</h1>
        <form onSubmit={forms.handleSubmit(submitHandler)}
        className='h-[60%] w-[100%] flex flex-col  justify-evenly  items-start '>
            <input  {...forms.register("name")}
             className='bg-transparent border-b-2 placeholder:italic place-content-stretch h-[10%] w-[80%]  rounded py-3 px-2 text-xl' type="text" placeholder='name'/>
            <input {...forms.register("email")}
             className='bg-transparent border-b-2 placeholder:italic place-content-stretch h-[10%] w-[80%]  rounded py-3 px-2 text-xl' type="email" placeholder='email' />
            <input {...forms.register("password")}
             className='bg-transparent border-b-2 placeholder:italic place-content-stretch h-[10%] w-[80%]  rounded py-3 px-2 text-xl' type="password" placeholder='enter password' />
            <button type='submit' className='bg-yellow-500 transition-all text-amber-950 hover:bg-amber-900 hover:text-yellow-500 py-2 px-10 rounded-xl text-xl font-bold'>SignUp</button>
        </form>
        <div className='w-full mb-7 flex justify-start items-center space-y-2'>
            <small className='text-lg underline'>Already have an account?  </small>
            <button  onClick={()=>settoggler(!toggler)} className='ml-4 underline pb-1.5 text-blue-800'> Login?</button>
        </div>
      </div>
    </div>
  )
}

export default Register