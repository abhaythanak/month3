import React, { useState } from 'react'
import list from '../Data'
import Card from './Card'
import '../styles/shopping.css'


export default function Shopping() {
    const [Cart, setCart] = useState([]);

    const handleClick = (item) =>{
        //console.log(item)
        Cart.push(item);
        console.log(Cart)

    }


    return (
        <section>
            {
                list.map((item)=> (
                    <Card key={item.id} item={item} handleClick={handleClick} />
                ))
            }
        </section>
        
    )
}