import { useState, useContext } from "react";
import Todo from "./todo";
import NewTodoForm from "./newtodo";
import "./TodoList.css";
import { TodoContext } from '../../../../context/TodoContext';

function TodoList() {
    const { todos } = useContext(TodoContext);

    const [userInput, setUserInput] = useState('');

    const create = newTodo => {
        console.log(newTodo);
        setUserInput([...todos, newTodo]);
    };

    //Xóa id
    const remove = id => {
        // setUserInput(todos.filter(todo => todo.id !== id));
        delete({id});
        console.log(id);
        
    };

    //Edit id
    const update = (id, updtedTask) => {
        const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, task: updtedTask };
        }
        return todo; 
        });
        setUserInput(updatedTodos);
    };

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
        });
        setUserInput(updatedTodos);
    };
    //---------------------------------------------------------------------
    
    const todosList = todos.map(todo => (
        <Todo
        toggleComplete={toggleComplete}
        update={update}
        remove={remove}
        key={todo.id}   //lấy id bỏ vô form edit - save
        todo={todo}
        />
    ));

    return (
        <div className="TodoList">
        <h1>
            Todo List <span>A simple React Todo List App</span>
        </h1>
        <NewTodoForm />
        <ul>{todosList}</ul>
        </div>
    );
}

export default TodoList;
