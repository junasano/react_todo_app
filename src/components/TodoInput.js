import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { activeItem, edit, change, submit } = this.props;
    return (
      <div>
        <form action="">
          <div>
            <label>Task</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Add todo item"
              value={activeItem.title}
              onChange={change}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="completed"
              checked={activeItem.completed}
              onChange={change}
            />
            <label>Completed</label>
          </div>
          <button type="submit" className={"btn btn-success"} onClick={() => submit(activeItem)}>
            {edit ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    );
  }
}