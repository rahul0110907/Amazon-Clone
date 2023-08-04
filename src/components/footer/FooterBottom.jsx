import React from 'react'

const FooterBottom = () => {
  const list = [
    {
      title:'AbeBooks',
      body: 'Books, art  & collectibles'
    },
    {
      title:'Amazon Web Services',
      body: 'Scalable Cloud Computing Services'
    },
    {
      title:'Audible',
      body: 'Download Audio Books'
    },
    {
      title:'DPReview',
      body: 'Digital Photography'
    },
    {
      title:'	IMDb',
      body: 'Movies, TV  & Celebrities'
    },
    {
      title:'Shopbop',
      body: 'Designer Fashion Brands'
    },
    {
      title:'Amazon Business',
      body: 'Everything For Your Business'
    },
    {
      title:'Prime Now',
      body: '2-Hour Delivery on Everyday Items'
    },
    {
      title:'	Amazon Prime Music',
      body: '100 million songs, ad-free Over 15 million podcast episodes'
    },
  ]
  return (
    <div className='w-full bg-footerBottam p-8'>
      <div className=' max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-2  md:grid-cols-4 xl:grid-cols-5 gap-3 place-content-center text-gray-400'>
          {
            list.map((item,index)=>{
              return(
                <div className='group cursor-pointer' key={index}>
                  <h3 className='w-24 font-semibold text-[12px] group-hover:underline leading-3 text-[#DDD] mb-[2px]'>{item.title}</h3>
                  <p className=' text-[#999] tracking-tight text-[12px] group-hover:underline leading-3'>{item.body}</p>
                </div>
              )
            })
          }
        </div>
</div>
<div className='mx-auto pt-6'>
  <ul className='flex gap-3 justify-center items-center  text-[#DDD] cursor-pointer'>
    <li className='hover:underline text-sm '>Conditions of Use & Sale</li>
    <li className='hover:underline text-sm '>Privacy Notice</li>
    <li className='hover:underline text-sm '>Interest-Based Ads</li>
  </ul>
</div>
<div className='max-auto mt-5 xl:mt-2 md:mt-3'>
  <p className='flex  justify-center items-center  text-[#DDD] text-[12px] md:text-sm'> © 1996-2023, Amazon.com, Inc. or its affiliates</p>
</div>
    </div>
  )
}

export default FooterBottom