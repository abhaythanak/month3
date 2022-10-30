import React from 'react'
import '../styles/card.css'


export default function Card({item,handleClick}) {
    const {id, title, author, price, img } = item;
    return(
        <div className='cards'>
            <div className='imageBox'>
                <img src={img}/>
            </div>
            <div className='detail'>
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}</p>
                <button>Buy</button>
                <button onClick={()=>handleClick(item)}>🛒</button>
            </div>
        </div>

    )
}