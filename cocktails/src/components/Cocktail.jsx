import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = (props) => {
  const {item, strDrink, strGlass, strDrinkThumb, getItem} = props


  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="cocktail-footer">
        <h4> {strDrink}</h4>
        <p>{strGlass}</p>
        <Link 
          to={`cocktail/${item.idDrink}`} 
          className="btn btn-primary btn-details"
          onClick={() => getItem(item)}
        >
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
