import React from 'react'
import './sub.css'
import {elementos,elementos2} from '../nav_data'


export default function index() {
  return (
    <>
    <nav className='subnav'>

   <div className='subcontent'>
      <div className='sublogo '>
            <img src='img/imagenes/cumaralheart.jpeg' alt="a"/>
          </div>

          <div className='menu'>
          <ul className='subnavegador1'>

        {elementos.map(elemento =>(
         
          <li key={ elemento.id }>
            <a id={elemento.id} href={elemento.urls} className={elemento.class}>
              
                     {elemento.texto}
           
              {elemento.imagen && <img className={elemento.class} src={elemento.imagen} alt={elemento.descrip} />}</a>
          </li>
         
        ))}
      </ul>
      
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
       </div>
    
  
    </nav>
   
</>
  )
}
