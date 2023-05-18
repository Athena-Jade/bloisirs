import './itemDescription.css';

export default function ItemDescription({name, description}) {
  return (
    <div>
        <h1 className='cat-title' >{name} </h1>
        <p className='cat-description'>{description} </p>     
    </div>
  )
}
