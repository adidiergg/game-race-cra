import React from 'react'
import logo from '../asset/2.png';
import "../asset/css/App.css"


export default function Car({id,name,position,team}) {
  return (
    <div key={id}>
        <img  id={id} title={name} style={{left:position+'%'}}  className='Car' src={team} alt={name}/>
    </div>
  )
}
