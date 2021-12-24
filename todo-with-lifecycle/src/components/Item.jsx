import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { item, handleDelete } = this.props;
    return (
      <div>
        <li className='item'>
          <h5>{item.title}</h5>
          <div className='action'>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </li>
      </div>
    );
  }
}
