import React from 'react'
import {elementos,elementos2} from './nav_data'
import './navbar.css'
import Subnavbar from './subnavbar/index'

export default function index() {
  return (
    <>
            <nav className='navbar'>
           <div className='content'>
              <ul className='navegador1'>
                {elementos.map(elemento =>(
                 
                  <li key={ elemento.id }>
                    <a id={elemento.id} href={elemento.urls} className={elemento.class}>
                      
                             {elemento.texto}
                   
                      {elemento.imagen && <img className={elemento.class} src={elemento.imagen} alt={elemento.descrip} />}</a>
                  </li>
                 
                ))}
              </ul>
              <div className='logo centrar-row'>
                <img src='img/logo/logocompany23.png' alt="a"/>
              </div>
              <ul className='navegador2'>
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
