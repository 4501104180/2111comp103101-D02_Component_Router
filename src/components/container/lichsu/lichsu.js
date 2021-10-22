import React, { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import "./formlichsu.css";

export const LichSu = () => {
    const { todos } = useContext(TodoContext);
    console.log(todos);

    return (
        <div className="LichSu">
             <h1>
                Lịch sử <span>Việc đã làm</span>
            </h1>
            {todos.map((item) => {
                if(item.completed === true){
                    console.log(item);
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
                )}
            })}
        </div>
    )
};
