import { useState } from "react";
import style from './About.module.css'
export default function About(){
    const [counter,setCounter]=useState(0);
    const [items,setItems]=useState(["item1","item2","item3","item4","item5","item6","item7","item8"]);
    const increment = ()=>{
        setCounter(counter+1)
       console.log(counter);    
    
    }
    const decrement = ()=>{
        setCounter(counter-1)
       console.log(counter);    
    
    }
    return (
        <section className={style.test}>
            <h2>About</h2>
            <p>counter is {counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <ul>
                {
                    items.map((item)=><li>{item}</li>)
                }
            </ul>
        </section>
    )
}