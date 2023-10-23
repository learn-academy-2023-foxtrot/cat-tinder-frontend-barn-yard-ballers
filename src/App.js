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
import './App.css'


function App() {
  const [cows, setCows] = useState(MockCows)

  const readCow = () => {
    fetch("http://localhost:3000/cows")
      .then((response) => response.json())
      .then((payload) => setCows(payload))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    readCow()
  }, [])

  const createCow = (newCow) => {
    fetch("http://localhost:3000/cows", {
      body: JSON.stringify(newCow),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readCow())
      .catch((errors) => console.log("Cow create error:", errors))
  }
  const updateCow = (editCow, id) => {
    fetch(`http://localhost:3000/cows/${id}`, {
      body: JSON.stringify(editCow),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then(() => readCow())
    .catch((errors) => console.log("Cow update errors:", errors))
  }

  return (
    <>
    <Header/>
      <Routes> 
        < Route path='/' element={<Home />} />
        < Route path='/cowindex' element={<CowIndex cows={ cows } />} />
        < Route path='/cowshow/:id' element={<CowShow cows={ cows } />} />
        < Route path='/cownew' element={<CowNew createCow={ createCow } />} />
        < Route path='/cowedit/:id' element={<CowEdit cows={ cows } updateCow={ updateCow } />} />
        < Route path='*' element={<NotFound />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App;