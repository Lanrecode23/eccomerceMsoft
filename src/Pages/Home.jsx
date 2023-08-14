import React  from 'react'
import Toproduct from '../Components/Toproduct'
import Hero from '../Components/Hero'
import Section from '../Components/Section'
import Testimonial from "../Components/testimonial";

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
