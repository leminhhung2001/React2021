import React from "react";

const Search = (props) => {
  const {handleSearching} = props
  return (
    <div className='cocktails-searching'>
      <h3 className="title-customizing">search cocktail</h3>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">search your favorite cocktail</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        onChange={handleSearching}
        />
      </div>
    </div>
  )
};

export default Search;
