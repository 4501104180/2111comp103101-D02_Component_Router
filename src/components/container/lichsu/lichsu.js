import React, { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import "./formlichsu.css";

export const LichSu = () => {
    const { todos } = useContext(TodoContext);
    console.log(todos);

    // const LichSuXong = () => {
    //     const LichSuTodo = todos.map(todo => {
    //         if (todo.id === id) {
    //             console.log(todo.completed);
    //             return { ...todo, completed: !(todo.completed=true) };
    //         }
    //         return todo;
    //     });

    // }
    return (
        <div className="LichSu">
             <h1>
                Lịch sử <span></span>
            </h1>
            {todos.map((item) => {
                
                return (
                    <div >
                        <ul>
                            <li>{item.title}</li>
                            <li>{item.deadline}</li>
                            <li>
                                {item.completed ? 'Xong': 'Đang hoạt động'}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
};
