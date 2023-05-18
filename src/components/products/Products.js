import React from 'react'
import ItemDescription from '../../components/itemDescription/ItemDescription';


 function Products  ({name, description, price}) {
  //  console.log(props);
  return (
    
    <div>
      {/**  <h1>{name}</h1>
       <p>{description}</p>*/}
     
       <br></br>
        <ItemDescription name={name}  description={description}  />   <br></br>  <br></br>
      
       {/**  <p className='cat-price'>{price}  € </p>*/}
        
    </div>
   

  )
}
export default Products;