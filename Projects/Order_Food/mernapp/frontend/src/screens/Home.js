import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'


export default function Home() {

    const  [search, setSearch] = useState('');

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/v1/foodItems", {
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
    }, [])




    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div className="form-inline d-flex justify-content-center">
                                <input className="mx-3 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange={(e) => {setSearch(e.target.value)}}/>
                                {/* <button className="btn text-white btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {
                    foodCategory !== [] ? foodCategory.map((data) => {
                        return (
                            <div className='row mb-3'>
                                <div className='text-light fs-3 m-3' key={data._id}>{data.CategoryName}</div>
                                <hr></hr>
                                {foodItem !== [] ? foodItem.filter((item) =>
                                    (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItems => {
                                        return (
                                            <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                <Cards foodName={filterItems.name}
                                                    options={filterItems.options[0]}
                                                    imgSrc={filterItems.img}
                                                ></Cards>
                                            </div>
                                        )
                                    }
                                    ) : <div>No Such Data Found</div>}
                            </div>
                        )
                    })
                        : ""

                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
