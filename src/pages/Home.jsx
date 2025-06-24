import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import Test from '../components/Testss'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero/>
      <FeatureDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}
