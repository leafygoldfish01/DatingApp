import { useState } from 'react'
import Header from './Components/Header'
import DatingCards from './Components/DatingCards'
import SwipeButtons from './Components/SwipeButtons'

import './App.css'

function App() {

  return (
    <>
      <div className='App'> 
        <Header />
        <DatingCards />
        <SwipeButtons />
      </div>
    </>
  )
}

export default App
