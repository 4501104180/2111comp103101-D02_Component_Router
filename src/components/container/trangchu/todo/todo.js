import React, { useState } from "react";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = id => {
    remove(id);
    // lúc nãy nó lấy event, từ event trỏ target rồi value đồ tùm lum, truyền thẳng id cho lẹ :))
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = evt => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = evt => {
    setTask(evt.target.value);
  };
  const toggleCompleted = evt => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) { 
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            {/* <i className="fas fa-pen" /> */}
            Sửa
          </button>
          <button onClick={()=>handleClick(todo.id)}>
            {/* <i id={todo.id} className="fas fa-trash" /> */}
            Xóa
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
