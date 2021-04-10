import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[color,setcolor]=useState('')
  const[error,setError]=useState(false)
  const[list,setList]=useState(new Values('#ffff10').all(10))
  const handleSubmit=(e)=>{
    e.preventDefault()
    try{
      let colors=new Values(color).all(10)
      // console.log('erdal')
      setList(colors)
      setError(false)
      setcolor('')
    }
    catch(error){
      setError(true)
      console.log(error)
      setcolor('')
    }
  }
  const addToClipBoard=(param)=>{
    setcolor(param)
  }
  
  return <>
    <section className="container">
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input className={`${error&&'error'||null}`}type="text" name="" onChange={(e)=>{setcolor(e.target.value)}} value={color} placeholder='#ffff10'/>
      <button type="submit" className='btn' >Submit</button>
    </form>
    </section>
    <section className="color">
      <h4>List goes here</h4>
    </section>
    <section className="colors">
      {list.map((color,index)=>{
        return  <SingleColor addToClipBoard={addToClipBoard} key={index}  {...color} index={index} />
      })}
    </section>
  
  </>
}

export default App
