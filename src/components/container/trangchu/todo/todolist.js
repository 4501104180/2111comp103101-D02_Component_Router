import { useContext } from "react";
import Todo from "./todo";
import NewTodoForm from "./newtodo";
import "./TodoList.css";
import { TodoContext } from '../../../../context/TodoContext';

function TodoList() {
    // const [todos, setTodos] = useState([
    //     // { id: uuid(), task: "task 1", completed: false },
    //     // { id: uuid(), task: "task 2", completed: true }
    // ]);
    
    // const { data } = useContext(TodoContext);

    // {data.map((item) => {
    //     return (
    //         <div >
    //             <ul>
    //                 <li>{item.name}</li>
    //                 <li>{item.deadline}</li>
    //                 <li>{ item.isCompleted ? 'Xong' : 'Đang hoạt động'}</li>
    //             </ul>
    //         </div>
    //     )
    // })}

    // const create = newTodo => {
    //     console.log(newTodo);
    //     setTodos([...todos, newTodo]);
    // };

    // const remove = id => {
    //     setTodos(todos.filter(todo => todo.id !== id));
    // };

    // const update = (id, updtedTask) => {
    //     const updatedTodos = todos.map(todo => {
    //     if (todo.id === id) {
    //         return { ...todo, task: updtedTask };
    //     }
    //     return todo; 
    //     });
    //     setTodos(updatedTodos);
    // };

    // const toggleComplete = id => {
    //     const updatedTodos = todos.map(todo => {
    //     if (todo.id === id) {
    //         return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //     });
    //     setTodos(updatedTodos);
    // };
    const { todos } = useContext(TodoContext);
    
    const todosList = todos.map(todo => (
        <Todo
        key={todo.id}
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
