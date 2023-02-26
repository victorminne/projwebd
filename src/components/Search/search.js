import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import AdvancedSearchBar from './advancedSearch/advancedSearch'

const Home = () => {
  return (
    <div className='Home'>

        <div className='header'>
            <Navbar />
        </div>
        <div className='content'>
            <AdvancedSearchBar />
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}

export default Home