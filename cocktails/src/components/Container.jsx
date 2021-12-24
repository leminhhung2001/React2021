import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import Search from "./Search";
import ListCocktails from "./ListCocktails";
import '../App.css'
import Axios from 'axios'
import { Route, Switch } from "react-router-dom"
import About from '../pages/About'
import Home from "../pages/Home";
import Details from "../pages/Details";
import NoMatch from "../pages/NoMatch";

const Container = () => {

  const [list, setList] = useState([])
  const [searching, setSearching] = useState('a')
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)
  const [match, setMatch] = useState(false)

  const handleSearching = (e) => {
    setSearching(e.target.value)
  }

  const getItem = (data) => {
    setItem(data)
  }


  useEffect(() => {
    setLoading(true)
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searching}`)
    .then(response => {
      if(response.data.drinks === null) {
        setMatch(true)
      }
      else {
        setList(response.data.drinks)
        setMatch(false)
      }
     console.log('hung');
      setLoading(false)
    })
    .catch(err => console.log(err.message));
  }, [searching])

  return (
    <>
    <Nav />
    <Switch>
      <Route exact path='/'>
        <div>
          <Search handleSearching={handleSearching}/>
          <ListCocktails 
            list={list} 
            getItem={getItem} 
            loading={loading}
            match={match}
          />
        </div>
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/cocktail/:slug'>
        <Details item={item}/>
      </Route>
      <Route path='*'>
        <NoMatch />
      </Route>
    </Switch>
    </>
  );
};

export default Container;
