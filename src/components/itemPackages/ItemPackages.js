import React from 'react'

export default function ItemPackages({name, description}) {
  return (
    <div>
       <h1 className='cat-title' >{name} </h1>
        <p className='cat-description'> <i>{description} </i></p>
    </div>
  )
}
