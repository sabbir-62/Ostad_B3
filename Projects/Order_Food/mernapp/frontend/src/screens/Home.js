import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'

export default function Home() {
    return (
        <div>
            <div>
                <Navbar></Navbar> 
            </div>
            <div><Carousel></Carousel></div>
            <div className='m-4'>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    )
}
