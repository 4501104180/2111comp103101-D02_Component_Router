import { createContext, useState } from "react";

const todos = [
    {
        "id": 1,
        "name": "Học React Hoơoks - useEffect",
        "completed": false,
        "deadline": '2021-10-10'
    },
    {
        "id": 2,
        "name": "Học React Hooks - useContext",
        "completed": false,
        "deadline": '2021-10-11'
    },
    {
        "id": 3,
        "name": "Học React Hooks - useState",
        "completed": true,
        "deadline": '2021-10-12'
    },
];

const initialValues = {
    todos: [],
    createTodo: () => {}
};

const TodoContext = createContext(initialValues);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const createTodo = newTodo => {
        console.log(newTodo);
        setTodos([newTodo, ...todos]);
    };
    return (
        <TodoContext.Provider value={{
            todos,
            createTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
};

export {TodoProvider, TodoContext};