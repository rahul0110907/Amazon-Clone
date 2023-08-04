import React from 'react'
import Banner from './Banner'
import Products from './Products'
import Header from '../Header/Header'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
          <Header/>
        <Banner/>
        <div className='w-full -mt-12 xl:-mt-36 pt-10'>
        <Products/>
        <Footer/>
        </div>
       
    </div>
  )
}

export default Home