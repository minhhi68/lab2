import React from 'react'
export default function FilmsPresentation({film}) {
     console.log(film);
    return (
     <div className='container'>
        {film.map((film)=>(
        <div className='column'>
        <div className='card'>
        <img src={film.img}/>
          <h3>{film.title}</h3>
          <p className='title'>{film.year}</p>
          <p><button>{film.nation}</button></p>
        </div>
      </div>
     ))}</div>   
  )
}





