import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Highlight from './highlight/highlight'

const Home = () => {
  return (
    <div className='Home'>

        <div className='header'>
            <Navbar />
        </div>
        <div className='content'>
            <Highlight />
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}

export default Home
