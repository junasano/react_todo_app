import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, editItem, deleteItem } = this.props;
    return (
      <ul className="list-group my-2">
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    );
  }
}