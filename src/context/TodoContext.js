import { createContext, useState } from "react";

// Dữ liệu tĩnh todo này
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

// Giá trị mặc định cho contexxt là todo với hàm tạo nè
const initialValues = {
    todos: [],
    createTodo: () => {}
};

// Cái create context này nôm na tạo context với giá trị mặc định thui chứ ko ảnh hưởng nhiều tới Provider đâu
const TodoContext = createContext(initialValues);

// chỗ provider mới là chỗ cung cấp thật
const TodoProvider = ({ children }) => {
    // Đặt tên cho dễ biết nha
    const [todos, setTodos] = useState([]);
    const createTodo = newTodo => {
        // Cái hàm này viết chung để cung cấp, đổi cái todos thì nó tự trigger rerender mấy component có todos
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