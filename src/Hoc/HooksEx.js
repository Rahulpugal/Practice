import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)

    const[count1,setCount1]=useState(0)
    let inc=()=>{setCount(count+1)}
    let inc1=()=>{setCount1(count1+5)}
    useEffect(()=>{
        setCount(count+1)
        setCount1(count+1)
    })
    
  return (
    <div>
        <h1>{count} {count1}</h1>
        <button onClick={inc}>click by 1</button>
        <button onClick={inc1}>click by 5</button>
    </div>
  )
}

export default HooksEx