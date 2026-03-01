
import { useState } from "react";
import "./Counter.css";

function Counter(){

    const [count, setCount] = useState(0)

    return (
        <>
            <div className ="card">
                <h1 className ="title">Simple counter</h1>

                <h2 className ="result">{count}</h2>

                <button className ="btn" onClick={() => setCount(count + 1)}>+</button>
                <button className ="btn" onClick={() => setCount(0)}>Reset</button>
                <button className ="btn" onClick={() => setCount(count - 1)}>-</button>
                
                {count === 0 ? <p>Zero</p> : <p>Not Zero</p>}
            </div>
 
        
        </>
    );
}

export default Counter;