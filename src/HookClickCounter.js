import React,{useState} from 'react'

function HookClickCounter() {
    const [count,setCount]=useState(0)
    const initialCnt=0
    const [cnt,setCnt]=useState(initialCnt)

    {/*Best useage of previous state (safe) */}
    const incrementFive=()=>{
        for(let i=1;i<=5;i++){
            setCnt(prevCount=>prevCount+1)
        }
    }

    const [name,setName]=useState({firstName: '', lastName: ''})

    const [items,setItems]=useState([])
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1 
        }])
    }

    return (
        <div>
            <h4>Click Counter: useState</h4>
            <div>Count {count}</div>
            <button onClick={()=>setCount(count+1)}>ClickMe</button>

            <h4>Click Counter: useState with previous state</h4>
            <div>Count {cnt}</div>
            <button onClick={()=>setCnt(initialCnt)}>Reset Count</button>
            <button onClick={()=>setCnt(cnt+1)}>Increment Count</button>
            <button onClick={()=>setCnt(cnt-1)}>Decrement Count</button>
            <button onClick={incrementFive}>Increment Five</button>

            <h4>Click Counter: useState with objects</h4>
            <form>
                <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
                <div>First Name: {name.firstName} <br/> Last Name: {name.lastName}</div>
                <div>{JSON.stringify(name)}</div>
            </form>
            
            <h4>Click Counter: useState with arrays</h4>
            <button onClick={addItem}>Add Number</button>
            <ul>
                {items.map(item=>(<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
    )
}

export default HookClickCounter
