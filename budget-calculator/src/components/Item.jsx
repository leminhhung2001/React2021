import React from "react";
import {BiPencil} from 'react-icons/bi'
import {FaTrashRestoreAlt} from 'react-icons/fa'

const Item = (props) => {

  const {deleteItem, item, editItem} = props

  return (
    <div>
      <li>
        <div className="item">
          <div className="custom-item">
            <div className="title">{item.title}</div>
             <div className="price">
                <span>
                  ${item.price}
                </span>
              </div>
            <div className="btn">
              <button onClick={() => editItem(item.id)}>
                <BiPencil className="BiPencil"/>
              </button>
              <button onClick={() => deleteItem(item.id)}>
                <FaTrashRestoreAlt className="FaTrashRestoreAlt"/>
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Item;
