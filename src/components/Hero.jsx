import React from 'react'
import shoeImg from '../assets/shoe-removebg-preview.png';

export default function Hero() {
    return (
        <div>
            <main className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>Discover the perfect blend of comfort and style with our premium footwear collection. Step into a world where every step feels like a dream.</p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className='secondary-btn '>Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icons">
                            <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="amazon" width={30} />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbL2KBO11mdgsZIJCR0z01JEvGLGg8l1OowQ&s" alt="flipcart" width={50} />
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={shoeImg} alt="shoe" width={600} />
                </div>
            </main>
        </div>
    )
}


