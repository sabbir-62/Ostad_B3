import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'

export default function Home() {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async() => {
        let response = await fetch("http://localhost:5000/api/v1/foodItems",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();

        setFoodItem(response[0]);
        setFoodCategory(response[1]);
        
    }

    useEffect(() => {
        loadData()
    },[])




    return (
        <div>
            <div>
                <Navbar></Navbar> 
            </div>
            <div><Carousel></Carousel></div>
            <div className='container'>
                {
                    foodCategory !== [] ? foodCategory.map((data) => {
                        return <div className='text-light' key={data._id}>{data.CategoryName}</div>
                    })
                    : <div>"""""""</div>
                }
                <Cards></Cards>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    )
}
