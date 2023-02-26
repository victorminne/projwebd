import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import Search from './components/Search/search'
import Detail from './components/detail/detail'
import Contact from './components/contact/contact.js'


const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/search/" element={<Search />}/>
            <Route path="/detail/:objectID" element=<Detail />/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<h1>404: Not Found</h1>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App