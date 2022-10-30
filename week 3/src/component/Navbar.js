import React from 'react'
import '../styles/navbar.css'

export default function Navbar({setShow}) {
  return (
    <nav>
        <div className='navBox' >

            <span className='myShop' onClick={()=>setShow(true)}>Dark Purchasing</span>

            <span>Menu</span>
            <span>About</span>

            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>

                <span>0</span>

            </div>

        </div>
    </nav>
  )
}
