import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import ObjectDetails from './objectDetails/objectDetails'

const Home = () => {
  return (
    <div className='Home'>

        <div className='header'>
            <Navbar />
        </div>
        <div className='content'>
            <ObjectDetails />
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}

export default Home