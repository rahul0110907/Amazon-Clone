import React from 'react'
import logo from '../../assets/logo.png'
import LanguageIcon from '@mui/icons-material/Language';

const FooterMiddle = () => {
  const list = ['Australia','Brazil','Canada','China','France','Germany','Italy','japan ','Maxico','Netherlands','Poland','Singapore','Spain','Turkey','United State','United Kindon',"United Arab Emirates"]
  return (
    <div className='w-full bg-amazon_lights text-white'>
        <div className='w-full border-b-[1px] border-gray-500 p-10'>
            <div className=' max-w-5xl mx-auto text-gray-300'>
                <div className='w-full  grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:place-items-center md:items-start'>
                   <div>
                   <h3 className=' font-titleFont text-white text-base font-semibold mb-3'> Get to Know Us</h3>
                     <ul className='flex flex-col gap-2 font-bodyFont'>
                     <li className='footerlink'>About us</li>
                    <li className='footerlink'>Careers</li>
                    <li className='footerlink'>Press Releases</li>
                    <li className='footerlink'>Amazon Science</li>
                     </ul>
                   </div>
                   <div>
                   <h3 className=' font-titleFont text-white text-base font-semibold mb-3'> Connect with Us</h3>
                     <ul className='flex flex-col gap-2 font-bodyFont'>
                    <li className='footerlink'>Facebook</li>
                    <li className='footerlink'>Twitter</li>
                    <li className='footerlink'>Instagram</li>
                     </ul>
                   </div>
                   <div>
                   <h3 className=' font-titleFont text-white text-base font-semibold mb-3'> Make Money With Us</h3>
                     <ul className='flex flex-col gap-2 font-bodyFont'>
                    <li className='footerlink'>Sell Products On Amezon</li>
                    <li className='footerlink'>Sell On Amezon Business</li>
                    <li className='footerlink'>Sell Opps On Amezon</li>
                    <li className='footerlink'>Become an Affiliate</li>
                    <li className='footerlink'>Fulfilment by Amazon</li>
                    <li className='footerlink'>Amazon Global Selling</li>
                    <li className='footerlink'>Amazon Pay on Merchants</li>
                    <li className='footerlink'>Protect and Build Your Brand</li>
                    <li className='footerlink'>Amazon Pay on Merchants</li>
                
                     </ul>
                   </div>
                
                   <div>
                   <h3 className=' font-titleFont text-white text-base font-semibold mb-3'> Let Us Help You</h3>
                     <ul className='flex flex-col gap-2 font-bodyFont'>
                    <li className='footerlink'>COVID-19 and Amazon</li>
                    <li className='footerlink'>Your Account</li>
                    <li className='footerlink'>Returns Centre</li>
                    <li className='footerlink'>100% Purchase Protection</li>
                    <li  className='footerlink'>Amazon App Download</li>
                    <li className='footerlink'>Help</li>
                     </ul>
                   </div>
                    </div> 
                  

            </div>
           
        </div>
        <div className='w-full flex gap-6 items-center justify-center py-6'>
          <div>
            <img src={logo} className='w-20 pt-3' alt='logo'/>
          </div>
          <div className='flex gap-2'>
          <p className='flex gap-2 items-center justify-center border border-gray-500
           hover:border-x-amazon_yellow cursor-pointer duration-200 py-1 px-2'><LanguageIcon fontSize='sm'/>English</p>
          </div>
  
                    </div>
                    <div className='w-full  xl:px-52 px-10 md:px-28 pb-10 '>
            <ul className='flex justify-start gap-2 md:items-center md:justify-center flex-wrap '>
{
  list.map((item)=>{
    return(
      <li className=' font-sm text-[16px] md:text-sm  xl:text-sm hover:underline  '>{item}</li>
    )
  })
}
</ul>
          </div>
                
    </div>
  )
}

export default FooterMiddle