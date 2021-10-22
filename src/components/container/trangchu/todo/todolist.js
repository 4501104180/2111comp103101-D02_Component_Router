import { useState, useContext } from "react";
import Todo from "./todo";
import NewTodoForm from "./newtodo";
import "./TodoList.css";
import { TodoContext } from '../../../../context/TodoContext';

function TodoList() {
    const { todos } = useContext(TodoContext);

    const [userInput, setUserInput] = useState('');
   console.log(userInput);
    // const create = newTodo => {
    //     console.log(newTodo);
    //     setUserInput([...todos, newTodo]);
    // };

    //Xóa id
    const remove = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                console.log(todo);
                return { ...todo, id: !(
                    delete(todo.id),
                    delete(todo.title),
                    delete(todo.deadline),
                    delete(todo.completed)
                )};
            }
            return todo;
            });
            setUserInput(updatedTodos);
    };

    //Edit id
    const update = (id, updtedTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, id: !(todo.title = updtedTask) };
            }
            return todo; 
        });
        setUserInput(updatedTodos);
    };
    
    //Thay đổi trạng thái ("Hoạt động" - "Xong")
    const toggleComplete = id => {
        console.log(id);
        const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            console.log(todo.completed);
            return { ...todo, completed: !(todo.completed=true) };
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
