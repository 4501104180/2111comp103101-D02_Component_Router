import React, { useState, useContext } from "react";
import "./Todo.css";
import { TodoContext } from '../../../../context/TodoContext'

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.title);

  const {todos } = useContext(TodoContext);
  const [userInput, setUserInput] = useState('');
  const [DLInput, setDLInput] = useState('');

  // const handleChange = evt => {
  //   setUserInput(evt.target.value);
  // };
  // const DLhandleChange = evt => {
  //   setDLInput(evt.target.value);
  // };

  const handleClick = id => {
    remove(id);
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
  const kiemtra = () =>{
    console.log()
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
