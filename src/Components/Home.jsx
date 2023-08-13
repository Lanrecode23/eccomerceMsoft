import React  from 'react'
import Toproduct from './Toproduct'
import Hero from './Hero'
import Section from './Section'
import Testimonial from "./testimonial";

function Home() {  
  return (
    <div>   
        
        <Hero/>
        <Section/>  
      <Toproduct  />
      <Testimonial/>
    </div>
  )
}

export default Home
