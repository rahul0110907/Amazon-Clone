import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const FooterTop = () => {
 
  const userInfo = useSelector((state) => state.amazon.userInfo);

  return (

    <div className='w-full bg-white py-6'>
      {
userInfo?(
 ''
): <div className='w-full border-t-[1px] border-b-[1px] py-8'>
<div className='w-64 mx-auto text-center'>
    <p className='text-sm'>See personalized recommendations </p>
    <Link to ='/SignIn' ><button className='w-full bg-yellow-400 rounded-md py-1 font-semibold
     cursor-pointer hover:bg-yellow-500 active:bg-yellow-700'>Sign In</button></Link>
     <p>New customer?<Link to='/Registeration'><span className='text-blue-600 ml-1 cursor-pointer '>Start here</span></Link></p>
</div>
</div>
      }
       
    </div>
  )
}

export default FooterTop