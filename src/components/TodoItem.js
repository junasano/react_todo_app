import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { item, editItem, deleteItem } = this.props;
    return (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>
          {item.completed ? <s>{item.title}</s> : item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => editItem(item)}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => deleteItem(item)}>
            Delete
          </button>
        </span>
      </li>
    );
  }
}