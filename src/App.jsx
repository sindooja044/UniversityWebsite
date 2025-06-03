import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Programs';
import Title from './components/Title/Title';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title/>
         <Program/>
      </div>
     
    </div>
  )
}

export default App
