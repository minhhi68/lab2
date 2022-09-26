
import React from 'react'
import { Films } from './shared/ListOfFilms'
import { useState } from 'react'
export default function Players() {
  const [film, setFilm] = useState([])
  
    return (
    <div className='container'>
        {Films.map((film)=>(
           <div className='column' key={film.id}>
           <div className='card'>
           <img src={film.img} alt = ''/>
             <h3>{film.title}</h3>
             <p className='title'>{film.year}</p>
             {/* <p><button>{film.nation}</button></p> */}
             <button onClick={()=>{setFilm(film)}}>
                        <a href='#popup1' id='openPopUp'>{film.nation}</a>

                    </button>

           </div>
         </div>
        ))}

<div id ='popup1' className='overlay'>
            <div className='popup'>
                <img src ={film.img}/>
                <h2>{film.title}</h2>
                <a className='close' href='#'>&times;</a>
                <div className='content'>
                    {film.info}
                </div>
            </div>
        </div>


    </div>
  )
        }