import React, { useContext, useState } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import "./formlichsu.css";
import Todo from "./todo";

export const LichSu = () => {
    const { data } = useContext(TodoContext);

    const [todos, setTodos] = useState([
        { id: 1, task: "task 1", completed: false },
        { id: 2, task: "task 2", completed: true },
        { id: 1, task: "task 1", completed: false },
        { id: 1, task: "task 1", completed: false },
        { id: 1, task: "task 1", completed: false },
        { id: 1, task: "task 1", completed: false },
    ]);

    // const todosList = todos.map(todo => (
    //     <Todo
    //     key={todo.id}
    //     todo={todo}
    //     />
    // ));
    // const todosList = todos.map(todo => (
    //     <Todo
    //     key={item.name}
    //     todo={todo}
    //     />
    // ));
    return (
        <div className="LichSu">
             <h1>
                Lịch sử <span>Việc đã làm</span>
            </h1>
            {data.map((item) => {
                return (
                    <div >
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.deadline}</li>
                            <li>{ item.isCompleted ? 'DONE' : 'IN-PROGRESS'}</li>
                        </ul>
                    </div>
                )
            })}
            {/* <h1>
                Lịch sử <span>Việc đã làm</span>
            </h1>
            <ul>{todosList}</ul> */}
        </div>
    )
};
