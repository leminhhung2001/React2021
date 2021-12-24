import React from "react";
import Item from "./Item";
import {FaTrash} from 'react-icons/fa'
const ListItem = (props) => {
  const {editItem, deleteItem} = props
  return (
    <>
      <ul>
        {props.items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
      </ul>
      <button className="ul-btn" onClick={props.clearList}>
        CLEAR EXPENSES
        <FaTrash className="FaTrash"/>
      </button>
    </>
  );
};

export default ListItem;
