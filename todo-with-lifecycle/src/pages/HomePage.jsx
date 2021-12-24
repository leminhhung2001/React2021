import React, { Component } from "react";
import Input from "../components/Input";
import List from "../components/List";
import { v4 as uuid_v4 } from "uuid";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      todos: [
        { id: 1, title: "An com" },
        { id: 2, title: "Rua bat" },
        { id: 3, title: "Danh bong ban" },
      ],
      lengthTodos: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    console.log("onMount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.state.title) {
      // console.log("Title is updating");
    }
  }

  // Add todo
  handleInput = (e) => {
    this.setState({ title: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: uuid_v4(),
      title: this.state.title,
    };
    this.setState({ todos: [...this.state.todos, item], title: "" });
  };

  // delete todo
  handleDelete = (id) => {
    const newTodo = this.state.todos.filter((item) => item.id !== id);
    this.setState({ todos: newTodo });
  };

  render() {
    const { title, todos } = this.state;
    return (
      <div className='home'>
        <h3>Hello from HomePage</h3>
        <Input
          title={title}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
        />
        <List todos={todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
