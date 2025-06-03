import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';

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
          <Campus/>
           <Title subtitle='Testimonials' title='see what student says'/>
      </div>
     
    </div>
  )
}

export default App
