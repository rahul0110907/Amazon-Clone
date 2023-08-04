import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SideNavBar from './SideNavBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'


const HeaderBottam = () => {
    const userInfo = useSelector((state)=>state.amazon.userInfo)
    const[showAll,setShowAll]=useState(false);

    //for sidebar disappear when we  click anywhere in the body , so we make a useRef and put it in the sidebar div
    // then we make a useEffect hook for event lister .
    const ref =useRef();
    const list = ['Todays deal' ,'Customer services','Gift cards','Registry','Sell']

    useEffect(()=>{
        document.body.addEventListener('click',(e)=>{
            if(e.target.contains(ref.current)){
                setShowAll(false);
            }
        })
    },[])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_lights text-whiteText flex items-center '>
        <ul className='flex items-center gap-2 text-sm tracking-wide'>
            <li className='px-2 h-[80%] border border-transparent
                        hover:border-white cursor-pointer duration-100 flex gap-1 items-center'
                        onClick={()=>setShowAll(true)}><MenuIcon/>All</li>
            {
                list.map((item,index)=>{
                    return(
                        <li  key={index} className='px-2 h-[80%] border border-transparent
                        hover:border-white cursor-pointer duration-100 hidden md:inline-flex' >{item} </li> 
                    )
                })
            }
      
               
        </ul>
        {
            showAll && (
                <div className='w-full h-screen text-black fixed top-0 left-0  bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full  relative'>
                        <motion.div ref={ref} initial={{opacity:0,x:-500}} animate={{opacity:1,x:0}} transition={{duration:0.5}} 
                        className='w-[80%] md:w-[350px] h-full overflow-y-scroll overflow-x-hidden bg-white border border-black'>
                            <div className='w-full bg-amazon_lights text-whiteText py-2 px-6 flex
                             items-center gap-4 '>
                                <AccountCircleIcon/>
                              {
                                userInfo ?(  <h3 className=' font-titleFont  font-bold text-lg tracking-wide'>Hello,<span className='uppercase'> {userInfo.userName}</span> </h3>):(  <h3 className=' font-titleFont  font-bold text-lg tracking-wide'>Hello, Sign In </h3>)
                              }
                             </div>
                             <SideNavBar title="Trending" one="Best Seller" two="New Releases" three="Movers and Shakers"/>
                             <SideNavBar title="Digital Contant & Devices" one="Amezon prime Music" two="Kindle E-readers & Books" three="Amazon Prime Video"/>
                             <SideNavBar title="Shop By Category" one="Mobile, Computers" two="TV Applications, Electronics" three="Men's Fashion"/>
                             <SideNavBar title="Programs & Features" one="Gift Cards & Mobile Recharges" two="Amezon Launchpad" three="Flight Tickets"/>
                             <SideNavBar title="Help & settings" one="Your Accounts" two="Customer Service" three="Sign In "/>
                             <span  onClick={()=>setShowAll(false)}className=' cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black
                        flex  items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white
                        duration-300 '><CloseIcon/></span>
                        </motion.div>
                       
                    </div>
                </div>
            )
        }
    
    </div>
  )
}

export default HeaderBottam 