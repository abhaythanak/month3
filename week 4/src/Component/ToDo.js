import React, { useState } from 'react'
import "./ToDo.css"
import Task from './Task'

export default function ToDo() {
    const [input , setInput] = useState("")
    const [items, setItems] = useState([])

    const itemEvent = (e) =>{
      setInput(e.target.value)
    }
    const listOfItem = () =>{
      setItems((oldItems) =>{
        return [...oldItems, input]
      })
      setInput("")
    }
    const Delete = (id) => {
      console.log("Deleted")
      setItems((oldItems) =>{
        return oldItems.filter((arrEle,index) =>{
          return index !== id
        })
      })
  }



  return (
    <div className='body'>
    <div className="container">
    <h1><span>ToDo List</span></h1>
    <div className="input">
        <input type="text"  className="txt" 
          placeholder="Add content here" value={input}
          onChange={itemEvent} />

        <button className="btn" onClick={listOfItem}>Add</button>
        
        <div>
        {/* {<p>{input}</p>} */}
       { items.map((itemValue, index)=> {
         return (
         <Task text ={itemValue}
         key={index}
         id={index}
         Text={itemValue}
         onSelect={Delete}
         />)
        })}
        </div>
        

        
    </div>
</div>
</div>
    
  )
}



