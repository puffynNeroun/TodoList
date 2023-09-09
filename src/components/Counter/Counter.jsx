import { useState } from "react"
import './counter.css'
const Counter = () =>{


    const [count, setCount] = useState(0)
    const increment = () => {
        if(count < 10){
                setCount(count + 1)
        }
        
    }
    const decrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
       
    }

    return (
        <div>
                <p className="text">{count}</p>
                <button className="text__button" onClick={increment}>+</button>
                <button className="text__button" onClick={decrement}>-</button>
        </div>
    )
}

export default Counter