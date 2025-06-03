import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What we offer'/>
         <Program/>
         <About/>
          <Title subtitle='Gallery' title='Campus Photos'/>
      </div>
     
    </div>
  )
}

export default App
