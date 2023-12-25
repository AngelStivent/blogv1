import React from 'react'
import './sub.css'
import {elementos,elementos2} from '../nav_data'


export default function index() {
  return (
    <>
    <nav className='subnav'>
   <div className='subcontent'>
      <ul className='subnavegador1'>
        {elementos.map(elemento =>(
         
          <li key={ elemento.id }>
            <a id={elemento.id} href={elemento.urls} className={elemento.class}>
              
                     {elemento.texto}
           
              {elemento.imagen && <img className={elemento.class} src={elemento.imagen} alt={elemento.descrip} />}</a>
          </li>
         
        ))}
      </ul>
      <div className='logo '>
        <img src='public/img/logo/logocompany23.png' alt="a"/>
      </div>
      <ul className='subnavegador2'>
        {elementos2.map(elemento =>(
         
          <li key={ elemento.id }>
            <a id={elemento.id} href={elemento.urls} className={elemento.class}>
              
                     {elemento.texto}
           
              {elemento.imagen && <img className={elemento.class} src={elemento.imagen} alt={elemento.descrip} />}</a>
          </li>
         
        ))}
      </ul>
       </div>
    
  
    </nav>
   
</>
  )
}
