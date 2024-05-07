import React from 'react'
import Header from "./Header"
import OurModel from './OurModel'

const Home = () => {
  return (
    <>
    <Header/>
    <OurModel/>
    </>
  )
}

export default Home

export const Baseurl = 'https://api.coingecko.com/api/v3'