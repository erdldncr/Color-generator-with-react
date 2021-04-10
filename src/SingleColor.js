import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,addToClipBoard}) => {
  console.log(index)
  const[alert,setAlert]=useState(false)
  const bgc=`rgb(${rgb.join(',')})`
  const hexColor=rgbToHex(...rgb)
  const copyItem=()=>{
    setAlert(true)
    addToClipBoard(hexColor)
    setTimeout(()=>{
      setAlert(false)
    },3000)
  }
  return <article  onClick={copyItem} className={`color ${index>10 &&'color-light'}`} style={{backgroundColor:bgc}} >
    <p  className="percent-value">
      {weight}%
    </p>
   
    <p className="color-value">{hexColor}</p>
    {alert&& <p>Copied to ClipBoard</p> }

      </article>
}

export default SingleColor
