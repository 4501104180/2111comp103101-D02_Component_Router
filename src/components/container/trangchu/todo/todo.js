import React, { useState, useContext } from "react";
import "./Todo.css";
import { TodoContext } from '../../../../context/TodoContext'

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.title);

  const { todos } = useContext(TodoContext);
  console.log(todos);
  //Xóa
  const handleClick = id => {
    remove(id);
  };
  //sửa
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  //Form Sửa
  const handleUpdate = evt => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = evt => {
    setTask(evt.target.value);
  };
  //Thay đổi trạng thái
  const toggleCompleted = evt => {
    toggleComplete(evt.target.id);
  };
  let result;
  if (isEditing) { 
    result = (
      <div className="Todo">
        {/* Form chinh sua */}
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
          {todo.title}
          {todo.dealine}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            Sửa
          </button>
          <button onClick={()=>handleClick(todo.id)}>
            Xóa
          </button>

        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
