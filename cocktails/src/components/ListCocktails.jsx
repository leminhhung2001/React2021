import React from "react";
import Cocktail from './Cocktail'

const ListCocktails = (props) => {
  const {list, loading, match} = props
  // console.log(loading, match);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }

  if(match) {
    return (
      <div>
        <h4 className='no-matched'>no cocktails matched your search creteria</h4>
      </div>
    )
  }
   

  return (
    <>
    <h3 className="title-customizing aligh">cocktails</h3>
    <section className="cocktails">
      {list.map(item => {
        return (
          <Cocktail 
            key={item.idDrink} 
            item={item} 
            strDrink={item.strDrink}
            strGlass={item.strGlass}
            strDrinkThumb={item.strDrinkThumb}
            getItem={props.getItem}
          />
        )
      })}
    </section>
    </>
  )
};

export default ListCocktails;
