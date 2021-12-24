import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    item: "",
    items: [],
    id: uuid(),
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const newItems = [...this.state.items, newItem];
    this.setState(
      {
        item: "",
        items: newItems,
        id: uuid(),
        editItem: false,
      },
      () => console.log(this.state)
    );
  };
  handleDelete = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };
  handleEdit = (id) => {
    const itemSelector = this.state.items.find((item) => item.id === id);
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      item: itemSelector.title,
      items: newItems,
      id: id,
      editItem: true,
    });
  };
  clearList = (e) => {
    this.setState({
      items: [],
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto col-10 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              item={this.state.item}
              editItem={this.state.editItem}
            />
            <h3 className="text-capitalize text-center mt-3">todo list</h3>
            <TodoList
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
              items={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}
