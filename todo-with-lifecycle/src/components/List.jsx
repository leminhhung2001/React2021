import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    // console.log("[list]", this.props.todos);
    const { todos, handleDelete } = this.props;
    return (
      <ul>
        {todos.map((item) => (
          <Item item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </ul>
    );
  }
}
