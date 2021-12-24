import React, {useState} from "react";
import Alert from "./Alert";
import InputItem from "./InputItem";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from 'uuid';


const Container = () => {

  const [items, setItems] = useState([
    {
      id: uuidv4(),
      title: 'Playing tabletennis',
      price: 500000,
      edited: false
    }
  ])


  // title
  const [title, setTitle] = useState('')
  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  // price
  const [price, setPrice] = useState('')
  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }

  // edited
  const [edited, setEdited] = useState('')


  // id
  const [id, setId] = useState('')

  // alert
  const [alert, setAlert] = useState({show: false})


  // -------------------Input item--------------
  const handleSubmit = e => {
    e.preventDefault()
    if(title.trim() && price > 0) {
      addNewItem(title, price)
      handleAlert({
        type: 'success',
        text: 'added item successfully'
      })
      if(edited) {
        let newItems = items.map(item => {
          return item.id === id ? {...items, title ,price} : item
        })
        setItems(newItems)
      }
      setEdited(false)
      setTitle('')
      setPrice('')
    }
    else {
      handleAlert({
        type: 'danger',
        text: 'title or price invalid or both of them'
      })
    }
  }

  const addNewItem = (title, price) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      price: price,
      edited: false
    }

    setItems([...items, newItem])
  }
  // ----------------------------------



  //------------------- clear list---------------------
  const clearList = () => {
    setItems([])
    handleAlert({
        type: 'danger',
        text: 'list has just deleted'
      })
  }

  // ---------------------delete item-----------------
  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)
  }

  // editItem
  const editItem = (id) => {
    
    const item = items.find(item => item.id === id)

    const {title, price} = item

    setTitle(title)
    setPrice(price)

    setEdited(true)
    setId(id)

  }

  // handleAlert
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show: false})
    }, 2000)
  }

  

  return (
    <div className="container">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1 className="letter-spacing">Budget Calculator</h1>
      <div className="main">
        <InputItem
          title={title}
          price={price}
          handleChangeTitle={handleChangeTitle}
          handleChangePrice={handleChangePrice}
          handleSubmit={handleSubmit}
          edited={edited}
        />
        <ListItem
          items={items}
          clearList={clearList}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </div>
      <div className="total letter-spacing">
        <h3>
          Total Spending :
          <span className="spending">${
            items.reduce((total, currentPrice) => {
              return (total += parseInt(currentPrice.price)) 
            }, 0)}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Container;
