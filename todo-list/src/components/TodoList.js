import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { handleEdit, handleDelete, clearList, items } = this.props;
    return (
      <ul className="list-group my-5">
        {items.map((item) => (
          <TodoItem
            handleEdit={() => handleEdit(item.id)}
            handleDelete={() => handleDelete(item.id)}
            title={item.title}
            key={item.key}
          />
        ))}
        <button className="btn btn-danger text-uppercase" onClick={clearList}>
          clear list
        </button>
      </ul>
    );
  }
}
