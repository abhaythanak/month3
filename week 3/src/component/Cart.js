import React from 'react'

export default function Cart(){
   
    return(
        <Cart>
        {Cart.map((item) => (
            <div className='CartBox' key={item.id}>
                <div className='CartImg'>
                    <img src={item.img} />
                    <p>{item.title}</p>
                </div>
                <button>Remove</button>

            </div>
        ))}
    </Cart>
    )
}

    

