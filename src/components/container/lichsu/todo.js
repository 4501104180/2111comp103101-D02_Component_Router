import React from "react";

function Todo({ todo }) {
  let  result = (
      <div className="Todo">
        <li id={todo.id}>
          {todo.task}
        </li>
      </div>
    );
  return result;
}

export default Todo;
