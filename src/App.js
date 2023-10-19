import Header from './components/Header'
import Home from './pages/Home'
import CowIndex from './pages/CowIndex'
import CowShow from './pages/CowShow'
import CowNew from './pages/CowNew'
import CowEdit from './pages/CowEdit'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import MockCows from './MockCows'
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'


function App() {
  const [cows, setCows] = useState(MockCows)
  return (
    <>
    <Header/>
      <Routes> 
        < Route path='/' element={<Home />} />
        < Route path='/cowindex' element={<CowIndex />} />
        < Route path='/cowshow' element={<CowShow />} />
        < Route path='/cownew' element={<CowNew />} />
        < Route path='/cowedit' element={<CowEdit />} />
        < Route path='*' element={<NotFound />}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App;