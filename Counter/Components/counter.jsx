import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(1)
    return(
        <div id="CounterDiv">
        <h1>Count: {count}</h1>

        <button onClick={()=>{
            setCount(count + 1)
        }}>
            Increase
            </button>
        
        <button onClick={()=> {
            setCount(count - 1)
        }}>
                Decrease</button>
        </div>
    )
}

export default Counter;