import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import axios from "axios";
var uuid = require("uuid");

export default class App extends Component {
  state = {
    todoList: [],
    activeItem: {
      title: "",
      completed: false,
    },
    edit: false,
  };

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    axios
      .get("https://kddxf6afi5.execute-api.us-west-2.amazonaws.com/items")
      .then((res) => this.setState({ todoList: res.data.Items }));
  };

  change = (item) => {
    let { name, value } = item.target;
    if (item.target.type === "checkbox") {
      value = item.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  submit = (item) => {
    this.setState({ edit: false });
    if (item.id) {
      axios
        .put(`https://kddxf6afi5.execute-api.us-west-2.amazonaws.com/items`, item)
        .then((res) => this.refresh());
    } else {
      item.id = uuid.v1();
      axios
        .put(`https://kddxf6afi5.execute-api.us-west-2.amazonaws.com/items`, item)
        .then((res) => this.refresh());
    }
  };

  editItem = (item) => {
    this.setState({ activeItem: item, edit: true });
  };

  deleteItem = (item) => {
    axios
      .delete(`https://kddxf6afi5.execute-api.us-west-2.amazonaws.com/items/${item.id}`)
      .then((res) => this.refresh());
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Todo App</h1>
        <div>
          <div className="col-md-6 mx-auto">
            <TodoInput
              activeItem={this.state.activeItem}
              edit={this.state.edit}
              change={this.change}
              submit={this.submit}
            />
            <TodoList
              items={this.state.todoList}
              editItem={this.editItem}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}