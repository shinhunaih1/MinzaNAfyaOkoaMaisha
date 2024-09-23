import React from 'react'
import HeroSection from "../components/HeroSection"
import ListOfArticles from '../components/ListOfArticles'
import Comments from '../components/Comments'
import FAQs from '../components/FAQs'
const Home = () => {
  return (
    <div className='relative top-24'>
        <HeroSection/>
        <ListOfArticles/>
        <Comments/>
        <FAQs/>
    </div>
  )
}

export default Home