import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='conatiner'> 
        <div className="logo">
          <img src="https://i.pinimg.com/736x/8e/60/08/8e60085f984cd478f4d192e327af39b5.jpg" alt="logo" width={70} />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>login</button>
      </nav>
    </div>
  )
}
