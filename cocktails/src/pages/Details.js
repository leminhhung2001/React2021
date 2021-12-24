import React from "react";
import { Link } from "react-router-dom";

const Details = (props) => {
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructionsIT,
    strIngredient1,
  } = props.item;

  return (
    <div className="detailCocktail-container">
      <div className="back-home">
        <Link className="link-back" to={"/"}>
          back home
        </Link>
        <h3>{strDrink}</h3>
      </div>
      <div className="detailCocktail">
        <div className="cocktail-img">
          <img src={strDrinkThumb} alt="cocktail" />
        </div>
        <div className="detail-info">
          <p>Name: {strDrink}</p>
          <p>Category: {strCategory}</p>
          <p>Info: {strAlcoholic}</p>
          <p>Glass: {strGlass}</p>
          <p>Instructions: {strInstructionsIT}</p>
          <p>Ingredient: {strIngredient1}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
