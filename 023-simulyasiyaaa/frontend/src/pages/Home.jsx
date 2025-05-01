import React from 'react'
import Header from '../components/header/Header'
import Section from '../components/sections/section1/Section'
import Section2 from '../components/sections/section2/Section2'
import Section3 from '../components/sections/section3/Section3'

const Home = () => {
  return (
    <>
    <div>
        <Header/>
        <Section/>
        <Section2/>
        <Section3/>
    </div>        
    </>
  )
}

export default Home